import React from 'react';

const OPTIONS = [
    'Sed ut perspiciatis',
    'Et harum quidem',
    'Nemo enim ipsam',
    'Temporibus autem',
    'Itaque earum rerum'
];

const Dropdown = () => {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleSelect = (option) => {
        setValue(option);
        setDropdownOpen(false);
    };

    return (
        <div className={`dropdown${dropdownOpen ? ' dropdown--open' : ''}`}>
            <input type='hidden' name='systemType' value={value}/>
            <button
                type='button'
                className="dropdown__toggle"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <span className='dropdown__label'>{value || 'Выберите тип системы'}</span>
                <svg className='dropdown__icon' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <use href='#arrow'/>
                </svg>
            </button>
            <ul className="dropdown__menu">
                {OPTIONS.map((option) => (
                    <li key={option} className="dropdown__item">
                        <button
                            type='button'
                            className='dropdown__label'
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown