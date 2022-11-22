import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/home'>
                            <img
                                src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2019/04/09/2128709.jpg"
                                className="rounded-circle" width="45" height="40" alt=""/>
                        </Link>
                        <button className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#toggleMobileMenu"
                                aria-controls="toggleMobileMenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="toggleMobileMenu">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/strains'>Strains</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/distributor'>Distributor</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to='/profile'>Profile</Link>
                                </li>
                            </ul>
                            <form className="d-flex ">
                                <input className="form-control me-md-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="fa fa-search btn btn-link me-2 text-decoration-none"/>
                            </form>
                            <div className="d-flex nav-item">
                                <Link to='/'><button type="button" className="btn btn-link px-3 me-2 text-decoration-none">
                                    Login
                                </button></Link>
                                <Link to='/signup'><button type="button" className="btn btn-block btn-outline-primary me-3">
                                    Sign up
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
}

export default Navbar;
