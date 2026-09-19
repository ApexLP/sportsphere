import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
  Dimensions,
} from "react-native";
import { router } from "expo-router";
import { Clock, TrendingUp, Flame } from "lucide-react-native";
import { mockNews, NewsArticle } from "@/mocks/news-data";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/hooks/theme-context";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const { colors } = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "soccer", "tennis", "cycling", "motor racing", "combat sports", "boxing", "nfl", "ncaa football", "ncaa basketball", "ncaa wrestling", "ncaa track", "nhl hockey", "horse racing", "baseball"];

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const filteredNews = selectedCategory === "all" 
    ? mockNews 
    : mockNews.filter(article => article.sport.toLowerCase() === selectedCategory);

  const featuredArticle = filteredNews[0];
  const regularArticles = filteredNews.slice(1);

  const handleArticlePress = (article: NewsArticle) => {
    router.push(`/article/${article.id}` as any);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    >
      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={[styles.categoriesContainer, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)}
            style={[
              styles.categoryPill,
              { backgroundColor: selectedCategory === category ? colors.orange : colors.background },
              selectedCategory === category && styles.categoryPillActive
            ]}
          >
            <Text style={[
              styles.categoryText,
              { color: selectedCategory === category ? colors.background : colors.text },
              selectedCategory === category && styles.categoryTextActive
            ]}>
              {category.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Article */}
      {featuredArticle && (
        <TouchableOpacity 
          style={styles.featuredCard}
          onPress={() => handleArticlePress(featuredArticle)}
          activeOpacity={0.9}
        >
          <Image 
            source={{ uri: featuredArticle.imageUrl }} 
            style={styles.featuredImage}
          />
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.featuredGradient}
          >
            <View style={styles.featuredContent}>
              <View style={[styles.featuredBadge, { backgroundColor: `${colors.orange}33` }]}>
                <Flame size={12} color={colors.orange} />
                <Text style={[styles.featuredBadgeText, { color: colors.orange }]}>BREAKING</Text>
              </View>
              <Text style={styles.featuredTitle}>{featuredArticle.title}</Text>
              <View style={styles.featuredMeta}>
                <Text style={styles.featuredSport}>{featuredArticle.sport}</Text>
                <View style={styles.featuredTime}>
                  <Clock size={12} color="#FFFFFF" />
                  <Text style={styles.featuredTimeText}>{featuredArticle.timeAgo}</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}

      {/* Trending Section */}
      <View style={styles.sectionHeader}>
        <TrendingUp size={20} color={colors.orange} />
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Trending Now</Text>
      </View>

      {/* Regular Articles */}
      {regularArticles.map((article) => (
        <TouchableOpacity
          key={article.id}
          style={[styles.articleCard, { backgroundColor: colors.surface }]}
          onPress={() => handleArticlePress(article)}
          activeOpacity={0.9}
        >
          <Image 
            source={{ uri: article.imageUrl }} 
            style={styles.articleImage}
          />
          <View style={styles.articleContent}>
            <View style={styles.articleHeader}>
              <Text style={[styles.articleSport, { color: colors.orange }]}>{article.sport}</Text>
              {article.isLive && (
                <View style={[styles.liveBadge, { backgroundColor: `${colors.orange}33` }]}>
                  <View style={[styles.liveDot, { backgroundColor: colors.orange }]} />
                  <Text style={[styles.liveText, { color: colors.orange }]}>LIVE</Text>
                </View>
              )}
            </View>
            <Text style={[styles.articleTitle, { color: colors.text }]} numberOfLines={2}>
              {article.title}
            </Text>
            <Text style={[styles.articleSummary, { color: colors.textSecondary }]} numberOfLines={2}>
              {article.summary}
            </Text>
            <View style={styles.articleMeta}>
              <Text style={[styles.articleAuthor, { color: colors.textSecondary }]}>{article.author}</Text>
              <Text style={[styles.articleTime, { color: colors.textSecondary }]}>{article.timeAgo}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesContainer: {
    borderBottomWidth: 1,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryPillActive: {
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600" as const,
  },
  categoryTextActive: {
  },
  featuredCard: {
    margin: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  featuredImage: {
    width: "100%",
    height: 280,
  },
  featuredGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 180,
    justifyContent: "flex-end",
    padding: 16,
  },
  featuredContent: {
    gap: 8,
  },
  featuredBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  featuredBadgeText: {
    fontSize: 10,
    fontWeight: "700" as const,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: "bold" as const,
    color: "#FFFFFF",
    lineHeight: 30,
  },
  featuredMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  featuredSport: {
    fontSize: 12,
    fontWeight: "600" as const,
    color: "#FFFFFF",
    textTransform: "uppercase" as const,
  },
  featuredTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  featuredTimeText: {
    fontSize: 12,
    color: "#FFFFFF",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold" as const,
  },
  articleCard: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  articleImage: {
    width: 120,
    height: 120,
  },
  articleContent: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  articleHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  articleSport: {
    fontSize: 10,
    fontWeight: "600" as const,
    textTransform: "uppercase" as const,
  },
  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  liveText: {
    fontSize: 10,
    fontWeight: "700" as const,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: "600" as const,
    lineHeight: 18,
    marginBottom: 4,
  },
  articleSummary: {
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 8,
  },
  articleMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  articleAuthor: {
    fontSize: 11,
  },
  articleTime: {
    fontSize: 11,
  },
  bottomPadding: {
    height: 20,
  },
});