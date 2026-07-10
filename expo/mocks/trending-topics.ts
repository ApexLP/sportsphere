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
    hashtag: "#LakersWin",
    tweetCount: "125K",
    category: "NBA",
    description: "Lakers overtime victory against Celtics has fans celebrating LeBron's vintage performance",
    isLive: true,
    relatedNews: ["1"]
  },
  {
    id: "2",
    hashtag: "#ChiefsKingdom",
    tweetCount: "89.2K",
    category: "NFL",
    description: "Chiefs clinch 8th straight AFC West title, Mahomes throws 4 TDs",
    relatedNews: ["2"]
  },
  {
    id: "3",
    hashtag: "#MUFC",
    tweetCount: "234K",
    category: "Soccer",
    description: "Bruno Fernandes' stoppage time winner sends Old Trafford into frenzy",
    isLive: true,
    relatedNews: ["3"]
  },
  {
    id: "4",
    hashtag: "#AusOpen",
    tweetCount: "156K",
    category: "Tennis",
    description: "Djokovic defeats Alcaraz in epic quarterfinal battle",
    relatedNews: ["4"]
  },
  {
    id: "5",
    hashtag: "#TransferNews",
    tweetCount: "445K",
    category: "Soccer",
    description: "Breaking: Real Madrid reportedly close to signing Mbappé",
    isLive: true
  },
  {
    id: "6",
    hashtag: "#SuperBowlLVIII",
    tweetCount: "312K",
    category: "NFL",
    description: "Early predictions and matchup analysis trending ahead of playoffs"
  },
  {
    id: "7",
    hashtag: "#Curry500",
    tweetCount: "67.8K",
    category: "NBA",
    description: "Steph Curry hits 500th three-pointer of the season, historic achievement",
    relatedNews: ["6"]
  },
  {
    id: "8",
    hashtag: "#F1Testing",
    tweetCount: "198K",
    category: "F1",
    description: "Pre-season testing reveals surprising pace from Mercedes"
  },
  {
    id: "9",
    hashtag: "#MarchMadness",
    tweetCount: "523K",
    category: "NCAA",
    description: "Bracket predictions and Cinderella teams dominating discussions"
  },
  {
    id: "10",
    hashtag: "#UFCFightNight",
    tweetCount: "276K",
    category: "MMA",
    description: "Main event knockout has fight fans debating pound-for-pound rankings",
    isLive: true
  }
];