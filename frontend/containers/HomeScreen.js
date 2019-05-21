import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { connect} from 'react-redux'

 class HomeScreen extends React.Component {
    state ={
        data:[]
        
    }
    componentDidMount(){
       
            fetch('https://pizza-app-nr.herokuapp.com/feed/posts')
            .then(res => res.json())
            .then(res=>{
               this.setState({data:res.posts})
            })
    }


  render() {
    return (
        
       <View>
           <Text>Home Screen</Text>
            {this.state.data.map((post, index)=>{
                return (   
                 <TouchableOpacity 
                 key={index}
                style={styles.button}
                onPress={(e)=>this.props.addItemToCart(post)}
              >
                <Text key={index}> Pizza flavour {post.name} - Price:{post.price} $ </Text>
              </TouchableOpacity>
                )
            })}
           <Button title='Finish ordering' onPress={()=>this.props.navigation.navigate('Shopping')}></Button>
           {this.props.cartItems.map((order, index)=>{
                return (   
                    <TouchableOpacity 
                    key={index}
                   style={styles.button}
                   onPress={(e)=>this.props.removeItem(order)}
                 >
                   <Text key={index}> You order Pizza flavour {order.name} - Price:{order.price} $ </Text>
                 </TouchableOpacity>
                   )
               })}
       </View>
    );
  }
}


const mapDispatchToProps = (dispatch)=> {
  return{
    addItemToCart:(product)=>dispatch({type:'ADD_TO_CART', payload:product}),
    removeItem:(product)=>dispatch({type:'REMOVE_PIZZA', payload:product })
  }
}
const mapStateToProps = (state) =>{
  return{
    cartItems:state
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});