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
    id: "1",
    hashtag: "#WorldCup2026",
    tweetCount: "2.4M",
    category: "Soccer",
    description: "USA eliminated by Germany in quarterfinals as tournament reaches final weekend",
    isLive: true,
    relatedNews: ["1"]
  },
  {
    id: "2",
    hashtag: "#Wimbledon",
    tweetCount: "856K",
    category: "Tennis",
    description: "Alcaraz vs Sinner semifinal headlines Centre Court Friday action",
    isLive: true,
    relatedNews: ["2"]
  },
  {
    id: "3",
    hashtag: "#TourdeFrance",
    tweetCount: "412K",
    category: "Cycling",
    description: "Pogacar takes yellow jersey after dominant Pyrenean mountain stage",
    isLive: true,
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
    description: "McIlroy and Scheffler headline final groups at Royal Liverpool",
    isLive: true
  },
  {
    id: "6",
    hashtag: "#UFC316",
    tweetCount: "334K",
    category: "Combat Sports",
    description: "Makhachev vs Tsarukyan lightweight title rematch sold out in Las Vegas",
    relatedNews: ["6"]
  },
  {
    id: "7",
    hashtag: "#CaneloCrawford",
    tweetCount: "445K",
    category: "Boxing",
    description: "Megafight officially signed for September 13 in Riyadh, Saudi Arabia",
    relatedNews: ["7"]
  },
  {
    id: "8",
    hashtag: "#RugbyChampionship",
    tweetCount: "156K",
    category: "Rugby",
    description: "Springboks defeat All Blacks in opening round of southern hemisphere championship"
  },
  {
    id: "9",
    hashtag: "#NFLTrainingCamp",
    tweetCount: "289K",
    category: "NFL",
    description: "All 32 teams report to camp with Chiefs opening as Super Bowl favorites",
    isLive: true,
    relatedNews: ["8"]
  },
  {
    id: "10",
    hashtag: "#CFB2026",
    tweetCount: "201K",
    category: "NCAA Football",
    description: "Georgia tops preseason AP poll with Carson Beck returning at quarterback",
    relatedNews: ["9"]
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
    id: "13",
    hashtag: "#NCAATrack",
    tweetCount: "76K",
    category: "NCAA Track",
    description: "USC shatters collegiate 4x400 relay record at outdoor championships",
    relatedNews: ["12"]
  },
  {
    id: "14",
    hashtag: "#StanleyCup",
    tweetCount: "312K",
    category: "NHL Hockey",
    description: "Panthers celebrate back-to-back championships as NHL free agency reshapes the league",
    relatedNews: ["13"]
  },
  {
    id: "15",
    hashtag: "#TraversStakes",
    tweetCount: "98K",
    category: "Horse Racing",
    description: "Dornoch and Seize the Grey set for Saratoga showdown in the Midsummer Derby",
    relatedNews: ["14"]
  },
  {
    id: "16",
    hashtag: "#IndvsEng",
    tweetCount: "1.8M",
    category: "Cricket",
    description: "India dominates Day 3 at Lord's as England batting collapses in second Test",
    isLive: true,
    relatedNews: ["15"]
  },
  {
    id: "17",
    hashtag: "#MLBAllStar",
    tweetCount: "198K",
    category: "Baseball",
    description: "Final roster spots announced ahead of Midsummer Classic in Atlanta",
    relatedNews: ["3"]
  },
  {
    id: "18",
    hashtag: "#NBASummerLeague",
    tweetCount: "178K",
    category: "Basketball",
    description: "Thunder's young core shines in Las Vegas after first NBA championship",
    isLive: true,
    relatedNews: ["16"]
  },
  {
    id: "19",
    hashtag: "#LA2028",
    tweetCount: "124K",
    category: "Olympic Sports",
    description: "Two years until Los Angeles Olympics as athletes prepare for qualifying cycles"
  },
];
