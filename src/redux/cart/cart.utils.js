//cart items is the array or collection of all cart items "{},{},{}"

export const cartItemsToAdd = (CartItems,actionWithCartItem) => {
    const ExistingCart = CartItems.find(cartitem => cartitem.id === actionWithCartItem.id);

    if(ExistingCart){
        return CartItems.map(cartitem => 
            cartitem.id === actionWithCartItem.id 
            ? {...cartitem, quantity: cartitem.quantity + 1} 
            : cartitem
              
        )
    }

    return [...CartItems,{...actionWithCartItem, quantity: 1}];      
}

export const cartItemsToRemove = (CartItems,actionWithCartItem) => {
    const ExistingCart = CartItems.find(cartitem => cartitem.id === actionWithCartItem.id);

    if(ExistingCart.quantity === 1){
        return CartItems.filter(cart => cart.id !== actionWithCartItem.id)
    }

    if(ExistingCart){
        return CartItems.map(cartitem => 
            cartitem.id === actionWithCartItem.id 
            ? {...cartitem, quantity: cartitem.quantity - 1} 
            : cartitem
              
        )  
    }

}  