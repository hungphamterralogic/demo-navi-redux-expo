import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    SecondScreen: { screen: SecondScreen }
  },
  { initialRouteName: "Home" }
);

export default createAppContainer(AppNavigator);
