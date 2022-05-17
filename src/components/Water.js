import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MedLabel from "./MedLabel";
import SmallBubble from "./SmallBubble";
import MaterialUnderlineTextbox from "./MaterialUnderlineTextbox";

function Water(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.medLabel5Row}>
        <MedLabel label="Water (g)" style={styles.medLabel5}></MedLabel>
        <View style={styles.smallBubble3Stack}>
          <SmallBubble style={styles.smallBubble3}></SmallBubble>
          <MaterialUnderlineTextbox
            inputStyle="Placeholder"
            inputStyle="702"
            style={styles.waterTextBox}
          ></MaterialUnderlineTextbox>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  medLabel5: {
    width: 103,
    height: 31
  },
  smallBubble3: {
    position: "absolute",
    top: 2,
    left: 1,
    height: 27,
    width: 47
  },
  waterTextBox: {
    height: 27,
    width: 43,
    position: "absolute",
    left: 0,
    top: 0
  },
  smallBubble3Stack: {
    width: 48,
    height: 29,
    marginLeft: 16,
    marginTop: 2
  },
  medLabel5Row: {
    height: 31,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  }
});

export default Water;
