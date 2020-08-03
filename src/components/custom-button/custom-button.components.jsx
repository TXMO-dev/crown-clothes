import React from 'react';
import './custom-button.styles.scss';

const customButton = ({children,type,isGoogleSignIn,...otherProps}) => (
    <button className ={`${isGoogleSignIn ? 'isgooglesignin' : ''} custom-button`} type={type} {...otherProps}>
        {children}
    </button>
);

export default customButton;