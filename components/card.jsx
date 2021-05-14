import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import Button from "./roundedButton";

export default function card({ deck, navigation }) {
  return (
    <View style={{ margin: 8 }}>
      <ImageBackground
        source={deck.img}
        imageStyle={{ borderRadius: 8 }}
        style="{style.container}"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: 8,
          }}
        >
          <Text style={style.cardTitle}>{deck.name}</Text>
          <Text style={style.cardSubtitle}>
            Viso kortelių: {deck.cards.length}
          </Text>
          <View style={style.cardButtonsContainer}>
            <Button
              value="Zaisti"
              onPress={() => navigation.navigate("Game", { deck: deck })}
              color="#f85855"
            />
            <Button value="Mokytis" onPress={() => {}} color="#f85855" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  cardButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  cardTitle: {
    color: "rgba(255, 255, 255, 0.95)",
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 24,
    marginBottom: 4,
    marginTop: 16,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },

  cardSubtitle: {
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 16,
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
