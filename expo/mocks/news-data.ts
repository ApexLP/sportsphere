export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  author: string;
  timeAgo: string;
  sport: string;
  isLive?: boolean;
  fullContent: string;
}

export const mockNews: NewsArticle[] = [
  {
    id: "1",
    title: "Lakers Secure Dramatic Overtime Victory Against Celtics",
    summary: "LeBron James scores 41 points in a thrilling overtime win at TD Garden.",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    author: "Michael Johnson",
    timeAgo: "2 hours ago",
    sport: "NBA",
    isLive: true,
    fullContent: "In a game that will be remembered as one of the season's best, the Los Angeles Lakers defeated the Boston Celtics 122-118 in overtime at TD Garden. LeBron James turned back the clock with a vintage performance, scoring 41 points, grabbing 9 rebounds, and dishing out 8 assists.\n\nThe game was a back-and-forth affair from the opening tip, with neither team able to build a significant lead. The Celtics, led by Jayson Tatum's 38 points, seemed to have the game in hand with a 7-point lead with just two minutes remaining in regulation.\n\nHowever, the Lakers mounted a furious comeback, with James hitting a contested three-pointer with 8 seconds left to tie the game at 110-110. In overtime, the Lakers' experience showed as they outscored the Celtics 12-8.\n\nAnthony Davis added 28 points and 12 rebounds for the Lakers, while Jaylen Brown contributed 29 points for Boston. The win improves the Lakers' record to 28-13, keeping them in third place in the Western Conference."
  },
  {
    id: "2",
    title: "Chiefs Clinch AFC West Title with Win Over Broncos",
    summary: "Patrick Mahomes throws 4 TDs as Kansas City dominates division rival.",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
    author: "Sarah Williams",
    timeAgo: "4 hours ago",
    sport: "NFL",
    fullContent: "The Kansas City Chiefs secured their eighth consecutive AFC West division title with a commanding 34-17 victory over the Denver Broncos at Arrowhead Stadium. Patrick Mahomes was in peak form, throwing for 352 yards and four touchdowns.\n\nThe Chiefs' offense was firing on all cylinders, with Travis Kelce catching two touchdown passes and finishing with 122 receiving yards. The defense also stepped up, forcing three turnovers and sacking Broncos quarterback Russell Wilson four times.\n\nThis division title continues the Chiefs' dominance in the AFC West and sets them up nicely for another playoff run. Head coach Andy Reid praised his team's consistency and focus throughout the season."
  },
  {
    id: "3",
    title: "Manchester United Stuns Liverpool with Late Winner",
    summary: "Bruno Fernandes scores in stoppage time to secure crucial three points.",
    imageUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800",
    author: "James Thompson",
    timeAgo: "6 hours ago",
    sport: "Soccer",
    fullContent: "Manchester United pulled off a stunning 2-1 victory over Liverpool at Old Trafford, with Bruno Fernandes scoring a dramatic winner in the 94th minute. The Portuguese midfielder's strike sent the home crowd into raptures and dealt a blow to Liverpool's title hopes.\n\nThe match was evenly contested throughout, with Liverpool taking the lead through Mohamed Salah in the 23rd minute. United equalized just before halftime when Marcus Rashford converted from the penalty spot.\n\nThe second half saw both teams create numerous chances, but it looked like the match was heading for a draw until Fernandes' late heroics. The win moves United up to fifth place in the Premier League table."
  },
  {
    id: "4",
    title: "Djokovic Advances to Australian Open Semifinals",
    summary: "World No. 1 defeats Alcaraz in four-set thriller at Melbourne Park.",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800",
    author: "Emma Davis",
    timeAgo: "8 hours ago",
    sport: "Tennis",
    fullContent: "Novak Djokovic continued his quest for a record-extending 11th Australian Open title with a hard-fought 6-4, 4-6, 6-3, 7-5 victory over Carlos Alcaraz in the quarterfinals. The match, lasting over three and a half hours, showcased tennis at its finest.\n\nDjokovic's experience proved crucial in the key moments, particularly in the fourth set where he broke Alcaraz's serve at 5-5 before serving out the match. The Serbian hit 52 winners and saved 8 of 11 break points.\n\nAlcaraz, despite the loss, showed why he's considered the future of tennis with his aggressive baseline play and incredible court coverage. Djokovic will face Daniil Medvedev in the semifinals."
  },
  {
    id: "5",
    title: "Yankees Sign Star Pitcher to Record-Breaking Deal",
    summary: "Ace pitcher agrees to 10-year, $360 million contract with New York.",
    imageUrl: "https://images.unsplash.com/photo-1566479179817-0ddb5fa87cd9?w=800",
    author: "Robert Martinez",
    timeAgo: "10 hours ago",
    sport: "MLB",
    fullContent: "The New York Yankees have made a massive statement of intent by signing star pitcher to a 10-year, $360 million contract, the largest deal ever given to a pitcher in MLB history. The 28-year-old ace had been the most coveted free agent on the market.\n\nLast season, he posted a 2.43 ERA with 243 strikeouts over 198 innings, finishing second in Cy Young Award voting. His addition to the Yankees rotation alongside Gerrit Cole creates one of the most formidable one-two punches in baseball.\n\nYankees General Manager Brian Cashman called it 'a franchise-defining moment' and expressed confidence that this signing puts the team in position to compete for multiple championships over the next decade."
  },
  {
    id: "6",
    title: "Warriors' Curry Hits 500th Career Three-Pointer This Season",
    summary: "Stephen Curry reaches milestone in win over Sacramento Kings.",
    imageUrl: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=800",
    author: "Lisa Anderson",
    timeAgo: "12 hours ago",
    sport: "NBA",
    isLive: false,
    fullContent: "Stephen Curry added another milestone to his legendary career, hitting his 500th three-pointer of the season in the Golden State Warriors' 126-114 victory over the Sacramento Kings. Curry finished with 33 points, including 7 three-pointers.\n\nThis marks the third time in his career that Curry has reached 500 threes in a season, a feat no other player has accomplished even once. The two-time MVP continues to redefine what's possible from beyond the arc.\n\nWarriors head coach Steve Kerr praised Curry's consistency and work ethic, noting that even at 35 years old, Curry continues to elevate his game. The win keeps the Warriors in the playoff hunt in the competitive Western Conference."
  }
];