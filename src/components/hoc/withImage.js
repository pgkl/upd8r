import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
//3334 × 5151
const withBackgroundImage = (WrappedComponent, bgChoice) =>
  class extends Component {
    render() {
      let bg = ((bgChoice)=>{
        switch(bgChoice){
          case 'login':
            return require('./images/bg.jpg');
          case 'home':
            return require('./images/bg2.jpg');
          default:
            return require('./images/bg.jpg');

        }
      })(bgChoice);
      
      return (
        <Image source={bg} style={styles.bgimage}>
          <WrappedComponent {...this.props} />
        </Image>
      );
    }
  };


const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  }
});

export default withBackgroundImage;