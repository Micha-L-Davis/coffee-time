import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Counter from "./Counter";

function Timer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.minutesRow}>
        <Counter style={styles.minutes} count={props.timeText.minutes} />
        <Text style={styles.separator}>:</Text>
        <Counter style={styles.seconds} count={props.timeText.seconds} />
        <Text style={styles.text}>:</Text>
        <Counter style={styles.milliseconds} count={props.timeText.milliseconds} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  minutes: {
    height: 103,
    width: 97,
    marginTop: 8
  },
  separator: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 86
  },
  seconds: {
    height: 103,
    width: 97,
    marginTop: 8
  },
  text: {
    // fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 86
  },
  milliseconds: {
    height: 103,
    width: 97,
    marginTop: 8
  },
  minutesRow: {
    height: 111,
    flexDirection: "row",
    flex: 1,
    marginTop: -8
  }
});

export default Timer;
