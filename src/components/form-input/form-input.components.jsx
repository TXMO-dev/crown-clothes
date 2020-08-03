import React from 'react';
import './form-input.styles.scss';


const formInput = ({handleChange,label,...otherProps}) => (

    <div className = "group">
        <input className='form-input' onChange = {handleChange} {...otherProps} />
        {
            label ?
                (
                    <div className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                
                    </div>
                ) : null   
        }
    </div>

)

export default formInput;   