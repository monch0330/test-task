import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__inner">
                <span className='footer__label'>© 2018 «LoremIpsum.net» Все права защищены.</span>
                <span className='footer__separator'>|</span>
                <div className="footer__item">
                    <svg className='footer__icon' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <use href='#qiwi'/>
                    </svg>
                    <span className='footer__label'>QIWI wallet</span>
                </div>
                <div className="footer__item">
                    <svg className='footer__icon' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <use href='#yandex-money'/>
                    </svg>
                    <span className='footer__label'>Yandex Money</span>
                </div>
                <div className="footer__item">
                    <svg className='footer__icon' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <use href='#web-money'/>
                    </svg>
                    <span className='footer__label'>Web Money</span>
                </div>

                <span className='footer__separator'>|</span>
                <div className="footer__item">
                    <svg className='footer__icon' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <use href='#mail'/>
                    </svg>
                    <a className='footer__label' href='mailto:info@ipsum228.com'>info@ipsum228.com</a>
                </div>
                <div className="footer__item">
                    <svg className='footer__icon' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <use href='#vk'/>
                    </svg>
                    <a className='footer__label' href='https://vk.com' target='_blank' rel='noreferrer noopener'>Мы вконтакте</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;