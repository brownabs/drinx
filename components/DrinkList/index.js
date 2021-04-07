import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, FlatList, Dimensions, TextInput } from "react-native";
import DrinkData from "../../data/drinkData";
import DrinkItem from "../DrinkItem";
import styles from "./styles";

const DrinkList = (props) => {
  const [drink, setDrinks] = useState([]);

  useEffect(() => {
    DrinkData.getDrinks().then((response) => {
      setDrinks(response);
    });
    console.log(drink);
  }, []);

  const handleSearch = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      />
    );
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#F2F2F2",
          padding: 15,
          margin: 10,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "#C8A2C8",
          borderWidth: 5,
        }}
      >
        <TextInput
          id="search"
          autoCapitalize="none"
          autoCorrect={false}
          status="info"
          onChangeText={handleSearch}
          placeholder="Search Drink"
          style={{
            borderRadius: 10,
            borderColor: "black",
            fontSize: 25,
          }}
          textStyle={{ color: "#000" }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={drink}
        keyExtractor={(item) => item.firebaseKey}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        renderItem={({ item }) => (
          <DrinkItem key={item.firebaseKey} drink={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default DrinkList;
