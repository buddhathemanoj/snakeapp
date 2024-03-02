// Homepage.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ChatPage = () => {
  return (
    <View style={styles.container}>
      <Text>Chat Page</Text>
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
});

export default ChatPage;
