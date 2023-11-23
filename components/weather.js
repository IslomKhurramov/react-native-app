import React from "react";
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet, Text, View } from "react-native";

export default function Weather() {
  return (
    <View style={styles.container}>
      <Text>Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
