import SHOP_INFO from './shop.type'


export const UPDATE_SHOP_INFO = (update_info) => ({
    type: SHOP_INFO.UPDATE_COLLECTION,
    payload: update_info
});      