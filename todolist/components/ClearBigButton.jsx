import {Text, TouchableOpacity, StyleSheet} from "react-native";


const ClearBigButton = ({title, onPress}) => {

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.button_text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(0,24,141,0.27)',
        width: '30%',
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: 'rgba(0,24,141,0.08)',
        borderRadius: 25,
    },
    button_text: {
        fontWeight: '600',
        fontSize: 18,
        color: 'rgb(255,255,255)',
        textAlign: 'center',
    },
})
export default ClearBigButton;