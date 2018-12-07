import React from "react";
import { View, Text } from "react-native";
import GoToScreenButton from "../../components/GoToScreenButton";
import IncreaseButton from "../../components/IncreaseButton";
import NumberOnState from "../../components/NumberOnState";

const SecondScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <NumberOnState />
    <Text>Second Screen</Text>
    <GoToScreenButton
      title="Go to Home"
      routeName="Home"
      navigation={navigation}
    />
    <IncreaseButton />
  </View>
);

export default SecondScreen;
