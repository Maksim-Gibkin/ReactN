import React, {useEffect} from 'react';
import {Text, View, FlatList, SafeAreaView, Button} from "react-native";

const ListItem = ({deleteTask, listItems}) => {
    return (
        <SafeAreaView>
            <FlatList data={listItems} renderItem={({item}) => (
                <View style={{
                    display: 'flex',
                    flexDirection:'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    borderLeftWidth: 3,
                    borderBottomWidth:1,
                    borderBottomColor:'#d5ce7d',
                    borderLeftColor:'rgba(145,141,87,0.3)',
                    backgroundColor:'rgba(231,182,91,0.13)',
                    marginBottom:5,
                }}>
                    <Text style={{
                        width: 200,
                        height: 30,
                        padding: 10,
                    }}>
                        {item.task}
                    </Text>
                    <Button
                    title="Delete"
                    onPress={ () => deleteTask(item.id) }
                    >
                    </Button>
                </View>
            )} keyExtractor={listItems.id}/>
        </SafeAreaView>
    )
}

export default ListItem;