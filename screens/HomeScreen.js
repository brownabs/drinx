import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Text, Image } from "react-native";
import { Card } from "react-native-elements";
import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase";
import Colors from "../utils/colors";
import DrinkList from "../components/DrinkList";

export default function HomeScreen() {
  useStatusBar("dark-content");
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <DrinkList />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
