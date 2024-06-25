import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useTheme, Avatar, Button } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.header}>
        <Avatar.Image size={50} source={{ uri: "assets/profile.png" }} />
        <View style={styles.headerText}>
          <Text style={[styles.welcomeText, { color: colors.text }]}>
            Welcome back,
          </Text>
          <Text style={[styles.nameText, { color: colors.text }]}>
            Eric Atsu
          </Text>
        </View>
        <Ionicons name="ios-search" size={24} color={colors.text} />
      </View>

      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: "assets/apple.png" }} />
      </View>

      <View style={styles.actions}>
        <Button icon="arrow-up" mode="contained" onPress={() => {}}>
          Sent
        </Button>
        <Button icon="arrow-down" mode="contained" onPress={() => {}}>
          Receive
        </Button>
        <Button icon="cash-multiple" mode="contained" onPress={() => {}}>
          Loan
        </Button>
        <Button icon="plus" mode="contained" onPress={() => {}}>
          Topup
        </Button>
      </View>

      <View style={styles.transactions}>
        <Text style={[styles.transactionTitle, { color: colors.text }]}>
          Transaction
        </Text>
        <Button uppercase={false} onPress={() => {}}>
          Sell All
        </Button>
        {/* Render transaction items here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    marginVertical: 16,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  transactions: {
    marginTop: 16,
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
