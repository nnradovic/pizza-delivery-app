import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator } from 'react-navigation'
import HomeScreen from './containers/HomeScreen';
import ShoppingCart from './ShoppingCart'
import {Provider} from 'react-redux';
import store from './store'

 export default class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator/>


      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  HomeScreen:HomeScreen,
  Shopping:ShoppingCart

  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
