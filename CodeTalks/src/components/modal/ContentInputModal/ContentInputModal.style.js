import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    Wrapper: {
        justifyContent: 'flex-end',
        margin: 0
    },
    Container: {
        backgroundColor: 'white',
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    TextInput: {
        color: 'black'
    },
    Button: {
        alignSelf: 'center'
    }
});