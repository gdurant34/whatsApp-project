import React from "react";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";

const SignInForm = (props) => {
  const inputChangedHandler = (inputId, inputValue) => {
    console.log(validateInput(inputId, inputValue))
  };

  return (
    <>
      <Input
        id="email"
        keyboardType="email-address"
        autoCapitalize="none"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
      />
      <Input
        id="password"
        autoCapitalize="none"
        secureTextEntry
        label="Password"
        icon="lock"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
      />
      <SubmitButton
        title="Sign in"
        onPress={() => console.log("button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;
