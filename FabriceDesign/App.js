import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainTabs from "./MainTabs";

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
