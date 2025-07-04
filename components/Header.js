import { View, StyleSheet, Text } from "react-native";

export default function Header({ gamePlays }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.pseudo}>👤 Pseudo : Prudence</Text>
      <Text style={styles.count}>🎮 Nb jeux vidéo : {gamePlays.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#4a90e2", // Couleur principale
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  pseudo: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  count: {
    fontSize: 18,
    color: "#f0f0f0",
    textAlign: "center",
  },
});
