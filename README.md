## ID_STIDENT: 11004310 

# Brief Description
          Initialize the Project: The project was set up using React Native CLI.
          This involved running commands to create a new React Native project, 
          installing necessary dependencies, 
          and configuring the development environment for both Android and iOS.
          Theming: Implemented light and dark themes using react-native-paper and @react-navigation/native.
          Custom themes were created by extending the MD3LightTheme and MD3DarkTheme from react-native-paper.
          Navigation: Set up bottom tab navigation using @react-navigation/bottom-tabs. 
          Defined Home, My Cards, Statistics, and Settings screens with custom tab icons.
# Screens and Components:
Home Screen: Created the HomeScreen component, which displays a user profile, a card image, action buttons, and a list of transactions. 
The transaction amounts were styled to change color based on the type of transaction (e.g., blue for positive amounts).
Settings Screen: Created the SettingsScreen component, which includes options to change language, view profile, contact support, change password, view privacy policy, and toggle the theme.
Main Tabs: Combined the HomeScreen and SettingsScreen along with placeholders for My Cards and Statistics screens into a bottom tab navigator. Custom icons were used for each tab.
![image](https://github.com/Ihongui/rn-assignment5-11004310/assets/150761912/e3f76218-7e07-4408-9205-ecd9906f59af)
![image](https://github.com/Ihongui/rn-assignment5-11004310/assets/150761912/151b75fd-8790-4ebe-99a6-8b1149f164f5)
![image](https://github.com/Ihongui/rn-assignment5-11004310/assets/150761912/a3979a24-add3-4086-809b-33e4e05bb845)
![image](https://github.com/Ihongui/rn-assignment5-11004310/assets/150761912/74939f28-b8c3-479b-a7d3-c1e260b9ce2c)
![image](https://github.com/Ihongui/rn-assignment5-11004310/assets/150761912/0f579b38-3926-4836-b5c7-8ef8e7494374)
## App.js
Configures the themes.
Loads the persisted theme from AsyncStorage.
Provides theme context to the app using react-native-paper and @react-navigation/native.
Renders the MainTabs component.
## MainTabs.js
Defines the bottom tab navigator.
Configures custom icons for each tab.
Includes the HomeScreen and SettingsScreen components.
 ## HomeScreen.js
Displays user profile, card image, action buttons, and a transaction list.
Uses react-native-paper components for consistent theming.
Custom styles for different parts of the screen, including transaction amount colors.
## SettingsScreen.js
Displays settings options with navigation links.
Includes a theme toggle switch to switch between light and dark themes.


