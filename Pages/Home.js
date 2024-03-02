import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Homepage = () => {
  const navigation = useNavigation();

  const handleStartButtonPress = () => {
    navigation.navigate("SnakeGame");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.startButton}
        onPress={handleStartButtonPress}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Homepage;
