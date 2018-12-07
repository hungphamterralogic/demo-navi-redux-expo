import React from "react";
import { View, Text } from "react-native";
import GoToScreenButton from "../../components/GoToScreenButton";
import IncreaseButton from "../../components/IncreaseButton";
import NumberOnState from "../../components/NumberOnState";

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <NumberOnState />
    <Text>Home Screen</Text>
    <GoToScreenButton
      title="Go to Second Screen"
      routeName="SecondScreen"
      navigation={navigation}
    />
    <IncreaseButton />
  </View>
);

export default HomeScreen;
