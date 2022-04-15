import {Text, View, TextInput, Button, SafeAreaView} from "react-native";
import {useState} from "react";

const AddItem = ({addTask, removeAllTasks}) => {
    const [item, setItem] = useState('')
    return (
        <SafeAreaView >
            <TextInput
                style={{
                    borderWidth: 1,
                    backgroundColor: 'rgba(128,128,64,0.1)',
                    marginTop: 30,
                    height: 40,
                    padding: 5,
                }}
                onChangeText={(value) => {
                    setItem(value)
                }}
                clearButtonMode='while-editing'
            >
            </TextInput>
            <View style={{
                display:'flex',
                flexDirection: 'row',
                margin: 5,
            }}>
                <Button
                    title="Submit"
                    onPress={() => {
                        addTask(item)
                    }}
                ></Button>
                <Button
                    title="Remove All"
                    onPress={() => {
                        removeAllTasks()
                    }}
                ></Button>
            </View>
        </SafeAreaView>
    )
}

export default AddItem;