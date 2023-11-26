import React from "react";
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Amazing wether",
    description: "Go for a walkp, stop staying at home",
  },
};

export default function Weather({ temp, name, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <MaterialCommunityIcons name={weatherOptions[condition].iconName} />
      <Text>{temp}</Text>
      <Text>{name}</Text>
      <Text>{weatherOptions[condition].title}</Text>
      <Text>{weatherOptions[condition].description}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
