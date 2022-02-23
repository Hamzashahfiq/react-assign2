import React from 'react'
import styles from './ReputationCardStyle';

function ReputationCard(props) {

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.cardContent.imgsrc} className="card-img-top ms-4 mt-2" style={styles.cardimgsize} alt="..." />
                <div className="card-body">
                    <h5>{props.cardContent.cardHeading}</h5>
                    <p className="card-text">{props.cardContent.cardText}</p>
                </div>
            </div>
        </div>
    )
}



export default ReputationCard;