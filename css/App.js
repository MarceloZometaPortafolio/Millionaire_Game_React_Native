import React from 'react'
import { StyleSheet } from 'react-native';


const container = StyleSheet.create({    
    layout: {      
        flex: 1,
        backgroundColor: 'red'
    },
  
    header: {
        flex: 1,
        backgroundColor: '#38054b'
    },
  
    body: {
        flex: 15,
        backgroundColor: 'black',
    }
  });

export default container;