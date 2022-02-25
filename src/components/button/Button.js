import React from 'react'

function HeroButton({buttonClass,buttonName}) {
  return (
    <div>
        <button type="button" class={buttonClass}>{buttonName}</button>
    </div>
  )
}


export default HeroButton; 
