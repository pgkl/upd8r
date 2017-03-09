/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, View, Text} from 'react-native';
import LandingScene from './components/LandingScene';

class MyUpdater extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Landing Scene', index: 0 }}
        renderScene={(route, navigator) => {
          return (<LandingScene
            appName={route.title}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene' + nextIndex,
                index: nextIndex
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />);
        }}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => MyUpdater);
