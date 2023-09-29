import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ChatSettingsScreen = props => {

    return <View style={styles.container}>
        <Text>Chat settings Screen</Text>

    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatSettingsScreen;