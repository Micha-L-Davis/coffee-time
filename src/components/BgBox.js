import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function BgBox(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#86705d",
    borderRadius: 15
  }
});

export default BgBox;
