import React from 'react'
import styles from './projectStyle';

 function Project() {
  return (
    <div className='container py-5'>
           <div className="row">
               <div className="col"><h4 className='fw-bold'>Projects</h4>
                      <h5 className='fw-bold  px-3 mt-4 border-start border-4 border-primary'><a  className='text-decoration-none text-primary' href="javascript:void(0)"> All</a></h5>
                      <h5 className='fw-bold  px-3' ><a className='text-decoration-none text-info' href="javascript:void(0)"> Commercial</a></h5>
                      <h5 className='fw-bold  px-3'><a  className='text-decoration-none text-info' href="javascript:void(0)"> Residential</a></h5>
                      <h5 className='fw-bold  px-3'><a className='text-decoration-none text-info' href="javascript:void(0)"> Other</a></h5>
               </div>
               <div className="col"></div>
       </div>
    </div>
  )
}

export default Project;



