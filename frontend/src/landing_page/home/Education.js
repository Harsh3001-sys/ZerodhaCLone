import React from 'react';
import './education.css';
function Education() {
    return ( 
        <div className='container edu-container'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img src='/images/education.svg' alt='Education' className='edu-img'></img>
                </div>
                <div className='col-12 col-lg-6'>
                    <h2 className='edu-h2'>Free and open market education</h2>
                    <p className='edu-para'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className='edu-link'>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='edu-para edu-para-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='edu-link'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;