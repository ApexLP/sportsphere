import React, { useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  TextInput,
} from "react-native";
import {
  User,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Trophy,
  Heart,
  Plus,
  Calendar,
  Search,
  LucideIcon
} from "lucide-react-native";
import { useTheme } from "@/hooks/theme-context";
import { useFavorites } from "@/hooks/favorites-context";
import { mockTeams } from "@/mocks/teams-data";

type SettingItem = {
  icon: LucideIcon;
  label: string;
} & ({
  toggle: true;
  value: boolean;
  onToggle: (value: boolean) => void;
} | {
  toggle?: false;
  action: () => void;
  danger?: boolean;
});

type SettingsGroup = {
  title: string;
  items: SettingItem[];
};

export default function ProfileScreen() {
  const { colors } = useTheme();
  const { favorites, toggleFavorite } = useFavorites();
  const [notifications, setNotifications] = React.useState(true);
  const [liveAlerts, setLiveAlerts] = React.useState(false);

  // User profile form state
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  // My Teams (favorites) state
  const [teamSearchQuery, setTeamSearchQuery] = React.useState("");
  const [selectedTeamSport, setSelectedTeamSport] = React.useState("All");

  const teamSports = useMemo(() => ["All", ...new Set(mockTeams.map(team => team.sport))], []);

  const filteredTeams = useMemo(() => {
    return mockTeams.filter(team => {
      const matchesSearch = team.name.toLowerCase().includes(teamSearchQuery.toLowerCase()) ||
                           team.league.toLowerCase().includes(teamSearchQuery.toLowerCase()) ||
                           team.sport.toLowerCase().includes(teamSearchQuery.toLowerCase());
      const matchesSport = selectedTeamSport === "All" || team.sport === selectedTeamSport;
      return matchesSearch && matchesSport;
    });
  }, [teamSearchQuery, selectedTeamSport]);

  const favoriteTeams = filteredTeams.filter(team => favorites.includes(team.id));
  const suggestedTeams = filteredTeams.filter(team => !favorites.includes(team.id)).slice(0, 6);

  const settingsGroups: SettingsGroup[] = [
    {
      title: "Account",
      items: [
        { icon: Shield, label: "Privacy Settings", action: () => {} },
      ]
    },
    {
      title: "Preferences",
      items: [
        { 
          icon: Bell, 
          label: "Push Notifications", 
          toggle: true,
          value: notifications,
          onToggle: setNotifications
        },
        { 
          icon: Trophy, 
          label: "Live Score Alerts", 
          toggle: true,
          value: liveAlerts,
          onToggle: setLiveAlerts
        },
      ]
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Help Center", action: () => {} },
        { icon: LogOut, label: "Sign Out", action: () => {}, danger: true },
      ]
    }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
      {/* Profile Header */}
      <View style={[styles.profileHeader, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <View style={[styles.avatar, { backgroundColor: colors.orange }]}>
          <User size={40} color={colors.background} />
        </View>
        <Text style={[styles.userName, { color: colors.text }]}>Sports Fan</Text>
        <Text style={[styles.userEmail, { color: colors.textSecondary }]}>fan@sports.com</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Heart size={20} color={colors.orange} />
            <Text style={[styles.statNumber, { color: colors.text }]}>{favorites.length}</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Following</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
          <View style={styles.statItem}>
            <Trophy size={20} color={colors.orange} />
            <Text style={[styles.statNumber, { color: colors.text }]}>248</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Articles Read</Text>
          </View>
        </View>
      </View>

      {/* Account Information Form */}
      <View style={styles.settingsGroup}>
        <Text style={[styles.groupTitle, { color: colors.textSecondary }]}>Account Information</Text>
        <View style={[styles.settingsCard, { backgroundColor: colors.surface }]}>
          <View style={[styles.inputContainer, { borderBottomColor: colors.border }]}>
            <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>First Name</Text>
            <TextInput
              style={[styles.textInput, { color: colors.text, borderColor: colors.border }]}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Enter your first name"
              placeholderTextColor={colors.textSecondary}
            />
          </View>
          
          <View style={[styles.inputContainer, { borderBottomColor: colors.border }]}>
            <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>Last Name</Text>
            <TextInput
              style={[styles.textInput, { color: colors.text, borderColor: colors.border }]}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Enter your last name"
              placeholderTextColor={colors.textSecondary}
            />
          </View>
          
          <View style={[styles.inputContainer, { borderBottomColor: colors.border }]}>
            <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>Email</Text>
            <TextInput
              style={[styles.textInput, { color: colors.text, borderColor: colors.border }]}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={colors.textSecondary}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, { color: colors.textSecondary }]}>Phone Number (Optional)</Text>
            <TextInput
              style={[styles.textInput, { color: colors.text, borderColor: colors.border }]}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter your phone number"
              placeholderTextColor={colors.textSecondary}
              keyboardType="phone-pad"
            />
          </View>
        </View>
      </View>

      {/* My Teams (Favorites) */}
      <View style={styles.settingsGroup}>
        <Text style={[styles.groupTitle, { color: colors.textSecondary }]}>My Teams</Text>

        <View style={[styles.teamSearchContainer, { backgroundColor: colors.surface }]}>
          <Search size={18} color={colors.textSecondary} />
          <TextInput
            style={[styles.teamSearchInput, { color: colors.text }]}
            placeholder="Search teams, leagues, sports..."
            placeholderTextColor={colors.textSecondary}
            value={teamSearchQuery}
            onChangeText={setTeamSearchQuery}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.teamFilterContent}
        >
          {teamSports.map((sport) => (
            <TouchableOpacity
              key={sport}
              style={[
                styles.teamFilterChip,
                { backgroundColor: selectedTeamSport === sport ? colors.orange : colors.surface }
              ]}
              onPress={() => setSelectedTeamSport(sport)}
            >
              <Text style={[
                styles.teamFilterChipText,
                { color: selectedTeamSport === sport ? colors.background : colors.textSecondary }
              ]}>
                {sport}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {favoriteTeams.length > 0 ? (
          <View style={styles.teamsGrid}>
            {favoriteTeams.map((team) => (
              <View key={team.id} style={[styles.teamCard, { backgroundColor: colors.surface }]}>
                <TouchableOpacity
                  style={styles.heartButton}
                  onPress={() => toggleFavorite(team.id)}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Heart size={18} color={colors.orange} fill={colors.orange} />
                </TouchableOpacity>

                <View style={[styles.teamLogo, { backgroundColor: colors.orange }]}>
                  <Text style={styles.teamLogoText}>{team.abbreviation}</Text>
                </View>

                <Text style={[styles.teamName, { color: colors.text }]} numberOfLines={1}>{team.name}</Text>
                <Text style={[styles.teamLeague, { color: colors.textSecondary }]}>{team.league}</Text>

                <View style={styles.teamStats}>
                  <View style={styles.statItemRow}>
                    <Trophy size={12} color={colors.textSecondary} />
                    <Text style={[styles.teamStatText, { color: colors.textSecondary }]}>{team.record}</Text>
                  </View>
                  <View style={styles.statItemRow}>
                    <Calendar size={12} color={colors.textSecondary} />
                    <Text style={[styles.teamStatText, { color: colors.textSecondary }]}>{team.nextGame}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.teamsEmptyState}>
            <Heart size={40} color={colors.textSecondary} />
            <Text style={[styles.teamsEmptyTitle, { color: colors.text }]}>No Favorite Teams</Text>
            <Text style={[styles.teamsEmptyText, { color: colors.textSecondary }]}>
              Follow teams below to see their scores and news across the app
            </Text>
          </View>
        )}

        {suggestedTeams.length > 0 && (
          <View style={styles.suggestedSection}>
            <Text style={[styles.suggestedSectionTitle, { color: colors.text }]}>Suggested Teams</Text>
            {suggestedTeams.map((team) => (
              <TouchableOpacity
                key={team.id}
                style={[styles.suggestedCard, { backgroundColor: colors.surface }]}
                onPress={() => toggleFavorite(team.id)}
                activeOpacity={0.9}
              >
                <View style={[styles.suggestedLogo, { backgroundColor: colors.orange }]}>
                  <Text style={styles.suggestedLogoText}>{team.abbreviation}</Text>
                </View>
                <View style={styles.suggestedInfo}>
                  <Text style={[styles.suggestedName, { color: colors.text }]} numberOfLines={1}>{team.name}</Text>
                  <Text style={[styles.suggestedLeague, { color: colors.textSecondary }]}>{team.league} · {team.record}</Text>
                </View>
                <TouchableOpacity
                  style={[styles.addButton, { backgroundColor: colors.background }]}
                  onPress={() => toggleFavorite(team.id)}
                >
                  <Plus size={18} color={colors.orange} />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Settings Groups */}
      {settingsGroups.map((group, groupIndex) => (
        <View key={`group-${group.title}-${groupIndex}`} style={styles.settingsGroup}>
          <Text style={[styles.groupTitle, { color: colors.textSecondary }]}>{group.title}</Text>
          <View style={[styles.settingsCard, { backgroundColor: colors.surface }]}>
            {group.items.map((item, itemIndex) => {
              const Icon = item.icon;
              return (
                <TouchableOpacity
                  key={`item-${item.label}-${itemIndex}`}
                  style={[
                    styles.settingItem,
                    itemIndex < group.items.length - 1 && [styles.settingItemBorder, { borderBottomColor: colors.border }]
                  ]}
                  onPress={item.toggle ? undefined : item.action}
                  activeOpacity={item.toggle ? 1 : 0.7}
                >
                  <View style={styles.settingLeft}>
                    <Icon 
                      size={20} 
                      color={(item.toggle === false && item.danger) ? "#EF4444" : colors.textSecondary} 
                    />
                    <Text style={[
                      styles.settingLabel,
                      { color: colors.text },
                      (item.toggle === false && item.danger) && styles.dangerText
                    ]}>
                      {item.label}
                    </Text>
                  </View>
                  {item.toggle ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onToggle}
                      trackColor={{ false: "#6B7280", true: "#6B7280" }}
                      thumbColor={colors.background}
                    />
                  ) : (
                    <ChevronRight size={20} color={colors.textSecondary} />
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={[styles.version, { color: colors.textSecondary }]}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileHeader: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomWidth: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold" as const,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  statItem: {
    alignItems: "center",
    gap: 4,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold" as const,
  },
  statLabel: {
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 40,
  },
  settingsGroup: {
    marginTop: 24,
  },
  teamSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  teamSearchInput: {
    flex: 1,
    fontSize: 15,
  },
  teamFilterContent: {
    paddingHorizontal: 16,
    gap: 8,
    paddingBottom: 12,
  },
  teamFilterChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 18,
  },
  teamFilterChipText: {
    fontSize: 13,
    fontWeight: "600" as const,
  },
  teamsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 12,
  },
  teamCard: {
    borderRadius: 16,
    padding: 14,
    width: "47%",
    alignItems: "center",
  },
  heartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  teamLogo: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  teamLogoText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold" as const,
  },
  teamName: {
    fontSize: 14,
    fontWeight: "600" as const,
    textAlign: "center",
    marginBottom: 2,
  },
  teamLeague: {
    fontSize: 11,
    marginBottom: 10,
  },
  teamStats: {
    width: "100%",
    gap: 6,
  },
  statItemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  teamStatText: {
    fontSize: 11,
  },
  teamsEmptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 32,
  },
  teamsEmptyTitle: {
    fontSize: 16,
    fontWeight: "600" as const,
    marginTop: 12,
    marginBottom: 6,
  },
  teamsEmptyText: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
  suggestedSection: {
    marginTop: 16,
    paddingHorizontal: 16,
    gap: 10,
  },
  suggestedSectionTitle: {
    fontSize: 15,
    fontWeight: "700" as const,
    marginBottom: 2,
  },
  suggestedCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    padding: 12,
    gap: 12,
  },
  suggestedLogo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  suggestedLogoText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold" as const,
  },
  suggestedInfo: {
    flex: 1,
  },
  suggestedName: {
    fontSize: 14,
    fontWeight: "600" as const,
  },
  suggestedLeague: {
    fontSize: 12,
    marginTop: 2,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: "600" as const,
    textTransform: "uppercase" as const,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  settingsCard: {
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingLabel: {
    fontSize: 15,
  },
  dangerText: {
    color: "#EF4444",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 32,
  },
  version: {
    fontSize: 12,
  },
  inputContainer: {
    padding: 16,
    borderBottomWidth: 1,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600" as const,
    marginBottom: 8,
  },
  textInput: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "transparent",
  },
});