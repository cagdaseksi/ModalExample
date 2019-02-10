/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor()
  {
    super()
    this.state = {
      showMe: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal visible={this.state.showMe} onRequestClose={()=> console.warn('this is a close request.') }>
            <View style={styles.modalView}>
                <Text> Here is modal </Text>
                <TouchableOpacity onPress={()=> this.setState({
                  showMe: false
                })}>
                <Text style={styles.closeText}>Close Modal</Text>
            </TouchableOpacity>
            </View>
        </Modal>
        <TouchableOpacity onPress={()=> this.setState({
              showMe: true
            })}>
            <Text style={styles.openText}>Open Modal </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:20
  },
  modalView: {
    backgroundColor: '#aaa',
    height:150,
    justifyContent: 'center',
    alignItems: 'center',

  },
  closeText: {
    backgroundColor: '#333',
    color: '#bbb',
    padding: 5,
    margin: 20
  },
  openText: {
    backgroundColor:'#333',
    color: '#bbb',
    padding: 5,
    margin: 20
  }
});
