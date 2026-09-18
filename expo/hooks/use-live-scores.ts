import { useEffect, useState } from "react";
import { LiveScore, ScoreLeader } from "@/mocks/live-scores";

interface EspnSource {
  sport: string;
  league: string;
  url: string;
}

const ESPN_BASE = "https://site.api.espn.com/apis/site/v2/sports";

const SOURCES: EspnSource[] = [
  { sport: "Soccer", league: "FIFA World Cup 2026", url: `${ESPN_BASE}/soccer/fifa.world/scoreboard` },
  { sport: "Soccer", league: "Premier League", url: `${ESPN_BASE}/soccer/eng.1/scoreboard` },
  { sport: "NFL", league: "NFL", url: `${ESPN_BASE}/football/nfl/scoreboard` },
  { sport: "NCAA Football", league: "NCAA FBS", url: `${ESPN_BASE}/football/college-football/scoreboard` },
  { sport: "NCAA Basketball", league: "NCAA D1", url: `${ESPN_BASE}/basketball/mens-college-basketball/scoreboard` },
  { sport: "NHL Hockey", league: "NHL", url: `${ESPN_BASE}/hockey/nhl/scoreboard` },
  { sport: "Baseball", league: "MLB", url: `${ESPN_BASE}/baseball/mlb/scoreboard` },
  { sport: "Combat Sports", league: "UFC", url: `${ESPN_BASE}/mma/ufc/scoreboard` },
];

export const LIVE_COVERED_SPORTS = Array.from(new Set(SOURCES.map((s) => s.sport)));

function mapStatus(state: string): "LIVE" | "UPCOMING" | "FINISHED" {
  if (state === "in") return "LIVE";
  if (state === "post") return "FINISHED";
  return "UPCOMING";
}

async function fetchSource(source: EspnSource): Promise<LiveScore[]> {
  try {
    const res = await fetch(source.url);
    const data = await res.json();
    const events = data?.events ?? [];

    return events
      .map((event: any): LiveScore | null => {
        const comp = event?.competitions?.[0];
        const competitors = comp?.competitors ?? [];
        const home = competitors.find((c: any) => c.homeAway === "home") ?? competitors[0];
        const away = competitors.find((c: any) => c.homeAway === "away") ?? competitors[1];
        if (!home || !away) return null;

        const state = event?.status?.type?.state ?? "pre";

        const leaders: ScoreLeader[] = (comp?.leaders ?? [])
          .map((cat: any) => {
            const leader = cat?.leaders?.[0];
            if (!leader) return null;
            return {
              category: cat?.displayName ?? cat?.name ?? "",
              playerName: leader?.athlete?.displayName ?? "",
              teamId: leader?.team?.id ?? "",
              statLine: leader?.displayValue ?? "",
            };
          })
          .filter(Boolean) as ScoreLeader[];

        return {
          id: `espn-${source.sport}-${event.id}`,
          sport: source.sport,
          league: source.league,
          homeTeam: home?.team?.displayName ?? home?.team?.shortDisplayName ?? "TBD",
          awayTeam: away?.team?.displayName ?? away?.team?.shortDisplayName ?? "TBD",
          homeScore: Number(home?.score ?? 0),
          awayScore: Number(away?.score ?? 0),
          homeColor: home?.team?.color ? `#${home.team.color}` : "#334155",
          awayColor: away?.team?.color ? `#${away.team.color}` : "#94A3B8",
          status: mapStatus(state),
          time: event?.status?.type?.shortDetail ?? "",
          venue: comp?.venue?.fullName,
          broadcast: comp?.broadcasts?.[0]?.names?.join(", "),
          attendance: comp?.attendance || undefined,
          homeRecord: home?.records?.find((r: any) => r.type === "total")?.summary ?? home?.records?.[0]?.summary,
          awayRecord: away?.records?.find((r: any) => r.type === "total")?.summary ?? away?.records?.[0]?.summary,
          homeTeamId: home?.team?.id,
          awayTeamId: away?.team?.id,
          homeLinescores: home?.linescores?.map((l: any) => Number(l.value)),
          awayLinescores: away?.linescores?.map((l: any) => Number(l.value)),
          leaders: leaders.length > 0 ? leaders : undefined,
          lastPlay: comp?.situation?.lastPlay?.text,
        };
      })
      .filter(Boolean) as LiveScore[];
  } catch {
    return [];
  }
}

export function useLiveScores() {
  const [scores, setScores] = useState<LiveScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const results = await Promise.all(SOURCES.map(fetchSource));
      if (!cancelled) {
        setScores(results.flat());
        setLoading(false);
      }
    }

    load();
    const interval = setInterval(load, 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return { scores, loading };
}
