import React from 'react';
import {Text, View, FlatList} from "react-native";

const ListItem = ({deleteTask, listItems}) => {

    return (
        <View>
            <FlatList data={listItems} renderItem={({item}) => (
                <View>
                    <Text style={{
                        backgroundColor:"rgba(231,91,91,0.13)",
                        width: 100,
                        height: 20,
                        padding: 15,
                        textAlign: 'center',
                    }}>
                        {item.task}
                    </Text>
                </View>
            )} keyExtractor={listItems.id}/>
        </View>
    )
}

export default ListItem;