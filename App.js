import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class App extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text1}>Hello</Text>
        <Text style={styles.text2}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text1: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  text2: {
    flex: 1,
    backgroundColor: 'green'
  },
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flex: 1
  }
});

export default App;