import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/card";

const HomeScreen = ({ navigation }) => {
  const categories = [
    {
      id: "one",
      name: "Gyvunai",
      count: 24,
      img: "https://picsum.photos/800/?random=1.jpg",
    },
    {
      id: "two",
      name: "Rubai",
      count: 20,
      img: "https://picsum.photos/800/?random=2.jpg",
    },
    {
      id: "three",
      name: "Transportas",
      count: 35,
      img: "https://picsum.photos/800/?random=3.jpg",
    },
    {
      id: "four",
      name: "Transportas",
      count: 35,
      img: "https://picsum.photos/800/?random=4.jpg",
    },
    {
      id: "five",
      name: "Transportas",
      count: 35,
      img: "https://picsum.photos/800/?random=5.jpg",
    },
    {
      id: "six",
      name: "Transportas",
      count: 35,
      img: "https://picsum.photos/800/?random=6.jpg",
    },
  ];

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
        data={categories}
        renderItem={({ item }) => <Card deck={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>1</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>2</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>3</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center" }}>4</Text>
          </View>
        </View>
      </View>

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
