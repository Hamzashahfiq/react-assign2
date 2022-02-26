import React from 'react'
import styles from '../../components/hero/HeroStyle';
import Button from '../button/Button';


function Hero() {
  return (
    <div className="row" style={styles.headerBg}>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-6"><h1 className='fw-bold p-5'>
            Building things is our mission. Design by hamza 5330.
          </h1></div>
          <div className="col-md-6">
            <div className='p-4 pb-0 text-white text-center' style={styles.herodiv} >
              <h5>Feature Projects</h5>
              <p>The National University of Architecture</p>
              <div className="container">
                <div className='row'>
                  <div className="col-6 p-0 mb-1"><Button buttonName="&#8592; Back" buttonClass ="btn btn-outline-dark text-white" /></div>
                  <div className="col-6 p-0 mb-1"> <Button buttonName="Next &#8594;" buttonClass ="btn btn-outline-dark text-white" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Hero;
