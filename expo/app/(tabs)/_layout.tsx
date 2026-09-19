import { Tabs } from "expo-router";
import { Newspaper, Activity, Heart, User, TrendingUp } from "lucide-react-native";
import React from "react";
import { useTheme } from "@/hooks/theme-context";
import { View, Image, StyleSheet } from "react-native";

export default function TabLayout() {
  const { colors } = useTheme();
  
  const HeaderLogo = () => (
    <View style={styles.logoContainer}>
      <Image
        source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/tal5ztou6hyaor27f1fsq" }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 1,
        },
        headerStyle: {
          backgroundColor: colors.background,
          borderBottomWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: "bold" as const,
          fontSize: 20,
        },
        headerLeft: () => <HeaderLogo />,
      }}
    >
      <Tabs.Screen
        name="live"
        options={{
          title: "Live Scores",
          tabBarLabel: "Scores",
          tabBarIcon: ({ color }) => <Activity size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Sports News",
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => <Newspaper size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="trending"
        options={{
          title: "Trending",
          tabBarIcon: ({ color }) => <TrendingUp size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "My Teams",
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => <Heart size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginLeft: 16,
    marginRight: 8,
  },
  logo: {
    width: 120,
    height: 60,
  },
});