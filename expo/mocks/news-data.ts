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
  }
];
