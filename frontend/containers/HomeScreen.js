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
        
       <View style={styles.container}>
           <Text style={styles.menu}>Our Pizza Offer</Text>
            {this.state.data.map((post, index)=>{
                return (   
                 <TouchableOpacity 
                 key={index}
                style={styles.buttonMenu}
                onPress={(e)=>this.props.addItemToCart(post)}
              >
                <Text key={index} style={styles.menuText}> Pizza flavour {post.name} - Price:{post.price} $ </Text>
              </TouchableOpacity>
                )
            })}
            <Text style={styles.menu}>You Order:</Text>
           {this.props.cartItems.map((order, index)=>{
             return (   
               <TouchableOpacity 
               key={index}
               style={styles.buttonOrder}
               onPress={(e)=>this.props.removeItem(order)}
               >
                   <Text key={index} style={styles.orderText}> Pizza flavour {order.name} - Price:{order.price/2} $ </Text>
                 </TouchableOpacity>
                   )
                  })}
                  <TouchableOpacity 
                      
                      style={styles.buttonFinish}
                      onPress={()=>this.props.navigation.navigate('Shopping')}
                      >
                   <Text  style={styles.menuText}>Finish ordering </Text>
                 </TouchableOpacity>
                <Text style={styles.note}>Note: If you order two different flavour you get half by every flavour, if are same you get full pizza with that flavour.</Text>
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
    backgroundColor: 'green',
    alignItems: 'center',
  },
  note:{
    color:'#fff',
    fontSize:12,
    position: 'absolute',
    bottom:50,
    width:350,
   
  },
  buttonMenu:{
      borderColor: '#fff',
      borderWidth:2,
      color:"red",
      borderRadius:5,
      paddingTop:10,
      paddingBottom:10,
      width:350,
      justifyContent: 'center', 
      alignItems: 'center',
      marginBottom:10,
      backgroundColor:'red'

      
  },
  buttonOrder:{
    borderColor: 'red',
    borderWidth:2,
    color:"red",
    borderRadius:5,
    paddingTop:10,
    paddingBottom:10,
    width:350,
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom:10,
    backgroundColor:'white'

    
},
buttonFinish:{
  borderColor: 'white',
  borderWidth:2,
  color:"red",
  borderRadius:5,
  paddingTop:10,
  paddingBottom:10,
  width:350,
  justifyContent: 'center', 
  alignItems: 'center',
  marginBottom:0,
  position: 'absolute',
  bottom:0
 

  
},

  menu:{
    color:'#fff',
    fontSize: 18,
   
    
  },
  menuText:{
    color:'#fff',
    fontSize: 18,
   
    
  },
  orderText:{
    color:'red',
    fontSize: 18,
   
    
  },
 
});