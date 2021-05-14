import React from "react";
import { Image, View, TouchableOpacity } from "react-native";

export default function PictureCard({ image, onPress, id }) {
  return (
    <TouchableOpacity onPress={() => {}} style={{ margin: 8, flex: 1 }}>
      <Image
        source={require("../media/images/t_skaiciai.jpg")}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          borderRadius: 8,
        }}
      ></Image>
    </TouchableOpacity>
  );
}
