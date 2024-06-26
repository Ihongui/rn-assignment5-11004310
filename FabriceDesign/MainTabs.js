import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

// Import your custom icons
import HomeIcon from "./assets/home.png";
import MyCardsIcon from "./assets/myCards.png";
import StatisticsIcon from "./assets/statictics.png";
import SettingsIcon from "./assets/settings.png";

const Tab = createBottomTabNavigator();

const MainTabs = ({ toggleTheme, theme }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconSource;

        if (route.name === "Home") {
          iconSource = HomeIcon;
        } else if (route.name === "My Cards") {
          iconSource = MyCardsIcon;
        } else if (route.name === "Statistics") {
          iconSource = StatisticsIcon;
        } else if (route.name === "Settings") {
          iconSource = SettingsIcon;
        }

        return (
          <Image
            source={iconSource}
            style={{ width: size, height: size, tintColor: color }}
          />
        );
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen
      name="My Cards"
      component={() => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>My Cards Screen</Text>
        </View>
      )}
    />
    <Tab.Screen
      name="Statistics"
      component={() => (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Statistics Screen</Text>
        </View>
      )}
    />
    <Tab.Screen name="Settings">
      {(props) => (
        <SettingsScreen {...props} toggleTheme={toggleTheme} theme={theme} />
      )}
    </Tab.Screen>
  </Tab.Navigator>
);

export default MainTabs;
