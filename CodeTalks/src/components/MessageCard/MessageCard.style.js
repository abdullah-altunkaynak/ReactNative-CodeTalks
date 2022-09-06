import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Container:{
        width: '95%',
        backgroundColor: 'orange',
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 10,
        flexWrap: 'wrap',
        marginBottom: 10
    },
    UserText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        width: '50%',
        textAlign: 'left',
        padding: 10,
    },
    DateText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
        width: '50%',
        textAlign: 'right',
        padding: 10,
    },
    MessageText: {
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
        paddingLeft: 20,
        textAlign: 'left'
    }
});