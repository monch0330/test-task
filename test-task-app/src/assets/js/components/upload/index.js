import React from 'react';

const Upload = () => {
    return (
        <label className='upload'>
            <input
                className='upload__input'
                type='file'
                name='attachment'
            />
            <svg className='upload__icon' xmlns='http://www.w3.org/2000/svg'
                 fill='none' viewBox='0 0 24 24'>
                <use href='#file'/>
            </svg>
            <span className='upload__label'>ПРИКРЕПИТЬ ФАЙЛ</span>
        </label>
    )
}

export default Upload