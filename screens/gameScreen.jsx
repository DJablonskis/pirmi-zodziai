import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectionGrid from "./../components/selectionGrid";
import Button from "../components/roundedButton";
export default function GameScreen({ deck, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <SelectionGrid />

      <View style={{ flexDirection: "row" }}>
        <Text style={style.question}>Card name</Text>
        <Button />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  question: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "center",
    padding: 8,
    textTransform: "uppercase",
  },
});
