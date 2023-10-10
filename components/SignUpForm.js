import React from "react";
import Input from "../components/Input";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import {
  validateEmail,
  validatePassword,
  validateString,
} from "../utils/validationConstraints";

const SignUpForm = (props) => {
  const inputChangedHandler = (inputId, inputValue) => {
    if (inputId === "firstName" || inputId === "lastName") {
      console.log(validateString(inputId, inputValue));
    } else if (inputId === "email") {
      console.log(validateEmail(inputId, inputValue));
    } else if (inputId === "password") {
      console.log(validatePassword(inputId, inputValue));
    }
  };

  return (
    <>
      <Input
        id="firstName"
        label="First name"
        autoCapitalize='none'
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="lastName"
        label="Last name"
        autoCapitalize='none'
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        keyboardType='email-address'
        autoCapitalize='none'
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="password"
        label="Password"
        autoCapitalize='none'
        secureTextEntry
        icon="lock"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
      />
      <SubmitButton
        title="Sign up"
        onPress={() => console.log("button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
