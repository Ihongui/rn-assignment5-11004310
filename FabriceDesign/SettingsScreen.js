import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ toggleTheme, theme }) => {
  const { colors } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  const handleToggleTheme = async () => {
    toggleTheme();
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Settings</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: colors.text }]}>Language</Text>
        <Text style={[styles.itemArrow, { color: colors.text }]}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: colors.text }]}>
          My Profile
        </Text>
        <Text style={[styles.itemArrow, { color: colors.text }]}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: colors.text }]}>
          Contact Us
        </Text>
        <Text style={[styles.itemArrow, { color: colors.text }]}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: colors.text }]}>
          Change Password
        </Text>
        <Text style={[styles.itemArrow, { color: colors.text }]}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={[styles.itemText, { color: colors.text }]}>
          Privacy Policy
        </Text>
        <Text style={[styles.itemArrow, { color: colors.text }]}>{">"}</Text>
      </TouchableOpacity>
      <View style={[styles.switchContainer, { borderTopColor: colors.border }]}>
        <Text style={[styles.switchText, { color: colors.text }]}>Theme</Text>
        <Switch value={isDarkTheme} onValueChange={handleToggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 16,
  },
  item: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 24,
  },
  itemArrow: {
    fontSize: 32,
    color: "#ccc",
  },
  switchContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 3,
    marginTop: 16,
  },
  switchText: {
    fontSize: 32,
  },
});

export default SettingsScreen;
