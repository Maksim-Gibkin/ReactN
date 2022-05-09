import React, {useState} from 'react';
import {Text, View, FlatList, SafeAreaView, Button, StyleSheet, Pressable} from "react-native";
import ClearSmallButtonDel from "./ClearSmallButtonDel";
import ClearSmallButtonDone from "./ClearSmallButtonDone";
import {observer} from "mobx-react-lite";

const ListItem = observer(({deleteTask, listItems, taskDone})  => {
    const [press, setPress] =useState(false)
    return (
        <SafeAreaView>
            <FlatList
                data={listItems}
                renderItem={({item}) => (
                    <View style={styles.listWrap}>
                        <ClearSmallButtonDone
                            title="ОК"
                            onPress={() => taskDone(item.id)}
                        />
                        <Pressable
                        onLongPress={()=>{

                        }}
                        >
                            <Text style={[styles.listItem, item.status ? styles.taskStyleDone : null]}>
                                {item.task}
                                {item.status ? ' DONE' : null}
                            </Text>
                        </Pressable>
                        <ClearSmallButtonDel
                            title="X"
                            onPress={() => deleteTask(item.id)}/>
                    </View>
                )} keyExtractor={listItems.id}/>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    listWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderLeftWidth: 3,
        borderBottomWidth: 1,
        borderBottomColor: '#d5ce7d',
        borderLeftColor: 'rgba(145,141,87,0.3)',
        backgroundColor: 'rgba(231,182,91,0.13)',
        marginBottom: 5,
    },
    listNumber: {
        fontWeight: '600',
        fontSize: 18,
    },
    listItem: {
        width: 200,
        minHeight: 30,
        padding: 10,
        fontSize: 18
    },
    button: {
        backgroundColor: 'blue'
    },
    taskStyleDone: {
        backgroundColor: 'rgba(111,241,107,0.35)',
        textDecorationLine: 'line-through'
    }
})

export default ListItem;