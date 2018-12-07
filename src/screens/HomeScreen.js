import React from "react";
import { View, Text } from "react-native";
import GoToScreenButton from "../components/GoToScreenButton";

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Home Screen</Text>
    <GoToScreenButton
      title="Go to Details"
      routeName="Details"
      navigation={navigation}
    />
  </View>
);

export default HomeScreen;
