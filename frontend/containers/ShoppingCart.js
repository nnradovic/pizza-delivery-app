import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'

 class ShoppingCart extends React.Component {
  render() {
    let total = 0
    return (
        <View>
            <Text>{this.props.cartItems.length == 2? "Order successful" : "Please complete your order"}</Text>
            {this.props.cartItems.length == 2 ?
          <Text>{this.props.cartItems[0].name ==(this.props.cartItems[1].name || null) ? (<Text><Text>Order full pizza flavour {this.props.cartItems[0].name} </Text> <Text>  Total {this.props.cartItems[0].price} $</Text></Text> ) 
          : this.props.cartItems.map((cartItem, index)=>{
               total += parseFloat(cartItem.price/2)
               

               return(<Text key={index}>Order half pizza flavour {cartItem.name} at price{cartItem.price/2} $ </Text>) })  }</Text>
            : <Text>You must order one complete Pizza</Text>}
            <Text>{total == 0 ? '': total}</Text>
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