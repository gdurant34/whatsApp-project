import React, { useCallback, useReducer } from "react";
import Input from "../components/Input";
import { Feather, FontAwesome } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";



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


    const inputChangedHandler = useCallback((inputId, inputValue) => {
        const result = validateInput(inputId, inputValue);
        dispatchFormState({ inputId, validationResult: result })
      }, [dispatchFormState]);

  return (
    <>
      <Input
        id="firstName"
        label="First name"
        autoCapitalize='none'
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["firstName"]}
      />
      <Input
        id="lastName"
        label="Last name"
        autoCapitalize='none'
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["lastName"]}

      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        keyboardType='email-address'
        autoCapitalize='none'
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["email"]}
      />
      <Input
        id="password"
        label="Password"
        autoCapitalize='none'
        secureTextEntry
        icon="lock"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities["password"]}
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
