import React, { useState, useEffect } from "react";
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

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginTop: "5%",
        }}
      />
    );
  };

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
          backgroundColor: "#fff",
          padding: 15,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          status="info"
          onChangeText={handleSearch}
          placeholder="Search"
          style={{
            borderRadius: 25,
            borderColor: "black",
            backgroundColor: "#fff",
          }}
          textStyle={{ color: "#000" }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={drink}
        keyExtractor={(item) => item.firebaseKey}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
        ListHeaderComponent={renderHeader}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        renderItem={({ item }) => (
          <DrinkItem key={item.firebaseKey} drink={item} />
        )}
      />
    </View>
  );
};

export default DrinkList;
