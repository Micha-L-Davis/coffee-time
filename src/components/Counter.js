import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Counter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.digits}>00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  digits: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 86
  }
});

export default Counter;
