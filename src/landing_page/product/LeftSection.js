import React from 'react';
import { Link } from 'react-router-dom';
import './section.css';
function LeftSection({ imagUrl, productName, productDescription, learnMore, tryDemo }) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-12 col-lg-6 p-5'>
                    <img src={imagUrl} className='section-img' />
                </div>
                <div className='col-12 col-lg-6 p-5'>
                    <h1 className='sect-h1'>{productName}</h1>
                    <p className='sect-para'>{productDescription}</p>
                    {tryDemo && (
                        <a className="sect-link" href="">
                            {tryDemo} →
                        </a>
                    )}
                    {learnMore && (
                        <Link
                            className={`sect-link ${tryDemo ? "ms-5" : ""}`}
                        >
                            {learnMore} →
                        </Link>
                    )}

                    <div>
                        <a href=''><img src='/images/googlePlayBadge.svg' className='play-store' alt='Playstore'></img></a>
                        <a href=''><img src='/images/appstoreBadge.svg' className='play-store p-3 ms-3' alt='Playstore'></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;

