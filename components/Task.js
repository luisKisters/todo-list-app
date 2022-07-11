import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-web";

const Task = (props) => {
    return (    
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.sqare}></View>
                <Text style={styles.itemText}>{props.text} {props.time}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor: '#6200EE',
        borderWidth: 0.5,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    sqare: {
        width: 24,
        height: 24,
        backgroundColor: '#BB86FC',
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: '#6200EE',
    },
    circular: {
        width: 13,
        height: 13,
        borderColor: '#BB86FC',
        borderWidth: 2,
        borderRadius: 25,
    },
});

export default Task
