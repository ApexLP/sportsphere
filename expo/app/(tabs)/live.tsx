import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Activity, Clock, Users, Heart } from "lucide-react-native";
import { mockLiveScores, LiveScore } from "@/mocks/live-scores";
import { useFavorites } from "@/hooks/favorites-context";
import { useTheme } from "@/hooks/theme-context";

export default function LiveScreen() {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [scores, setScores] = useState(mockLiveScores);
  const [selectedSport, setSelectedSport] = useState("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  const sports = ["all", "nfl", "nba", "soccer", "mlb", "tennis"];

  useEffect(() => {
    const interval = setInterval(() => {
      setScores(prevScores => 
        prevScores.map(score => ({
          ...score,
          homeScore: score.status === "LIVE" ? score.homeScore + Math.floor(Math.random() * 2) : score.homeScore,
          awayScore: score.status === "LIVE" ? score.awayScore + Math.floor(Math.random() * 2) : score.awayScore,
          time: score.status === "LIVE" ? `${Math.floor(Math.random() * 90)}'` : score.time,
        }))
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  let filteredScores = selectedSport === "all"
    ? scores
    : scores.filter(score => score.sport.toLowerCase() === selectedSport);

  if (showFavoritesOnly) {
    filteredScores = filteredScores.filter(score => 
      isFavorite(score.homeTeam) || isFavorite(score.awayTeam)
    );
  }

  // Sort to show favorite games first
  filteredScores = filteredScores.sort((a, b) => {
    const aHasFavorite = isFavorite(a.homeTeam) || isFavorite(a.awayTeam);
    const bHasFavorite = isFavorite(b.homeTeam) || isFavorite(b.awayTeam);
    
    if (aHasFavorite && !bHasFavorite) return -1;
    if (!aHasFavorite && bHasFavorite) return 1;
    return 0;
  });

  const liveGames = filteredScores.filter(s => s.status === "LIVE");
  const upcomingGames = filteredScores.filter(s => s.status === "UPCOMING");
  const finishedGames = filteredScores.filter(s => s.status === "FINISHED");

  const renderScoreCard = (score: LiveScore) => {
    const isHomeTeamFavorite = isFavorite(score.homeTeam);
    const isAwayTeamFavorite = isFavorite(score.awayTeam);
    const hasFavoriteTeam = isHomeTeamFavorite || isAwayTeamFavorite;
    
    return (
    <TouchableOpacity 
      key={score.id} 
      style={[
        styles.scoreCard,
        { backgroundColor: colors.surface },
        hasFavoriteTeam && styles.favoriteCard,
        hasFavoriteTeam && { borderColor: colors.darkOrange }
      ]} 
      activeOpacity={0.9}
    >
      <View style={styles.scoreHeader}>
        <Text style={[styles.league, { color: colors.textSecondary }]}>{score.league}</Text>
        {score.status === "LIVE" && (
          <View style={[styles.liveIndicator, { backgroundColor: `${colors.orange}33` }]}>
            <View style={[styles.liveDot, { backgroundColor: colors.orange }]} />
            <Text style={[styles.liveText, { color: colors.orange }]}>LIVE</Text>
          </View>
        )}
        {score.status === "UPCOMING" && (
          <View style={styles.upcomingBadge}>
            <Clock size={12} color={colors.textSecondary} />
            <Text style={[styles.upcomingText, { color: colors.textSecondary }]}>{score.time}</Text>
          </View>
        )}
      </View>

      <View style={styles.teamsContainer}>
        <View style={styles.teamRow}>
          <View style={styles.teamInfo}>
            <View style={[styles.teamLogo, { backgroundColor: colors.orange }]}>
              <Text style={styles.teamLogoText}>{score.homeTeam.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase()}</Text>
            </View>
            <View style={styles.teamNameContainer}>
              <Text style={[
                styles.teamName,
                { color: colors.text },
                isHomeTeamFavorite && styles.favoriteTeamName,
                isHomeTeamFavorite && { color: colors.orange }
              ]}>{score.homeTeam}</Text>
              {isHomeTeamFavorite && (
                <TouchableOpacity 
                  onPress={() => toggleFavorite(score.homeTeam)}
                  style={styles.favoriteIcon}
                >
                  <Heart size={14} color={colors.orange} fill={colors.orange} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.scoreContainer}>
            {!isHomeTeamFavorite && (
              <TouchableOpacity 
                onPress={() => toggleFavorite(score.homeTeam)}
                style={styles.addFavoriteIcon}
              >
                <Heart size={14} color={colors.textSecondary} />
              </TouchableOpacity>
            )}
            <Text style={[
              styles.score,
              { color: colors.textSecondary },
              score.status === "LIVE" && score.homeScore > score.awayScore && styles.winningScore,
              score.status === "LIVE" && score.homeScore > score.awayScore && { color: colors.text }
            ]}>
              {score.status === "UPCOMING" ? "-" : score.homeScore}
            </Text>
          </View>
        </View>

        <View style={styles.teamRow}>
          <View style={styles.teamInfo}>
            <View style={[styles.teamLogo, { backgroundColor: colors.orange }]}>
              <Text style={styles.teamLogoText}>{score.awayTeam.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase()}</Text>
            </View>
            <View style={styles.teamNameContainer}>
              <Text style={[
                styles.teamName,
                { color: colors.text },
                isAwayTeamFavorite && styles.favoriteTeamName,
                isAwayTeamFavorite && { color: colors.orange }
              ]}>{score.awayTeam}</Text>
              {isAwayTeamFavorite && (
                <TouchableOpacity 
                  onPress={() => toggleFavorite(score.awayTeam)}
                  style={styles.favoriteIcon}
                >
                  <Heart size={14} color={colors.orange} fill={colors.orange} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.scoreContainer}>
            {!isAwayTeamFavorite && (
              <TouchableOpacity 
                onPress={() => toggleFavorite(score.awayTeam)}
                style={styles.addFavoriteIcon}
              >
                <Heart size={14} color={colors.textSecondary} />
              </TouchableOpacity>
            )}
            <Text style={[
              styles.score,
              { color: colors.textSecondary },
              score.status === "LIVE" && score.awayScore > score.homeScore && styles.winningScore,
              score.status === "LIVE" && score.awayScore > score.homeScore && { color: colors.text }
            ]}>
              {score.status === "UPCOMING" ? "-" : score.awayScore}
            </Text>
          </View>
        </View>
      </View>

      {score.status === "LIVE" && (
        <View style={[styles.gameInfo, { borderTopColor: colors.border }]}>
          <Text style={[styles.gameTime, { color: colors.orange }]}>{score.time}</Text>
          <View style={styles.viewerCount}>
            <Users size={12} color={colors.textSecondary} />
            <Text style={[styles.viewerText, { color: colors.textSecondary }]}>{score.viewers}</Text>
          </View>
        </View>
      )}

      {score.status === "FINISHED" && (
        <View style={[styles.finishedInfo, { borderTopColor: colors.border }]}>
          <Text style={[styles.finishedText, { color: colors.textSecondary }]}>FINAL</Text>
        </View>
      )}
    </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      {/* Filters */}
      <View style={[styles.filtersWrapper, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filterContainer}
          contentContainerStyle={styles.filterContent}
        >
          {sports.map((sport) => (
            <TouchableOpacity
              key={sport}
              onPress={() => setSelectedSport(sport)}
              style={[
                styles.filterPill,
                { backgroundColor: selectedSport === sport ? colors.orange : colors.background },
                selectedSport === sport && styles.filterPillActive
              ]}
            >
              <Text style={[
                styles.filterText,
                { color: selectedSport === sport ? colors.background : colors.text },
                selectedSport === sport && styles.filterTextActive
              ]}>
                {sport.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <TouchableOpacity
          onPress={() => setShowFavoritesOnly(!showFavoritesOnly)}
          style={[
            styles.favoritesFilter,
            { borderColor: colors.orange, backgroundColor: showFavoritesOnly ? colors.orange : colors.surface },
            showFavoritesOnly && styles.favoritesFilterActive
          ]}
        >
          <Heart 
            size={16} 
            color={showFavoritesOnly ? colors.background : colors.orange} 
            fill={showFavoritesOnly ? colors.background : "none"}
          />
          <Text style={[
            styles.favoritesFilterText,
            { color: showFavoritesOnly ? colors.background : colors.orange },
            showFavoritesOnly && styles.favoritesFilterTextActive
          ]}>My Teams</Text>
        </TouchableOpacity>
      </View>

      {/* Live Games */}
      {liveGames.length > 0 && (
        <>
          <View style={styles.sectionHeader}>
            <Activity size={20} color={colors.orange} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Live Now</Text>
            <View style={[styles.liveCount, { backgroundColor: `${colors.orange}33` }]}>
              <Text style={[styles.liveCountText, { color: colors.orange }]}>{liveGames.length}</Text>
            </View>
          </View>
          <View style={styles.scoresGrid}>
            {liveGames.map(renderScoreCard)}
          </View>
        </>
      )}

      {/* Upcoming Games */}
      {upcomingGames.length > 0 && (
        <>
          <View style={styles.sectionHeader}>
            <Clock size={20} color={colors.orange} />
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Upcoming</Text>
          </View>
          <View style={styles.scoresGrid}>
            {upcomingGames.map(renderScoreCard)}
          </View>
        </>
      )}

      {/* Finished Games */}
      {finishedGames.length > 0 && (
        <>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Finished</Text>
          </View>
          <View style={styles.scoresGrid}>
            {finishedGames.map(renderScoreCard)}
          </View>
        </>
      )}

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  filtersWrapper: {
    backgroundColor: "#1E293B",
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
    flexDirection: "row",
    alignItems: "center",
  },
  filterContainer: {
    flex: 1,
  },
  filterContent: {
    paddingLeft: 16,
    paddingVertical: 12,
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#334155",
    marginRight: 8,
  },
  filterPillActive: {
    backgroundColor: "#FF6B00",
  },
  filterText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#94A3B8",
  },
  filterTextActive: {
    color: "#FFFFFF",
  },
  favoritesFilter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FF6B00",
    backgroundColor: "#1E293B",
  },
  favoritesFilterActive: {
    backgroundColor: "#FF6B00",
    borderColor: "#FF6B00",
  },
  favoritesFilterText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FF6B00",
  },
  favoritesFilterTextActive: {
    color: "#FFFFFF",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F8FAFC",
  },
  liveCount: {
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  liveCountText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#EF4444",
  },
  scoresGrid: {
    paddingHorizontal: 16,
    gap: 12,
  },
  scoreCard: {
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  favoriteCard: {
    borderWidth: 2,
    borderColor: "#7F1D1D",
    backgroundColor: "#2D1B1B",
  },
  scoreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  league: {
    fontSize: 11,
    fontWeight: "600",
    color: "#94A3B8",
    textTransform: "uppercase",
  },
  liveIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#EF4444",
  },
  liveText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#EF4444",
  },
  upcomingBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  upcomingText: {
    fontSize: 11,
    color: "#94A3B8",
    fontWeight: "500",
  },
  teamsContainer: {
    gap: 8,
  },
  teamRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  teamLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  teamLogoText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  teamNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
    backgroundColor: "#4A4A4A",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 24,
    marginRight: 8,
  },
  teamName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  favoriteTeamName: {
    fontWeight: "600",
    color: "#EF4444",
  },
  favoriteIcon: {
    padding: 2,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  addFavoriteIcon: {
    padding: 2,
    opacity: 0.6,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#94A3B8",
    minWidth: 40,
    textAlign: "right",
  },
  winningScore: {
    color: "#F8FAFC",
  },
  gameInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#334155",
  },
  gameTime: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3B82F6",
  },
  viewerCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  viewerText: {
    fontSize: 11,
    color: "#94A3B8",
  },
  finishedInfo: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#334155",
  },
  finishedText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#94A3B8",
    textAlign: "center",
  },
  bottomPadding: {
    height: 20,
  },
});