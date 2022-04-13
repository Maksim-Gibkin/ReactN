import {Text, View, TextInput, Button} from "react-native";
import {useState} from "react";

const AddItem = ({addTask, removeAllTasks}) => {
    const [item, setItem] = useState('')
    console.log(item, "ITEM")
    return (
        <View>
            <Text>Enter task to add</Text>
            <TextInput
                style ={{
                borderBottomColor: 'black',
                    borderWidth: 2,
                backgroundColor: 'rgba(128,128,64,0.1)',
                marginTop: 200,
                    height: 50,
                    padding: 10,
                }}
                onChangeText={(value) => {
                    setItem(value)
                }}
            >
            </TextInput>
            <View style={{
                display:'flex',
                flexDirection: 'row',
                marginTop: 10,
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
        </View>
    )
}

export default AddItem;