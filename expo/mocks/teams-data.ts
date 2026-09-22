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
  // Combat Sports / UFC
  {
    id: "Islam Makhachev",
    name: "Islam Makhachev",
    abbreviation: "IM",
    sport: "Combat Sports",
    league: "UFC",
    color: "#D20A0A",
    record: "27-1",
    nextGame: "UFC 321"
  },
  {
    id: "Arman Tsarukyan",
    name: "Arman Tsarukyan",
    abbreviation: "AT",
    sport: "Combat Sports",
    league: "UFC",
    color: "#1E90FF",
    record: "23-3",
    nextGame: "UFC 321"
  },
  // Boxing
  {
    id: "Canelo Alvarez",
    name: "Canelo Alvarez",
    abbreviation: "CA",
    sport: "Boxing",
    league: "Super Middleweight",
    color: "#D20A0A",
    record: "62-3-2",
    nextGame: "Rematch TBD"
  },
  {
    id: "Terence Crawford",
    name: "Terence Crawford",
    abbreviation: "TC",
    sport: "Boxing",
    league: "Super Middleweight",
    color: "#1E90FF",
    record: "42-0",
    nextGame: "Undisputed Champion"
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
  },
  // NFL
  {
    id: "Kansas City Chiefs",
    name: "Kansas City Chiefs",
    abbreviation: "KC",
    sport: "NFL",
    league: "NFL",
    color: "#E31837",
    record: "15-2",
    nextGame: "Training Camp"
  },
  {
    id: "Buffalo Bills",
    name: "Buffalo Bills",
    abbreviation: "BUF",
    sport: "NFL",
    league: "NFL",
    color: "#00338D",
    record: "13-4",
    nextGame: "Training Camp"
  },
  {
    id: "Philadelphia Eagles",
    name: "Philadelphia Eagles",
    abbreviation: "PHI",
    sport: "NFL",
    league: "NFL",
    color: "#004C54",
    record: "14-3",
    nextGame: "Training Camp"
  },
  {
    id: "San Francisco 49ers",
    name: "San Francisco 49ers",
    abbreviation: "SF",
    sport: "NFL",
    league: "NFL",
    color: "#AA0000",
    record: "12-5",
    nextGame: "Training Camp"
  },
  {
    id: "Chicago Bears",
    name: "Chicago Bears",
    abbreviation: "CHI",
    sport: "NFL",
    league: "NFL",
    color: "#0B162A",
    record: "11-6",
    nextGame: "Training Camp"
  },
  // NCAA Football
  {
    id: "Georgia Bulldogs",
    name: "Georgia Bulldogs",
    abbreviation: "UGA",
    sport: "NCAA Football",
    league: "NCAA FBS",
    color: "#BA0C2F",
    record: "13-1",
    nextGame: "Fall Camp"
  },
  {
    id: "Ohio State Buckeyes",
    name: "Ohio State Buckeyes",
    abbreviation: "OSU",
    sport: "NCAA Football",
    league: "NCAA FBS",
    color: "#BB0000",
    record: "11-2",
    nextGame: "Fall Camp"
  },
  {
    id: "Michigan Wolverines",
    name: "Michigan Wolverines",
    abbreviation: "MICH",
    sport: "NCAA Football",
    league: "NCAA FBS",
    color: "#00274C",
    record: "10-3",
    nextGame: "Fall Camp"
  },
  {
    id: "Texas Longhorns",
    name: "Texas Longhorns",
    abbreviation: "TEX",
    sport: "NCAA Football",
    league: "NCAA FBS",
    color: "#BF5700",
    record: "12-2",
    nextGame: "Fall Camp"
  },
  // NCAA Basketball
  {
    id: "Duke Blue Devils",
    name: "Duke Blue Devils",
    abbreviation: "DUKE",
    sport: "NCAA Basketball",
    league: "NCAA D1",
    color: "#001F5B",
    record: "31-6",
    nextGame: "Season Prep"
  },
  {
    id: "Kansas Jayhawks",
    name: "Kansas Jayhawks",
    abbreviation: "KU",
    sport: "NCAA Basketball",
    league: "NCAA D1",
    color: "#0085CE",
    record: "28-8",
    nextGame: "Season Prep"
  },
  {
    id: "UConn Huskies",
    name: "UConn Huskies",
    abbreviation: "UCONN",
    sport: "NCAA Basketball",
    league: "NCAA D1",
    color: "#0000B4",
    record: "33-5",
    nextGame: "Season Prep"
  },
  {
    id: "Kentucky Wildcats",
    name: "Kentucky Wildcats",
    abbreviation: "UK",
    sport: "NCAA Basketball",
    league: "NCAA D1",
    color: "#005DAA",
    record: "26-9",
    nextGame: "Season Prep"
  },
  // NCAA Wrestling
  {
    id: "Penn State Nittany Lions",
    name: "Penn State Wrestling",
    abbreviation: "PSU",
    sport: "NCAA Wrestling",
    league: "NCAA D1",
    color: "#001E44",
    record: "National Champs",
    nextGame: "Season Prep"
  },
  {
    id: "Iowa Hawkeyes",
    name: "Iowa Wrestling",
    abbreviation: "IOWA",
    sport: "NCAA Wrestling",
    league: "NCAA D1",
    color: "#FFCD00",
    record: "NCAA Runner-Up",
    nextGame: "Season Prep"
  },
  // NCAA Track & Field
  {
    id: "USC Track & Field",
    name: "USC Track & Field",
    abbreviation: "USC",
    sport: "NCAA Track",
    league: "NCAA D1",
    color: "#990000",
    record: "NCAA Champions",
    nextGame: "Outdoor Finals"
  },
  {
    id: "LSU Track & Field",
    name: "LSU Track & Field",
    abbreviation: "LSU",
    sport: "NCAA Track",
    league: "NCAA D1",
    color: "#461D7C",
    record: "NCAA Runner-Up",
    nextGame: "Outdoor Finals"
  },
  // NHL Hockey
  {
    id: "Florida Panthers",
    name: "Florida Panthers",
    abbreviation: "FLA",
    sport: "NHL Hockey",
    league: "NHL",
    color: "#C8102E",
    record: "Stanley Cup Champs",
    nextGame: "Season Prep"
  },
  {
    id: "Edmonton Oilers",
    name: "Edmonton Oilers",
    abbreviation: "EDM",
    sport: "NHL Hockey",
    league: "NHL",
    color: "#041E42",
    record: "Cup Finalist",
    nextGame: "Season Prep"
  },
  {
    id: "Dallas Stars",
    name: "Dallas Stars",
    abbreviation: "DAL",
    sport: "NHL Hockey",
    league: "NHL",
    color: "#006847",
    record: "Conf Finals",
    nextGame: "Season Prep"
  },
  // Horse Racing
  {
    id: "Dornoch",
    name: "Dornoch",
    abbreviation: "DN",
    sport: "Horse Racing",
    league: "Triple Crown",
    color: "#8B4513",
    record: "Belmont Winner",
    nextGame: "Travers Stakes"
  },
  {
    id: "Seize the Grey",
    name: "Seize the Grey",
    abbreviation: "SG",
    sport: "Horse Racing",
    league: "Triple Crown",
    color: "#708090",
    record: "Preakness Winner",
    nextGame: "Travers Stakes"
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
  {
    id: "Chicago Cubs",
    name: "Chicago Cubs",
    abbreviation: "CHC",
    sport: "Baseball",
    league: "MLB",
    color: "#0E3386",
    record: "51-38",
    nextGame: "vs STL"
  },
];
