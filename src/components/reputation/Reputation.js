import React from 'react';
import ReputationCard from '../reputationCard/ReputationCard';
import Cardimg1 from '../../assets/images/cardimg1.png';
import Cardimg2 from '../../assets/images/cardimg2.png';

function Reputation() {
    const cardInfo = { imgsrc: Cardimg1, cardHeading: "Best Services", cardText: "Nullam senectus porttitor in eget. Eget rutrum leo interdum." };
    const cardInfo2 = { imgsrc: Cardimg1, cardHeading: "Best Teams", cardText: "Cursus semper tellus volutpat aliquet lacus. " };
    const cardInfo3 = { imgsrc: Cardimg2, cardHeading: "Best Designs", cardText: "Ultricies at ipsum nunc, tristique nam lectus." };
    return (
        <div className='container-fluid'>
            <div className="row m-3 p-md-5">
                <h3 className='fw-bold text-center'>Our Reputation</h3>
                <div className="row m-md-5 px-md-5">
                    <div className="col-12 col-lg-4 my-2">
                        <ReputationCard cardContent={cardInfo} />
                    </div>
                    <div className="col-12 col-lg-4 my-2">
                        <ReputationCard cardContent={cardInfo2} />
                    </div>
                    <div className="col-12 col-lg-4 my-2">
                        <ReputationCard cardContent={cardInfo3} />
                    </div>
                </div>
            </div>
        </div>
    )
}






export default Reputation;