import React from 'react'
import Navimg from '../../assets/images/navbarlogo.png'



function Logo() {
    return (
        <>
            <img src={Navimg} alt="" width="30" height="36" className="d-inline-block align-text-top" />
            <span className='text-primary p-2 fw-bold'>TheBox</span>
        </>
    )
}


export default Logo;