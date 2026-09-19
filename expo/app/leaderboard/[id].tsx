import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { X, Heart, Trophy } from "lucide-react-native";
import { LeaderboardEvent } from "@/mocks/live-scores";
import { useTheme } from "@/hooks/theme-context";
import { useFavorites } from "@/hooks/favorites-context";
import WatchChips from "@/components/WatchChips";

export default function LeaderboardScreen() {
  const { colors } = useTheme();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { data } = useLocalSearchParams<{ data?: string }>();

  let event: LeaderboardEvent | null = null;
  try {
    event = data ? JSON.parse(Array.isArray(data) ? data[0] : data) : null;
  } catch {
    event = null;
  }

  if (!event) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Standings not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={[styles.closeButton, { backgroundColor: colors.surface }]}
          onPress={() => router.back()}
        >
          <X size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>{event.league}</Text>
        <View style={styles.closeButton} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.statusRow}>
          {event.status === "LIVE" && (
            <View style={[styles.liveIndicator, { backgroundColor: `${colors.orange}33` }]}>
              <View style={[styles.liveDot, { backgroundColor: colors.orange }]} />
              <Text style={[styles.liveText, { color: colors.orange }]}>LIVE</Text>
            </View>
          )}
          {event.status === "FINISHED" && (
            <Text style={[styles.finalText, { color: colors.textSecondary }]}>FINAL</Text>
          )}
          <Text style={[styles.time, { color: colors.orange }]}>{event.time}</Text>
        </View>

        <View style={styles.titleRow}>
          <Trophy size={18} color={colors.orange} />
          <Text style={[styles.title, { color: colors.text }]}>{event.eventName}</Text>
        </View>

        <WatchChips league={event.league} sport={event.sport} />

        <View style={[styles.card, { backgroundColor: colors.surface }]}>
          {event.entries.map((entry, i) => {
            const favorite = isFavorite(entry.name);
            return (
              <View
                key={entry.position}
                style={[
                  styles.entryRow,
                  i > 0 && { borderTopColor: colors.border, borderTopWidth: 1 },
                ]}
              >
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
                  ]}
                  numberOfLines={1}
                >
                  {entry.name}
                </Text>
                <Text style={[styles.entryDetail, { color: colors.textSecondary }]}>{entry.detail}</Text>
                <TouchableOpacity
                  onPress={() => toggleFavorite(entry.name)}
                  style={styles.favoriteIcon}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Heart size={16} color={favorite ? colors.orange : colors.textSecondary} fill={favorite ? colors.orange : "none"} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  content: {
    padding: 16,
    gap: 12,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  liveIndicator: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  liveText: {
    fontSize: 11,
    fontWeight: "700",
  },
  finalText: {
    fontSize: 12,
    fontWeight: "700",
  },
  time: {
    fontSize: 13,
    fontWeight: "600",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  card: {
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  entryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
  },
  positionBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  positionText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  entryName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
  },
  entryNameLeader: {
    fontWeight: "700",
  },
  entryDetail: {
    fontSize: 13,
  },
  favoriteIcon: {
    padding: 2,
  },
});
