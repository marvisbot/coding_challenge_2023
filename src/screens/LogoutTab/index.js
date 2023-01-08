import { View, Text } from "react-native";
import React from "react";

/**
 * Pressing this tab should log you out of the system and take you back to the login screen.
 * @param {*} props
 * @returns a Logout function
 */
export default function LogoutTab(props) {
  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
}
