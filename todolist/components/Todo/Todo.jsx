import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import AddItem from "../AddItem";
import ListItem from "../ListItem";
import {StatusBar} from "expo-status-bar";
import {observer} from "mobx-react-lite";
import TodoStore from "../../store/todoStore";

const Todo = observer(() => {

    const {addTodo, removeTodo, todos, removeAllTodo} = TodoStore

    const [list, setList] = useState([])

    const removeAllTasks = () => {
        setList([])
    }

    const addTask = (text) => {
        const newItem = {
            id: (Math.round((Math.random() * 100) ** 2) + 1).toString(),
            task: text,
            status: false,
        }
        setList([...list, newItem])
    }
    //console.log(list.reverse(), 'LIST') //???????????????????????????????????????????

    const deleteTask = (id) => {
        const newList = list.filter((item) => item.id !== id)
        setList(newList)
    }

    const taskDone = (id) => {
        setList(
            list.map((item) => item.id === id ? {...item, status: !item.status} : item),
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Add to task!</Text>
            <AddItem addTask={addTodo} removeAllTasks={removeAllTodo}></AddItem>
            <View style={styles.list}>
                <ListItem taskDone={taskDone} deleteTask={removeTodo} listItems={todos}></ListItem>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
})

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

export default Todo;