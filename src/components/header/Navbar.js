import React from 'react'
import Logo from '../logo/Logo';
import styles from './NavbarStyle';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border" style={styles.navSticky}>
            <div className="container">
                <div>
                    <a className="navbar-brand" href="#">
                       <Logo/>
                    </a>
                </div>
                <div>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className ="navbar-toggler-icon"></span>
                    </button>
                    <div className ="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className ="navbar-nav">
                            <a className ="nav-link active px-lg-4" aria-current="page" href="#Home" style={styles.na}>Home</a>
                            <a className ="nav-link px-lg-4" href="#AboutUs">About Us</a>
                            <a className ="nav-link px-lg-4" href="#Project">Projects</a>
                            <a className ="nav-link px-lg-4" href="#ServicePage">Services</a>
                            <a className ="nav-link px-lg-4 text-danger fw-bold" href="#contactUs">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;