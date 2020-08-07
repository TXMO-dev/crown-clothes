import React from 'react';
import './custom-button.styles.scss';

const customButton = ({children,type,isGoogleSignIn,inverted,...otherProps}) => (
    <button className ={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'isgooglesignin' : ''} custom-button`} type={type} {...otherProps}>
        {children}
    </button>
);

export default customButton;