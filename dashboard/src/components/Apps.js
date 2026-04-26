import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Apps.css";

const Apps = () => {
  return (
    <>
      <div className='uni-images'>
        <div className='row evenly uni-cont'>
          <div>
            <a href=""><img src='../logo.png' className='uni-img kite' /><br></br>
              <span className='uni-span'>Fast and elegant trading platform for stocks,
                 derivatives, commodities, and more.
              </span></a>
          </div>
          <div>
            <a href=""><img src='/images/console.png' className='uni-img' /><br></br>
              <span className='uni-span'>Portfolio analytics and reporting
                 platform to track holdings, P&L, taxes and statements.
              </span></a>
          </div>
        </div>
        <div className='row evenly uni-cont'>
          <div>
            <a href=""><img src='/images/coin.png' className='uni-img' /><br></br>
              <span className='uni-span'>Commission-free direct mutual<br></br>
                 fund platform to invest and<br></br>
                 grow long-term wealth.
              </span></a>
          </div>
          <div>
            <a href=""><img src='/images/streakLogo.png' className='uni-img streak' /><br></br>
              <span className='uni-span'>Systematic trading platform<br></br>
                that allows you to create and backtest<br></br>
                stratergies without coding.
              </span></a>
          </div>
        </div>
        <div className='row evenly uni-cont'>
          <div>
            <a href=""><img src='/images/sensibullLogo.svg' className='uni-img' /><br></br>
              <span className='uni-span'>Options trading platform that lets you<br></br>
                create strategies, analyze positions, and examine<br></br>
                data points like open interest, FII/DII, and more.
              </span></a>
          </div>
          <div>
            <a href=""><img src='/images/smallcaseLogo.png' className='uni-img' /><br></br>
              <span className='uni-span'>Thematic investing platform<br></br>
                that helps you invest in diversified<br></br>
                baskets of stocks on ETF's.
              </span></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
