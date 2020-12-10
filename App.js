//System
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import container from "./css/Style";

//Components
import StartScreen from "./components/StartScreen";

export default function App() {
  const backgroundImage = require('./images/millionaire-background.jpg');

  return (
    <View style={container.layout}>
      {/* <Image source={backgroundImage} style={container.image}> */}
        <View style={container.body}>
          <StartScreen />
        </View>
      {/* </Image> */}
    </View>
  );
}
