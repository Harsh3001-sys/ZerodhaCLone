import React from 'react';
import './main-hero.css';
function Hero() {
    return (
        <div className='main-sec'>
            <div className='row supp-cont'>
                <div className='supp-div'>
                    <a href='' className='supp-a'>Support Portal</a>
                    <button className='btn btn-primary ticket-button'>My Tickets</button>
                </div>
                <div className='input-box'>
                    <div className='serch-icon'><i class="fa-solid fa-magnifying-glass"></i></div>
                    <input
                        type="text"
                        className='inp-supp'
                        placeholder="Eg: How do I open my account, How do I activate F&O..."
                    ></input>
                </div>
            </div>
        </div>

    );
}

export default Hero;