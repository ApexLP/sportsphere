export interface WatchProvider {
  name: string;
  iosScheme: string;
  webFallback: string;
}

const PROVIDERS: Record<string, WatchProvider> = {
  netflix: { name: "Netflix", iosScheme: "nflx://", webFallback: "https://www.netflix.com" },
  hulu: { name: "Hulu", iosScheme: "hulu://", webFallback: "https://www.hulu.com" },
  youtube: { name: "YouTube TV", iosScheme: "youtubetv://", webFallback: "https://tv.youtube.com" },
  hbomax: { name: "HBO Max", iosScheme: "hbomax://", webFallback: "https://www.max.com" },
  paramount: { name: "Paramount+", iosScheme: "paramountplus://", webFallback: "https://www.paramountplus.com" },
  peacock: { name: "Peacock", iosScheme: "peacocktv://", webFallback: "https://www.peacocktv.com" },
  primevideo: { name: "Prime Video", iosScheme: "aiv://", webFallback: "https://www.amazon.com/gp/video" },
  disneyplus: { name: "Disney+", iosScheme: "disneyplus://", webFallback: "https://www.disneyplus.com" },
  appletv: { name: "Apple TV", iosScheme: "videos://", webFallback: "https://tv.apple.com" },
  espn: { name: "ESPN", iosScheme: "sportscenter://", webFallback: "https://www.espn.com/watch" },
};

const LEAGUE_TO_PROVIDERS: Record<string, string[]> = {
  "NFL": ["paramount", "peacock", "primevideo", "netflix", "youtube", "espn"],
  "NCAA Football": ["peacock", "paramount", "espn"],
  "NCAA Basketball": ["peacock", "paramount", "espn"],
  "NBA": ["peacock", "primevideo", "hbomax", "espn"],
  "MLB": ["peacock", "hbomax", "netflix", "espn", "appletv"],
  "NHL": ["hbomax", "espn"],
  "UFC": ["paramount"],
  "Formula 1": ["appletv"],
  "MLS": ["appletv"],
  "Premier League": ["peacock"],
  "Champions League": ["paramount"],
  "The Open Championship": ["peacock", "paramount", "espn"],
  "Olympics": ["peacock"],
};

export function getWatchProviders(league: string, sport?: string): WatchProvider[] {
  const keys = LEAGUE_TO_PROVIDERS[league] ?? (sport ? LEAGUE_TO_PROVIDERS[sport] : undefined);
  if (!keys) return [];
  return keys.map(key => PROVIDERS[key]).filter(Boolean);
}
