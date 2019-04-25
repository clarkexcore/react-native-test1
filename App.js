
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  state = {
    placeName: ''
  }

  placeNameHandler = (evt) => {
    this.setState({
      placeName: evt
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerTitle="Albums" />
        <AlbumList />
        <Text style={styles.welcome}>Welcome to Alex's App Fuck You!</Text>
        <View style={styles.inputContainer}>
          <TextInput onChangeText={this.placeNameHandler} style={styles.input} value={this.state.placeName} placeholder="Please Type"/>
          <Button style={styles.buttonAdd} title="Add" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'salmon',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 35,
  },
  inputContainer: {
    //flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonAdd:{
    backgroundColor: "green",
    borderColor: "black",
    textTransform: "uppercase",
  },
});
