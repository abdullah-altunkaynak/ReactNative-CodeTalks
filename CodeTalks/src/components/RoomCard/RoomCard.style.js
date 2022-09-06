import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Wrapper: {
        width: '40%',
        height: 150,
        margin: 20
    },
    Container: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: '#3F72AF',
        borderRadius: 5,
        padding: 8,
        justifyContent: 'center',
    },
    NameText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FC5185',
        textAlign: 'center'
    },
    CounterText: {
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#CBF1F5',
        position: 'absolute',
        bottom: 10,
        right: 10
    }
});