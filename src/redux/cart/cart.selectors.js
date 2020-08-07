import {createSelector} from 'reselect';

const inputSelectorCart = state => state.cart;

export const saveCartItemsToLocalCache = createSelector(
    [inputSelectorCart],
    cart => cart.cartItem
)

export const saveaccumulatedValueToCache = createSelector(
    [saveCartItemsToLocalCache],
    cartItem => cartItem.reduce(
        (acc,cartItems) => acc + cartItems.quantity,
        0
    )  
)  