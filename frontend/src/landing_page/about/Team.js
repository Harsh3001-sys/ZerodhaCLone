import React from 'react';
import { Link } from 'react-router-dom';
import './team.css';
function Team() {
    return (
        <div className='container team-cont'>
            <div className='row text-center'>
                <h2 className='team-h2'>People</h2>
            </div>
            <div className='row main-div'>
                <div className='col-12 col-lg-5 text-center ceo-txt'>
                    <img src='/images/nithinKamath.jpg' alt='Nithin Kamath' className='team-img'></img>
                    <h5 className='team-heading'>Nithin Kamath</h5>
                    <p className='team-p'>Founder, CEO</p>
                </div>
                <div className='col-12 col-lg-7 ceo-txt'>
                    <p className='team-p1'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className='team-p1'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className='team-p1'>Playing basketball is his zen.</p>
                    <p className='team-p1'>Connect on <a href='' className='team-l'>Homepage</a> / <a href='' className='team-l'>TradingQnA</a> / <a href='' className='team-l'>Twitter</a></p>
                </div>
            </div>
            <div className='row text-center gy-5'>
                <div className='team-mem-img col-12 col-sm-6 col-lg-4'>
                    <img src='/images/Nikhil.jpg' alt='Nikhil' className='team-img'></img>
                    <h5 className='team-heading'>Nikhil Kamath</h5>
                    <p className='team-p'>Co-founder & CFO</p>
                </div>
                <div className='team-mem-img col-12 col-sm-6 col-lg-4'>
                    <img src='/images/Kailash.jpg' alt='Kailash' className='team-img'></img>
                    <h5 className='team-heading'>Dr. Kailash Nadh</h5>
                    <p className='team-p'>CTO</p>
                </div>
                <div className='team-mem-img col-12 col-sm-6 col-lg-4'>
                    <img src='/images/Venu.jpg' alt='Venu' className='team-img'></img>
                    <h5 className='team-heading'>Venu Madhav</h5>
                    <p className='team-p'>COO</p>
                </div>
                <div className='team-mem-img col-12 col-sm-6 col-lg-4'>
                    <img src='/images/Hanan.jpg' alt='Hanan' className='team-img'></img>
                    <h5 className='team-heading'>Hanan Delvi</h5>
                    <p className='team-p'>CCO</p>
                </div>
                <div className='team-mem-img col-12 col-sm-6 col-lg-4'>
                    <img src='/images/Seema.jpg' alt='Seema' className='team-img'></img>
                    <h5 className='team-heading'>Seema Patil</h5>
                    <p className='team-p'>Director</p>
                </div>
                <div className='team-mem-img col-12 col-sm-6 col-lg-4'>
                    <img src='/images/Karthik.jpg' alt='Karthik' className='team-img'></img>
                    <h5 className='team-heading'>Karthik Rangappa</h5>
                    <p className='team-p'>Chief of Education</p>
                </div>
                <div className='team-mem-img col-12 col-sm-6 col-lg-4'>
                    <img src='/images/Austin.jpg' alt='Austin' className='team-img'></img>
                    <h5 className='team-heading'>Austin Prakesh</h5>
                    <p className='team-p'>Director Strategy</p>
                </div>
            </div>

        </div>
    );
}

export default Team;