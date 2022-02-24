import React from 'react'
import styles from './ServiceCardBottomStyle';

function ServiceCardBottom(props) {
    return (
        <div className="container">
            <div className="row">
                <div class="card border-0" style={styles.cardMainDiv}>
                <img src={props.cardBottomContent.cardImg} class="card-img-top" style={{width: '50px', height: '50px', position:'absolute', top:props.cardBottomContent.position1, left:props.cardBottomContent.position2}} alt="..."/>
                    <div class="card-body">
                        <h2>{props.cardBottomContent.cardHeading}</h2>
                        <p class="card-text border-start border-3 px-2 border-danger">{props.cardBottomContent.cardText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCardBottom;
