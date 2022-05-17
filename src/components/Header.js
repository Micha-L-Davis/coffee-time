import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Header(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.coffeeTime}>Coffee Time</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    backgroundColor: "rgba(134,112,93,1)",
    flex: 1
  },
  coffeeTime: {
    // fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 10,
    marginLeft: 35
  }
});

export default Header;
