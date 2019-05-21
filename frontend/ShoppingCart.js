import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator } from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import {connect} from 'react-redux'
 class ShoppingCart extends React.Component {
  render() {
 
    return (
      
        <View>
            <Text>Order successfu</Text>
            <Text>You order half Capricoasa and half Peperoni</Text>
            <Text>Total Price is 17.5$</Text>
            {this.props.cartItems.length == 2 ?
          

          <Text>{this.props.cartItems[0].name ==(this.props.cartItems[1].name || null) ? (<Text>{this.props.cartItems[0].name} {this.props.cartItems[0].price}</Text> ) 
          : this.props.cartItems.map((cartItem, index)=>{
               return(<Text key={index}>{cartItem.name}{cartItem.price/2}</Text>) }) }</Text>
          
            : <Text>You must order one complete Pizza</Text>}
        </View>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    cartItems:state
  }
}

export default connect(mapStateToProps)(ShoppingCart)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});