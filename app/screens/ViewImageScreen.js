import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.close}></View>
      <View style={styles.delete}></View>

      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.black },
  image: { height: "100%", width: "100%" },
  close: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 50,
    left: 30,
  },
  delete: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 50,
    right: 30,
  },
});

export default ViewImageScreen;
