import Carttypes from './cart-types';

export const cartAction = _ => ({
    type:Carttypes.TOGGLE_DROPDOWN
});

export const addItemAction = item => ({
    type:Carttypes.ALL_ITEMS,
    payload:item
})

export const removeItemAction = item => ({
    type:Carttypes.REMOVE_ITEMS,
    payload:item 
})

export const removeItemLeft = item => ({
    type:Carttypes.REMOV_LEFT,
    payload:item
})