import React from 'react'

function HeroButton(props) {
  return (
    <div>
        <button type="button" class="btn btn-outline-dark text-white">{props.buttonName}</button>
    </div>
  )
}


export default HeroButton; 
