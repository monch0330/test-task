import React, {useEffect, useCallback} from 'react';

const Nav = ({isOpen, onClose}) => {
    const handleKeyClose = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (!isOpen) return;
        document.addEventListener('keydown', handleKeyClose);
        return () => document.removeEventListener('keydown', handleKeyClose);
    }, [isOpen, handleKeyClose]);

    const className = `nav${isOpen ? ' nav--open' : ''}`;

    return (
        <nav id='nav-menu' className={className}>
            <div
                className='nav__overlay'
                role='presentation'
                onClick={onClose}
            />
            <ul className='nav__list'>
                <li className='nav__close'>
                    <button
                        type='button'
                        className='nav__close-button'
                        aria-label='Закрыть меню'
                        onClick={onClose}
                    >
                        <svg className='nav__close-i' xmlns='http://www.w3.org/2000/svg' fill='none'
                             viewBox='0 0 24 24'>
                            <use href='#close'/>
                        </svg>
                    </button>
                </li>
                <li className='nav__item nav__item--active '><a className='nav__link' href="#business" onClick={onClose}>Бизнес</a></li>
                <li className='nav__item'><a className='nav__link' href="#business" onClick={onClose}>О нас</a></li>
                <li className='nav__item'><a className='nav__link' href="#order" onClick={onClose}>Цены</a></li>
                <li className='nav__item'><a className='nav__link' href="#order" onClick={onClose}>Оформить заказ</a></li>
            </ul>
        </nav>
    );
};

export default Nav;