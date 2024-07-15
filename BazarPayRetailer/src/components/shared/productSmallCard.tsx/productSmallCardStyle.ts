
import {StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';


export const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 3,
        width: "47%",
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 1,
    },
    description: {
        fontSize: 10,
        color: '#666',
    },
    status: {
        fontSize: 9,
        backgroundColor: Colors.light.border,
        width: 47,
        paddingHorizontal: 3,
        borderRadius: 3,
        paddingVertical:2,
        color: "black",
        fontWeight: '500',
    }
});