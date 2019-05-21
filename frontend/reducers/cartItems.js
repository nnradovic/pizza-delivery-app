const cartItems = (state=[], 
action)=>{
    switch(action.type)
    {
        case 'ADD_PIZZA':
            if([...state, action.payload].length == 3){
                const [first, ...rest] = [...state, action.payload]
                return [...rest]

            }
                return  [...state, action.payload]
         case 'REMOVE_PIZZA':
                let cut
              if(action.payload.index == 0){
                 cut = state.slice(1,2)
                return cut
               }else if(action.payload.index == 1){
                 cut = state.slice(0,1)
                return cut
            }
       
    }
    return state
}

export default cartItems