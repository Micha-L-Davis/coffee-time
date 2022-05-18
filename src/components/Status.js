import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Status(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.statusText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 31
  }
});

export default Status;
