import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ toggleTheme, theme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  const handleToggleTheme = async () => {
    toggleTheme();
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Language</Text>
        <Text style={styles.itemArrow}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>My Profile</Text>
        <Text style={styles.itemArrow}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Contact Us</Text>
        <Text style={styles.itemArrow}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Change Password</Text>
        <Text style={styles.itemArrow}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Privacy Policy</Text>
        <Text style={styles.itemArrow}>{">"}</Text>
      </TouchableOpacity>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Theme</Text>
        <Switch value={isDarkTheme} onValueChange={handleToggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white", // Update based on the theme if necessary
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
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
  itemArrow: {
    fontSize: 16,
    color: "#ccc",
  },
  switchContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginTop: 16,
  },
  switchText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
