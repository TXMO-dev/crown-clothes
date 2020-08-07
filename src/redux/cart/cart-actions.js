import Carttypes from './cart-types';

export const cartAction = _ => ({
    type:Carttypes.TOGGLE_DROPDOWN
});

export const addItemAction = item => ({
    type:Carttypes.ALL_ITEMS,
    payload:item
})