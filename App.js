import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import ColorButton from './ColorButton';

class App extends Component {

  render() {
    return (
      <View >
        <ColorButton color='yellow' />
        <ColorButton color='red' />
        <ColorButton color='green' />
        <ColorButton color='blue' />
      </View>
    );
  }
}

export default App;