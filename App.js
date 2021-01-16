import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Fb from "./Screens/Fb";
import In from "./Screens/In";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const tabNav = createBottomTabNavigator(
  {
    Facebook: { screen: Fb },
    Instagram: { screen: In },
  })
  const AppContainer = createAppContainer(tabNav);
