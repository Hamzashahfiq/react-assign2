import React from 'react'
import './About.css';
import styles from './AboutUsStyle';
import Button from '../button/Button';


function AboutUs() {
    return (
        <div>
            <div className="container" id='aboutUS'>
                <div className="row" >
                    <div className="col mb-3">
                        <div className='bgImgDiv' style={styles.imgdivSize}>
                              <div className='text-white p-3 aboutdiv' style={styles.aboutdiv}>
                                  <h5 className='fw-bold'>About us</h5>
                                  <p className='mt-4'>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. <br/><br/>
                                   We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                                   <br/><br/><br/>
                                   <Button  buttonName="More on Our History" buttonClass ="btn btn-light" />


                              </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutUs;