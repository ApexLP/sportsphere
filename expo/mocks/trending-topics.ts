export interface TrendingTopic {
  id: string;
  hashtag: string;
  tweetCount: string;
  category: string;
  description: string;
  isLive?: boolean;
  relatedNews?: string[];
}

export const trendingTopics: TrendingTopic[] = [
  {
    id: "20",
    hashtag: "#PresidentsCup",
    tweetCount: "198K",
    category: "Golf",
    description: "Rosters set as USA looks to defend the Cup against Jason Day's International Team",
    relatedNews: ["15"]
  },
  {
    id: "9",
    hashtag: "#NFLWeek3",
    tweetCount: "289K",
    category: "NFL",
    description: "Chiefs still unbeaten as the AFC West race heats up three weeks in",
    isLive: true,
    relatedNews: ["8"]
  },
  {
    id: "17",
    hashtag: "#MLBPlayoffRace",
    tweetCount: "198K",
    category: "Baseball",
    description: "Judge and the Yankees battling for the AL East crown with two weeks to go",
    isLive: true,
    relatedNews: ["3"]
  },
  {
    id: "10",
    hashtag: "#CFB2026",
    tweetCount: "201K",
    category: "NCAA Football",
    description: "Georgia stays unbeaten and #1 as SEC play opens this weekend",
    relatedNews: ["9"]
  },
  {
    id: "14",
    hashtag: "#NHLTrainingCamp",
    tweetCount: "312K",
    category: "NHL Hockey",
    description: "Panthers open camp as back-to-back champs with October opener on the horizon",
    relatedNews: ["13"]
  },
  {
    id: "11",
    hashtag: "#MarchMadness",
    tweetCount: "167K",
    category: "NCAA Basketball",
    description: "Duke lands top recruit, becomes early favorite for 2027 title",
    relatedNews: ["10"]
  },
  {
    id: "12",
    hashtag: "#NCAAWrestling",
    tweetCount: "89K",
    category: "NCAA Wrestling",
    description: "Penn State adds top recruit as Sanderson dynasty continues to roll",
    relatedNews: ["11"]
  },
  {
    id: "7",
    hashtag: "#CaneloCrawford",
    tweetCount: "445K",
    category: "Boxing",
    description: "Crawford's upset win in Riyadh still dominating boxing conversation",
    relatedNews: ["7"]
  },
  {
    id: "6",
    hashtag: "#UFC321",
    tweetCount: "334K",
    category: "Combat Sports",
    description: "Makhachev vs Tsarukyan lightweight title fight sold out in Las Vegas",
    relatedNews: ["6"]
  },
  {
    id: "8",
    hashtag: "#RugbyChampionship",
    tweetCount: "156K",
    category: "Rugby",
    description: "Springboks edge All Blacks as the title race tightens late in the championship"
  },
  {
    id: "15",
    hashtag: "#TraversStakes",
    tweetCount: "98K",
    category: "Horse Racing",
    description: "Dornoch completes the Belmont-Travers double, eyeing the Breeders' Cup next",
    relatedNews: ["14"]
  },
  {
    id: "19",
    hashtag: "#LA2028",
    tweetCount: "124K",
    category: "Olympic Sports",
    description: "Two years until Los Angeles Olympics as athletes prepare for qualifying cycles"
  },
  {
    id: "1",
    hashtag: "#WorldCup2026",
    tweetCount: "2.4M",
    category: "Soccer",
    description: "Looking back at USA's quarterfinal exit to Germany two months on",
    relatedNews: ["1"]
  },
  {
    id: "2",
    hashtag: "#Wimbledon",
    tweetCount: "856K",
    category: "Tennis",
    description: "Revisiting Alcaraz's five-set semifinal win over Sinner from this summer's Championships",
    relatedNews: ["2"]
  },
  {
    id: "3",
    hashtag: "#TourdeFrance",
    tweetCount: "412K",
    category: "Cycling",
    description: "Pogacar's overall win by 3:15 remains the story of this year's race",
    relatedNews: ["4"]
  },
  {
    id: "4",
    hashtag: "#BritishGP",
    tweetCount: "389K",
    category: "Motor Racing",
    description: "Verstappen on pole at Silverstone with Hamilton second in front of home crowd",
    relatedNews: ["5"]
  },
  {
    id: "5",
    hashtag: "#TheOpen",
    tweetCount: "267K",
    category: "Golf",
    description: "Scheffler's wire-to-wire win still the headline from this year's Open"
  },
  {
    id: "13",
    hashtag: "#NCAATrack",
    tweetCount: "76K",
    category: "NCAA Track",
    description: "USC's record-breaking 4x400 relay from June still the outdoor season's signature moment",
    relatedNews: ["12"]
  },
];
