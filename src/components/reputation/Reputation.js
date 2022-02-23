import React from 'react';
import Cardimg1 from '../../assets/images/cardimg1';

function Reputation() {
    return (
        <div className='container-fluid'>
            <div className="row text-center p-5">
                <h3 className='fw-bold'>Our Reputation</h3>
                <div className="row text-center p-2">
                    <div className="col">
                        <div className="card" style="width: 18rem;">
                            <img src={Cardimg1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}


export default Reputation;