import React from 'react'
import Navimg from '../../assets/images/navbarlogo.png'
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src={Navimg} alt="" width="30" height="36" className="d-inline-block align-text-top" />
                        <span className='text-primary p-2 fw-bold'>TheBox</span>
                    </a>

                </div>
                <div>
                    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className ="navbar-toggler-icon"></span>
                    </button>
                    <div className ="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className ="navbar-nav">
                            <a className ="nav-link active px-lg-4" aria-current="page" href="#">Home</a>
                            <a className ="nav-link px-lg-4" href="#aboutUS">About Us</a>
                            <a className ="nav-link px-lg-4" href="#">Projects</a>
                            <a className ="nav-link px-lg-4" href="#services">Services</a>
                            <a className ="nav-link px-lg-4 text-danger fw-bold" href="#">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;