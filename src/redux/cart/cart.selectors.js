import {createSelector} from 'reselect';

const inputSelectorCart = state => state.cart;

export const saveCartItemsToLocalCache = createSelector(
    [inputSelectorCart],
    cart => cart.cartItem
)

export const saveHiddenCartToLocaleCache = createSelector(
    [inputSelectorCart],
    cart => cart.hidden  
)

export const saveaccumulatedValueToCache = createSelector(
    [saveCartItemsToLocalCache],
    cartItem => cartItem.reduce(
        (acc,cartItems) => acc + cartItems.quantity,
        0
    )  
)

export const removeaccumulatedValueToCache = createSelector(
    [saveCartItemsToLocalCache],
    cartItem => cartItem.reduce(
        (acc,cartItems) => acc - cartItems.quantity,
        0
    )  
)

export const saveaccumulatedTotalToCache = createSelector(
    [saveCartItemsToLocalCache],
    cartItem => cartItem.reduce(
        (acc,cartItems) => acc + cartItems.quantity * cartItems.price,
        0
    )  
)  