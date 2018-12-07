import React from "react";
import { View, Text } from "react-native";
import GoToScreenButton from "../components/GoToScreenButton";

const DetailsScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Details aaaaScreen</Text>
    <GoToScreenButton
      title="Go to Home"
      routeName="Home"
      navigation={navigation}
    />
  </View>
);

export default DetailsScreen;
