import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


const Navbar = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home'>
                        <img
                            src="./navbarlogo.png"
                            className="rounded-circle App-logo" width="45" height="40" alt="logo"/>
                    </Link>
                    <button className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <i className="fa fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/strains'>Strains</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/distributor'>Distributors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/profile'>Profile</Link>
                            </li>
                        </ul>
                        <div className="d-flex nav-item">
                            <Link to='/'>
                                <button type="button" className="btn btn-link px-3 me-2 text-decoration-none">
                                    Login
                                </button>
                            </Link>
                            <Link to='/signup'>
                                <button type="button" className="btn btn-block btn-outline-primary me-3">
                                    Sign up
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
