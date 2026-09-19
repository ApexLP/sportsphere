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
    timeAgo: "2 months ago",
    sport: "Soccer",
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
    timeAgo: "2 months ago",
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
    timeAgo: "2 months ago",
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
    timeAgo: "2 months ago",
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
    title: "Crawford Shocks Canelo, Wins Undisputed Super Middleweight Crown",
    summary: "Unbeaten pound-for-pound star moves up two weight classes and outboxes Canelo in Riyadh megafight.",
    imageUrl: "https://images.unsplash.com/photo-1546519638-29e946c5b7df?w=800",
    author: "David Foster",
    timeAgo: "5 days ago",
    sport: "Boxing",
    fullContent: `Terence Crawford pulled off one of the biggest upsets in recent boxing history, outboxing Canelo Alvarez over twelve rounds to capture the undisputed super middleweight championship in Riyadh, Saudi Arabia. Crawford, moving up two weight classes for the challenge, used his trademark footwork and switch-hitting to keep Canelo off balance all night.

Canelo (62-3-2, 39 KOs) started strong behind the jab but couldn't solve Crawford's timing in the championship rounds. Crawford (42-0, 31 KOs) becomes just the second fighter in the four-belt era to win undisputed titles in three different weight classes.

The fight generated over $100 million in revenue and broke pre-sale pay-per-view records. Promoters are already discussing a rematch clause, with Canelo expected to exercise it in early 2027.`
  },
  {
    id: "8",
    title: "Chiefs Still Unbeaten as Mahomes Rolls Through Early Season",
    summary: "Kansas City sits atop the AFC West three weeks into the season with Mahomes playing at an MVP level.",
    imageUrl: "https://images.unsplash.com/photo-1583237684982-04489d39f5d3?w=800",
    author: "Chris Peterson",
    timeAgo: "6 hours ago",
    sport: "NFL",
    isLive: true,
    fullContent: `The Kansas City Chiefs remain the team to beat through three weeks of the 2026 season, riding a fully healthy Patrick Mahomes and a retooled receiving corps led by rookie Xavier Worthy alongside Travis Kelce and Rashee Rice. Kansas City is in the fourth quarter of a tight divisional matchup with the San Francisco 49ers as of Thursday night.

The Buffalo Bills and Philadelphia Eagles are close behind in the AFC and NFC odds boards, with the San Francisco 49ers and Detroit Lions rounding out the league's top five. The Chiefs are chasing their fourth Super Bowl appearance in five years.

Head coach Andy Reid downplayed the hot start, saying the team is focused on winning the AFC West one week at a time rather than looking ahead to the postseason.`
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
    title: "Panthers Raise Stanley Cup as NHL Free Agency Heats Up",
    summary: "Florida celebrates second straight championship while stars switch teams in busy offseason.",
    imageUrl: "https://images.unsplash.com/photo-1518607692857-409f29b9e36f?w=800",
    author: "Steve Morrison",
    timeAgo: "1 day ago",
    sport: "NHL Hockey",
    fullContent: `The Florida Panthers celebrated their second consecutive Stanley Cup with a parade down Las Olas Boulevard, but the party is already giving way to a frantic free agency period. Several big-name players have changed teams as the NHL's salary cap saw its largest increase in years.

The Edmonton Oilers, who fell to the Panthers in a six-game Final, have retooled their defense and added a veteran goaltender. The Dallas Stars made the biggest splash, signing a former 50-goal scorer to a long-term deal.

The 2026-27 NHL regular season begins in October, with the Panthers raising their championship banner on opening night.`
  },
  {
    id: "14",
    title: "Dornoch Completes Belmont-Travers Double at Saratoga",
    summary: "Belmont winner holds off Seize the Grey in a Triple-Crown-winners showdown at the Midsummer Derby.",
    imageUrl: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800",
    author: "Patricia Greene",
    timeAgo: "3 weeks ago",
    sport: "Horse Racing",
    fullContent: `Dornoch added the Travers Stakes to his Belmont Stakes title with a determined stretch run at Saratoga Race Course, holding off Preakness winner Seize the Grey by three-quarters of a length in the "Midsummer Derby." Trainer Danny Gargan's decision to bypass the Haskell Stakes to freshen the colt for Saratoga paid off.

The victory set up a rare showdown between two Triple Crown race winners and cements Dornoch as the horse to beat heading into the Breeders' Cup Classic. Mystik Dan, the Kentucky Derby winner, was scratched the morning of the race after a minor training setback.

Saratoga's summer meet closed out with record handle figures, capping a historic 150th anniversary season at the upstate New York track.`
  },
];
