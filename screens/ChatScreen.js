import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import backgroundImage from "../assets/images/droplet.jpeg";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import colors from "../constants/colors";

const ChatScreen = (props) => {
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      ></ImageBackground>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => console.log("Pressed!")}
          styles={styles.mediaButton}
        >
          <Feather name="plus" size={24} color={colors.blue} />
        </TouchableOpacity>
        <TextInput style={styles.textbox} />
        <TouchableOpacity
          onPress={() => console.log("Pressed!")}
          styles={styles.mediaButton}
        >
          <Feather name="camera" size={24} color={colors.blue} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
});

export default ChatScreen;
