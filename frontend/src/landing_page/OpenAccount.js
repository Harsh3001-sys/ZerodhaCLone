import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div className='container acc-cont text-center'>
            <div className='row'>
                <h2 className='acc-head'>Open a Zerodha account</h2>
                <p className='acc-para'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to='/signup'>
                    <button className='btn btn-primary acc-btn'>Sign up for Free</button>
                </Link>
            </div>
        </div>
    );
}

export default OpenAccount;