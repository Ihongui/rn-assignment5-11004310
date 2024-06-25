import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Provider as PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import { View, Text, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const lightTheme = {
  ...MD3LightTheme,
  ...DefaultTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...DefaultTheme.colors,
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

const MainTabs = ({ toggleTheme, theme }) => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Settings") {
          iconName = "settings";
        } else if (route.name === "My Cards") {
          iconName = "credit-card";
        } else if (route.name === "Statistics") {
          iconName = "chart-bar";
        }

        return <Icon name={iconName} size={size} color={color} />;
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

const App = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await AsyncStorage.setItem("theme", newTheme);
  };

  React.useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };
    loadTheme();
  }, []);

  return (
    <PaperProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <NavigationContainer theme={theme === "light" ? lightTheme : darkTheme}>
        <MainTabs toggleTheme={toggleTheme} theme={theme} />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
