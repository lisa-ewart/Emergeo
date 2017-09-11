import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import SignIn from './js/components/signin'
import Profile from './js/components/profile'
import MyScene from './js/components/MyScene'

export default class App extends React.Component {
  render() {
    return (   
      <View style={styles.container}>
        <Text style={styles.heading}>Emergeo!</Text>
        <SignIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  heading:{
    color:'#ccc',
    fontWeight: 'bold',
    fontSize:25,
  }
});
