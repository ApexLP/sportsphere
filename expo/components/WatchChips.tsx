import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from "react-native";
import { Tv } from "lucide-react-native";
import { getWatchProviders } from "@/mocks/watch-providers";
import { useTheme } from "@/hooks/theme-context";

interface WatchChipsProps {
  league: string;
  sport?: string;
}

export default function WatchChips({ league, sport }: WatchChipsProps) {
  const { colors } = useTheme();
  const providers = getWatchProviders(league, sport);

  if (providers.length === 0) {
    return null;
  }

  const openProvider = async (iosScheme: string, webFallback: string) => {
    try {
      const canOpen = await Linking.canOpenURL(iosScheme);
      await Linking.openURL(canOpen ? iosScheme : webFallback);
    } catch {
      Linking.openURL(webFallback).catch(() => {});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Tv size={14} color={colors.textSecondary} />
        <Text style={[styles.title, { color: colors.text }]}>Watch On</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipRow}
      >
        {providers.map(provider => (
          <TouchableOpacity
            key={provider.name}
            style={[styles.chip, { backgroundColor: colors.surface, borderColor: colors.orange }]}
            onPress={() => openProvider(provider.iosScheme, provider.webFallback)}
            activeOpacity={0.7}
          >
            <Text style={[styles.chipText, { color: colors.orange }]}>{provider.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
  chipRow: {
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
  },
});
