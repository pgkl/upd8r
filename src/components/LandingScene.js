import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import LoginForm from './LoginForm';
import withImage from './hoc/withImage';

class LandingScene extends Component {

getSubtitle(){
  let s = ''
  let num = Math.floor((Math.random() * 10) + 1);
  switch(num){
    case 1:
      s = 'It kens all about you';
      break;
    case 2:
      s = 'What it doesn\'t know makes you weaker'
      break;
    case 3:
      s = 'All your details are belong to the almighty upd8r!'
      break;
    case 4:
      s = 'Marmite. Yae or nae?'
      break;
    case 5:
      s = 'Now with 10% more data theft'
      break;
    case 6:
      s = 'FALCON PUNCH!'
      break;
    case 7:
      s = 'Uniform Papa Delta Eight Romeo'
      break;
    case 8:
      s = 'Ever wonder why cheese in Scotland is orange...'
      break;
    case 9:
      s = 'Made from 25% energy drink'
      break;
    case 10:
      s = 'Thanks for installing this app!'
      break;
  }
  return s;
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>upd8r</Text>
          <Text style={styles.welcomeTextSubtitle}>{this.getSubtitle()}</Text>
        </View>
        <View style={styles.login}>
          <LoginForm />
        </View>
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

LandingScene.propTypes = {
  appName: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default withImage(LandingScene);