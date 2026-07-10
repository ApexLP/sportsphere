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
  {
    id: "lakers",
    name: "LA Lakers",
    abbreviation: "LAL",
    sport: "Basketball",
    league: "NBA",
    color: "#552583",
    record: "28-13",
    nextGame: "vs GSW"
  },
  {
    id: "chiefs",
    name: "Kansas City Chiefs",
    abbreviation: "KC",
    sport: "Football",
    league: "NFL",
    color: "#E31837",
    record: "11-3",
    nextGame: "@ BUF"
  },
  {
    id: "yankees",
    name: "New York Yankees",
    abbreviation: "NYY",
    sport: "Baseball",
    league: "MLB",
    color: "#003087",
    record: "82-60",
    nextGame: "vs BOS"
  },
  {
    id: "manutd",
    name: "Manchester United",
    abbreviation: "MU",
    sport: "Soccer",
    league: "Premier League",
    color: "#DA020E",
    record: "15W 5D 3L",
    nextGame: "vs CHE"
  },
  {
    id: "warriors",
    name: "Golden State Warriors",
    abbreviation: "GSW",
    sport: "Basketball",
    league: "NBA",
    color: "#1D428A",
    record: "24-17",
    nextGame: "@ LAL"
  },
  {
    id: "patriots",
    name: "New England Patriots",
    abbreviation: "NE",
    sport: "Football",
    league: "NFL",
    color: "#002244",
    record: "8-6",
    nextGame: "vs MIA"
  },
  {
    id: "realmadrid",
    name: "Real Madrid",
    abbreviation: "RM",
    sport: "Soccer",
    league: "La Liga",
    color: "#FEBE10",
    record: "18W 3D 2L",
    nextGame: "@ BAR"
  },
  {
    id: "celtics",
    name: "Boston Celtics",
    abbreviation: "BOS",
    sport: "Basketball",
    league: "NBA",
    color: "#007A33",
    record: "31-10",
    nextGame: "vs MIA"
  },
  // Motor Racing
  {
    id: "redbull",
    name: "Red Bull Racing",
    abbreviation: "RBR",
    sport: "Motor Racing",
    league: "Formula 1",
    color: "#0600EF",
    record: "P1 Championship",
    nextGame: "Bahrain GP"
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG F1",
    abbreviation: "MER",
    sport: "Motor Racing",
    league: "Formula 1",
    color: "#00D2BE",
    record: "P3 Championship",
    nextGame: "Bahrain GP"
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari",
    abbreviation: "FER",
    sport: "Motor Racing",
    league: "Formula 1",
    color: "#DC143C",
    record: "P2 Championship",
    nextGame: "Bahrain GP"
  },
  // Olympic Sports
  {
    id: "usagymnastics",
    name: "USA Gymnastics",
    abbreviation: "USA",
    sport: "Olympic Sports",
    league: "Olympics",
    color: "#B22234",
    record: "12 Gold Medals",
    nextGame: "Paris 2024"
  },
  {
    id: "usaswimming",
    name: "USA Swimming",
    abbreviation: "USA",
    sport: "Olympic Sports",
    league: "Olympics",
    color: "#002868",
    record: "23 Gold Medals",
    nextGame: "Paris 2024"
  },
  {
    id: "teamgb",
    name: "Team Great Britain",
    abbreviation: "GBR",
    sport: "Olympic Sports",
    league: "Olympics",
    color: "#012169",
    record: "22 Gold Medals",
    nextGame: "Paris 2024"
  },
  // Rugby
  {
    id: "allblacks",
    name: "New Zealand All Blacks",
    abbreviation: "NZ",
    sport: "Rugby",
    league: "International",
    color: "#000000",
    record: "World Champions",
    nextGame: "vs AUS"
  },
  {
    id: "springboks",
    name: "South Africa Springboks",
    abbreviation: "SA",
    sport: "Rugby",
    league: "International",
    color: "#007A4D",
    record: "World Cup Winners",
    nextGame: "vs ARG"
  },
  {
    id: "england",
    name: "England Rugby",
    abbreviation: "ENG",
    sport: "Rugby",
    league: "Six Nations",
    color: "#FFFFFF",
    record: "2nd Place",
    nextGame: "vs FRA"
  },
  // Golf
  {
    id: "pgatour",
    name: "PGA Tour",
    abbreviation: "PGA",
    sport: "Golf",
    league: "Professional",
    color: "#003366",
    record: "Season Leader",
    nextGame: "Masters"
  },
  {
    id: "europetour",
    name: "DP World Tour",
    abbreviation: "DPW",
    sport: "Golf",
    league: "European",
    color: "#1E3A8A",
    record: "Race to Dubai",
    nextGame: "Dubai Championship"
  },
  {
    id: "rydercup",
    name: "Team Europe",
    abbreviation: "EUR",
    sport: "Golf",
    league: "Ryder Cup",
    color: "#FFD700",
    record: "Cup Holders",
    nextGame: "vs USA"
  },
  // Combat Sports
  {
    id: "ufc",
    name: "UFC Champions",
    abbreviation: "UFC",
    sport: "Combat Sports",
    league: "Mixed Martial Arts",
    color: "#D20A0A",
    record: "Championship",
    nextGame: "UFC 300"
  },
  {
    id: "boxing",
    name: "World Boxing Council",
    abbreviation: "WBC",
    sport: "Combat Sports",
    league: "Professional Boxing",
    color: "#228B22",
    record: "Title Defense",
    nextGame: "Championship Fight"
  },
  {
    id: "wwe",
    name: "WWE Superstars",
    abbreviation: "WWE",
    sport: "Combat Sports",
    league: "Sports Entertainment",
    color: "#FFD700",
    record: "Champions",
    nextGame: "WrestleMania"
  }
];