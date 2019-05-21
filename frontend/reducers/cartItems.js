const cartItems = (state=[], 
action)=>{
    switch(action.type)
    {
        case 'ADD_TO_CART':
            if([...state, action.payload].length == 3){
                const [first, ...rest] = [...state, action.payload]
                return [...rest]

            }
            return  [...state, action.payload]
        case 'REMOVE_PIZZA':
            return state.filter(cartItem=>cartItem.name !== action.payload.name)
    }
    return state
}

export default cartItems