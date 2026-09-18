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
  entries: LeaderboardEntry[];
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
    status: "LIVE",
    time: "68'",
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
  },
  // Tennis
  {
    id: "3",
    sport: "Tennis",
    league: "Wimbledon",
    homeTeam: "Carlos Alcaraz",
    awayTeam: "Jannik Sinner",
    homeScore: 2,
    awayScore: 1,
    homeColor: "#C60B1E",
    awayColor: "#009246",
    status: "LIVE",
    time: "Set 4",
    viewers: "980K"
  },
  {
    id: "4",
    sport: "Tennis",
    league: "Wimbledon",
    homeTeam: "Iga Swiatek",
    awayTeam: "Coco Gauff",
    homeScore: 1,
    awayScore: 0,
    homeColor: "#DC143C",
    awayColor: "#B22234",
    status: "LIVE",
    time: "Set 2",
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
    time: "UFC 316 Main Event",
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
    status: "UPCOMING",
    time: "Sep 13 PPV",
  },
  // NFL
  {
    id: "12",
    sport: "NFL",
    league: "NFL Preseason",
    homeTeam: "Kansas City Chiefs",
    awayTeam: "San Francisco 49ers",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#E31837",
    awayColor: "#AA0000",
    status: "UPCOMING",
    time: "Aug 7 Preseason",
  },
  {
    id: "13",
    sport: "NFL",
    league: "NFL Preseason",
    homeTeam: "Buffalo Bills",
    awayTeam: "Philadelphia Eagles",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#00338D",
    awayColor: "#004C54",
    status: "UPCOMING",
    time: "Aug 10 Preseason",
  },
  // NCAA Football
  {
    id: "14",
    sport: "NCAA Football",
    league: "NCAA FBS",
    homeTeam: "Georgia Bulldogs",
    awayTeam: "Ohio State Buckeyes",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#BA0C2F",
    awayColor: "#BB0000",
    status: "UPCOMING",
    time: "Sep 5 Season Opener",
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
    time: "Sep 7 Season Opener",
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
    status: "UPCOMING",
    time: "Aug 24 Saratoga",
  },
  // Cricket
  {
    id: "26",
    sport: "Cricket",
    league: "ICC Test Series",
    homeTeam: "India Cricket",
    awayTeam: "England Cricket",
    homeScore: 347,
    awayScore: 289,
    homeColor: "#438BCC",
    awayColor: "#1E3A8A",
    status: "LIVE",
    time: "Day 3 Session 2",
    viewers: "3.2M"
  },
  {
    id: "27",
    sport: "Cricket",
    league: "ICC ODI Series",
    homeTeam: "Australia Cricket",
    awayTeam: "India Cricket",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#FFD700",
    awayColor: "#438BCC",
    status: "UPCOMING",
    time: "Sep 15 ODI",
  },
  // Baseball (above NBA)
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
  },
  // Basketball / NBA (bottom)
  {
    id: "22",
    sport: "Basketball",
    league: "NBA Summer League",
    homeTeam: "Oklahoma City Thunder",
    awayTeam: "Indiana Pacers",
    homeScore: 78,
    awayScore: 74,
    homeColor: "#007AC1",
    awayColor: "#FDBB30",
    status: "LIVE",
    time: "Q3 4:32",
    viewers: "420K"
  },
  {
    id: "23",
    sport: "Basketball",
    league: "NBA Summer League",
    homeTeam: "Denver Nuggets",
    awayTeam: "Miami Heat",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#0E2240",
    awayColor: "#98002E",
    status: "UPCOMING",
    time: "11:00 PM ET",
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
    status: "LIVE",
    time: "Hour 4 of 6",
    entries: [
      { position: 1, name: "#8 Toyota Gazoo Racing", detail: "Leader", isLeader: true },
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
    status: "LIVE",
    time: "Lap 55 of 80",
    entries: [
      { position: 1, name: "Alex Palou", detail: "Leader", isLeader: true },
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
    status: "LIVE",
    time: "SS14 of 22",
    entries: [
      { position: 1, name: "Kalle Rovanpera", detail: "Leader", isLeader: true },
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
    status: "LIVE",
    time: "Hour 18 of 24",
    entries: [
      { position: 1, name: "#32 Team WRT (Audi)", detail: "Leader", isLeader: true },
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
    status: "LIVE",
    time: "Round 3",
    entries: [
      { position: 1, name: "Scottie Scheffler", detail: "-14", isLeader: true },
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
    eventName: "Tour de France — Stage 8 GC",
    status: "LIVE",
    time: "Stage 8",
    entries: [
      { position: 1, name: "Tadej Pogacar", detail: "Leader", isLeader: true },
      { position: 2, name: "Jonas Vingegaard", detail: "+1:14", isLeader: false },
      { position: 3, name: "Remco Evenepoel", detail: "+2:41", isLeader: false },
      { position: 4, name: "Primoz Roglic", detail: "+3:58", isLeader: false },
      { position: 5, name: "Joao Almeida", detail: "+5:22", isLeader: false },
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
    entries: [
      { position: 1, name: "Noah Lyles", detail: "9.79s", isLeader: true },
      { position: 2, name: "Kishane Thompson", detail: "9.81s", isLeader: false },
      { position: 3, name: "Fred Kerley", detail: "9.88s", isLeader: false },
      { position: 4, name: "Akani Simbine", detail: "9.91s", isLeader: false },
      { position: 5, name: "Letsile Tebogo", detail: "9.93s", isLeader: false },
    ],
  },
];
