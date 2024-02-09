import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.headerText}>ClubHouse</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Icon name="search" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    position: "absolute",
    top: 0,
    width: "100%",

    backgroundColor: "#dddddd",
  },
  iconContainer: {
    padding: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 30, // Set the width of your logo
    height: 30, // Set the height of your logo
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomHeader;
