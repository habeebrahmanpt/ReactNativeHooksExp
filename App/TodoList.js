import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function TodoList(props) {
    return (
        <View style={styles.listContainer}>
            <TouchableOpacity onPress={props.setChecked}>
                <Text>{(props.checked) ? "Selected" : "Select"}</Text>
            </TouchableOpacity>
            <Text style={styles.listItem}>{props.text}</Text>
            <TouchableOpacity onPress={props.deleteTodo}>
                <Text>Delete</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: '5%',
        flexDirection: 'row',
        borderColor: '#aaaaaa',
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40,
        justifyContent: 'space-between',
        padding: 10
    },
    listItem: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 6,
        borderColor: 'green',
        borderBottomWidth: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    }
});