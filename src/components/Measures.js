import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BgBox from "./BgBox";
import Servings from "./Servings";
import Grounds from "./Grounds";
import Water from "./Water";

function Measures(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bgBoxStack}>
        <BgBox style={styles.bgBox}></BgBox>
        <Servings style={styles.servings}></Servings>
        <Grounds style={styles.grounds}></Grounds>
        <Water style={styles.water}></Water>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bgBox: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  servings: {
    position: "absolute",
    top: 24,
    left: 24,
    height: 34,
    width: 312
  },
  grounds: {
    position: "absolute",
    top: 71,
    left: 60,
    height: 37,
    width: 275
  },
  water: {
    position: "absolute",
    top: 116,
    left: 170,
    height: 31,
    width: 166
  },
  bgBoxStack: {
    flex: 1
  }
});

export default Measures;
