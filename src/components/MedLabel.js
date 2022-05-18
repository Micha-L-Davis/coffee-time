import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MedLabel(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>{props.label || "LABEL"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  label: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 268,
    flex: 1
  }
});

export default MedLabel;
