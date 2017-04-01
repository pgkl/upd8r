import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from './LoginForm';
import withImage from './hoc/withImage';
import * as Actions from '../actions';
import { Actions as NavActions } from 'react-native-router-flux';

const mapStateToProps = ({ routes, user }) => { return { routes, user }; }
function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch) }

class Login extends Component {

  render() {
    console.log(NavActions);
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>upd8r</Text>
          <Text style={styles.welcomeTextSubtitle}>Uniform Papa Delta Eight Romeo</Text>
        </View>
        <View style={styles.login}>
          <LoginForm onLoginClick={(username, password) => {
              console.log({
                username,
                password
              });
              NavActions.home();
              }}/>
        </View>

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

              //<Text style={styles.welcomeText} >{this.props.user.loggedIn === true ? 'loggedin' : 'notloggedIn'}</Text>
 }
}

<Button
            onPress={(username, password) => {
              console.log({
                username,
                password
              });
              NavActions.home();
              }}
            title='Login'
            color="#533747"
          />


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
