import React, {useEffect, useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import {TextInput} from "react-native-web";

const App = () => {
    const [list, setList] = useState([])

    const removeAllTasks = () => {
        setList([])
    }

    const addTask = (text) => {
        const newItem = {
            id: Math.round((Math.random() * 100) **2) +1,
            task: text,
        }
        setList([...list, newItem].reverse())
    }
    console.log(list.reverse(), 'LIST') //???????????????????????????????????????????
    const deleteTask = (id) => {
        const newList = list.filter((item) => item.id !== id)
        setList(newList)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add to task!</Text>
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
        marginTop:50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
      fontSize:18,
      textTransform:'uppercase',
    },
    list: {
        marginTop:0,
        display:'flex',
        alignItems: 'center',
        width:300,
        height:'60%',
        padding:10,
        backgroundColor:"rgba(220,157,74,0.09)",
    }
});

export default App;