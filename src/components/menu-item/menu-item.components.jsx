import React from 'react';
import './menu-item.style.scss'


const menuItem = ({title,imageUrl,size,linkUrl}) => (
    <div className = {`${size} menu-item`} style = {{
        backgroundImage: `url(${imageUrl})`
    }}>
        <div className = "content">
            <h1 className = "title">{title}</h1>  
            <a href = {`${linkUrl}`}><span className = "subtitle">SHOP NOW</span></a>
        </div>
    </div>
);

export default menuItem;