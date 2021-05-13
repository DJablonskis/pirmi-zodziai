import React from "react";
import { Text, TouchableOpacity } from "react-native";

const RoundedButton = (props) => {
  const { value, onPress, color } = props;
  return (
    <TouchableOpacity
      {...onPress}
      style={{
        backgroundColor: color,
        borderRadius: 6,
        margin: 4,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 4,
        borderWidth: 1,
        borderColor: "#fff",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
