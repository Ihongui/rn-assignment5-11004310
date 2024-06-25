import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useTheme, Avatar, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

// Sample transaction data
const transactions = [
  { id: 1, description: "Groceries", amount: "-$50.00", date: "June 20, 2024" },
  { id: 2, description: "Salary", amount: "+$2000.00", date: "June 15, 2024" },
  { id: 3, description: "Groceries", amount: "-$50.00", date: "June 20, 2024" },
  { id: 4, description: "Salary", amount: "+$2000.00", date: "June 15, 2024" },
  { id: 5, description: "Groceries", amount: "-$50.00", date: "June 20, 2024" },
  { id: 6, description: "Salary", amount: "+$2000.00", date: "June 15, 2024" },
];

const HomeScreen = () => {
  const { colors } = useTheme();

  const renderTransactionItem = (transaction) => (
    <View key={transaction.id} style={styles.transactionItem}>
      <Text style={[styles.transactionDescription, { color: colors.text }]}>
        {transaction.description}
      </Text>
      <Text style={[styles.transactionAmount, { color: colors.text }]}>
        {transaction.amount}
      </Text>
      <Text style={[styles.transactionDate, { color: colors.text }]}>
        {transaction.date}
      </Text>
    </View>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.header}>
        <Avatar.Image size={50} source={require("./assets/profile.png")} />
        <View style={styles.headerText}>
          <Text style={[styles.welcomeText, { color: colors.text }]}>
            Welcome back,
          </Text>
          <Text style={[styles.nameText, { color: colors.text }]}>
            Eric Atsu
          </Text>
        </View>
        <Ionicons name="Android-search" size={24} color={colors.text} />
      </View>

      <View style={styles.card}>
        <Image style={styles.cardImage} source={require("./assets/Card.png")} />
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
        <View style={styles.transactionHeader}>
          <Text style={[styles.transactionTitle, { color: colors.text }]}>
            Transactions
          </Text>
          <Button uppercase={false} onPress={() => {}}>
            See All
          </Button>
        </View>
        {transactions.map(renderTransactionItem)}
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
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  transactionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  transactionDescription: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionDate: {
    fontSize: 14,
    color: "gray",
  },
});

export default HomeScreen;
