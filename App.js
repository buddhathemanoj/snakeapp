import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native"; // Import StyleSheet

import Homepage from "./Pages/Home";
import Profilepage from "./Pages/Profile";
import Settingpage from "./Pages/Setting";
import SnakeGame from "./Pages/SnakeGame";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Homepage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SnakeGame"
        component={SnakeGame}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Main"
          component={MainNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="home"
                color={color}
                size={size}
                style={styles.iconStyles}
              />
            ),
            tabBarLabel: "",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Profilepage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="search"
                color={color}
                size={size}
                style={styles.iconStyles}
              />
            ),
            tabBarLabel: "",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="add"
          component={Profilepage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="plus"
                color={color}
                size={size}
                style={styles.iconStyles}
              />
            ),
            tabBarLabel: "",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Details"
          component={Profilepage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="user"
                color={color}
                size={size}
                style={styles.iconStyles}
              />
            ),
            tabBarLabel: "",
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconStyles: {
    paddingTop: 10,
  },
});
