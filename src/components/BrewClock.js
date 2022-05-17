import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BgBox from "./BgBox";
import Timer from "./Timer";
import Status from "./Status";
import MaterialButtonDark from "./MaterialButtonDark";

function BrewClock(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bgBox2Stack}>
        <BgBox style={styles.bgBox2}></BgBox>
        <Timer style={styles.timer}></Timer>
        <Status style={styles.status}></Status>
        <MaterialButtonDark
          caption="RESET"
          style={styles.materialButtonDark}
        ></MaterialButtonDark>
        <MaterialButtonDark
          caption="RESET"
          style={styles.materialButtonDark2}
        ></MaterialButtonDark>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bgBox2: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  timer: {
    position: "absolute",
    top: 31,
    left: 14,
    height: 103,
    width: 333
  },
  status: {
    position: "absolute",
    top: 127,
    left: 69,
    height: 38,
    width: 223
  },
  materialButtonDark: {
    height: 50,
    width: 100,
    position: "absolute",
    left: 33,
    top: 190
  },
  materialButtonDark2: {
    height: 50,
    width: 100,
    position: "absolute",
    left: 225,
    top: 190
  },
  bgBox2Stack: {
    flex: 1
  }
});

export default BrewClock;
