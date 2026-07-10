import React, { useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Heart, Plus, Trophy, Calendar, Search } from "lucide-react-native";
import { useFavorites } from "@/hooks/favorites-context";
import { mockTeams } from "@/mocks/teams-data";
import { useTheme } from "@/hooks/theme-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function FavoritesScreen() {
  const { favorites, toggleFavorite } = useFavorites();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSport, setSelectedSport] = useState<string>("All");
  
  const sports = useMemo(() => {
    const allSports = ["All", ...new Set(mockTeams.map(team => team.sport))];
    return allSports;
  }, []);
  
  const filteredTeams = useMemo(() => {
    return mockTeams.filter(team => {
      const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           team.league.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           team.sport.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSport = selectedSport === "All" || team.sport === selectedSport;
      return matchesSearch && matchesSport;
    });
  }, [searchQuery, selectedSport]);
  
  const favoriteTeams = filteredTeams.filter(team => favorites.includes(team.id));
  const suggestedTeams = filteredTeams.filter(team => !favorites.includes(team.id)).slice(0, 6);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color="#94A3B8" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search teams, leagues, sports..."
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      
      {/* Sport Filter */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={styles.filterContent}
      >
        {sports.map((sport) => (
          <TouchableOpacity
            key={sport}
            style={[
              styles.filterChip,
              selectedSport === sport && { backgroundColor: colors.orange }
            ]}
            onPress={() => {
              if (sport && sport.trim() && sport.length <= 50) {
                setSelectedSport(sport.trim());
              }
            }}
          >
            <Text style={[
              styles.filterChipText,
              selectedSport === sport && { color: "#FFFFFF" }
            ]}>
              {sport}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* Favorite Teams */}
      {favoriteTeams.length > 0 ? (
        <>
          <Text style={styles.sectionTitle}>Following</Text>
          <View style={styles.teamsGrid}>
            {favoriteTeams.map((team) => (
              <TouchableOpacity
                key={team.id}
                style={styles.teamCard}
                activeOpacity={0.9}
              >
                <TouchableOpacity
                  style={styles.heartButton}
                  onPress={() => toggleFavorite(team.id)}
                >
                  <Heart size={20} color="#EF4444" fill="#EF4444" />
                </TouchableOpacity>
                
                <View style={[styles.teamLogo, { backgroundColor: colors.orange }]}>
                  <Text style={styles.teamLogoText}>{team.abbreviation}</Text>
                </View>
                
                <View style={styles.teamNameContainer}>
                  <Text style={styles.teamName}>{team.name}</Text>
                </View>
                <Text style={styles.teamLeague}>{team.league}</Text>
                
                <View style={styles.teamStats}>
                  <View style={styles.statItem}>
                    <Trophy size={14} color="#64748B" />
                    <Text style={styles.statText}>{team.record}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Calendar size={14} color="#64748B" />
                    <Text style={styles.statText}>{team.nextGame}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        <View style={styles.emptyState}>
          <Heart size={48} color="#CBD5E1" />
          <Text style={styles.emptyTitle}>No Favorite Teams</Text>
          <Text style={styles.emptyText}>
            Start following teams to see their scores and news here
          </Text>
        </View>
      )}

      {/* Suggested Teams */}
      <View style={styles.suggestedSection}>
        <Text style={styles.sectionTitle}>Suggested Teams</Text>
        <View style={styles.suggestedGrid}>
          {suggestedTeams.map((team) => (
            <TouchableOpacity
              key={team.id}
              style={styles.suggestedCard}
              onPress={() => toggleFavorite(team.id)}
              activeOpacity={0.9}
            >
              <View style={[styles.suggestedLogo, { backgroundColor: colors.orange }]}>
                <Text style={styles.suggestedLogoText}>{team.abbreviation}</Text>
              </View>
              <View style={styles.suggestedInfo}>
                <View style={styles.suggestedNameContainer}>
                  <Text style={styles.suggestedName}>{team.name}</Text>
                </View>
                <Text style={styles.suggestedLeague}>{team.league} • {team.record}</Text>
              </View>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => toggleFavorite(team.id)}
              >
                <Plus size={20} color={colors.orange} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#F8FAFC",
  },
  filterContainer: {
    paddingBottom: 8,
  },
  filterContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterChip: {
    backgroundColor: "#1E293B",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  filterChipText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#94A3B8",
  },
  scrollContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8FAFC",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  teamsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 12,
  },
  teamCard: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 16,
    width: "47%",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  heartButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 1,
  },
  teamLogo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  teamLogoText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  teamNameContainer: {
    backgroundColor: "#3A3A3A",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 4,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
  teamLeague: {
    fontSize: 12,
    color: "#94A3B8",
    marginBottom: 12,
  },
  teamStats: {
    width: "100%",
    gap: 8,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  statText: {
    fontSize: 11,
    color: "#94A3B8",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#F8FAFC",
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    lineHeight: 20,
  },
  suggestedSection: {
    marginTop: 24,
  },
  suggestedGrid: {
    paddingHorizontal: 16,
    gap: 12,
  },
  suggestedCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 12,
    gap: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  suggestedLogo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  suggestedLogoText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  suggestedInfo: {
    flex: 1,
  },
  suggestedNameContainer: {
    backgroundColor: "#3A3A3A",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  suggestedName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  suggestedLeague: {
    fontSize: 12,
    color: "#94A3B8",
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#3A3A3A",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomPadding: {
    height: 100,
  },
});