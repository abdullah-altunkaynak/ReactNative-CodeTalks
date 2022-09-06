import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    Input: {
        width: '90%',
        alignSelf: 'center',
        borderTopWidth: 0,
        borderBottomWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#FC5185',
       // backgroundColor: '#CBF1F5',
        marginTop: 20,
        borderRadius: 0,
        color: '#CBF1F5',
        padding: 7,
        fontSize: 17
    }
});

export default {
    Input: StyleSheet.create({
        ...base_style.Input,
    }),
    InputFocus: StyleSheet.create({
        ...base_style.Input,
        backgroundColor: '#FC5185',
        borderColor: '#CBF1F5',
        color: '#CBF1F5',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderRadius:5
    })
};