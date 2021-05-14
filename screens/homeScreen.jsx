import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/card";
import { kategorijos } from "./../utils/data";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <FlatList
        style={{ flex: 1 }}
        ListEmptyComponent={() => (
          <Text
            style={[style.subtitle, { marginTop: 24, textAlign: "center" }]}
          >
            No decks found. Try adding some first.
          </Text>
        )}
        data={kategorijos}
        renderItem={({ item }) => <Card deck={item} navigation={navigation} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ paddingHorizontal: 8, backgroundColor: "#468" }}>
        <Text>Reklama</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  card: {
    backgroundColor: "#dd6633",
    borderRadius: 6,
    margin: 4,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },

  cardTitle: {
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 18,
    marginBottom: 4,
  },

  cardSubtitle: {
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 16,
    fontSize: 14,
  },

  subtitle: {
    fontWeight: "700",
    fontSize: 16,
  },
});

export default HomeScreen;
