import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function SmallBubble(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderRadius: 5
  }
});

export default SmallBubble;
