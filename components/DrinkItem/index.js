import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView, View, Text } from "react-native";
import styles from "./styles";

const DrinkItem = (props) => {
  const { name, description, imgURL } = props.drink;

  return (
    <SafeAreaView style={styles.carContainer}>
      <ImageBackground source={{ uri: imgURL }} style={styles.imgURL} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DrinkItem;
