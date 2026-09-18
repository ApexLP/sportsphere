import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Clock, Heart, Trophy } from "lucide-react-native";
import { LeaderboardEvent } from "@/mocks/live-scores";
import { useFavorites } from "@/hooks/favorites-context";
import { useTheme } from "@/hooks/theme-context";

const MAX_VISIBLE_ENTRIES = 5;

interface LeaderboardCardProps {
  event: LeaderboardEvent;
  onPress: () => void;
}

export default function LeaderboardCard({ event, onPress }: LeaderboardCardProps) {
  const { colors } = useTheme();
  const { toggleFavorite, isFavorite } = useFavorites();

  const hasFavoriteEntrant = event.entries.some(e => isFavorite(e.name));
  const visibleEntries = event.entries.slice(0, MAX_VISIBLE_ENTRIES);
  const remaining = event.entries.length - visibleEntries.length;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: colors.surface },
        hasFavoriteEntrant && styles.favoriteCard,
        hasFavoriteEntrant && { borderColor: colors.darkOrange }
      ]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Text style={[styles.league, { color: colors.textSecondary }]}>{event.league}</Text>
        {event.status === "LIVE" && (
          <View style={[styles.liveIndicator, { backgroundColor: `${colors.orange}33` }]}>
            <View style={[styles.liveDot, { backgroundColor: colors.orange }]} />
            <Text style={[styles.liveText, { color: colors.orange }]}>LIVE</Text>
          </View>
        )}
        {event.status === "UPCOMING" && (
          <View style={styles.upcomingBadge}>
            <Clock size={12} color={colors.textSecondary} />
            <Text style={[styles.upcomingText, { color: colors.textSecondary }]}>{event.time}</Text>
          </View>
        )}
      </View>

      <View style={styles.titleRow}>
        <Trophy size={14} color={colors.orange} />
        <Text style={[styles.title, { color: colors.text }]}>{event.eventName}</Text>
      </View>

      <View style={styles.entries}>
        {visibleEntries.map(entry => {
          const favorite = isFavorite(entry.name);
          return (
            <View key={entry.position} style={styles.entryRow}>
              <View style={[
                styles.positionBadge,
                { backgroundColor: entry.isLeader ? colors.orange : colors.border }
              ]}>
                <Text style={styles.positionText}>{entry.position}</Text>
              </View>
              <Text
                style={[
                  styles.entryName,
                  { color: entry.isLeader ? colors.orange : colors.text },
                  entry.isLeader && styles.entryNameLeader,
                  favorite && { color: colors.orange }
                ]}
                numberOfLines={1}
              >
                {entry.name}
              </Text>
              <Text style={[styles.entryDetail, { color: colors.textSecondary }]}>{entry.detail}</Text>
              <TouchableOpacity
                onPress={() => toggleFavorite(entry.name)}
                style={styles.favoriteIcon}
                hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
              >
                <Heart size={13} color={favorite ? colors.orange : colors.textSecondary} fill={favorite ? colors.orange : "none"} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      {remaining > 0 && (
        <Text style={[styles.moreText, { color: colors.textSecondary }]}>+{remaining} more · Tap for full standings</Text>
      )}

      {event.status === "FINISHED" && (
        <View style={[styles.finishedInfo, { borderTopColor: colors.border }]}>
          <Text style={[styles.finishedText, { color: colors.textSecondary }]}>FINAL</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 16,
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
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
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#F8FAFC",
    flexShrink: 1,
  },
  entries: {
    gap: 2,
  },
  entryRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    gap: 8,
  },
  positionBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
  },
  positionText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },
  entryName: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  entryNameLeader: {
    fontWeight: "700",
  },
  entryDetail: {
    fontSize: 12,
  },
  favoriteIcon: {
    padding: 2,
  },
  moreText: {
    fontSize: 11,
    marginTop: 6,
    fontStyle: "italic",
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
});
