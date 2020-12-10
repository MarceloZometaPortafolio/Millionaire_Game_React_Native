import React from "react";
import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import * as Palette from "./ColorPalette";

const container = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  layout: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Palette.BACKGROUND,    
  },

  body: {
    textAlignVertical: "center",
  },

  StartScreen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    textAlign: "center",
    color: Palette.TEXT,
  },

  PrimaryButton: {
    borderWidth: 5,
    // borderBottomColor: "black",
    borderColor: Palette.PRIMARY_EMPHASIS,
    backgroundColor: "black",
    margin: '10px'
  },
});

export default container;
