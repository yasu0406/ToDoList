import React, { Component } from 'react';
import {ScrollView, Text, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor:'#ddd'
    },
    todoContainer: {
        backgroundColor: '#fff',
        padding:10,
    }
});

export default (props) => (
    <ScrollView style={styles.scrollView}>
        {
            props.todos.map((todo, index) => (
                <View key={todo+index} style={styles.todoContainer}>
                    <Text>{todo}</Text>
                </View>
            ))
        }
    </ScrollView>
);