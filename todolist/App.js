import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

const App = () => {
    const [list, setList] = useState([])

    const removeAllTasks = () => {
        setList([])
    }

    const addTask = (text) => {
        const newItem = {
            id: text,
            task: text,
        }
        setList([newItem, ...list])
    }
    console.log(list, 'LIST')
    const deleteTask = (id) => {
        const newList = list.filter((item) => item.id !== id)
        setList(newList)``
    }
    return (
        <View style={styles.container}>
            <AddItem addTask={addTask} removeAllTasks={removeAllTasks}></AddItem>
            <View style={styles.list}>
                <ListItem deleteTask={deleteTask} listItems={list}></ListItem>
            </View>

            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        display:'flex',
        alignItems: 'center',
        width:300,
        backgroundColor:"rgba(152,122,122,0.13)"
    }
});

export default App;