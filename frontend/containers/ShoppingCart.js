import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'

 class ShoppingCart extends React.Component {
  render() {
    let total = 0
    return (
        <View style={styles.container}>
            <Text style={styles.menu} >{this.props.cartItems.length == 2? "Order successful" : "Please complete your order"}</Text>
            {this.props.cartItems.length == 2 ?
          <Text>{this.props.cartItems[0].name ==(this.props.cartItems[1].name || null) ? 
          (<Text  style={styles.center}>
          <Text style={styles.menu}>Full pizza flavour {this.props.cartItems[0].name}</Text> {"\n"}
          <Text style={styles.total}>Total {this.props.cartItems[0].price} $</Text>
          </Text> ) 
          : this.props.cartItems.map((cartItem, index)=>{
               total += parseFloat(cartItem.price/2)
               

               return(<Text key={index} style={styles.menu}>Half pizza flavour {cartItem.name} at price {cartItem.price/2} $ </Text> ) })   }</Text>
            : <Text style={styles.menu}>You must order one complete Pizza</Text> }
            <Text style={styles.total}> {total == 0 ? '': "Total " + total + " $"}</Text>
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
    backgroundColor: 'green',
    alignItems: 'center',

  },
  center:
  {
      flex: 1,
      // justifyContent: 'center', // Used to set Text Component Vertically Center
      alignItems: 'center' // Used to set Text Component Horizontally Center
  },
  menu:{
    color:'#fff',
    fontSize: 18,
   
    
  },
  total:{
    color:'#fff',
    fontSize: 24,
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
  }
});