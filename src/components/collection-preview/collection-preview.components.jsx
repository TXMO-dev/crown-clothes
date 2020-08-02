import React from 'react';

import Collectionitem from './../collection-item/collection-item.components';
import './collection-preview.styles.scss';

const collectionPreview = ({title,items}) => (
    <div className = "collection-preview">
        <h1 className = "title">{title.toUpperCase()}</h1>
        <div className = "preview">
            {
                items.filter((item,idx) => idx < 4).map(({id,...otherProps}) => (
                      
                    <Collectionitem key={id} {...otherProps} />  
                )                    
                )
            }
        </div>
    </div>
)

export default collectionPreview;