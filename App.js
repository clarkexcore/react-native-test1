
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    justifyContent: 'flex-start',
    backgroundColor: '#d6edff',
    paddingBottom: 25,
  },
});
