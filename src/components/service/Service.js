import React from 'react'
import styles from './ServiceStyle';
import ServiceCard from '../serviceCard/ServiceCard';
import ServiceCardImg1 from '../../assets/images/serviceCardLogo1.png';
import ServiceCardImg2 from '../../assets/images/serviceCardLogo2.png';
import ServiceCardImg3 from '../../assets/images/serviceCardLogo3.png';
import ServiceCardImg4 from '../../assets/images/serviceCardLogo4.png';
import ServiceCardImg5 from '../../assets/images/serviceCardLogo5.png';
import ServiceCardImg6 from '../../assets/images/serviceCardLogo6.png';
import ServiceCardBottom from '../serviceCardBottom/ServiceCardBottom';
import ServiceCardBottomImg1 from '../../assets/images/serviceBottomImg1.png';
import ServiceCardBottomImg2 from '../../assets/images/serviceBottomImg2.png';
import ServiceCardBottomImg3 from '../../assets/images/serviceBottomImg3.png';
import ServiceCardBottomImg4 from '../../assets/images/serviceBottomImg4.png';
import Button from '../button/Button';


function Service() {
    const serviceCard1 = { cardImg: ServiceCardImg1, cardText: 'Construction' };
    const serviceCard2 = { cardImg: ServiceCardImg2, cardText: 'Renovation', bgcolor: '#2947A9', textColor: 'white' };
    const serviceCard3 = { cardImg: ServiceCardImg3, cardText: 'Consultation' };
    const serviceCard4 = { cardImg: ServiceCardImg4, cardText: 'Repair Services', bgcolor: '#2947A9', textColor: 'white' };
    const serviceCard5 = { cardImg: ServiceCardImg5, cardText: 'Architecture' };
    const serviceCard6 = { cardImg: ServiceCardImg6, cardText: 'Electric', bgcolor: '#2947A9', textColor: 'white' };
    const serviceCardBottom1 = { cardImg: ServiceCardBottomImg1, cardText: 'Happy Clients', cardHeading: '84', position1: '-30px', position2: '272px' };
    const serviceCardBottom2 = { cardImg: ServiceCardBottomImg2, cardText: 'Projects Completed', cardHeading: '123', position1: '-30px', position2: '-26px' };
    const serviceCardBottom3 = { cardImg: ServiceCardBottomImg3, cardText: 'Awards Win', cardHeading: '37', position1: '-30px', position2: '272px' };
    const serviceCardBottom4 = { cardImg: ServiceCardBottomImg4, cardText: 'Years in Business', cardHeading: '30', position1: '100px', position2: '272px' };



    return (
        <>
            <div className='container my-5' id="services" style={styles.servicemaindiv}>
                <div className="row px-5 m-1 mt-4">
                    <h4 className="col-12 fw-bold text-center">Services</h4>
                </div>
                <div className="row m-1 p-2 pb-5 p-md-5 mx-md-5 text-center">
                    <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent={serviceCard1} /></div>
                    <div className="col-12 col-md-4 p-md-2 my-2"> < ServiceCard cardContent={serviceCard2} /></div>
                    <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent={serviceCard3} /></div>
                    <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent={serviceCard4} /></div>
                    <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent={serviceCard5} /></div>
                    <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent={serviceCard6} /></div>
                </div>
            </div>
            <div className="container">
                <div className="row m-2 m-md-5">
                    <div className="col-12 px-md-5 col-lg-9">
                        <div className='' style={styles.aboutBDiv}>
                            <div className='' style={styles.aboutBCard1} >< ServiceCardBottom cardBottomContent={serviceCardBottom1} /></div>
                            <div style={styles.aboutBCard2}>< ServiceCardBottom cardBottomContent={serviceCardBottom2} /></div>
                            <div style={styles.aboutBCard3}>< ServiceCardBottom cardBottomContent={serviceCardBottom3} /></div>
                            <div style={styles.aboutBCard4}>< ServiceCardBottom cardBottomContent={serviceCardBottom4} /></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h1 className='p-5 ps-0'>30 Years Experience</h1>
                        <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                        
                         <Button  buttonName="Contact Us" buttonClass ="btn btn-primary my-5 px-5" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Service;