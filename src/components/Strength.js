import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BgBox from "./BgBox";
import SmallLabel from "./SmallLabel";
import Radio from "./Radio";
import MedLabel from "./MedLabel";
//import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group'

function Strength(props) {

  const [strength, setStrength] = useState('strong');

  function isCurrentSelection(setting) {
    if (setting === strength) return true;
    else return false;
  }

  function handleSelectorPress(setting) {
    setStrength(setting);
  }

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bgBoxStack}>
        <BgBox style={styles.bgBox} />
        <SmallLabel text="Grounds to Water Ratio" style={styles.smallLabel} />
        <Radio
          style={styles.weakRatioRadio}
          selected={isCurrentSelection('weak') ? true : false}
          handlePress={() => handleSelectorPress('weak')}
        />
        <MedLabel label="1:18" style={styles.weakLabel} />
        <Radio
          style={styles.mediumRatioRadio}
          selected={isCurrentSelection('med') ? true : false}
          handlePress={() => handleSelectorPress('med')}
        />
        <MedLabel label="1:17" style={styles.mediumLabel} />
        <Radio
          style={styles.strongRatioRadio}
          selected={isCurrentSelection('strong') ? true : false}
          handlePress={() => handleSelectorPress('strong')}
        />
        <MedLabel label="1:16" style={styles.strongLabel} />
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
    left: -8,
    height: 22,
    width: 250
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
