import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const SubmitButton = props => {

    const enabledBgColor = props.color || colors.primary;
    const disabledBgColor = colors.lightGrey
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor;

    return <TouchableOpacity style={{...styles.button, ...{backgroundColor: bgColor}}}>
        <Text style={{ color: props.disabled ? colors.grey : "white" }}>
            Click me
            </Text>
    </TouchableOpacity>

};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center'
    }
});

export default SubmitButton;