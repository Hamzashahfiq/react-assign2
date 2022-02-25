import React from 'react'
import styles from './AdsStyle';
import Button from '../button/Button';

function Ads() {
    return (
        <div className='container-fluid m-0 p-0'>
            <div className="row m-0 p-0" style={styles.adsDivBg}>
                <div className="col-12 col-md-6 text-white m-0 m-lg-5 p-5">
                <h5 >Free consultation with exceptional quality</h5>
                    <p className='py-4'>Just one call away: +84 1102 2703</p>
                </div>
                <div className="col-12 col-md-4 m-0 m-lg-5 p-5">
                <Button  buttonName="Get your consultation" buttonClass ="btn btn-outline-light" />
                </div>
            </div>
        </div>
    )
}




export default Ads;