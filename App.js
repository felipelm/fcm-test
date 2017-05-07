import React from 'react';
import Expo from 'expo';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import PushController from "./PushController";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <PushController
          onChangeToken={token => this.setState({token: token || ""})}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Desenrola', () => App);
