import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import Collectionitem from './../../components/collection-item/collection-item.components'
import {selectItemId} from '../../redux/shop/shop.select';



 const collection = ({collectionselector}) => (   
    
        <div className='collection-page'>
            <h2>{collectionselector.title}</h2> 
            <div className = "items">
                {
                    collectionselector.items.map(map => 
                        <Collectionitem key = {map.id} item={map}/>   
                    )
                }
            </div>
        </div>
        
   
    );
   

      
const matchStateToProps = (state,{match:{params:{collectionId}}}) => ({
    collectionselector: selectItemId(collectionId)(state)
});
export default connect(matchStateToProps)(collection);       