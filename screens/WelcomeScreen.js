import React from 'react';
import { Text, View } from 'react-native';

import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: 'Welcome to JobApp' , color: '#03A9F4' },
  { text: 'Use this to get a Job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }  
];

export default class WelcomeScreen extends React.Component {

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides data = {SLIDE_DATA} onComplete={this.onSlidesComplete} /> 
    );
  }
}
