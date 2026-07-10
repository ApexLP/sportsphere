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
}

export const mockLiveScores: LiveScore[] = [
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
  {
    id: "3",
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
    id: "4",
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
    id: "5",
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
  {
    id: "6",
    sport: "Cycling",
    league: "Tour de France",
    homeTeam: "Tadej Pogacar",
    awayTeam: "Jonas Vingegaard",
    homeScore: 1,
    awayScore: 2,
    homeColor: "#FFD700",
    awayColor: "#DC143C",
    status: "LIVE",
    time: "Stage 8",
    viewers: "1.8M"
  },
  {
    id: "7",
    sport: "Golf",
    league: "The Open Championship",
    homeTeam: "Rory McIlroy",
    awayTeam: "Scottie Scheffler",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#228B22",
    awayColor: "#003366",
    status: "UPCOMING",
    time: "Tee Off 2:30 PM",
  },
  {
    id: "8",
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
  {
    id: "9",
    sport: "Motor Racing",
    league: "Formula 1",
    homeTeam: "Max Verstappen",
    awayTeam: "Lewis Hamilton",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#0600EF",
    awayColor: "#00D2BE",
    status: "UPCOMING",
    time: "British GP Sunday",
  },
  {
    id: "10",
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
  }
];