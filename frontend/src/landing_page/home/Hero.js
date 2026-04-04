import React from 'react';
import { Link } from 'react-router-dom';
import './homeHero.css'

function Hero() {
    return (
        <div className='container hero-container'>
            <div className='row text-center'>
                <img src='/images/heroHome.svg' alt='Hero' className='hero-img mb-5'></img>
                <h1 className='hero-head'>Invest in everything</h1>
                <p className='hero-para'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to='/signup'>
                    <button className='btn btn-primary hero-button'>Sign up for Free</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;