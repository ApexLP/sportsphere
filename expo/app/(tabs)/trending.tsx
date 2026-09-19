import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { TrendingUp, Hash, MessageCircle } from 'lucide-react-native';
import { useTheme } from '@/hooks/theme-context';
import { trendingTopics } from '@/mocks/trending-topics';
import { useRouter } from 'expo-router';

export default function TrendingScreen() {
  const { colors } = useTheme();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Soccer', 'Tennis', 'Cycling', 'Golf', 'Rugby', 'Motor Racing', 'Combat Sports', 'Boxing', 'NFL', 'NCAA Football', 'NCAA Basketball', 'NCAA Wrestling', 'NCAA Track', 'NHL Hockey', 'Horse Racing', 'Baseball'];

  const filteredTopics = selectedCategory === 'All' 
    ? trendingTopics 
    : trendingTopics.filter(topic => topic.category === selectedCategory);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleTopicPress = (topic: typeof trendingTopics[0]) => {
    if (topic.relatedNews && topic.relatedNews.length > 0) {
      router.push(`/article/${topic.relatedNews[0]}`);
    }
  };

  const renderTopic = ({ item }: { item: typeof trendingTopics[0] }) => (
    <TouchableOpacity 
      style={[styles.topicCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
      onPress={() => handleTopicPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.topicHeader}>
        <View style={styles.hashtagContainer}>
          <Hash size={16} color={colors.orange} />
          <Text style={[styles.hashtag, { color: colors.orange }]}>{item.hashtag}</Text>
        </View>
        {item.isLive && (
          <View style={[styles.liveBadge, { backgroundColor: colors.orange }]}>
            <Text style={styles.liveText}>LIVE</Text>
          </View>
        )}
      </View>
      
      <Text style={[styles.description, { color: colors.text }]} numberOfLines={2}>
        {item.description}
      </Text>
      
      <View style={styles.topicFooter}>
        <View style={[styles.categoryBadge, { backgroundColor: colors.background }]}>
          <Text style={[styles.categoryText, { color: colors.textSecondary }]}>{item.category}</Text>
        </View>
        <View style={styles.tweetCount}>
          <MessageCircle size={14} color={colors.textSecondary} />
          <Text style={[styles.tweetCountText, { color: colors.textSecondary }]}>
            {item.tweetCount} posts
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TrendingUp size={24} color={colors.orange} />
          <Text style={[styles.headerTitle, { color: colors.text }]}>
            Trending on Twitter/X
          </Text>
        </View>
        <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
          What sports fans are talking about
        </Text>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              { 
                backgroundColor: selectedCategory === category ? colors.orange : colors.surface,
                borderColor: selectedCategory === category ? colors.orange : colors.border,
              }
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text 
              style={[
                styles.categoryChipText, 
                { color: selectedCategory === category ? colors.background : colors.text }
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredTopics}
        renderItem={renderTopic}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.orange}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              No trending topics in this category
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingBottom: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold' as const,
    marginLeft: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  categoriesContainer: {
    maxHeight: 50,
    marginBottom: 20,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '600' as const,
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
  topicCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  hashtagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hashtag: {
    fontSize: 16,
    fontWeight: 'bold' as const,
    marginLeft: 4,
  },
  liveBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  liveText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'bold' as const,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  topicFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600' as const,
  },
  tweetCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tweetCountText: {
    fontSize: 12,
    marginLeft: 4,
  },
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
  },
});