import React from "react";
import { View, Text } from "react-native";
import PictureCard from "./pictureCard";

export default function SelectionGrid({ cards, onSelect }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <PictureCard />
        <PictureCard />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <PictureCard />
        <PictureCard />
      </View>
    </View>
  );
}
