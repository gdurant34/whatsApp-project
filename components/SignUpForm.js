import React from "react";
import Input from "../components/Input";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { validate } from "validate.js";

const SignUpForm = (props) => {


    const inputChangedHandler = (inputId, inputValue) => {
        if (inputId === 'firstName' || inputId === 'lastName') {
            console.log(validate({ 'firstName': inputValue }, { 'firstName': { presence: { allowEmpty: false } } }))
        }
        else if (inputId === 'email') {

        }
        else if (inputId === 'password') {

        }
    };

  return (
    <>
      <Input id='firstName' label="First name" icon="user-o" iconPack={FontAwesome} onInputChanged={inputChangedHandler} />
      <Input id='lastName' label="Last name" icon="user-o" iconPack={FontAwesome} onInputChanged={inputChangedHandler} />
      <Input id='email' label="Email" icon="mail" iconPack={Feather} onInputChanged={inputChangedHandler} />
      <Input id='password' label="Password" icon="lock" iconPack={Feather} onInputChanged={inputChangedHandler} />
      <SubmitButton
        title="Sign up"
        onPress={() => console.log("button pressed")}
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default SignUpForm;
