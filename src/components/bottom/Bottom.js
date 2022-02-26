import React from 'react'
import Logo from '../logo/Logo';
import Button from '../button/Button';
import {IconContext} from "react-icons";
import {FaFacebook} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


function Bottom() {
    return (
        <div className="container my-4" id="contactUs">
            <div className="row px-4">
                <div className="col-12 col-md-7 my-2">
                    <p><span className='text-primary pe-3'>Address:</span> 6391 Elgin St. Celina, Delaware 10299</p>
                    <p><span className='text-primary pe-3'>Phone:</span> +84 1102 2703</p>
                    <p><span className='text-primary pe-3'>Email:</span> hello@thebox.com</p>
                    <div className='m-5 ms-0'> <Logo /></div>

                </div>
                <div className="col-12 col-md-5 my-2">
                    <p className='text-primary'>Newsletter :</p>
                    <div className='row'>
                        <div className="col-12 col-md-6"><input type="email" class="form-control" placeholder="Your email hare" id="inputEmail4" required />  </div>
                        <div className="col-12 col-md-6">  <Button buttonName="Subscribe" buttonClass="btn btn-warning my-1 my-md-0" /></div>
                    </div>
                    <p className='text-primary mt-5 mb-2'>Social :</p>
                    <IconContext.Provider value={{ color: "#3D445C", size:"2em", className: "global-class-name" }}>
                        <div>
                           <a href="javascript:void(0)"> <FaFacebook /></a>
                           <a className='mx-3' href="javascript:void(0)"> <FaLinkedin /></a>
                           <a className='mx-2' href="javascript:void(0)"> <FaTwitterSquare /></a>
                        </div>
                    </IconContext.Provider>


                </div>
            </div>


        </div>
    )
}


export default Bottom;
