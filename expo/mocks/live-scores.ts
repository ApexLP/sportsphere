export interface ScoreLeader {
  category: string;
  playerName: string;
  teamId: string;
  statLine: string;
}

export interface LiveScore {
  id: string;
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeColor: string;
  awayColor: string;
  status: "LIVE" | "UPCOMING" | "FINISHED";
  time: string;
  // ISO date (YYYY-MM-DD) the event happened on. Only meaningful for
  // FINISHED items — used to drop results older than 7 days from the feed.
  date?: string;
  viewers?: string;
  venue?: string;
  broadcast?: string;
  attendance?: number;
  homeRecord?: string;
  awayRecord?: string;
  homeTeamId?: string;
  awayTeamId?: string;
  homeLinescores?: number[];
  awayLinescores?: number[];
  leaders?: ScoreLeader[];
  lastPlay?: string;
}

export interface LeaderboardEntry {
  position: number;
  name: string;
  detail: string;
  isLeader: boolean;
}

export interface LeaderboardEvent {
  id: string;
  sport: string;
  league: string;
  eventName: string;
  status: "LIVE" | "UPCOMING" | "FINISHED";
  time: string;
  // ISO date (YYYY-MM-DD) the event happened on. Only meaningful for
  // FINISHED items — used to drop results older than 7 days from the feed.
  date?: string;
  entries: LeaderboardEntry[];
  viewers?: string;
}

// True when a FINISHED item's date is more than `days` days before today.
// Items with no date (or not FINISHED) are never considered stale here —
// callers should only pass FINISHED items with a date through this check.
export function isStaleFinishedEvent(date: string | undefined, days: number = 7): boolean {
  if (!date) return false;
  const eventDate = new Date(date);
  if (Number.isNaN(eventDate.getTime())) return false;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return eventDate < cutoff;
}

const LEADERBOARD_MOTOR_RACING_LEAGUES = new Set([
  "Formula 1",
  "WEC",
  "IndyCar",
  "WRC",
  "Dakar Rally",
  "IMSA WeatherTech",
  "GT3",
  "24 Hours of Le Mans",
]);

const MATCH_PLAY_GOLF_LEAGUES = new Set(["Ryder Cup", "Presidents Cup"]);

export function isLeaderboardEvent(sport: string, league: string): boolean {
  const normalizedSport = sport.trim().toLowerCase();

  if (normalizedSport === "motor racing") {
    return LEADERBOARD_MOTOR_RACING_LEAGUES.has(league.trim());
  }
  if (normalizedSport === "golf") {
    return !MATCH_PLAY_GOLF_LEAGUES.has(league.trim());
  }
  if (normalizedSport === "cycling") {
    return true;
  }
  if (normalizedSport === "olympic sports") {
    return true;
  }
  return false;
}

