import React from 'react'
import styles from './ServiceStyle';
import ServiceCard from '../serviceCard/ServiceCard';
import ServiceCardImg1 from '../../assets/images/serviceCardLogo1.png';
import ServiceCardImg2 from '../../assets/images/serviceCardLogo2.png';
import ServiceCardImg3 from '../../assets/images/serviceCardLogo3.png';
import ServiceCardImg4 from '../../assets/images/serviceCardLogo4.png';
import ServiceCardImg5 from '../../assets/images/serviceCardLogo5.png';
import ServiceCardImg6 from '../../assets/images/serviceCardLogo6.png';


function Service() {
    const serviceCard1 = {cardImg:ServiceCardImg1, cardText: 'Construction'};
    const serviceCard2 = {cardImg:ServiceCardImg2, cardText: 'Renovation', bgcolor:'#2947A9',textColor:'white'};
    const serviceCard3 = {cardImg:ServiceCardImg3, cardText: 'Consultation'};
    const serviceCard4 = {cardImg:ServiceCardImg4, cardText: 'Repair Services', bgcolor:'#2947A9', textColor:'white'};
    const serviceCard5 = {cardImg:ServiceCardImg5, cardText: 'Architecture'};
    const serviceCard6 = {cardImg:ServiceCardImg6, cardText: 'Electric', bgcolor:'#2947A9' ,textColor:'white'};

    
    
    return (
        <div className='container my-5' id="services" style={styles.servicemaindiv}>
            <div className="row px-5 m-1 mt-4">
                <h4 className="col-12 fw-bold text-center">Services</h4>
            </div>
            <div className="row m-1 p-2 pb-5 p-md-5 mx-md-5 text-center">
                <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent = {serviceCard1} /></div>
                <div className="col-12 col-md-4 p-md-2 my-2"> < ServiceCard cardContent = {serviceCard2} /></div>
                <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent = {serviceCard3}/></div>
                <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent = {serviceCard4}/></div>
                <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent = {serviceCard5}/></div>
                <div className="col-12 col-md-4 p-md-2 my-2">< ServiceCard cardContent = {serviceCard6}/></div>
            </div>
        </div>
    )
}


export default Service;