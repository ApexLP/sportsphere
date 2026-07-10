import React from "react";
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
  LucideIcon
} from "lucide-react-native";
import { useTheme } from "@/hooks/theme-context";

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
  const [notifications, setNotifications] = React.useState(true);
  const [liveAlerts, setLiveAlerts] = React.useState(false);
  
  // User profile form state
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

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
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} showsVerticalScrollIndicator={false}>
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
            <Text style={[styles.statNumber, { color: colors.text }]}>12</Text>
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