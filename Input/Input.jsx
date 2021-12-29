import React from 'react';
import './Input.css';


const Input = ({ attribute }) => {
    return(
        <div>
            <input
            id={attribute.id}
            name={attribute.name}
            placeholder={attribute.placeholder}
            type={attribute.type}
            className='regular-style'
            >
                
            </input>
        </div>
    )
};

export default Input;