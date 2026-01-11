import React from 'react';
import {Link} from 'react-router-dom';
import './prod-hero.css'
function Hero() {
    return ( 
        <div className='container hero-cont'>
            <div className='row text-center hero-row border-bottom'>
                <h1 className='prod-h1'>Zerodha Products</h1>
                <p className='prod-para'>Sleek, modern, and intuitive trading platforms</p>
                <p className='prod-para1'>Check out our <Link className='prod-para1-link'>investment offerings →</Link></p>
            </div>
        </div>
     );
}

export default Hero;