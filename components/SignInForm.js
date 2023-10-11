import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import { Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";

const initialState = {
    inputValidities: {
        email: false,
        password: false,
    },
    formIsValid: false
}

const SignInForm = (props) => {

    const [formState, dispatchFormState] = useReducer(reducer, initialState);

    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result })
      }, [dispatchFormState]);

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
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignInForm;
