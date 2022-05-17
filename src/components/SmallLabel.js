import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function SmallLabel(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.small}>{props.small || "Small"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  small: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default SmallLabel;
