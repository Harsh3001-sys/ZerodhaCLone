import React from 'react';
import './pricing-hero.css';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center pri-cont'>
                <h1 className='pri-h1'>Charges</h1>
                <p className='pri-p'>List of all charges and taxes</p>
            </div>
            <div className='row text-center img-cont'>
                <div className='pricing-images col-12 col-lg-4'>
                    <img src='/images/pricing0.svg'></img>
                    <h2 className='pr-hero-h2'>Free equity delivery</h2>
                    <p className='pr-img-txt'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='pricing-images col-12 col-lg-4'>
                    <img src='/images/intradayTrades.svg'></img>
                    <h2 className='pr-hero-h2'>Intraday and F&O trades</h2>
                    <p className='pr-img-txt'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='pricing-images col-12 col-lg-4'>
                    <img src='/images/pricing0.svg'></img>
                    <h2 className='pr-hero-h2'>Free direct MF</h2>
                    <p className='pr-img-txt'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;