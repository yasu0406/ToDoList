/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
} from "react-native";

export default class App extends Component<> {
    state = {
        newTodo: '',
    }

    onChangeText(newTodo) {
        this.setState({ newTodo })
    }

    render() {
        console.log(this.state);
        return (
            <View styles={styles.container}>
                <TextInput
                    style={styles.form}
                    onChangeText={text => this.onChangeText(text)}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    form: {
        backgroundColor: '#EEE',
        padding:10,
        marginTop: 40,
    }
});