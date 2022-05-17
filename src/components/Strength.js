import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BgBox from "./BgBox";
import SmallLabel from "./SmallLabel";
import CupertinoRadio from "./CupertinoRadio";
import MedLabel from "./MedLabel";

function Strength(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bgBoxStack}>
        <BgBox style={styles.bgBox}></BgBox>
        <SmallLabel
          small="Grounds to Water Ratio"
          style={styles.smallLabel}
        ></SmallLabel>
        <CupertinoRadio style={styles.weakRatioRadio}></CupertinoRadio>
        <MedLabel label="1:18" style={styles.weakLabel}></MedLabel>
        <CupertinoRadio style={styles.mediumRatioRadio}></CupertinoRadio>
        <MedLabel
          text="1:18"
          label="1:17"
          style={styles.mediumLabel}
        ></MedLabel>
        <CupertinoRadio style={styles.strongRatioRadio}></CupertinoRadio>
        <MedLabel label="1:16" style={styles.strongLabel}></MedLabel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bgBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  smallLabel: {
    position: "absolute",
    top: 15,
    left: 14,
    height: 22,
    width: 185
  },
  weakRatioRadio: {
    height: 40,
    width: 40,
    position: "absolute",
    left: 14,
    top: 37
  },
  weakLabel: {
    position: "absolute",
    top: 42,
    left: 54,
    height: 31,
    width: 48
  },
  mediumRatioRadio: {
    position: "absolute",
    left: 136,
    top: 37,
    width: 40,
    height: 40
  },
  mediumLabel: {
    position: "absolute",
    left: 180,
    top: 42,
    width: 48,
    height: 31
  },
  strongRatioRadio: {
    position: "absolute",
    left: 252,
    top: 37,
    width: 40,
    height: 40
  },
  strongLabel: {
    position: "absolute",
    left: 292,
    top: 42,
    width: 48,
    height: 31
  },
  bgBoxStack: {
    flex: 1
  }
});

export default Strength;