export const mockLiveScores: LiveScore[] = [
  // Soccer
  {
    id: "1",
    sport: "Soccer",
    league: "FIFA World Cup 2026",
    homeTeam: "USA",
    awayTeam: "Germany",
    homeScore: 1,
    awayScore: 2,
    homeColor: "#B22234",
    awayColor: "#000000",
    status: "FINISHED",
    time: "Final",
    date: "2026-09-19",
    viewers: "8.5M"
  },
  {
    id: "2",
    sport: "Soccer",
    league: "FIFA World Cup 2026",
    homeTeam: "Brazil",
    awayTeam: "Argentina",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#009C3B",
    awayColor: "#75AADB",
    status: "UPCOMING",
    time: "8:00 PM ET",
    viewers: "7.2M"
  },
  // Tennis
  {
    id: "3",
    sport: "Tennis",
    league: "Wimbledon",
    homeTeam: "Carlos Alcaraz",
    awayTeam: "Jannik Sinner",
    homeScore: 3,
    awayScore: 2,
    homeColor: "#C60B1E",
    awayColor: "#009246",
    status: "FINISHED",
    time: "Final",
    date: "2026-07-12",
    viewers: "980K"
  },
  {
    id: "4",
    sport: "Tennis",
    league: "Wimbledon",
    homeTeam: "Iga Swiatek",
    awayTeam: "Coco Gauff",
    homeScore: 3,
    awayScore: 1,
    homeColor: "#DC143C",
    awayColor: "#B22234",
    status: "FINISHED",
    time: "Final",
    date: "2026-07-11",
    viewers: "720K"
  },
  // Rugby
  {
    id: "7",
    sport: "Rugby",
    league: "Rugby Championship",
    homeTeam: "New Zealand All Blacks",
    awayTeam: "South Africa Springboks",
    homeScore: 17,
    awayScore: 24,
    homeColor: "#000000",
    awayColor: "#007A4D",
    status: "FINISHED",
    time: "Final",
    date: "2026-09-20",
    viewers: "310K"
  },
  // Combat Sports / UFC
  {
    id: "9",
    sport: "Combat Sports",
    league: "UFC",
    homeTeam: "Islam Makhachev",
    awayTeam: "Arman Tsarukyan",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#D20A0A",
    awayColor: "#1E90FF",
    status: "UPCOMING",
    time: "UFC 321 Main Event · Sat 10:00 PM ET",
    viewers: "1.8M"
  },
  // Boxing
  {
    id: "10",
    sport: "Boxing",
    league: "WBA / WBC / WBO",
    homeTeam: "Canelo Alvarez",
    awayTeam: "Terence Crawford",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#D20A0A",
    awayColor: "#1E90FF",
    status: "FINISHED",
    time: "Crawford wins by unanimous decision",
    date: "2025-09-13",
    viewers: "2.2M"
  },
  // NFL
  {
    id: "12",
    sport: "NFL",
    league: "NFL",
    homeTeam: "Kansas City Chiefs",
    awayTeam: "San Francisco 49ers",
    homeScore: 20,
    awayScore: 17,
    homeColor: "#E31837",
    awayColor: "#AA0000",
    status: "LIVE",
    time: "Q4 6:12",
    viewers: "3.6M"
  },
  {
    id: "13",
    sport: "NFL",
    league: "NFL",
    homeTeam: "Buffalo Bills",
    awayTeam: "Philadelphia Eagles",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#00338D",
    awayColor: "#004C54",
    status: "UPCOMING",
    time: "Sun 1:00 PM ET",
    viewers: "1.9M"
  },
  // NCAA Football
  {
    id: "14",
    sport: "NCAA Football",
    league: "NCAA FBS",
    homeTeam: "Georgia Bulldogs",
    awayTeam: "Ohio State Buckeyes",
    homeScore: 27,
    awayScore: 24,
    homeColor: "#BA0C2F",
    awayColor: "#BB0000",
    status: "FINISHED",
    time: "Final",
    date: "2026-09-19",
    viewers: "1.3M"
  },
  {
    id: "15",
    sport: "NCAA Football",
    league: "NCAA FBS",
    homeTeam: "Michigan Wolverines",
    awayTeam: "Texas Longhorns",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#00274C",
    awayColor: "#BF5700",
    status: "UPCOMING",
    time: "Sat 3:30 PM ET",
    viewers: "1.1M"
  },
  // NCAA Basketball
  {
    id: "16",
    sport: "NCAA Basketball",
    league: "NCAA D1",
    homeTeam: "Duke Blue Devils",
    awayTeam: "Kansas Jayhawks",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#001F5B",
    awayColor: "#0085CE",
    status: "UPCOMING",
    time: "Nov Season Prep",
    viewers: "480K"
  },
  {
    id: "17",
    sport: "NCAA Basketball",
    league: "NCAA D1",
    homeTeam: "UConn Huskies",
    awayTeam: "Kentucky Wildcats",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#0000B4",
    awayColor: "#005DAA",
    status: "UPCOMING",
    time: "Nov Season Prep",
    viewers: "420K"
  },
  // NCAA Wrestling
  {
    id: "18",
    sport: "NCAA Wrestling",
    league: "NCAA D1",
    homeTeam: "Penn State Wrestling",
    awayTeam: "Iowa Wrestling",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#001E44",
    awayColor: "#FFCD00",
    status: "UPCOMING",
    time: "Nov Season Prep",
    viewers: "95K"
  },
  // NCAA Track
  {
    id: "19",
    sport: "NCAA Track",
    league: "NCAA D1 Outdoor",
    homeTeam: "USC Track & Field",
    awayTeam: "LSU Track & Field",
    homeScore: 56,
    awayScore: 48,
    homeColor: "#990000",
    awayColor: "#461D7C",
    status: "FINISHED",
    time: "NCAA Finals",
    date: "2026-06-13",
    viewers: "72K"
  },
  // NHL Hockey
  {
    id: "24",
    sport: "NHL Hockey",
    league: "NHL Free Agency",
    homeTeam: "Florida Panthers",
    awayTeam: "Edmonton Oilers",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#C8102E",
    awayColor: "#041E42",
    status: "UPCOMING",
    time: "Oct Season Opener",
    viewers: "670K"
  },
  // Horse Racing
  {
    id: "25",
    sport: "Horse Racing",
    league: "Travers Stakes",
    homeTeam: "Dornoch",
    awayTeam: "Seize the Grey",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#8B4513",
    awayColor: "#708090",
    status: "FINISHED",
    time: "Dornoch wins",
    date: "2026-08-23",
    viewers: "310K"
  },
  // Baseball
  {
    id: "20",
    sport: "Baseball",
    league: "MLB",
    homeTeam: "New York Yankees",
    awayTeam: "Boston Red Sox",
    homeScore: 5,
    awayScore: 3,
    homeColor: "#003087",
    awayColor: "#BD3039",
    status: "LIVE",
    time: "6th Inning",
    viewers: "1.2M"
  },
  {
    id: "21",
    sport: "Baseball",
    league: "MLB",
    homeTeam: "Los Angeles Dodgers",
    awayTeam: "San Diego Padres",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#005A9C",
    awayColor: "#FFC425",
    status: "UPCOMING",
    time: "10:10 PM ET",
    viewers: "780K"
  },
  // Golf — Presidents Cup (team match play, so it's a head-to-head score
  // rather than a stroke-play leaderboard)
  {
    id: "22",
    sport: "Golf",
    league: "Presidents Cup",
    homeTeam: "USA",
    awayTeam: "International",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#B22234",
    awayColor: "#154734",
    status: "UPCOMING",
    time: "Thu 12:00 PM ET",
    viewers: "980K"
  },
];

