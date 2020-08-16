import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import {selectShopItems} from './../../redux/shop/shop.select'
import Collectionpreview from './../collection-preview/collection-preview.components'; 
 

const collectionsOverview = ({SHOP_DATA}) => (
    <div className = "collection-overview">
    {
        SHOP_DATA.map(({id,...otherProps}) => (
            <Collectionpreview key={id} {...otherProps}/>
        ))
    }
    </div>   
)

const matchStateToProps = createStructuredSelector({
    SHOP_DATA:selectShopItems
 })

 export default connect(matchStateToProps)(collectionsOverview)