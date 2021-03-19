import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import AppButton from "../components/AppButton";
import Colors from "../utils/colors";
import useStatusBar from "../hooks/useStatusBar";

export default function WelcomeScreen({ navigation }) {
  useStatusBar("light-content");

  const [loaded] = useFonts({
    RyeRegular: require("../assets/fonts/Rye-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/lastdrinx.jpg")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.subtitle}>DRINX</Text>
      <View style={styles.buttonContainer}>
        <AppButton
          color="black"
          style={styles.login}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          color="black"
          style={styles.login}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Colors.mediumGrey,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  logo: {
    flex: 1,
    resizeMode: "cover",
  },
  subtitle: {
    color: "white",
    width: "100%",
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: 100,
    fontFamily: "RyeRegular",
  },
  buttonContainer: {
    padding: 20,
    paddingBottom: 60,
    width: "100%",
  },
  login: {
    opacity: 0.7,
    width: "90%",
    height: "25%",
    borderRadius: 20,
    color: "white",
  },
});
