import { useReducer, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import BgBox from "./BgBox";
import Timer from "./Timer";
import Status from "./Status";
import ButtonDark from "./ButtonDark";
import { Audio } from 'expo-av';

function BrewClock(props) {
  const [waitAudio, setWaitAudio] = useState();
  const [warnAudio, setWarnAudio] = useState();
  const [completedAudio, setCompletedAudio] = useState();
  const [startAudio, setStartAudio] = useState();

  async function playStartAudio() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio/start.wav')
    );
    setStartAudio(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return startAudio ?
      () => startAudio.unloadAsync() :
      undefined,
      [startAudio]
  });

  async function playWaitAudio() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio/wait.wav')
    );
    setWaitAudio(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return startAudio ?
      () => startAudio.unloadAsync() :
      undefined,
      [startAudio]
  });

  async function playWarnAudio() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio/warn.wav')
    );
    setWarnAudio(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return warnAudio ?
      () => warnAudio.unloadAsync() :
      undefined,
      [warnAudio]
  });

  async function playCompletedAudio() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/audio/completed.wav')
    );
    setCompletedAudio(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return completedAudio ?
      () => completedAudio.unloadAsync() :
      undefined,
      [completedAudio]
  });

  const initialState = {
    minutes: '04',
    seconds: '00',
    hundredthSeconds: '00',
    statusText: '',
    isRunning: false,
  }
  const [time, dispatch] = useReducer(timeReducer, initialState);

  function timeReducer(state, action) {
    switch (action.type) {
      case 'START_STOP':
        let toggle = !state.isRunning
        return { ...state, isRunning: toggle };
      case 'DECREMENT':
        let hs = +state.hundredthSeconds - 1;
        let ss = +state.seconds;
        let mm = +state.minutes;
        //console.log(mm, ss, hs);
        if (hs < 0 && (ss > 0 || mm > 0)) {
          hs = 99;
          ss--;
        }
        if (ss < 0 && mm > 0) {
          ss = 59;
          mm--;
        }
        else if (ss < 0 && mm <= 0) {
          ss = 0;
        }

        if (mm < 0) {
          mm = 0;
        }
        return {
          ...state,
          minutes: mm.toString().padStart(2, '0'),
          seconds: ss.toString().padStart(2, '0'),
          hundredthSeconds: hs.toString().padStart(2, '0')
        };
      case 'RESET':
        return initialState;
      case 'STATUS_UPDATE':
        return { ...state, statusText: action.payload };
      default:
        return state;
    }
  }


  function resetTimer() {
    dispatch({ type: 'RESET', payload: null });
  }

  function decrementTimer() {
    dispatch({ type: 'DECREMENT', payload: null });
    checkStatus();
  }

  function updateStatus(string) {
    dispatch({ type: 'STATUS_UPDATE', payload: string });
  }

  function startStopTimer() {
    playStartAudio();
    dispatch({ type: 'START_STOP', payload: null })
  }

  function checkStatus() {
    if (+time.minutes === 3 && +time.seconds <= 59 && +time.seconds > 45) {
      updateStatus('Bloom to XXXg');
    }
    if (+time.minutes === 3 && +time.seconds <= 45 && +time.seconds > 30) {
      updateStatus('Wait...');
      playWaitAudio();
    }
    if (+time.minutes === 3 && +time.seconds === 34 && +time.hundredthSeconds <= 50) {
      playWarnAudio()
    }
    if (+time.minutes === 3 && +time.seconds <= 29 && +time.seconds > 0) {
      updateStatus('First pour to XXXg');
    }
    if (+time.minutes === 2 && +time.seconds <= 59 && +time.seconds > 30) {
      updateStatus('Wait...');
      playWaitAudio();
    }
    if (+time.minutes === 2 && +time.seconds === 34 && +time.hundredthSeconds <= 50) {
      playWarnAudio();
    }
    if (+time.minutes === 2 && +time.seconds <= 30 && +time.seconds > 0) {
      updateStatus('Second pour to XXXg');
    }
    if (+time.minutes <= 1 && +time.seconds <= 59) {
      updateStatus('Wait...');
      playWaitAudio();
    }

    if (+time.hundredthSeconds <= 0 && +time.seconds <= 0 && +time.minutes <= 0) {
      isRunning = false;
      // play complete audio
      playCompletedAudio();
    }
  }

  useEffect(() => { if (time.isRunning) timerLoop(); }, [time.hundredthSeconds])
  useEffect(() => { if (time.isRunning) decrementTimer(); }, [time.isRunning])

  function timerLoop() {
    //console.log('time state: ', time);

    if (time.isRunning) {
      setTimeout(decrementTimer, 10);
    } else {
      clearTimeout();
    }
  }

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bgBox2Stack}>
        <BgBox style={styles.bgBox2}></BgBox>
        <Timer style={styles.timer} timeText={{ minutes: time.minutes, seconds: time.seconds, hundredthSeconds: time.hundredthSeconds }} />
        <Status style={styles.status} statusText={time.status} />
        <ButtonDark
          caption={!time.isRunning ? "START" : "STOP"}
          style={styles.materialButtonDark}
          handlePress={startStopTimer}
        />
        <ButtonDark
          caption="RESET"
          style={styles.materialButtonDark2}
          handlePress={resetTimer}
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
