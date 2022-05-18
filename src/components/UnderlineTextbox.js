import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

function UnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder={props.inputText || "000"}
        maxLength={3}
        keyboardType="numeric"
        returnKeyType="next"
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    marginLeft: 10
  }
});

export default UnderlineTextbox;
