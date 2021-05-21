import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectionGrid from "./../components/selectionGrid";
import Button from "../components/roundedButton";
import AudioButton from "../components/audioButton";
export default function GameScreen({ deck, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <SelectionGrid />
      <AudioButton name={"testing"} sound={null} />
    </View>
  );
}
