import { View, TextInput, StyleSheet} from "react-native";
import {useState} from "react";
import ClearBigButton from "./ClearBigButton";

const AddItem = ({addTask, removeAllTasks}) => {
    const [item, setItem] = useState('')
    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={(value) => {
                    setItem(value)
                }}
                clearButtonMode='while-editing'
                value={item}
            >
            </TextInput>
            <View style={styles.buttonWrap}>
                <ClearBigButton
                    title="Submit"
                    onPress={() => {
                        if(item !== ''){
                            addTask(item)
                            setItem('')
                        }
                    }}
                />
                <ClearBigButton
                    title="Remove All"
                    onPress={() => {
                        removeAllTasks()
                    }}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        backgroundColor: 'rgba(128,128,64,0.1)',
        marginTop: 30,
        height: 40,
        width:'75%',
        padding: 5,
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default AddItem;