import React from 'react'

function Button({buttonClass,buttonName}) {
  return (
    <div className=''>
        <button type="button" class={buttonClass}>{buttonName}</button>
    </div>
  )
}


export default Button; 
