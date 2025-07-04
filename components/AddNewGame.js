import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Ripple from "react-native-material-ripple";

export default function AddNewGame({
  titleValue,
  priceValue,
  genreValue,
  onTitleChange,
  onPriceChange,
  onGenreChange,
  onAdd,
}) {
  return (
    <View>
      <Text style={styles.title}>Ajout d'un jeu vidéo ....</Text>

      <View style={styles.containerRow}>
        <View style={styles.inputColumn}>
          <TextInput
            style={styles.input}
            placeholder="Titre"
            value={titleValue}
            onChangeText={onTitleChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Tarif"
            value={priceValue}
            keyboardType="numeric"
            onChangeText={onPriceChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Catégorie"
            value={genreValue}
            onChangeText={onGenreChange}
          />
        </View>

        <Ripple
          rippleColor="#FFFFFF"
          rippleOpacity={0.3}
          rippleDuration={600}
          onPress={onAdd}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add</Text>
        </Ripple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 30,
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  inputColumn: {
    flex: 1,
    marginRight: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#bdc3c7",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#9B4F0F",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
