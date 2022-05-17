import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MedLabel from "./MedLabel";
import SmallBubble from "./SmallBubble";
import MaterialUnderlineTextbox from "./MaterialUnderlineTextbox";

function Grounds(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.medLabel4Row}>
        <MedLabel
          label="Coffee Grounds (g)"
          style={styles.medLabel4}
        ></MedLabel>
        <View style={styles.smallBubble2Stack}>
          <SmallBubble style={styles.smallBubble2}></SmallBubble>
          <MaterialUnderlineTextbox
            inputStyle="Placeholder"
            inputStyle="44"
            style={styles.groundsTextBox}
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
  medLabel4: {
    width: 213
  },
  smallBubble2: {
    position: "absolute",
    top: 3,
    left: 3,
    height: 27,
    width: 47
  },
  groundsTextBox: {
    height: 27,
    width: 43,
    position: "absolute",
    left: 0,
    top: 0
  },
  smallBubble2Stack: {
    width: 50,
    height: 30,
    marginLeft: 13
  },
  medLabel4Row: {
    height: 37,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  }
});

export default Grounds;
