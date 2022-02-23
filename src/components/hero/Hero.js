import React from 'react'
import styles from '../../components/hero/HeroStyle';
import HeroButton from '../heroButton/HeroButton';


function Hero() {
  return (
    <div className="row" style={styles.headerBg}>
      <div className="container">
        <div className="row">
          <div className="col-md-6"><h1 className='fw-bold p-5'>
            Building things is our mission. Design by hamza 5330.
          </h1></div>
          <div className="col-md-6">
            <div className='p-4 pb-0 text-white text-center' style={styles.herodiv} >
              <h5>Feature Projects</h5>
              <p>The National University of Architecture</p>
              <div className="container">
                <div className='row'>
                  <div className="col-6 p-0 m-0"><HeroButton buttonName="&#8592; Back" /></div>
                  <div className="col-6 p-0 m-0"> <HeroButton buttonName="Next &#8594;" /></div>
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
