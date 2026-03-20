import React from 'react';
import {Link} from 'react-router-dom';
import './section2.css';
function RightSection({imagUrl, productName, productDescription, learnMore}) {
    return ( 

        <div className='container'>
            <div className='row p-5'>
                <div className='col-12 col-lg-6 p-5'>
                    <h1 className='sect-h1'>{productName}</h1>
                    <p className='sect-para'>{productDescription}</p>
                    <Link className='sect-link'>{learnMore} →</Link>
                </div>
                <div className='col-12 col-lg-6'>
                    <img src={imagUrl} className='section-img2'/>
                </div>
            </div>
        </div>
 

     );
}

export default RightSection;