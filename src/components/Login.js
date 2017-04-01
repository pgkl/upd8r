import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import LoginForm from './LoginForm';
import withImage from './hoc/withImage';
import * as Actions from '../actions';
import {Actions as NavActions} from 'react-native-router-flux';

const mapStateToProps = ({ routes, user }) => { return { routes, user }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch) }

class Login extends Component {

  getSubtitle() {
    let s = ''
    let num = Math.floor((Math.random() * 10) + 1);
    switch (num) {
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
    console.log(NavActions);
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText} >{this.props.routes.scene.title}</Text>
        <Text style={styles.welcomeText} >{this.props.user.loggedIn === true ? 'loggedin' : 'notloggedIn'}</Text>
        <Button
          onPress={NavActions.home}
          title='Login'
          color="#533747"
        />
      </View>);
  }
}
/* render() {
   return (
     <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>upd8r</Text>
          <Text style={styles.welcomeTextSubtitle}>{this.getSubtitle()}</Text>
        </View>
        <View style={styles.login}>
          <LoginForm onLogin={this.props.onLogin} />
        </View>
      </View>
      )
 }
}

<Button
          onPress={this.props.login('admin', 'password')}
          title='Login'
          color="#533747"
        />

*/

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


export default connect(mapStateToProps, mapDispatchToProps)(withImage(Login, 'login'));
