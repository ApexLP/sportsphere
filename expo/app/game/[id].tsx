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
import { X, Clock, Users, MapPin, Tv, ClipboardList } from "lucide-react-native";
import { LiveScore } from "@/mocks/live-scores";
import { useTheme } from "@/hooks/theme-context";

export default function GameScreen() {
  const { colors } = useTheme();
  const { data } = useLocalSearchParams<{ data?: string }>();

  let score: LiveScore | null = null;
  try {
    score = data ? JSON.parse(Array.isArray(data) ? data[0] : data) : null;
  } catch {
    score = null;
  }

  if (!score) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Game not found</Text>
      </SafeAreaView>
    );
  }

  const periods = Math.max(score.homeLinescores?.length ?? 0, score.awayLinescores?.length ?? 0);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={[styles.closeButton, { backgroundColor: colors.surface }]}
          onPress={() => router.back()}
        >
          <X size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>{score.league}</Text>
        <View style={styles.closeButton} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.statusRow}>
          {score.status === "LIVE" && (
            <View style={[styles.liveIndicator, { backgroundColor: `${colors.orange}33` }]}>
              <View style={[styles.liveDot, { backgroundColor: colors.orange }]} />
              <Text style={[styles.liveText, { color: colors.orange }]}>LIVE</Text>
            </View>
          )}
          {score.status === "FINISHED" && (
            <Text style={[styles.finalText, { color: colors.textSecondary }]}>FINAL</Text>
          )}
          <Text style={[styles.time, { color: colors.orange }]}>{score.time}</Text>
        </View>

        <View style={styles.teamsBlock}>
          <TeamRow
            name={score.awayTeam}
            score={score.awayScore}
            color={score.awayColor}
            record={score.awayRecord}
            showScore={score.status !== "UPCOMING"}
            textColor={colors.text}
            secondaryColor={colors.textSecondary}
          />
          <TeamRow
            name={score.homeTeam}
            score={score.homeScore}
            color={score.homeColor}
            record={score.homeRecord}
            showScore={score.status !== "UPCOMING"}
            textColor={colors.text}
            secondaryColor={colors.textSecondary}
          />
        </View>

        {periods > 1 && (
          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>Score by Period</Text>
            <View style={styles.lineHeaderRow}>
              <Text style={[styles.lineTeamLabel, { color: colors.textSecondary }]} />
              {Array.from({ length: periods }).map((_, i) => (
                <Text key={i} style={[styles.lineCell, { color: colors.textSecondary }]}>{i + 1}</Text>
              ))}
            </View>
            <View style={styles.lineRow}>
              <Text style={[styles.lineTeamLabel, { color: colors.text }]} numberOfLines={1}>{score.awayTeam}</Text>
              {Array.from({ length: periods }).map((_, i) => (
                <Text key={i} style={[styles.lineCell, { color: colors.text }]}>{score.awayLinescores?.[i] ?? "-"}</Text>
              ))}
            </View>
            <View style={styles.lineRow}>
              <Text style={[styles.lineTeamLabel, { color: colors.text }]} numberOfLines={1}>{score.homeTeam}</Text>
              {Array.from({ length: periods }).map((_, i) => (
                <Text key={i} style={[styles.lineCell, { color: colors.text }]}>{score.homeLinescores?.[i] ?? "-"}</Text>
              ))}
            </View>
          </View>
        )}

        {score.leaders && score.leaders.length > 0 && (
          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>Stat Leaders</Text>
            {score.leaders.map((leader, i) => {
              const teamName = leader.teamId === score.homeTeamId ? score.homeTeam : leader.teamId === score.awayTeamId ? score.awayTeam : "";
              return (
                <View key={i} style={[styles.leaderRow, i > 0 && { borderTopColor: colors.border, borderTopWidth: 1 }]}>
                  <Text style={[styles.leaderCategory, { color: colors.textSecondary }]}>{leader.category}</Text>
                  <Text style={[styles.leaderName, { color: colors.text }]}>{leader.playerName}{teamName ? ` · ${teamName}` : ""}</Text>
                  <Text style={[styles.leaderStat, { color: colors.orange }]}>{leader.statLine}</Text>
                </View>
              );
            })}
          </View>
        )}

        {score.lastPlay && (
          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <View style={styles.infoRow}>
              <ClipboardList size={16} color={colors.textSecondary} />
              <Text style={[styles.cardTitle, { color: colors.text }]}>Last Play</Text>
            </View>
            <Text style={[styles.lastPlayText, { color: colors.text }]}>{score.lastPlay}</Text>
          </View>
        )}

        {(score.venue || score.broadcast || score.attendance || score.viewers) && (
          <View style={[styles.card, { backgroundColor: colors.surface }]}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>Game Info</Text>
            {score.venue && (
              <View style={styles.infoRow}>
                <MapPin size={14} color={colors.textSecondary} />
                <Text style={[styles.infoText, { color: colors.text }]}>{score.venue}</Text>
              </View>
            )}
            {score.broadcast && (
              <View style={styles.infoRow}>
                <Tv size={14} color={colors.textSecondary} />
                <Text style={[styles.infoText, { color: colors.text }]}>{score.broadcast}</Text>
              </View>
            )}
            {score.attendance && (
              <View style={styles.infoRow}>
                <Users size={14} color={colors.textSecondary} />
                <Text style={[styles.infoText, { color: colors.text }]}>{score.attendance.toLocaleString()} attendance</Text>
              </View>
            )}
            {score.viewers && (
              <View style={styles.infoRow}>
                <Clock size={14} color={colors.textSecondary} />
                <Text style={[styles.infoText, { color: colors.text }]}>{score.viewers} watching</Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function TeamRow({ name, score, color, record, showScore, textColor, secondaryColor }: {
  name: string;
  score: number;
  color: string;
  record?: string;
  showScore: boolean;
  textColor: string;
  secondaryColor: string;
}) {
  return (
    <View style={styles.teamRow}>
      <View style={styles.teamInfo}>
        <View style={[styles.teamLogo, { backgroundColor: color }]}>
          <Text style={styles.teamLogoText}>{name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase()}</Text>
        </View>
        <View>
          <Text style={[styles.teamName, { color: textColor }]}>{name}</Text>
          {record && <Text style={[styles.teamRecord, { color: secondaryColor }]}>{record}</Text>}
        </View>
      </View>
      {showScore && <Text style={[styles.teamScore, { color: textColor }]}>{score}</Text>}
    </View>
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
  teamsBlock: {
    gap: 16,
    paddingVertical: 8,
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
  },
  teamLogo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  teamLogoText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "600",
  },
  teamRecord: {
    fontSize: 12,
    marginTop: 2,
  },
  teamScore: {
    fontSize: 32,
    fontWeight: "bold",
  },
  card: {
    borderRadius: 12,
    padding: 16,
    gap: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  lineHeaderRow: {
    flexDirection: "row",
  },
  lineRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  lineTeamLabel: {
    flex: 1,
    fontSize: 13,
    fontWeight: "500",
  },
  lineCell: {
    width: 32,
    textAlign: "center",
    fontSize: 13,
  },
  leaderRow: {
    paddingVertical: 8,
    gap: 2,
  },
  leaderCategory: {
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  leaderName: {
    fontSize: 15,
    fontWeight: "600",
  },
  leaderStat: {
    fontSize: 13,
  },
  lastPlayText: {
    fontSize: 14,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 14,
  },
});
