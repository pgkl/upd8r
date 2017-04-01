import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Button, TextInput, ToastAndroid } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions';

//function mapStateToProps(state) { return { user: state.user.user }; }
//function mapDispatchToProps(dispatch) { return bindActionCreators(Actions, dispatch) }

export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            valid: false
        };
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    login() {
        this.props.login({ username: this.state.username, password: this.state.password });
    }

    validate(state) {
        if (this.state.username.length < 4 || this.state.password.length < 6) {
            state.valid = false;
        }
        else {
            state.valid = true;
        }
        return state;
    }


    onFieldChange(field, value) {
        let state = Object.assign({}, this.state);
        state[field] = value;
        state = this.validate(state);
        this.setState(state);
    }

    render() {
        return (
            <View style={styles.layout}>
                <Text>Username</Text>
                <TextInput
                    placeholder="Please enter your username"
                    value={this.state.username}
                    onChangeText={(text) => this.onFieldChange('username', text)}
                />
                <Text>Password</Text>
                <TextInput
                    placeholder="Please enter your password"
                    value={this.state.password}
                    onChangeText={(text) => this.onFieldChange('password', text)} />
                <View>
                    {this.props.user.loggedIn !== true && <Button
                        onPress={this.login.bind(this)}
                        title={this.state.valid === true ? 'Login' : 'Details Invalid'}
                        color="#533747"
                        accessibilityLabel="Learn more about this purple button"
                        disabled={!this.state.valid}
                    />}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        justifyContent: 'center',
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 10,
        borderRadius: 4
    }
});

//export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);