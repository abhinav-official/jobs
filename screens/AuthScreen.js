import React from 'react';
import { Text, View } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends React.Component {
  componentDidMount() {
    this.props.facebookLogin();
  }

  render() {
    return (
      <View>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
        <Text>AuthScreen</Text>
      </View>
    );
  }
}

export default connect(null, actions) (AuthScreen);