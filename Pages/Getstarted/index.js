import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../services/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GetStartedScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkUserStatus = async () => {
      const session = await supabase.auth.session();
      const hasSeenGetStarted = await AsyncStorage.getItem("hasSeenGetStarted");

      if (session) {
        navigation.navigate("Home");
      } else if (!hasSeenGetStarted) {
        navigation.navigate("GetStarted");
        AsyncStorage.setItem("hasSeenGetStarted", "true");
      } else {
        navigation.navigate("SignIn");
      }
    };

    checkUserStatus();
  }, []);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const handleGetStarted = () => {
    navigation.navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Frame1.png")}
        style={styles.imagestyles}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Stay connected with your friends and family
        </Text>
        <View style={styles.bottomcontainer}>
          <Image source={require("../../assets/shield.png")} />
          <Text style={styles.smalltext}>Secure , Private Messaging </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  smalltext: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 15,
  },
  contentContainer: {
    alignItems: "center",
    padding: 30,
    paddingTop: 50,
    backgroundColor: "#000",
    width: "100%",
    height: "50%",
    position: "absolute",
    top: "50%",
  },
  title: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Poppins_700Bold",
  },
  bottomcontainer: {
    display: "flex",
    gap: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    marginRight: "28%",
  },
  imagestyles: {
    width: "100%",
    height: "50%",
    position: "absolute",
    top: 0,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 10,
    marginTop: 50,
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GetStartedScreen;
