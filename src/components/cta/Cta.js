import React from 'react'
import styles from './CtaStyle';
function Cta() {
    return (
        <div style={styles.ctaMainDiv}>
            <div className="container">
                <div className="row text-center">
                    <h3 className="my-4 fw-bolder">What can us do for you?</h3>
                    <p>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
                    <form action="javascript:void(0)" className='my-4'>
                        <div class="row g-3 mx-lg-5 ">
                            <div class="col-12 col-md-6">
                                <input type="text" class="form-control" placeholder="First name*" aria-label="First name" required />
                            </div>
                            <div class="col-12 col-md-6">
                                <input type="email" class="form-control" placeholder="Email*" id="inputEmail4" required />
                            </div>
                        </div>
                        <div class="row g-3 mx-lg-5 my-2">
                            <div class="col-12 col-md-6">
                                <select class="form-select" aria-label="Default select example" required>
                                    <option value="1">Reason for Contacting*</option>
                                    <option value="2">one</option>
                                    <option value="3">two</option>
                                </select>
                            </div>
                            <div class="col-12 col-md-6">
                                <input type="tel" class="form-control" placeholder="Phone No" />
                            </div>
                        </div>
                        <div class="row g-3 mx-lg-5 my-2">
                            <div className="col-12">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                                <h6 className='my-3'><span className='text-danger'>*</span> indicates a required field</h6>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary px-5">Submit</button>
                            </div>
                        </div>


                    </form>

                </div>
            </div>
        </div>


    )
}



export default Cta;
