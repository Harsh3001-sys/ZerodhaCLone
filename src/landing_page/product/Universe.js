import React from 'react';
import './universe.css'
function Universe() {
    return ( 
        <div className='container text-center'>
            <div className='row'>
                <h1 className='uni-h1'>Want to know more about our technology stack? Check out the <a href=''>Zerodha.tech</a> blog.</h1>
                <h1 className='uni-h1-2'>The Zerodha Universe</h1>
                <p className='uni-para'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='uni-images'>
                <div className='row evenly uni-cont'>
                    <div>
                        <a href=""><img src='/images/zerodhaFundhouse.png' className='uni-img'/><br></br>
                        <span className='uni-span'>Our asset management venture<br></br>
                            that is creating simple and transparent index<br></br>
                            funds to help you save for your goals.
                        </span></a>
                    </div>
                    <div>
                        <a href=""><img src='/images/streakLogo.png' className='uni-img streak'/><br></br>
                        <span className='uni-span'>Systematic trading platform<br></br>
                            that allows you to create and backtest<br></br>
                            stratergies without coding.
                        </span></a>
                    </div>
                </div>
                <div className='row evenly uni-cont'>
                    <div>
                        <a href=""><img src='/images/sensibullLogo.svg' className='uni-img'/><br></br>
                        <span className='uni-span'>Options trading platform that lets you<br></br>
                                create strategies, analyze positions, and examine<br></br>
                                data points like open interest, FII/DII, and more.
                        </span></a>
                    </div>
                    <div>
                        <a href=""><img src='/images/smallcaseLogo.png' className='uni-img'/><br></br>
                        <span className='uni-span'>Thematic investing platform<br></br>
                                that helps you invest in diversified<br></br>
                                baskets of stocks on ETF's.
                        </span></a>
                    </div>
                </div>
                <div className='row evenly uni-cont'>
                    <div>
                        <a href=""><img src='/images/tijori.svg' className='uni-img tijori'/><br></br>
                        <span className='uni-span'>Investment research platform<br></br>
                                that offers detailed insights on stocks,<br></br>
                                sectors, supply chains, and more.
                        </span></a>
                    </div>
                    <div>
                        <a href=""><img src='/images/dittoLogo.png' className='uni-img ditto'/><br></br>
                        <span className='uni-span'>Personalized advice on life<br></br>
                                and healt insurance. No spam<br></br>
                                and no mis-selling.
                        </span></a>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary uni-button'>Sign up for Free</button>
        </div>
    );
}

export default Universe;