import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

const AudioButton = ({ s, name = "hello" }) => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Replaying Sound");
    sound.replayAsync();
  }

  async function loadSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/arbuzas.mp3")
    );
    setSound(sound);
    console.log("Playing sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    loadSound();
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [s]);

  return (
    <TouchableOpacity
      onPress={() => {
        playSound();
      }}
      style={{
        backgroundColor: "#abc",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        margin: 4,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 4,
        borderWidth: 1,
        borderColor: "#fff",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <AntDesign name="sound" size={24} color="black" />
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default AudioButton;
