import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';


const menuItem = ({title,imageUrl,size,linkUrl,history,match}) => (
    <div className = {`${size} menu-item`} style = {{
        backgroundImage: `url(${imageUrl})`
    }} onClick = {() => {history.push(`${match.url}${linkUrl}`)}}>
        <div className = "content">
            <h1 className = "title">{title}</h1>  
            <span className = "subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(menuItem);      