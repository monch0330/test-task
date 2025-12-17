import React from 'react';

const Input = ({inputType, inputName, inputPlaceholder}) => {
    return (
        <label className='input'>
            <input
                className='input__inner'
                type={inputType}
                name={inputName}
                placeholder={inputPlaceholder}
                required
            />
        </label>
    )
}

export default Input