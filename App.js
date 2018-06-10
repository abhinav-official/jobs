import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "./store";
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import DeckScreen from "./screens/DeckScreen";
import MapScreen from "./screens/MapScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";

class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigation />
        </View>
      </Provider>
    );
  }
}
export default  MainNavigation = createBottomTabNavigator({
  Welcome: WelcomeScreen,
  auth: AuthScreen,
  main: createBottomTabNavigator({
    map: MapScreen,
    deck: DeckScreen,
    review: createStackNavigator({
      review: ReviewScreen,
      settings: SettingsScreen
    })
  })
  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