export const mockLeaderboardEvents: LeaderboardEvent[] = [
  // Formula 1 — placeholder, overwritten with live Jolpica data by useF1Live
  {
    id: "f1-driver-standings",
    sport: "Motor Racing",
    league: "Formula 1",
    eventName: "Driver Standings",
    status: "LIVE",
    time: "2026 Season",
    viewers: "2.1M",
    entries: [
      { position: 1, name: "Max Verstappen", detail: "0 pts behind", isLeader: true },
      { position: 2, name: "Lando Norris", detail: "-18 pts", isLeader: false },
      { position: 3, name: "Charles Leclerc", detail: "-41 pts", isLeader: false },
      { position: 4, name: "Lewis Hamilton", detail: "-63 pts", isLeader: false },
      { position: 5, name: "Oscar Piastri", detail: "-77 pts", isLeader: false },
    ],
  },
  // WEC
  {
    id: "wec-le-mans-hypercar",
    sport: "Motor Racing",
    league: "WEC",
    eventName: "6 Hours of Spa — Hypercar",
    status: "FINISHED",
    time: "Final",
    date: "2026-05-10",
    viewers: "410K",
    entries: [
      { position: 1, name: "#8 Toyota Gazoo Racing", detail: "Winner", isLeader: true },
      { position: 2, name: "#51 Ferrari AF Corse", detail: "+12.4s", isLeader: false },
      { position: 3, name: "#5 Porsche Penske", detail: "+38.1s", isLeader: false },
      { position: 4, name: "#7 Toyota Gazoo Racing", detail: "+1:02.7", isLeader: false },
      { position: 5, name: "#6 Porsche Penske", detail: "+1:44.9", isLeader: false },
    ],
  },
  // IndyCar
  {
    id: "indycar-mid-ohio",
    sport: "Motor Racing",
    league: "IndyCar",
    eventName: "Honda Indy 200 at Mid-Ohio",
    status: "FINISHED",
    time: "Final",
    date: "2026-07-06",
    viewers: "560K",
    entries: [
      { position: 1, name: "Alex Palou", detail: "Winner", isLeader: true },
      { position: 2, name: "Scott Dixon", detail: "+2.1s", isLeader: false },
      { position: 3, name: "Pato O'Ward", detail: "+5.6s", isLeader: false },
      { position: 4, name: "Josef Newgarden", detail: "+9.8s", isLeader: false },
      { position: 5, name: "Colton Herta", detail: "+14.3s", isLeader: false },
    ],
  },
  // WRC
  {
    id: "wrc-rally-finland",
    sport: "Motor Racing",
    league: "WRC",
    eventName: "Rally Finland",
    status: "FINISHED",
    time: "Final",
    date: "2026-08-02",
    viewers: "290K",
    entries: [
      { position: 1, name: "Kalle Rovanpera", detail: "Winner", isLeader: true },
      { position: 2, name: "Ott Tanak", detail: "+8.4s", isLeader: false },
      { position: 3, name: "Thierry Neuville", detail: "+22.7s", isLeader: false },
      { position: 4, name: "Elfyn Evans", detail: "+41.2s", isLeader: false },
      { position: 5, name: "Sebastien Ogier", detail: "+58.9s", isLeader: false },
    ],
  },
  // Dakar Rally
  {
    id: "dakar-rally-stage",
    sport: "Motor Racing",
    league: "Dakar Rally",
    eventName: "Dakar Rally — Car Class",
    status: "UPCOMING",
    time: "Stage 6 starts 6:00 AM",
    viewers: "670K",
    entries: [
      { position: 1, name: "Nasser Al-Attiyah", detail: "Overall Leader", isLeader: true },
      { position: 2, name: "Carlos Sainz Sr.", detail: "+4:12", isLeader: false },
      { position: 3, name: "Sebastien Loeb", detail: "+9:47", isLeader: false },
      { position: 4, name: "Yazeed Al-Rajhi", detail: "+18:03", isLeader: false },
      { position: 5, name: "Guerlain Chicherit", detail: "+26:55", isLeader: false },
    ],
  },
  // IMSA WeatherTech
  {
    id: "imsa-weathertech-daytona",
    sport: "Motor Racing",
    league: "IMSA WeatherTech",
    eventName: "Petit Le Mans — GTP",
    status: "FINISHED",
    time: "Final",
    date: "2026-08-15",
    viewers: "180K",
    entries: [
      { position: 1, name: "#10 Cadillac Racing", detail: "Winner", isLeader: true },
      { position: 2, name: "#01 Cadillac Racing", detail: "+14.2s", isLeader: false },
      { position: 3, name: "#60 Acura Meyer Shank", detail: "+31.6s", isLeader: false },
      { position: 4, name: "#25 BMW M Team RLL", detail: "+48.9s", isLeader: false },
      { position: 5, name: "#7 Porsche Penske", detail: "+1:05.4", isLeader: false },
    ],
  },
  // GT3
  {
    id: "gt3-spa-24h",
    sport: "Motor Racing",
    league: "GT3",
    eventName: "Spa 24 Hours — GT3",
    status: "FINISHED",
    time: "Final",
    date: "2026-06-28",
    viewers: "220K",
    entries: [
      { position: 1, name: "#32 Team WRT (Audi)", detail: "Winner", isLeader: true },
      { position: 2, name: "#46 Team WRT (Audi)", detail: "+1 lap", isLeader: false },
      { position: 3, name: "#4 Mercedes-AMG", detail: "+2 laps", isLeader: false },
      { position: 4, name: "#63 Ferrari AF Corse", detail: "+3 laps", isLeader: false },
      { position: 5, name: "#159 McLaren", detail: "+4 laps", isLeader: false },
    ],
  },
  // 24 Hours of Le Mans
  {
    id: "24h-le-mans-hypercar",
    sport: "Motor Racing",
    league: "24 Hours of Le Mans",
    eventName: "24 Hours of Le Mans — Hypercar",
    status: "FINISHED",
    time: "Final",
    date: "2026-06-14",
    viewers: "1.9M",
    entries: [
      { position: 1, name: "#8 Toyota Gazoo Racing", detail: "Winner", isLeader: true },
      { position: 2, name: "#6 Porsche Penske", detail: "+1 lap", isLeader: false },
      { position: 3, name: "#51 Ferrari AF Corse", detail: "+2 laps", isLeader: false },
      { position: 4, name: "#7 Toyota Gazoo Racing", detail: "+3 laps", isLeader: false },
      { position: 5, name: "#5 Porsche Penske", detail: "+5 laps", isLeader: false },
    ],
  },
  // Golf — The Open Championship
  {
    id: "golf-open-championship",
    sport: "Golf",
    league: "The Open Championship",
    eventName: "The Open Championship",
    status: "FINISHED",
    time: "Final",
    date: "2026-07-19",
    viewers: "1.4M",
    entries: [
      { position: 1, name: "Scottie Scheffler", detail: "-17 (Winner)", isLeader: true },
      { position: 2, name: "Rory McIlroy", detail: "-11", isLeader: false },
      { position: 3, name: "Xander Schauffele", detail: "-9", isLeader: false },
      { position: 4, name: "Viktor Hovland", detail: "-7", isLeader: false },
      { position: 5, name: "Jon Rahm", detail: "-6", isLeader: false },
      { position: 6, name: "Brooks Koepka", detail: "-4", isLeader: false },
    ],
  },
  // Golf — Masters Tournament (another stroke-play example)
  {
    id: "golf-masters-tournament",
    sport: "Golf",
    league: "Masters Tournament",
    eventName: "The Masters",
    status: "UPCOMING",
    time: "Round 1 Thu 10:00 AM ET",
    viewers: "2.6M",
    entries: [
      { position: 1, name: "Scottie Scheffler", detail: "E", isLeader: true },
      { position: 2, name: "Jon Rahm", detail: "E", isLeader: false },
      { position: 3, name: "Rory McIlroy", detail: "E", isLeader: false },
      { position: 4, name: "Collin Morikawa", detail: "E", isLeader: false },
      { position: 5, name: "Ludvig Aberg", detail: "E", isLeader: false },
    ],
  },
  // Cycling — Tour de France
  {
    id: "cycling-tour-de-france",
    sport: "Cycling",
    league: "Tour de France",
    eventName: "Tour de France — Final GC",
    status: "FINISHED",
    time: "Final",
    date: "2026-07-26",
    viewers: "1.8M",
    entries: [
      { position: 1, name: "Tadej Pogacar", detail: "Winner", isLeader: true },
      { position: 2, name: "Jonas Vingegaard", detail: "+3:15", isLeader: false },
      { position: 3, name: "Remco Evenepoel", detail: "+5:42", isLeader: false },
      { position: 4, name: "Primoz Roglic", detail: "+8:03", isLeader: false },
      { position: 5, name: "Joao Almeida", detail: "+10:37", isLeader: false },
    ],
  },
  // Cycling — Giro d'Italia (another stage race example)
  {
    id: "cycling-giro-ditalia",
    sport: "Cycling",
    league: "Giro d'Italia",
    eventName: "Giro d'Italia — Stage 12 GC",
    status: "FINISHED",
    time: "Stage 12 Final",
    date: "2026-05-24",
    viewers: "540K",
    entries: [
      { position: 1, name: "Tadej Pogacar", detail: "Leader", isLeader: true },
      { position: 2, name: "Geraint Thomas", detail: "+2:56", isLeader: false },
      { position: 3, name: "Daniel Martinez", detail: "+4:10", isLeader: false },
      { position: 4, name: "Ben O'Connor", detail: "+6:33", isLeader: false },
      { position: 5, name: "Antonio Tiberi", detail: "+8:47", isLeader: false },
    ],
  },
  // Olympic Sports — field event example
  {
    id: "olympic-track-100m-final",
    sport: "Olympic Sports",
    league: "Olympic Games",
    eventName: "Men's 100m Final",
    status: "FINISHED",
    time: "Final",
    date: "2024-08-04",
    viewers: "4.2M",
    entries: [
      { position: 1, name: "Noah Lyles", detail: "9.79s", isLeader: true },
      { position: 2, name: "Kishane Thompson", detail: "9.81s", isLeader: false },
      { position: 3, name: "Fred Kerley", detail: "9.88s", isLeader: false },
      { position: 4, name: "Akani Simbine", detail: "9.91s", isLeader: false },
      { position: 5, name: "Letsile Tebogo", detail: "9.93s", isLeader: false },
    ],
  },
];
