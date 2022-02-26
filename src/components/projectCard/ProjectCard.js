import React from 'react'

function ProjectCard({cardCHeading, cardCText, cardImg}) {
    return (
        <div class="card my-3" style={{width: '18rem'}}>
            <img src={cardImg} class="card-img-top" alt="Project Image"/>
                <div class="card-body text-white bg-primary">
                    <h5>{cardCHeading} </h5>
                    <p class="card-text">{cardCText}</p>
                </div>
        </div>
    )
}


export default ProjectCard;