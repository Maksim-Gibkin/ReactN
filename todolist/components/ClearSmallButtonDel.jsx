import {Text, TouchableOpacity, StyleSheet} from "react-native";


const ClearSmallButtonDel = ({title, onPress}) => {

    return (
        <TouchableOpacity style={styles.buttonSmall} onPress={onPress}>
            <Text style={styles.button_textSmall}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSmall:{
        backgroundColor: 'rgba(141,16,0,0.47)',
        width: '10%',
        padding: 1,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 25
    },
    button_textSmall: {
        fontWeight: '500',
        fontSize: 14,
        color: 'rgb(255,255,255)',
        textAlign: 'center',
    },
})
export default ClearSmallButtonDel;