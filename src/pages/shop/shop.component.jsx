import React from 'react';
import SHOP_DATA from './shop.data.js';
import Collectionpreview from './../../components/collection-preview/collection-preview.components';


class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            SHOP_DATA
            };
    }

    render(){
        return(
            <div className='shop-page'>            
                {
                    SHOP_DATA.map(({id,...otherProps}) => (
                        <Collectionpreview key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
       
    }
}

export default Shop;