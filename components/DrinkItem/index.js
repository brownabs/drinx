import React from "react";
import { ImageBackground } from "react-native";
import { View, Text } from "react-native";
import styles from "./styles";
import { useFonts } from "expo-font";

const DrinkItem = (props) => {
  const { name, description, imgURL } = props.drink;

  return (
    <View style={styles.drinkContainer}>
      <ImageBackground source={{ uri: imgURL }} style={styles.imgURL} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default DrinkItem;
