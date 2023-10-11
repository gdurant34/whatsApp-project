import React, { useReducer } from "react";
import Input from "../components/Input";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";

const reducer = (state, action) => {
    const { validationResult, inputId } = action;

    const updatedValidities = {
        ...state.inputValidities,
        [inputId]: validationResult
    };

    let updatedFormIsValid = true;

    for (const key in updatedValidities) {
        if(updatedValidities[key] !== undefined) {
            updatedFormIsValid = false;
            break;
        }
    };

    return {
        inputValidities: updatedValidities,
        formIsValid: updatedFormIsValid
    };
};

const initialState = {
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignUpForm = (props) => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);


    const inputChangedHandler = (inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result })
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
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
