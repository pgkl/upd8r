import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import routes from './src/reducers/routes';
import user from './src/reducers/user';
import Login from './src/components/Login';
import Home from './src/components/Home';

const ReduxRouter = connect()(Router);
const store = createStore(combineReducers({ routes, user }));

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' component={connect()(Login)} title='Login' />
    <Scene key='home' component={connect()(Home)} title='Home' />
  </Scene>
);

class MyUpdater extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Provider store={store} >
        <ReduxRouter scenes={scenes}/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => MyUpdater);
