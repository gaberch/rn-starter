import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { reportLogBoxError } from 'react-native/Libraries/LogBox/Data/LogBoxData';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    )
};

const styles = StyleSheet.create({
    parentStyle: {
        
        
        // borderWidth: 3,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: `rgb(255,153,153)`,
        // borderWidth: 3,
        // borderColor: 'red',
        // flex: 4,
        // alignSelf: 'flex-start'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: `rgb(153,255,153)`,
        // borderWidth: 10,
        // borderColor: 'red',
        // flex: 4,
        alignSelf: 'center',
        // position: 'absolute',
        // ...StyleSheet.absoluteFillObject
        // marginLeft: 155
    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        backgroundColor: `rgb(204,153,255)`,
        // borderWidth: 3,
        // borderColor: 'red',
        // flex: 2
        position: 'absolute',
        alignSelf: 'flex-end'
    }
});

export default BoxScreen;