import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ClearBigButton from "../ClearBigButton";

function Main({navigation}) {
    const loadScreenTodo = () => {
        navigation.navigate('Todo')
    }
    const loadScreenInfo = () => {
        navigation.navigate('Info')
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonWrap}>
                <ClearBigButton
                    title="К списку задач"
                    onPress={loadScreenTodo}
                />
                <ClearBigButton
                    title="Открыть информацию"
                    onPress={loadScreenInfo}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default Main;