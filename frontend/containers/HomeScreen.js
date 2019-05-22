import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { connect} from 'react-redux'

 class HomeScreen extends React.Component {
    state ={
        data:[],
        isLoading:true
    }
    componentDidMount(){
       
            fetch('https://pizza-app-nr.herokuapp.com/feed/posts')
            .then(res => res.json())
            .then(res=>{
               this.setState({
                 data:res.posts,
                 isLoading:false
                })
            })
    }

  render() {
    return (
        
       <View style={styles.container}>
         {(this.state.isLoading) ? <Image source={require('../assets/pizza.gif')} /> : null}
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
               id={index}
               style={styles.buttonOrder}
               onPress={(e)=>this.props.removeItem(order, index)}
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
                <Text style={styles.note}>Note: If the flavours are the same, the whole pizza will have that one flavour.</Text>
       </View>
    );
  }
}


const mapDispatchToProps = (dispatch)=> {
  return{
    addItemToCart:(product)=>dispatch({type:'ADD_PIZZA', payload:product}),
    removeItem:(order, index)=>dispatch({type:'REMOVE_PIZZA', payload:{ order, index} })
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