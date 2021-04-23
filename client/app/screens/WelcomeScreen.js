import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/backgroundflower.png")}
    >
      <View style={styles.logoContainer}>
        <Text>Meds</Text>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});
export default WelcomeScreen;
