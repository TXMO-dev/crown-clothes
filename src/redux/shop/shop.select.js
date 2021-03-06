import memoize from 'lodash.memoize';
import {createSelector} from 'reselect';


const inputSelector = state => state.shop;

export const selectShop = createSelector(
    [inputSelector],
    shop => shop.shop
)

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop ? (Object.keys(shop).map(map => shop[map])) : ([])
)

export const selectItemId = memoize((urlParam) => 
    createSelector(
        [selectShop],
        shop => shop ? shop[urlParam]:null        
    ))

export const selectFetching = createSelector(
    [inputSelector],
    shop => shop.isFetching
)