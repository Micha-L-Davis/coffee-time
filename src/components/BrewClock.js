import React, { useReducer, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import BgBox from "./BgBox";
import Timer from "./Timer";
import Countdown, { zeroPad } from "react-countdown";


function BrewClock(props) {
  const countDownRenderer = ({ minutes, seconds, milliseconds, completed, api }) => {
    if (!api.isStarted) return <Timer style={styles.timer} timeText={{ minutes: '04', seconds: '00', milliseconds: '00' }} />
    if (+minutes === 3 && +seconds <= 59 && +seconds > 45) {
      return <Timer
        style={styles.timer}
        timeText={{ minutes: zeroPad(minutes), seconds: zeroPad(seconds), milliseconds: zeroPad(milliseconds) }}
        status='Bloom to XXXg'
        api={api}
      />
    }
    if (+minutes === 3 && +seconds <= 45 && +seconds > 30) {
      // play wait audio
      return <Timer
        style={styles.timer}
        timeText={{ minutes: zeroPad(minutes), seconds: zeroPad(seconds), milliseconds: zeroPad(milliseconds) }}
        status='Wait...'
        api={api}
      />
    }
    if (+minutes === 3 && +seconds === 34 && +milliseconds <= 50) {
      // play warning audio
    }
    if (+minutes === 3 && +seconds <= 29 && +seconds > 0) {
      return <Timer
        style={styles.timer}
        timeText={{ minutes: zeroPad(minutes), seconds: zeroPad(seconds), milliseconds: zeroPad(milliseconds) }}
        status='First pour to XXXg'
        api={api}
      />
    }
    if (+minutes === 2 && +seconds <= 59 && +seconds > 30) {
      // play wait audio
      return <Timer
        style={styles.timer}
        timeText={{ minutes: zeroPad(minutes), seconds: zeroPad(seconds), milliseconds: zeroPad(milliseconds) }}
        status='Wait...'
        api={api}
      />
    }
    if (+minutes === 2 && +seconds === 34 && +milliseconds <= 50) {
      // play warn audio
    }
    if (+minutes === 2 && +seconds <= 30 && +seconds > 0) {
      return <Timer
        style={styles.timer}
        timeText={{ minutes: zeroPad(minutes), seconds: zeroPad(seconds), milliseconds: zeroPad(milliseconds) }}
        status='Second pour to XXXg'
        api={api}
      />
    }
    if (+minutes <= 1 && +seconds <= 59) {
      // play wait audio
      return <Timer
        style={styles.timer}
        timeText={{ minutes: zeroPad(minutes), seconds: zeroPad(seconds), milliseconds: zeroPad(milliseconds) }}
        status='Wait...'
        api={api}
      />
    }

    if (completed) {
      //play completion sound
      setIsRunning(false);
      return <Timer style={styles.timer} timeText={{ minutes: '00', seconds: '00', milliseconds: '00' }} status='' api={api} />
    }
  }

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bgBox2Stack}>
        <BgBox style={styles.bgBox2}></BgBox>
        <Countdown
          date={Date.now() + 240000}
          renderer={countDownRenderer}
          intervalDelay={0}
          precision={3}
          autoStart={false}
        />
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
