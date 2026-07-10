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
    title: "USA Crashes Out of World Cup in Stunning Quarterfinal Loss",
    summary: "Host nation eliminated by Germany in front of record crowd at MetLife Stadium.",
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
    author: "Michael Johnson",
    timeAgo: "1 hour ago",
    sport: "Soccer",
    isLive: true,
    fullContent: `The United States men's national team has been eliminated from the 2026 FIFA World Cup in a heartbreaking 2-1 quarterfinal defeat to Germany at MetLife Stadium. The host nation, which had captivated the country with its run to the final eight, saw its tournament end before a record crowd of 82,345.

Germany took the lead in the 34th minute through Jamal Musiala, but the Americans equalized just after halftime when Christian Pulisic finished a swift counterattack. The match looked destined for extra time until Thomas Müller scored the winner in the 83rd minute, silencing the home crowd.

For the U.S., the loss marks another painful World Cup exit but also signals genuine progress for a young squad that will co-host again in 2031. Coach Gregg Berhalter praised his team's resilience and pointed to the experience gained as invaluable for the next cycle. Germany advances to face Argentina in the semifinals.`
  },
  {
    id: "2",
    title: "Wimbledon Semifinal Set: Alcaraz to Face Sinner on Centre Court",
    summary: "Carlos Alcaraz and Jannik Sinner renew their rivalry in the men's semifinal at the All England Club.",
    imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800",
    author: "Emma Davis",
    timeAgo: "3 hours ago",
    sport: "Tennis",
    fullContent: `Carlos Alcaraz and Jannik Sinner will meet in what is being billed as the most anticipated Wimbledon men's semifinal in years. Alcaraz, the 2023 champion, needed four sets to defeat a resurgent Novak Djokovic in the quarterfinals, while Sinner overcame Taylor Fritz in a five-set thriller.

Their rivalry has quickly become the defining matchup in men's tennis. Alcaraz holds a slight edge in their head-to-head, but Sinner has won three of their last five meetings, including a dramatic five-setter at the Australian Open earlier this year.

The winner will face either Daniil Medvedev or Alex de Minaur in Sunday's final. Both players have avoided major injuries this grass season and appear to be peaking at the right moment.`
  },
  {
    id: "3",
    title: "Judge Homerun Spree Powers Yankees Past Red Sox in Summer Showdown",
    summary: "Aaron Judge hits two home runs as Yankees extend AL East lead at Fenway Park.",
    imageUrl: "https://images.unsplash.com/photo-1566479179817-0ddb5fa87cd9?w=800",
    author: "Robert Martinez",
    timeAgo: "5 hours ago",
    sport: "Baseball",
    fullContent: `Aaron Judge continued his torrid July with two home runs and five RBIs, leading the New York Yankees to a 9-5 victory over the Boston Red Sox at Fenway Park. The win extended the Yankees' lead in the AL East to four games and marked their seventh straight series victory.

Judge's first home run, a 453-foot blast over the Green Monster, gave the Yankees an early 3-0 lead. He added a second shot in the seventh inning, becoming the first player to reach 35 home runs this season.

The All-Star Game is just days away, and Judge is widely expected to start in the Midsummer Classic. With the trade deadline approaching, the Yankees are also exploring pitching upgrades to bolster their postseason rotation.`
  },
  {
    id: "4",
    title: "Pogacar Takes Yellow Jersey After Dominant Tour de France Mountain Stage",
    summary: "Slovenian rider seizes overall lead on Stage 8 with brutal attack in the Pyrenees.",
    imageUrl: "https://images.unsplash.com/photo-1534150174843-8b52f91f9627?w=800",
    author: "James Thompson",
    timeAgo: "7 hours ago",
    sport: "Cycling",
    fullContent: `Tadej Pogacar claimed the yellow jersey at the Tour de France with a devastating attack on the final climb of Stage 8 in the Pyrenees. The UAE Team Emirates rider dropped defending champion Jonas Vingegaard with five kilometers to go and soloed to the stage win by nearly a minute.

Pogacar now leads Vingegaard by 48 seconds in the general classification, with Remco Evenepel sitting third at 1:22. The stage win was Pogacar's third of this year's Tour and a clear statement of intent as the race heads toward the Alps next week.

Vingegaard, who survived a serious crash earlier this season, fought hard to limit his losses but admitted afterward that Pogacar was simply stronger on the day. The rivalry is shaping up to be the most compelling in recent Tour history.`
  },
  {
    id: "5",
    title: "Verstappen on Pole for British Grand Prix at Silverstone",
    summary: "Red Bull driver edges Hamilton and Leclerc in qualifying thriller at home race.",
    imageUrl: "https://images.unsplash.com/photo-1504280506541-aca063246d74?w=800",
    author: "Sarah Williams",
    timeAgo: "9 hours ago",
    sport: "Motor Racing",
    fullContent: `Max Verstappen secured pole position for the British Grand Prix at Silverstone, narrowly beating Lewis Hamilton and Charles Leclerc in a rain-affected qualifying session. The Dutchman set his fastest lap on the final run just as the track began to dry.

Hamilton, racing at his home circuit, will start second, giving the British crowd hope of a first home winner since 2021. Ferrari's Leclerc qualified third, while McLaren's Lando Norris and Oscar Piastri locked out the second row.

The race is expected to feature mixed weather conditions, with teams uncertain whether to gamble on slick or intermediate tires. Verstappen enters the weekend with a 42-point championship lead over Norris.`
  },
  {
    id: "6",
    title: "UFC 316: Makhachev vs Tsarukyan Lightweight Title Rematch Set",
    summary: "Champion and challenger face off again in highly anticipated five-round main event.",
    imageUrl: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=800",
    author: "Lisa Anderson",
    timeAgo: "12 hours ago",
    sport: "Combat Sports",
    fullContent: `Islam Makhachev will defend his UFC lightweight title against Arman Tsarukyan in the main event of UFC 316, a rematch of their razor-close 2019 bout. The fight headlines a stacked card in Las Vegas that also features a women's bantamweight title fight and several top-ten matchups.

Makhachev has been nearly unstoppable since capturing the title, with dominant wins over Alexander Volkanovski, Dustin Poirier, and Justin Gaethje. Tsarukyan, meanwhile, has emerged as the division's most dangerous challenger, blending explosive wrestling with improving striking.

Analysts are divided on whether Tsarukyan's youth and athleticism can overcome Makhachev's experience and suffocating grappling. The winner is likely to face the rising Charles Oliveira next.`
  },
  {
    id: "7",
    title: "Canelo vs Crawford: Boxing's Biggest Fight Set for September",
    summary: "Undisputed super middleweight king faces unbeaten pound-for-pound star in Saudi megafight.",
    imageUrl: "https://images.unsplash.com/photo-1546519638-29e946c5b7df?w=800",
    author: "David Foster",
    timeAgo: "16 hours ago",
    sport: "Boxing",
    fullContent: `Canelo Alvarez and Terence Crawford have officially signed for a September 13 megafight in Riyadh, Saudi Arabia. The bout pits the undisputed super middleweight champion against the undefeated pound-for-pound king, who moves up two weight classes for the challenge.

Canelo (62-2-2, 39 KOs) is coming off a dominant unanimous decision over Jaime Munguia in May and has held multiple world titles across four weight divisions. Crawford (41-0, 31 KOs) last fought in August, stopping Errol Spence Jr. in nine rounds to become undisputed at welterweight.

The fight is expected to generate over $100 million in revenue and has already broken pre-sale pay-per-view records. Promoters are calling it the biggest boxing match since Mayweather vs Pacquiao.`
  },
  {
    id: "8",
    title: "Chiefs Open as Super Bowl Favorites as NFL Training Camps Begin",
    summary: "Kansas City leads the odds board with Mahomes fully healthy entering 2026 season.",
    imageUrl: "https://images.unsplash.com/photo-1583237684982-04489d39f5d3?w=800",
    author: "Chris Peterson",
    timeAgo: "18 hours ago",
    sport: "NFL",
    fullContent: `The Kansas City Chiefs have opened as the betting favorites to win Super Bowl LXI as all 32 NFL teams report to training camp this week. Patrick Mahomes is fully healthy after offseason ankle surgery, and the team added wide receiver Xavier Worthy in the first round of the draft to complement Travis Kelce and Rashee Rice.

The Buffalo Bills and Philadelphia Eagles are close behind in the odds, with the San Francisco 49ers and Detroit Lions rounding out the top five. The Chiefs are seeking their fourth Super Bowl appearance in five years.

Head coach Andy Reid dismissed the expectations, saying the team is focused on winning the AFC West first. The preseason kicks off August 7 with the Hall of Fame Game.`
  },
  {
    id: "9",
    title: "Georgia Tops Preseason College Football Rankings for 2026 Season",
    summary: "Bulldogs lead the way with Carson Beck returning at quarterback for title run.",
    imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800",
    author: "Mark Sullivan",
    timeAgo: "20 hours ago",
    sport: "NCAA Football",
    fullContent: `The Georgia Bulldogs sit atop the preseason AP Top 25 poll for the 2026 college football season, with quarterback Carson Beck returning for his senior year after throwing for over 4,000 yards last season. Head coach Kirby Smart has reloaded on defense with the nation's top recruiting class.

Ohio State, Michigan, Texas, and Oregon round out the top five. The expanded 12-team playoff format returns for its second year, giving more programs a path to the national championship game.

The season opens September 5 with several marquee non-conference matchups, including Georgia vs Clemson in Atlanta. Ohio State faces a tough early test against Notre Dame in Week 2.`
  },
  {
    id: "10",
    title: "Duke Lands Top Recruit as College Basketball Hot Stove Heats Up",
    summary: "Blue Devils secure the nation's #1 prospect, instantly becoming 2027 title favorites.",
    imageUrl: "https://images.unsplash.com/photo-1546519638-29e946c035d8?w=800",
    author: "Tom Bradley",
    timeAgo: "22 hours ago",
    sport: "NCAA Basketball",
    fullContent: `Duke has landed the top-ranked recruit in the class of 2026, a 6'8" forward from Montverde Academy, giving head coach Jon Scheyer his third consecutive number-one recruiting class. The commitment immediately makes the Blue Devils the early favorite to cut down the nets in San Antonio next April.

Kansas, UConn, and Kentucky also bolstered their rosters in the offseason, with Kentucky hiring a new assistant coach from the NBA ranks to lead recruiting. The transfer portal remains active, with several key players still deciding on their destinations.

The 2026-27 season tips off in mid-November, with Duke scheduled to open against Kentucky in the Champions Classic.`
  },
  {
    id: "11",
    title: "Penn State Wrestling Adds Another Top Recruit to Dynasty Roster",
    summary: "Cael Sanderson's program continues to dominate recruiting ahead of 2027 season.",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
    author: "Randy Phillips",
    timeAgo: "1 day ago",
    sport: "NCAA Wrestling",
    fullContent: `Penn State wrestling continues to build an unstoppable dynasty under head coach Cael Sanderson, adding the nation's top 165-pound recruit to an already loaded roster. The Nittany Lions have won 12 of the last 14 NCAA team championships and show no signs of slowing down.

The 2027 squad will feature returning national champions at four weight classes, and the new recruit is expected to compete for a starting spot immediately. Iowa, Michigan, and Cornell are expected to be the top challengers.

The NCAA Wrestling season begins in November, with Penn State's schedule featuring early showdowns against Iowa and Ohio State.`
  },
  {
    id: "12",
    title: "USC Track Shatters 4x400 Relay Record at NCAA Outdoor Championships",
    summary: "Trojans claim national title with fastest collegiate relay time in history.",
    imageUrl: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800",
    author: "Jennifer Walsh",
    timeAgo: "1 day ago",
    sport: "NCAA Track",
    fullContent: `USC Track & Field won the NCAA men's outdoor championship in record fashion, shattering the collegiate 4x400 relay record with a time of 2:58.41 at Hayward Field in Eugene, Oregon. The Trojans' anchor leg ran a 43.8-second split, the fastest in collegiate history.

The victory gave USC its first outdoor team title since 2021, edging out LSU by 56 points to 48. The Trojans also won the 100m, 200m, and long jump events, making it one of the most dominant team performances in recent memory.

LSU's women's team claimed their national title earlier in the week, led by a record-breaking performance in the 100m hurdles. The NCAA outdoor championships cap the collegiate track season, with athletes now turning their attention to the US Olympic trials.`
  },
  {
    id: "13",
    title: "OKC Thunder Win First NBA Title, Dominate Pacers in Summer League Tune-Up",
    summary: "Fresh off their championship run, the Thunder's young core shines in Las Vegas Summer League.",
    imageUrl: "https://images.unsplash.com/photo-1546519638-29e946c5b7df?w=800",
    author: "Anthony Reyes",
    timeAgo: "2 days ago",
    sport: "Basketball",
    fullContent: `Fresh off winning their first NBA championship, the Oklahoma City Thunder are already back on the court at the NBA Summer League in Las Vegas. Their young roster, led by newly crowned Finals MVP Shai Gilgeous-Alexander, is showing no championship hangover.

The Thunder defeated the Indiana Pacers — the team they beat in the Finals — 78-74 in a Summer League matchup that featured several second-round picks and two-way contract players. The energy in the arena was electric, with Thunder fans traveling from Oklahoma to fill the stands.

Head coach Mark Daigneault said the Summer League is critical for developing the team's depth, which was a key factor in their title run. The Thunder's regular season opener is set for late October.`
  },
];
