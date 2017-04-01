import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import LoginForm from './LoginForm';
import withImage from './hoc/withImage';

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcomeText}>HOME HOME HOME</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  welcome: {
    flex: .4,
    justifyContent: 'center',
  },
  login: {
    flex: .6,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6A6B83'
  },
  welcomeTextSubtitle: {
    fontSize: 12,
    
    textAlign: 'center',
    color: '#5F506B'
  }
});


export default withImage(Home,'home');