import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import { connect} from 'react-redux'



 class HomeScreen extends React.Component {
    state ={
        data:[],
        orders:[]
    }
    componentDidMount(){
      
            
            fetch('https://pizza-app-nr.herokuapp.com/feed/posts')
            .then(res => res.json())
            .then(res=>{
               this.setState({data:res.posts})
            })
    
        
      
    }
    onPress = (id,name,price) => {

        this.setState({
          orders: [ ...this.state.orders, {id,name,price}]
        })
        if(this.state.orders.length == 2){
              this.setState(state=>{
                  
                  const [first, ...rest] = state.orders    
                return{
                    orders:rest
                }
              })  
              
           
        }
        
     
        
      //   this.setState({
      //     orders:uniqueTopicList
      // })
      
       
 
        //   let newOrder =  this.getUnique(this.state.orders, 'name')
             
   
      
        
    }
      
        
    

       
     

    onDelete = (order) =>{
        
        let newOrder = [...this.state.orders]
        newOrder.splice(order,1)

        this.setState({
            orders:newOrder
        })

    

    }
    getUnique = (arr, comp)=> {

      const unique = arr
           .map(e => e[comp])
    
         // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
    
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);
    
       return unique
       
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