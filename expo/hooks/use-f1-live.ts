import { useEffect, useState } from "react";
import { LeaderboardEvent } from "@/mocks/live-scores";

const JOLPICA_BASE = "https://api.jolpi.ca/ergast/f1";

export interface F1LiveData {
  nextRaceName: string | null;
  nextRaceDate: string | null;
  nextRaceCircuit: string | null;
  lastRaceName: string | null;
  lastRaceWinner: string | null;
  lastRaceRunnerUp: string | null;
  driverStandingsLeader: string | null;
  driverStandingsEvent: LeaderboardEvent | null;
  raceResultEvent: LeaderboardEvent | null;
  loading: boolean;
  error: string | null;
}

export function useF1Live(): F1LiveData {
  const [data, setData] = useState<F1LiveData>({
    nextRaceName: null,
    nextRaceDate: null,
    nextRaceCircuit: null,
    lastRaceName: null,
    lastRaceWinner: null,
    lastRaceRunnerUp: null,
    driverStandingsLeader: null,
    driverStandingsEvent: null,
    raceResultEvent: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [scheduleRes, resultsRes, standingsRes] = await Promise.all([
          fetch(`${JOLPICA_BASE}/current.json`),
          fetch(`${JOLPICA_BASE}/current/last/results.json`),
          fetch(`${JOLPICA_BASE}/current/driverStandings.json`),
        ]);

        const schedule = await scheduleRes.json();
        const results = await resultsRes.json();
        const standings = await standingsRes.json();

        const races = schedule?.MRData?.RaceTable?.Races ?? [];
        const now = new Date();
        const upcoming = races.find((r: any) => new Date(r.date) >= now);

        const lastRace = results?.MRData?.RaceTable?.Races?.[0];
        const lastResults = lastRace?.Results ?? [];

        const standingsList =
          standings?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings ?? [];

        const driverStandingsEvent: LeaderboardEvent | null =
          standingsList.length > 0
            ? {
                id: "f1-driver-standings",
                sport: "Motor Racing",
                league: "Formula 1",
                eventName: "Driver Standings",
                status: "LIVE",
                time: standings?.MRData?.StandingsTable?.season
                  ? `${standings.MRData.StandingsTable.season} Season`
                  : "Current Season",
                viewers: "2.3M",
                entries: standingsList.map((d: any): { position: number; name: string; detail: string; isLeader: boolean } => ({
                  position: Number(d.position),
                  name: `${d.Driver.givenName} ${d.Driver.familyName}`,
                  detail: `${d.points} PTS`,
                  isLeader: d.position === "1",
                })),
              }
            : null;

        const raceResultEvent: LeaderboardEvent | null =
          lastRace && lastResults.length > 0
            ? {
                id: "f1-last-race-result",
                sport: "Motor Racing",
                league: "Formula 1",
                eventName: lastRace.raceName,
                status: "FINISHED",
                time: "Final",
                viewers: "3.4M",
                entries: lastResults.map((r: any): { position: number; name: string; detail: string; isLeader: boolean } => ({
                  position: Number(r.position),
                  name: `${r.Driver.givenName} ${r.Driver.familyName}`,
                  detail: r.position === "1" ? "Winner" : r.Time?.time ?? r.status ?? "",
                  isLeader: r.position === "1",
                })),
              }
            : null;

        if (!cancelled) {
          setData({
            nextRaceName: upcoming?.raceName ?? null,
            nextRaceDate: upcoming?.date ?? null,
            nextRaceCircuit: upcoming?.Circuit?.circuitName ?? null,
            lastRaceName: lastRace?.raceName ?? null,
            lastRaceWinner: lastResults[0]
              ? `${lastResults[0].Driver.givenName} ${lastResults[0].Driver.familyName}`
              : null,
            lastRaceRunnerUp: lastResults[1]
              ? `${lastResults[1].Driver.givenName} ${lastResults[1].Driver.familyName}`
              : null,
            driverStandingsLeader: standingsList[0]
              ? `${standingsList[0].Driver.givenName} ${standingsList[0].Driver.familyName}`
              : null,
            driverStandingsEvent,
            raceResultEvent,
            loading: false,
            error: null,
          });
        }
      } catch {
        if (!cancelled) {
          setData((prev) => ({ ...prev, loading: false, error: "Could not load live F1 data" }));
        }
      }
    }

    load();
    const interval = setInterval(load, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return data;
}
