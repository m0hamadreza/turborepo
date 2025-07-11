import * as React from "react";
import {
  StyleSheet,
  GestureResponderEvent,
  Text,
  Pressable,
} from "react-native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <Pressable style={styles.button} className="bg-sky-300" onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems:"center",
    justifyContent:"center",
    // maxWidth: 200,
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 15,
  },
  text: {
    color: "white",
  },
});