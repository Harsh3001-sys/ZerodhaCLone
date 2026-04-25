import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        // <nav className="navbar navbar-expand-md sticky-top bg-body-light border-bottom">
        //     <div className="container">
        //         <div className='navbar-logo'>
        //             <Link className="navbar-brand" to="/">
        //             <img src='/images/logo.svg' alt='Logo' className='Logo'/>
        //             </Link>
        //         </div>
        //         <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <div className="mobile-menu">
        //                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" aria-current="page" to="/signup">Signup</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/about">About</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" aria-current="page" to="/products">Products</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/pricing">Pricing</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/support">Support</Link>
        //                 </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-md sticky-top bg-white border-bottom">
            <div className="container">

                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="/images/logo.svg" alt="Logo" className="Logo" />
                </Link>

                {/* Hamburger */}
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;