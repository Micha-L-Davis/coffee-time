import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MedLabel from "./MedLabel";
import SmallBubble from "./SmallBubble";
import UnderlineTextbox from "./UnderlineTextbox";

function Servings(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.medLabel6Row}>
        <MedLabel
          label="Qty. of 12 oz. Servings"
          style={styles.medLabel6}
        ></MedLabel>
        <View style={styles.smallBubbleStack}>
          <SmallBubble style={styles.smallBubble}></SmallBubble>
          <UnderlineTextbox
            inputStyle="Placeholder"
            inputText="2"
            style={styles.servingsTextBox}
          ></UnderlineTextbox>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  medLabel6: {
    width: 249,
    height: 31,
    marginTop: 3
  },
  smallBubble: {
    position: "absolute",
    top: 3,
    left: 2,
    height: 27,
    width: 47
  },
  servingsTextBox: {
    height: 27,
    width: 43,
    position: "absolute",
    left: 0,
    top: 0
  },
  smallBubbleStack: {
    width: 49,
    height: 30,
    marginLeft: 14
  },
  medLabel6Row: {
    height: 34,
    flexDirection: "row",
    flex: 1
  }
});

export default Servings;
