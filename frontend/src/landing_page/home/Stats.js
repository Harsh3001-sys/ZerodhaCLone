import React from 'react';
import './stats.css';
function Stats() {
    return (
        <>
            <div className='container stats-container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <h2 className='stats-h2'>Trust with confidence</h2>
                        <h3 className='stats-h3'>Customer-first always</h3>
                        <p className='stats-para'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        <h3 className='stats-h3'>No spam or gimmicks</h3>
                        <p className='stats-para'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a className='link1' href=''>Our philosophies.</a></p>
                        <h3 className='stats-h3'>The Zerodha universe</h3>
                        <p className='stats-para'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        <h3 className='stats-h3'>Do better with money</h3>
                        <p className='stats-para'>With initiatives like <a className='link1' href=''>Nudge</a> and <a className='link1' href=''>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <img src='/images/ecosystem.png' alt='Ecosystem' className='ecosystem'/>
                        <p className='links text-center'>
                            <a href='' className='link1'>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                            <a href='' className='link2'>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
                <div className='row press-img text-center'>
                    <div className='col col-sm-12'>
                        <img src='/images/pressLogos.png'></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Stats;