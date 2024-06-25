import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useTheme, Avatar, Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

// Sample transaction data
const transactions = [
  {
    id: "1",
    icon: "apple",
    name: "Apple Store",
    type: "Entertainment",
    amount: "- $5.99",
  },
  {
    id: "2",
    icon: "spotify",
    name: "Spotify",
    type: "Music",
    amount: "- $12.99",
  },
  {
    id: "3",
    icon: "swap-horizontal",
    name: "Money Transfer",
    type: "Transaction",
    amount: "$300",
  },
  { id: "4", icon: "cart", name: "Grocery", type: "", amount: "- $88" },
];

const HomeScreen = () => {
  const { colors } = useTheme();

  const renderTransactionItem = ({ item }) => (
    <View key={item.id} style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <Ionicons name={item.icon} size={28} color={colors.text} />
        <View style={styles.transactionText}>
          <Text style={[styles.transactionName, { color: colors.text }]}>
            {item.name}
          </Text>
          <Text style={[styles.transactionType, { color: colors.text }]}>
            {item.type}
          </Text>
        </View>
      </View>
      <Text style={[styles.transactionAmount, { color: colors.text }]}>
        {item.amount}
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
        <Ionicons name="ios-search" size={24} color={colors.text} />
      </View>

      <View style={styles.card}>
        <Image style={styles.cardImage} source={require("./assets/card.png")} />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-up" size={28} color={colors.text} />
          <Text style={[styles.actionText, { color: colors.text }]}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="arrow-down" size={28} color={colors.text} />
          <Text style={[styles.actionText, { color: colors.text }]}>
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="cash" size={28} color={colors.text} />
          <Text style={[styles.actionText, { color: colors.text }]}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="add-circle-outline" size={28} color={colors.text} />
          <Text style={[styles.actionText, { color: colors.text }]}>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactions}>
        <View style={styles.transactionHeader}>
          <Text style={[styles.transactionTitle, { color: colors.text }]}>
            Transactions
          </Text>
          <Button uppercase={false} onPress={() => {}}>
            Sell All
          </Button>
        </View>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderTransactionItem}
        />
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
  actionButton: {
    alignItems: "center",
  },
  actionText: {
    marginTop: 8,
    fontSize: 16,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionText: {
    marginLeft: 8,
  },
  transactionName: {
    fontSize: 16,
  },
  transactionType: {
    fontSize: 14,
    color: "gray",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
