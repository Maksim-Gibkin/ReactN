import React from 'react';
import {Text, View, FlatList, SafeAreaView, Button, StyleSheet} from "react-native";
import ClearSmallButton from "./ClearSmallButton";

const ListItem = ({deleteTask, listItems, getList, isLoading}) => {


    return (
        <SafeAreaView>
            <FlatList
                data={listItems}
                onRefresh = {getList}
                refreshing={isLoading}
                renderItem={({item}) => (
                <View style={styles.listWrap}>
                    <Text style={styles.listItem}>
                        {listItems.findIndex((el) => el.id === item.id ? true : null) + 1 + ') '}
                        {item.task}
                    </Text>
                    <ClearSmallButton
                        title="X"
                        onPress={() => deleteTask(item.id)} />
                </View>
            )} keyExtractor={listItems.id}/>
        </SafeAreaView>
    )
}

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
    listItem: {
        width: 200,
        minHeight: 30,
        padding: 10,
    }
})

export default ListItem;