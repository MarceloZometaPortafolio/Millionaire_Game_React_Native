import React from 'react';
import {  StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import * as Palette from '../css/ColorPalette';
import container from '../css/Style';

const StartScreen = () => {
    return (
        <View style={container.StartScreen}>
            <Text h4 style={{color: Palette.TEXT,
                            flex: 1}}>
                Who Wants to Be a Millionaire!
            </Text>
            <View>
                <Button style={{flex: 1}}
                        buttonStyle={container.PrimaryButton}
                        onPress={() => {console.log("I was clicked")}} 
                        title="Start"
                />                                
            </View>
        </View>
    );
}

export default StartScreen;