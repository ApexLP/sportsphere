export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  sport: string;
  league: string;
  color: string;
  record: string;
  nextGame: string;
}

export const mockTeams: Team[] = [
  // Soccer / World Cup 2026
  {
    id: "USA",
    name: "USA",
    abbreviation: "USA",
    sport: "Soccer",
    league: "World Cup 2026",
    color: "#B22234",
    record: "Quarterfinals",
    nextGame: "vs GER"
  },
  {
    id: "Germany",
    name: "Germany",
    abbreviation: "GER",
    sport: "Soccer",
    league: "World Cup 2026",
    color: "#000000",
    record: "Quarterfinals",
    nextGame: "@ USA"
  },
  {
    id: "Argentina",
    name: "Argentina",
    abbreviation: "ARG",
    sport: "Soccer",
    league: "World Cup 2026",
    color: "#75AADB",
    record: "Quarterfinals",
    nextGame: "vs BRA"
  },
  {
    id: "Brazil",
    name: "Brazil",
    abbreviation: "BRA",
    sport: "Soccer",
    league: "World Cup 2026",
    color: "#009C3B",
    record: "Quarterfinals",
    nextGame: "@ ARG"
  },
  // Baseball / MLB
  {
    id: "New York Yankees",
    name: "New York Yankees",
    abbreviation: "NYY",
    sport: "Baseball",
    league: "MLB",
    color: "#003087",
    record: "54-35",
    nextGame: "vs BOS"
  },
  {
    id: "Boston Red Sox",
    name: "Boston Red Sox",
    abbreviation: "BOS",
    sport: "Baseball",
    league: "MLB",
    color: "#BD3039",
    record: "47-42",
    nextGame: "@ NYY"
  },
  {
    id: "Los Angeles Dodgers",
    name: "Los Angeles Dodgers",
    abbreviation: "LAD",
    sport: "Baseball",
    league: "MLB",
    color: "#005A9C",
    record: "56-33",
    nextGame: "vs SD"
  },
  // Tennis / Wimbledon
  {
    id: "Carlos Alcaraz",
    name: "Carlos Alcaraz",
    abbreviation: "CA",
    sport: "Tennis",
    league: "Wimbledon",
    color: "#C60B1E",
    record: "Semifinal",
    nextGame: "vs SIN"
  },
  {
    id: "Jannik Sinner",
    name: "Jannik Sinner",
    abbreviation: "JS",
    sport: "Tennis",
    league: "Wimbledon",
    color: "#009246",
    record: "Semifinal",
    nextGame: "@ ALC"
  },
  {
    id: "Iga Swiatek",
    name: "Iga Swiatek",
    abbreviation: "IS",
    sport: "Tennis",
    league: "Wimbledon",
    color: "#DC143C",
    record: "Quarterfinal",
    nextGame: "vs GAU"
  },
  {
    id: "Coco Gauff",
    name: "Coco Gauff",
    abbreviation: "CG",
    sport: "Tennis",
    league: "Wimbledon",
    color: "#B22234",
    record: "Quarterfinal",
    nextGame: "@ SWI"
  },
  // Cycling / Tour de France
  {
    id: "Tadej Pogacar",
    name: "Tadej Pogacar",
    abbreviation: "TP",
    sport: "Cycling",
    league: "Tour de France",
    color: "#FFD700",
    record: "Yellow Jersey",
    nextGame: "Stage 9"
  },
  {
    id: "Jonas Vingegaard",
    name: "Jonas Vingegaard",
    abbreviation: "JV",
    sport: "Cycling",
    league: "Tour de France",
    color: "#DC143C",
    record: "2nd Overall",
    nextGame: "Stage 9"
  },
  // Motor Racing / F1
  {
    id: "Max Verstappen",
    name: "Max Verstappen",
    abbreviation: "MV",
    sport: "Motor Racing",
    league: "Formula 1",
    color: "#0600EF",
    record: "Championship Leader",
    nextGame: "British GP"
  },
  {
    id: "Lewis Hamilton",
    name: "Lewis Hamilton",
    abbreviation: "LH",
    sport: "Motor Racing",
    league: "Formula 1",
    color: "#00D2BE",
    record: "2nd Overall",
    nextGame: "British GP"
  },
  {
    id: "Lando Norris",
    name: "Lando Norris",
    abbreviation: "LN",
    sport: "Motor Racing",
    league: "Formula 1",
    color: "#FF8000",
    record: "3rd Overall",
    nextGame: "British GP"
  },
  // Golf / The Open Championship
  {
    id: "Rory McIlroy",
    name: "Rory McIlroy",
    abbreviation: "RM",
    sport: "Golf",
    league: "The Open Championship",
    color: "#228B22",
    record: "Tournament Leader",
    nextGame: "Round 3"
  },
  {
    id: "Scottie Scheffler",
    name: "Scottie Scheffler",
    abbreviation: "SS",
    sport: "Golf",
    league: "The Open Championship",
    color: "#003366",
    record: "2nd Place",
    nextGame: "Round 3"
  },
  // Rugby / Championship
  {
    id: "New Zealand All Blacks",
    name: "New Zealand All Blacks",
    abbreviation: "NZ",
    sport: "Rugby",
    league: "Rugby Championship",
    color: "#000000",
    record: "1-1",
    nextGame: "vs AUS"
  },
  {
    id: "South Africa Springboks",
    name: "South Africa Springboks",
    abbreviation: "SA",
    sport: "Rugby",
    league: "Rugby Championship",
    color: "#007A4D",
    record: "2-0",
    nextGame: "@ ARG"
  },
  // Combat Sports / UFC
  {
    id: "Islam Makhachev",
    name: "Islam Makhachev",
    abbreviation: "IM",
    sport: "Combat Sports",
    league: "UFC",
    color: "#D20A0A",
    record: "26-1",
    nextGame: "UFC 316"
  },
  {
    id: "Arman Tsarukyan",
    name: "Arman Tsarukyan",
    abbreviation: "AT",
    sport: "Combat Sports",
    league: "UFC",
    color: "#1E90FF",
    record: "22-3",
    nextGame: "UFC 316"
  },
  // Olympic Sports
  {
    id: "USA Gymnastics",
    name: "USA Gymnastics",
    abbreviation: "USA",
    sport: "Olympic Sports",
    league: "Olympics",
    color: "#B22234",
    record: "Trials Champion",
    nextGame: "LA 2028"
  },
  {
    id: "USA Swimming",
    name: "USA Swimming",
    abbreviation: "USA",
    sport: "Olympic Sports",
    league: "Olympics",
    color: "#002868",
    record: "Trials Leader",
    nextGame: "LA 2028"
  }
];
