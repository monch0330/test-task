import React from 'react';

const Button = ({modificator, buttonLabel}) => {
    return (
        <button className={`button${modificator ? ' ' + modificator : ''}`}>
            <span className='button__label'>{buttonLabel}</span>
        </button>
    );
}

export default Button;