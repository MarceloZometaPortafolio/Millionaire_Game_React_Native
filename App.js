import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import container from './css/App'
import Header from './components/header';

export default function App() {
  return (
    <View style={container.layout}>
      <View style={container.header}>
        <Header/>
      </View>
      <Text style={container.body}>This is the body</Text>
    </View>
  );
}

// const container = StyleSheet.create({
//   layout: {      
//       flex: 1,
//       backgroundColor: 'red'
//   },

//   header: {
//       flex: 1,
//       backgroundColor: 'purple'      
//   },

//   body: {
//       flex: 15,
//       backgroundColor: 'black',
//   }
// });

