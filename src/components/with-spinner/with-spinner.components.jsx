import React from 'react';
import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styled';


const withSpinner = WrappedContainer => ({isLoading,...otherprops}) => {
   return  isLoading ?
    (   
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
    ) : 
    (
    <WrappedContainer {...otherprops}/>  
    ); 
}

export default withSpinner;  