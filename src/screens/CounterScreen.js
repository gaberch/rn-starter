import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    // state === { count: number }
    // action === {type: 'change_count', payload: COUNT_INCREMENT || -1 * COUNT_INCREMENT}
    switch(action.type){
        case 'change_count':
            return { ...state, count: state.count + action.payload};
        default:
            return state;
    };
};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const {count} = state;


    return <View>
        <Button
            title="Increase"
            onPress={() => dispatch({ type: 'change_count', payload: COUNTER_INCREMENT })}
        />
        <Button
            title="Decrease"
            onPress={() => dispatch({ type: 'change_count', payload: -1 * COUNTER_INCREMENT })}
        />
        <Text>Current Count: {count}</Text>
    </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;
