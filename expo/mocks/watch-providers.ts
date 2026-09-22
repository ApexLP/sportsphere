export interface WatchProvider {
  name: string;
  webFallback: string;
}

// Opening these https:// URLs relies on each app's own Universal Links
// registration for its domain: iOS opens the app directly if installed,
// or Safari otherwise. No custom URL scheme needed (and no per-app scheme
// to keep correct as apps rebrand/change their scheme, e.g. HBO Max -> Max).
const PROVIDERS: Record<string, WatchProvider> = {
  netflix: { name: "Netflix", webFallback: "https://www.netflix.com" },
  hulu: { name: "Hulu", webFallback: "https://www.hulu.com" },
  youtube: { name: "YouTube TV", webFallback: "https://tv.youtube.com" },
  hbomax: { name: "HBO Max", webFallback: "https://www.max.com" },
  paramount: { name: "Paramount+", webFallback: "https://www.paramountplus.com" },
  peacock: { name: "Peacock", webFallback: "https://www.peacocktv.com" },
  primevideo: { name: "Prime Video", webFallback: "https://www.amazon.com/gp/video" },
  disneyplus: { name: "Disney+", webFallback: "https://www.disneyplus.com" },
  appletv: { name: "Apple TV", webFallback: "https://tv.apple.com" },
  espn: { name: "ESPN", webFallback: "https://www.espn.com/watch" },
};

const LEAGUE_TO_PROVIDERS: Record<string, string[]> = {
  "NFL": ["paramount", "peacock", "primevideo", "netflix", "youtube", "espn"],
  "NCAA Football": ["peacock", "paramount", "espn"],
  "NCAA Basketball": ["peacock", "paramount", "espn"],
  "MLB": ["peacock", "hbomax", "netflix", "espn", "appletv"],
  "NHL": ["hbomax", "espn"],
  "UFC": ["paramount"],
  "Formula 1": ["appletv"],
  "Premier League": ["peacock"],
  "The Open Championship": ["peacock", "paramount", "espn"],
  "Presidents Cup": ["peacock"],
  "Olympics": ["peacock"],
};

export function getWatchProviders(league: string, sport?: string): WatchProvider[] {
  const keys = LEAGUE_TO_PROVIDERS[league] ?? (sport ? LEAGUE_TO_PROVIDERS[sport] : undefined);
  if (!keys) return [];
  return keys.map(key => PROVIDERS[key]).filter(Boolean);
}
