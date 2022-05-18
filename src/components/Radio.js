import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Radio(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.handlePress}>
      <Icon
        name={props.selected ? "ios-radio-button-on" : "md-radio-button-off"}
        style={[
          styles.radioIcon,
          {
            color: "#ccc"
          }
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent"
  },
  radioIcon: {
    fontSize: 23
  }
});

export default Radio;
