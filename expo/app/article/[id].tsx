import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { X, Share2, Bookmark, Clock } from "lucide-react-native";
import { mockNews } from "@/mocks/news-data";
import { useTheme } from "@/hooks/theme-context";

export default function ArticleScreen() {
  const { colors } = useTheme();
  const { id } = useLocalSearchParams();
  const article = mockNews.find(a => a.id === id);

  if (!article) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.text }}>Article not found</Text>
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
        
        <Image
          source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/6dw86hc75i3814yt74mu6" }}
          style={styles.logo}
          resizeMode="contain"
        />
        
        <View style={styles.headerActions}>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.surface }]}>
            <Bookmark size={20} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.surface }]}>
            <Share2 size={20} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: article.imageUrl }} style={styles.heroImage} />
        
        <View style={styles.content}>
          <View style={styles.metaContainer}>
            <Text style={[styles.sport, { color: colors.orange }]}>{article.sport}</Text>
            {article.isLive && (
              <View style={[styles.liveBadge, { backgroundColor: `${colors.orange}33` }]}>
                <View style={[styles.liveDot, { backgroundColor: colors.orange }]} />
                <Text style={[styles.liveText, { color: colors.orange }]}>LIVE</Text>
              </View>
            )}
          </View>

          <Text style={[styles.title, { color: colors.text }]}>{article.title}</Text>
          
          <View style={[styles.authorRow, { borderBottomColor: colors.border }]}>
            <Text style={[styles.author, { color: colors.textSecondary }]}>By {article.author}</Text>
            <View style={styles.timeRow}>
              <Clock size={14} color={colors.textSecondary} />
              <Text style={[styles.time, { color: colors.textSecondary }]}>{article.timeAgo}</Text>
            </View>
          </View>

          <Text style={[styles.body, { color: colors.text }]}>{article.fullContent}</Text>
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
  logo: {
    width: 100,
    height: 35,
    position: "absolute" as const,
    left: "50%" as const,
    marginLeft: -50,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerActions: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heroImage: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 20,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  sport: {
    fontSize: 12,
    fontWeight: "600" as const,
    textTransform: "uppercase" as const,
  },
  liveBadge: {
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
    fontWeight: "700" as const,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold" as const,
    lineHeight: 36,
    marginBottom: 16,
  },
  authorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  author: {
    fontSize: 14,
    fontWeight: "500" as const,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  time: {
    fontSize: 14,
  },
  body: {
    fontSize: 16,
    lineHeight: 26,
  },
});