import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Strength from "../components/Strength";
import Measures from "../components/Measures";
import BrewClock from "../components/BrewClock";

function Main(props) {
  return (
    <View style={styles.container}>
      <Header style={styles.header}></Header>
      <Strength style={styles.strength}></Strength>
      <Measures style={styles.measures}></Measures>
      <BrewClock style={styles.brewClock}></BrewClock>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(24,18,14,1)",
    borderRadius: 5
  },
  header: {
    backgroundColor: "#86705d",
    height: 49,
    marginTop: 43
  },
  strength: {
    height: 87,
    marginTop: 21
  },
  measures: {
    height: 170,
    marginTop: 23
  },
  brewClock: {
    height: 271,
    marginTop: 34
  }
});

export default Main;
