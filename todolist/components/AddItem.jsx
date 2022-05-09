import {View, TextInput, StyleSheet, Button} from "react-native";
import {useContext, useState} from "react";
import ClearBigButton from "./ClearBigButton";
import {AbilityContext, Can} from "../Casl/Can";
import {updateAbilityOff, updateAbilityOn} from "../Casl/ability";

const AddItem = ({addTask, removeAllTasks}) => {
    const [item, setItem] = useState('')
    const abi = useContext(AbilityContext)

    return (
        <>
            <Button
                title="caslOFF"
                onPress={() => {
                    updateAbilityOff(abi)
                }}
            />
            <Button
                title="caslOn"
                onPress={() => {
                    updateAbilityOn(abi)
                }}
            />
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
                <Can I="create" a="Todo">
                    <ClearBigButton
                        title="Submit"
                        onPress={() => {
                            if (item !== '') {
                                addTask(item)
                                setItem('')
                            }
                        }}
                    />
                </Can>
                <Can I="delete" a="Todo">
                    <ClearBigButton
                        title="Remove All"
                        onPress={() => {
                            removeAllTasks()
                        }}
                    />
                </Can>
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
        width: '75%',
        padding: 5,
    },
    buttonWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default AddItem;