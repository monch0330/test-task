import React from 'react'

const steps = [
    {
        icon: 'search',
        text: 'Lorem ipsum dolor sit amet',
    },
    {
        icon: 'percent',
        text: 'Consectetur adipiscing elit',
    },
    {
        icon: 'subtract',
        text: 'Sed do eiusmod tempor',
    },
    {
        icon: 'letter',
        text: 'Esse cillum dolore eu fugiat',
    },
    {
        icon: 'dollar',
        text: 'Excepteur sint occaecat cupidatat',
    },
];

const Steps = () => {
    return (
        <div className="steps">
            {steps.map((step, index) => (
                <div className="steps__item" key={index}>
                    <div className="steps__icon">
                                <svg className='steps__icon-i' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                                    <use href={`#${step.icon}`}/>
                                </svg>
                    </div>

                    {index !== steps.length - 1 && (
                        <div className="steps__dots">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    )}

                    <p className="steps__text">{step.text}</p>
                </div>
            ))}
        </div>
    );
};
export default Steps;
