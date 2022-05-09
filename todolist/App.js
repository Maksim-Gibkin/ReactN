import React, {useEffect, useState} from 'react';
import { AbilityContext } from './Casl/Can'
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";
import casl from "./Casl/ability";

const App = () => {
    const [list, setList] = useState([])
    const [isLoading, setLoading] = useState(false)

    const getTasks = () => {
        setLoading(true)
        const URL = 'http://127.0.0.1:3006/tasks'
        fetch(URL).then(res => {
            res.json()
            console.log(res.json, '22223')
        }).then(res => {
            setList(res.content)

        }).finally(() => setLoading(false))
    }

    useEffect(() => {
        getTasks()
    }, [])
    const removeAllTasks = () => {
        setList([])
    }

    const addTask = (text) => {
        const newItem = {
            id: (Math.round((Math.random() * 100) ** 2) + 1).toString(),
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
        <AbilityContext.Provider value={casl}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Add to task!</Text>
                <AddItem addTask={addTask} removeAllTasks={removeAllTasks}></AddItem>
                <View style={styles.list}>
                    <ListItem deleteTask={deleteTask} listItems={list} getList={getTasks} isLoading={isLoading}>
                    </ListItem>
                </View>
                <StatusBar style="auto"/>
            </SafeAreaView>
        </AbilityContext.Provider>
    )
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
    list: {
        marginTop: 0,
        display: 'flex',
        alignItems: 'center',
        width: 300,
        height: '60%',
        padding: 10,
        backgroundColor: "rgba(220,157,74,0.09)",
    }
});

export default App;