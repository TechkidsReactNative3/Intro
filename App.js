import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

import ColorButton from './ColorButton';

class App extends Component {
  state = {
    color: 'white'
  }

  setBgColor = (color) => this.setState({color})

  render() {
    return (
      <View style={{backgroundColor: this.state.color}}>
        <ColorButton color='yellow' onPressColorButton={this.setBgColor}/>
        <ColorButton color='red' />
        <ColorButton color='green' />
        <ColorButton color='blue' />
        {/* <Button title='Press pls' onPress={()=>console.log('shittt')}></Button> */}
      </View>
    );
  }
}

export default App;