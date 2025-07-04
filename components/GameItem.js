import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
export default function GameItem({
  item
}) {
  return (
    <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.titre}</Text>
              <View style={styles.cardInfoRow}>
                <Text style={styles.cardText}>{item.prix} £</Text>
                <Text style={styles.cardText}>{item.genre}</Text>
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 18,
  },
  cardInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: 16,
  },
});