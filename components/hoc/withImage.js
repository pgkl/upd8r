import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';

const withBackgroundImage = (WrappedComponent) =>
  class extends Component {
    render() {
      return (
        <Image source={require(`./images/water-bg.jpg`)} style={styles.bgimage}>
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