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
    sport: "NBA",
    league: "NBA Regular Season",
    homeTeam: "Lakers",
    awayTeam: "Celtics",
    homeScore: 98,
    awayScore: 94,
    homeColor: "#552583",
    awayColor: "#007A33",
    status: "LIVE",
    time: "Q4 2:34",
    viewers: "2.3M"
  },
  {
    id: "2",
    sport: "NFL",
    league: "NFL Week 15",
    homeTeam: "Chiefs",
    awayTeam: "Bills",
    homeScore: 21,
    awayScore: 17,
    homeColor: "#E31837",
    awayColor: "#00338D",
    status: "LIVE",
    time: "3rd Quarter",
    viewers: "5.1M"
  },
  {
    id: "3",
    sport: "Soccer",
    league: "Premier League",
    homeTeam: "Man United",
    awayTeam: "Liverpool",
    homeScore: 2,
    awayScore: 2,
    homeColor: "#DA020E",
    awayColor: "#C8102E",
    status: "LIVE",
    time: "78'",
    viewers: "890K"
  },
  {
    id: "4",
    sport: "NBA",
    league: "NBA Regular Season",
    homeTeam: "Warriors",
    awayTeam: "Nets",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#1D428A",
    awayColor: "#000000",
    status: "UPCOMING",
    time: "7:30 PM ET",
  },
  {
    id: "5",
    sport: "MLB",
    league: "MLB Regular Season",
    homeTeam: "Yankees",
    awayTeam: "Red Sox",
    homeScore: 7,
    awayScore: 5,
    homeColor: "#003087",
    awayColor: "#BD3039",
    status: "FINISHED",
    time: "Final",
  },
  {
    id: "6",
    sport: "Soccer",
    league: "Champions League",
    homeTeam: "Real Madrid",
    awayTeam: "Bayern",
    homeScore: 0,
    awayScore: 0,
    homeColor: "#FEBE10",
    awayColor: "#DC052D",
    status: "UPCOMING",
    time: "3:00 PM ET",
  },
  {
    id: "7",
    sport: "Tennis",
    league: "Australian Open",
    homeTeam: "Djokovic",
    awayTeam: "Alcaraz",
    homeScore: 2,
    awayScore: 1,
    homeColor: "#003DA5",
    awayColor: "#C60B1E",
    status: "LIVE",
    time: "Set 4",
    viewers: "450K"
  },
  {
    id: "8",
    sport: "NFL",
    league: "NFL Week 15",
    homeTeam: "Cowboys",
    awayTeam: "Eagles",
    homeScore: 24,
    awayScore: 27,
    homeColor: "#003594",
    awayColor: "#004C54",
    status: "FINISHED",
    time: "Final",
  }
];