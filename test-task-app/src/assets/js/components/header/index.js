import React, {useState, useCallback, useEffect} from 'react';
import Nav from '../nav';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollReduction = window.scrollY > 0 ? '15px' : '0px';
            document.documentElement.style.setProperty('--scroll-padding-reduction', scrollReduction);
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial call
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleToggle = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);
    const handleClose = useCallback(() => {
        setMenuOpen(false);
    }, []);

    return (
        <header className='header'>
            <div className='header__in'>
                <div className='header__logo'>
                    <span className='header__logo-text'>LoremIpsum.<span className='header__logo-text--blue'>Net</span></span>
                </div>
                <button
                    className='header__burger'
                    type='button'
                    aria-label='Открыть меню'
                    aria-expanded={menuOpen}
                    aria-controls='nav-menu'
                    onClick={handleToggle}
                >
                    <span className='header__burger-line' />
                    <span className='header__burger-line' />
                    <span className='header__burger-line' />
                </button>
                <Nav isOpen={menuOpen} onClose={handleClose}/>
            </div>
        </header>
    );
};

export default Header;