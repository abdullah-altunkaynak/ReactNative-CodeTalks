import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    Container: {
        width: '100%',
        alignSelf: 'center',
        borderRadius: 7,
        padding: 5,
        justifyContent: 'center'
    },
    Text: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
export default {
    Wrapper: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        borderRadius: 7,
    },
    Container: StyleSheet.create({
        ...base_style.Container,
    }),
    Inner: StyleSheet.create({
        ...base_style.Container,
        backgroundColor: '#3F72AF',
    }),
    Outer: StyleSheet.create({
        ...base_style.Container,
        borderWidth: 2,
        borderColor: '#3F72AF',
        backgroundColor: 'white',
    }),
    InnerText: StyleSheet.create({
        ...base_style.Text,
        color: 'white'
   }),
    OuterText: StyleSheet.create({
        ...base_style.Text,
        color: '#3F72AF'
    })
};