import _ from "lodash";
import React from 'react';
import { AppLoading } from "expo";
import { Text, View, AsyncStorage } from 'react-native';

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: 'Welcome to JobApp' , color: '#03A9F4' },
  { text: 'Use this to get a Job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }  
];

export default class WelcomeScreen extends React.Component {

  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    }
    else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {

    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return (
      <Slides data = {SLIDE_DATA} onComplete={this.onSlidesComplete} /> 
    );
  }
}
