import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AddNewGame from "./components/AddNewGame";
import GameList from "./components/GameList";
import Header from "./components/Header";

export default function App() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [gamePlays, setGamePlays] = useState([
    {
      id: 1,
      titre: "The Last of Us Part II",
      prix: 25,
      genre: "Action-Aventure",
    },
    {
      id: 2,
      titre: "FIFA 23",
      prix: 20,
      genre: "Sport",
    },
    {
      id: 3,
      titre: "Call of Duty: Modern Warfare II",
      prix: 30,
      genre: "FPS",
    },
    {
      id: 4,
      titre: "Horizon Forbidden West",
      prix: 28,
      genre: "Action-RPG",
    },
    {
      id: 5,
      titre: "Mario Kart 8 Deluxe",
      prix: 35,
      genre: "Course",
    },
    {
      id: 6,
      titre: "Animal Crossing: New Horizons",
      prix: 22,
      genre: "Simulation",
    },
    {
      id: 7,
      titre: "Elden Ring",
      prix: 32,
      genre: "Action-RPG",
    },
    {
      id: 8,
      titre: "God of War Ragnarök",
      prix: 40,
      genre: "Action-Aventure",
    },
    {
      id: 9,
      titre: "Gran Turismo 7",
      prix: 27,
      genre: "Course",
    },
    {
      id: 10,
      titre: "Minecraft",
      prix: 18,
      genre: "Sandbox",
    },
    {
      id: 11,
      titre: "Fortnite",
      prix: 0,
      genre: "Battle Royale",
    },
    {
      id: 12,
      titre: "Red Dead Redemption 2",
      prix: 23,
      genre: "Action-Aventure",
    },
    {
      id: 13,
      titre: "Cyberpunk 2077",
      prix: 15,
      genre: "RPG",
    },
    {
      id: 14,
      titre: "Resident Evil Village",
      prix: 19,
      genre: "Horreur",
    },
    {
      id: 15,
      titre: "Assassin's Creed Valhalla",
      prix: 21,
      genre: "Action-Aventure",
    },
  ]);
  const handleAdd = () => {
    if (!title || !price || !genre) return;
    const newGame = {
      id: gamePlays.length + 1,
      titre: title,
      prix: parseFloat(price),
      genre: genre,
    };
    setGamePlays([...gamePlays, newGame]);
    setTitle("");
    setPrice("");
    setGenre("");
  };

  return (
    <View style={styles.container}>
   

      <Header gamePlays={gamePlays} />
      <Text style={styles.title}>titre des jeux videos ...</Text>
      <GameList gamePlays={gamePlays} />

      <AddNewGame
        titleValue={title}
        priceValue={price}
        genreValue={genre}
        onTitleChange={setTitle}
        onPriceChange={setPrice}
        onGenreChange={setGenre}
        onAdd={handleAdd}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90AFC5",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    paddingTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
     color : "#4a90e2",
  },
});
