import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import GameItem from "./GameItem";

export default function GameList({ gamePlays }) {
  return (
    <FlatList
      data={gamePlays}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <GameItem item={item} />}
    />
  );
}
