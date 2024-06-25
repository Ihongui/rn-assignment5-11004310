import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ toggleTheme, theme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(theme === "dark");

  const handleToggleTheme = async () => {
    toggleTheme();
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>Language</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>Privacy Policy</Text>
      </TouchableOpacity>
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Theme</Text>
        <Switch value={isDarkTheme} onValueChange={handleToggleTheme} />
      </View>
    </View>
  );
};

export default SettingsScreen;
