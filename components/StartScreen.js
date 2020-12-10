import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { color } from "react-native-reanimated";
import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";
import * as Palette from "../css/ColorPalette";
import container from "../css/Style";

const StartScreen = () => {

    const StartButtonPress = () => {
        console.log("Start button was pressed");
    }

    const LeaderBoardButtonPress = () => {
        console.log("Leaderboard button was pressed");
    }

  return (
    <View style={container.StartScreen}>
      <Text h4 style={{ color: Palette.TEXT, flex: 1 }}>
        Who Wants to Be a Millionaire!
      </Text>

      <Button
        style={{ flex: 1 }}
        buttonStyle={container.PrimaryButton}
        onPress={() => StartButtonPress()}
        title="Start"
      />

      <Button
        style={{ flex: 1 }}
        buttonStyle={container.PrimaryButton}
        onPress={() => LeaderBoardButtonPress()}
        title="Leaderboard"
      />
    </View>
  );
};

export default StartScreen;
