import React from 'react';
import {Link} from 'react-router-dom';
import './about-hero.css'
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center heading'>
                <h2 className='abth2'>We pioneered the discount broking model in India.
                    <br></br>Now, we are breaking ground with our technology.
                </h2>
            </div>
            <hr></hr>
            <div className='row abt-p'>
                <div className='col-12 col-lg-6'>
                    <p className='abt-para'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p className='abt-para'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p className='abt-para'>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-12 col-lg-6'>
                    <p className='abt-para'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p className='abt-para'><Link to="#" className='abt-link'>Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p className='abt-para'>And yet, we are always up to something new every day. Catch up on the latest updates on our <Link to="#" className='abt-link'>blog</Link> or see what the media is <Link to="#" className='abt-link'>saying about us </Link> or learn more about our business and product <Link to="#" className='abt-link'>philosophies</Link>.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;