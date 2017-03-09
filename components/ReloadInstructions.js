import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default () =>
    <Text style={styles.instructions}>
        Press the button below to navigate to the next scene?
    </Text>;



const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: 'grey',
        marginBottom: 5,
    }
});