import { View, Text } from "react-native";
import React from "react";

/** This is the ONLY hardcoded credential that should succesfully log in to the app. 
Every other credential should show an error on the screen as shown in the Figma file. */
const CREDENTIAL = {
  email: "coding_challenge_2023@hippidoo.com",
  password: "123456",
};

/**
 * This is the initial screen a user should see when they open the application for the first time.
 * The input boxes should have error handling. Use your judgement to put best practice error handling. Display the errors as shown in the Figma design.
 * @param {*} props
 * @returns a Login Functional Component
 */
export default function Login(props) {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}
