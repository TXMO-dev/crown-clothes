import React from 'react';
import './collection-item.styles.scss';
import Custombutton from './../custom-button/custom-button.components';
import {connect} from 'react-redux';
import {addItemAction} from './../../redux/cart/cart-actions'

const collectionItem = ({item,add_item}) => (
    <div className = 'collection-item'>
        <div className = 'image'
             style={{
                 backgroundImage: `url(${item.imageUrl})`   
             }}    
        />
        <div className = "collection-footer">
            <span className ='name'>{item.name}</span>
            <span className ='price'>${item.price}</span>  
        </div>
             <Custombutton onClick = {() => add_item(item)} inverted> ADD TO CART </Custombutton>  
    </div>      
)

const matchDispatchToState = dispatch => ({
    add_item:(item) => dispatch(addItemAction(item))
})

export default connect(null,matchDispatchToState)(collectionItem);   