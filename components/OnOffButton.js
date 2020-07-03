import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ToastAndroid } from "react-native";

export default function Huffleton(props) {
  const [on, setOn] = useState(false)
  const [text, setText] = useState("")
  const [color, setColor] = useState("")

  const handleClick = () => {
    setOn(!on)
  }

  useEffect(() => {
    if (on === true) {
      setText(props.textOn)
      setColor(props.colorOn)
      ToastAndroid.show("Regadores acionados.", ToastAndroid.SHORT)
    } else {
      setText(props.textOff)
      setColor(props.colorOff)
      ToastAndroid.show("Regadores desativados.", ToastAndroid.SHORT)
    }
  }, [on])

  return (
    <View style={{...styles.container, backgroundColor: color }} onTouchEnd={() => handleClick()}>
      <View style={styles.center}>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "80%",
    borderRadius: 15
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
