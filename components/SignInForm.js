import React from "react";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";

const SignInForm = (props) => {
  return (
    <>
      <Input label="Email" icon="mail" iconPack={Feather} />
      <Input label="Password" icon="lock" iconPack={Feather} />
      <SubmitButton
        title="Sign in"
        onPress={() => console.log("button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignInForm;