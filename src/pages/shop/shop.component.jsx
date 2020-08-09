import React from 'react';
import Collectionsoverview from './../../components/collections-overview/collections-overview.components';
import {Route} from 'react-router-dom';
import Collection from './../collection/collection.components';

const Shop = ({match}) => (
   
         
            <div className='shop-page'>            
                <Route exact path={`${match.path}`} component={Collectionsoverview}/>
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>   
        );     
     
       
export default Shop;   