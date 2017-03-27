/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, View, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducers from './src/reducers/user';
import LandingScene from './src/components/LandingScene';

let store = createStore(combineReducers({ userReducers }));

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

class upd8r extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyUpdater/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => upd8r);
