import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import ClearBigButton from "../ClearBigButton";

function Info({navigation}) {

    const loadScreenBack = () => {
            navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Info!</Text>
            <ClearBigButton
                title="На Главную"
                onPress={loadScreenBack}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
    },
});

export default Info;