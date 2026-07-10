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
    hashtag: "#MLBAllStar",
    tweetCount: "198K",
    category: "Baseball",
    description: "Final roster spots announced ahead of Midsummer Classic in Atlanta",
    relatedNews: ["3"]
  },
  {
    id: "8",
    hashtag: "#RugbyChampionship",
    tweetCount: "156K",
    category: "Rugby",
    description: "Springboks defeat All Blacks in opening round of southern hemisphere championship",
    relatedNews: ["5"]
  },
  {
    id: "9",
    hashtag: "#LA2028",
    tweetCount: "124K",
    category: "Olympic Sports",
    description: "Two years until Los Angeles Olympics as athletes prepare for qualifying cycles"
  },
  {
    id: "10",
    hashtag: "#SummerLeague",
    tweetCount: "178K",
    category: "Basketball",
    description: "NBA Summer League in Las Vegas showcases rookies and prospects"
  }
];
