import React from 'react';
import {Header, Main, Footer, Steper, Dropdown, Input, Upload} from '../../components';
import Button from "../../components/button";

const BusinessPage = () => {
    return (
        <div className='page'>
            <Header/>
            <Main>
                <section className='lorem section' id='business'>
                    <div className='lorem__inner'>
                        <div className="lorem__item">
                            <h1 className='lorem__title'><span
                                className='lorem__title--accent'>Lorem ipsum</span> dolor
                                sit ametconsectetur <span className='lorem__title--accent'>adipiscing</span></h1>

                            <div className='lorem__content'>
                                <p className='lorem__subtitle'>At vero eos et accusamus et iusto odio dignissimos
                                    ducimus!</p>
                                <ul className='lorem__list'>
                                    <li className='lorem__list-item'>Totam rem aperiam eaque ipsa</li>
                                    <li className='lorem__list-item'>Sit voluptatem accusantium doloremque laudantium
                                    </li>
                                    <li className='lorem__list-item'>Sed ut perspiciatis, unde omnis iste natus error
                                    </li>
                                </ul>
                            </div>
                            <div className="column">
                                <div className="column__inner">
                                    <div className="column">
                                        <div className="column__inner">
                                            <Button modificator='button--primary'
                                                    buttonLabel='заказать'/>
                                        </div>
                                        <div className="column__inner">
                                            <Button modificator='button--secondary'
                                                    buttonLabel='подробнее'/>
                                        </div>
                                    </div>
                                </div>
                                <div className="column__inner">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='order' id='order'>
                    <div className="order__inner">
                        <h2 className='order__title'>Оформление <span className='order__title--accent'>заказа</span>
                        </h2>
                        <p className='order__subtitle'>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
                        <div className="order__scheme">
                            <div className="column">
                                <Steper/>
                            </div>
                        </div>

                        <form className='order__form' action='#' method='post'>
                            <div className="column">
                                <div className="column__inner">
                                    <Dropdown/>
                                </div>
                                <div className="column__inner">
                                    <Input
                                        inputType='email'
                                        inputName='email'
                                        inputPlaceholder='Ваш e-mail'
                                    />
                                </div>
                                <div className="column__inner">
                                    <Input
                                        inputType='text'
                                        inputName='name'
                                        inputPlaceholder='Ваше имя'
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className='order__form-row order__form-row--range'>
                                    <div className='order__row'>
                                        <span className='order__range-label'>Sed ut perspiciatis, unde omnis iste natus</span>
                                        <span className='order__range-label'>75 %</span>
                                    </div>
                                    <div className='order__range-track'>
                                        <input
                                            className='order__range'
                                            type='range'
                                            name='progress'
                                            min='0'
                                            max='100'
                                            defaultValue='75'
                                        />
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="column__inner">
                                        <Upload />
                                    </div>
                                </div>
                            </div>
                            <div className='order__form-row order__form-row--actions'>
                                <Button modificator='button--primary' buttonLabel='отправить'/>
                            </div>
                        </form>
                    </div>
                </section>
            </Main>
            <Footer/>
        </div>
    );
}
export default BusinessPage;