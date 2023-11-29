import React, { useState } from "react";
import AnimatedLoader from "react-native-animated-loader";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef } from "react";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Amazing weather",
    description: "Go for a walk, stop staying at home",
  },
  // Add more conditions as needed
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#2F80ED"],
    title: "Sit at home",
    description: "Did you see what is going on in the street???",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#243B55"],
    title: "Take an umbrella",
    description: "Perhaps rain will increase soon!",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "It is raining outside",
    description: "So there will be a rainbow soon!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "There is a snow outside!",
    description: "Dress warmly, motherfucker!",
  },
  Snow: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Dusty!",
    description: "Better close windows!",
  },
  Snow: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "On the street smog :(",
    description: "Stay at home safely!",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "There is a snow outside!",
    description: "Stay at home safely!",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "You can not see a damn thing in the fog!",
    description: "Stay at home safely!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "The clouds!",
    description: "Stay at home safely!",
  },
};

export default function Weather({ temp, name, condition, setWeather }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const handleInputValue = () => {
    setWeather(query);
    setQuery("");
    if (inputRef.current) {
      inputRef.current.blur(); // Blur the TextInput
    }
  };

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.mainContainer}>
      <View style={styles.containerRain}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color={
            weatherOptions[condition].iconName === "weather-sunny"
              ? "#FFFF19"
              : "#C4D3DF"
          }
        />
        <View style={styles.flex}>
          <Text style={styles.temp}>{temp}° </Text>
          <Text style={styles.temp}>| {name}</Text>
        </View>
        <View style={{ ...styles.containerRain, ...styles.textContainer }}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.description}>
            {weatherOptions[condition].description}
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={query}
            onChangeText={(text) => setQuery(text)}></TextInput>
          <Button
            onPress={handleInputValue}
            style={styles.search}
            title="Search..."
            color={"white"}></Button>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerRain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 155,
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  description: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    textAlign: "left",
  },
  searchContainer: {
    backgroundColor: "#e8e8e8",
    width: "80%",
    padding: 10,
    marginTop: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginBottom: 305,
    position: "absolute",
  },
  input: {
    color: "black",
    width: "65%",
    fontSize: 24,
  },
  search: {
    backgroundColor: "#3377FF",
    width: "15%",
    height: 20,
  },
});
