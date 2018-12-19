import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, } from "react-native";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor:'#ddd'
    },
    todoContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding:10,
        justifyContent: 'space-between',
    }
});

export default (props) => (
    <ScrollView style={styles.scrollView}>
        {
            props.todos.map((todo, index) => (
                <View key={todo+index} style={styles.todoContainer}>
                    <Text>{todo}</Text>
                    <TouchableOpacity onPress={()=> props.onPressDelete(index)}>
                        <Text>DELETE</Text>
                    </TouchableOpacity>
                </View>
            ))
        }
    </ScrollView>
);