import React from 'react';
import './pricing.css'
function Pricing() {
    return ( 
        <div className='container pricing-container'>
            <div className='row'>
                <div className='col-12 col-lg-5'>
                    <h2 className='pricing-head'>Unbeatable pricing</h2>
                    <p className='pricing-para'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col-12 col-lg-7 images'>
                    <div className='pricing-item'>
                        <img src='/images/pricing0.svg'></img>
                        <p className='img-txt'>Free account opening</p>
                    </div>
                    <div className='pricing-item'>
                        <img src='/images/pricing0.svg'></img>
                        <p className='img-txt'>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='pricing-item'>
                        <img src='/images/intradayTrades.svg'></img>
                        <p className='img-txt'>Intraday and F&O</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <p className='pricing-link'><a href=''>See pricing <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

export default Pricing;