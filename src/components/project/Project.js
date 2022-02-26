import React from 'react'
import styles from './projectStyle';
import ProjectCard from '../projectCard/ProjectCard';
import projectImg1 from '../../assets/images/projectImg1.png'
import projectImg2 from '../../assets/images/projectImg2.png'
import projectImg3 from '../../assets/images/projectImg3.png'
import projectImg4 from '../../assets/images/projectImg4.png'
import Button from '../button/Button';

function Project() {
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-12  col-lg-6 my-4"><h4 className='fw-bold'>Projects</h4>
          <h5 className='fw-bold  px-3 mt-4 border-start border-4 border-primary'><a className='text-decoration-none text-primary' href="javascript:void(0)"> All</a></h5>
          <h5 className='fw-bold  px-3' ><a className='text-decoration-none text-info' href="javascript:void(0)"> Commercial</a></h5>
          <h5 className='fw-bold  px-3'><a className='text-decoration-none text-info' href="javascript:void(0)"> Residential</a></h5>
          <h5 className='fw-bold  px-3'><a className='text-decoration-none text-info' href="javascript:void(0)"> Other</a></h5>
        </div>
        <div className="col-12 col-lg-6 my-4">
          <div className="row">
            <div className="col-12 col-lg-6">
              <ProjectCard cardCHeading="Wildstone Infra Hotel" cardCText='2715 Ash Dr. San Jose, South Dakota' cardImg={projectImg1} />
              <ProjectCard cardCHeading="Wish Stone Building" cardCText='2972 Westheimer Rd. Santa Ana, Illinois' cardImg={projectImg2} /></div>
            <div className="col-12 col-lg-6">
              <ProjectCard cardCHeading="Mr. Parkinston’s House" cardCText='2715 Ash Dr. San Jose, South Dakota' cardImg={projectImg3} />
              <ProjectCard cardCHeading="Oregano Height" cardCText='2715 Ash Dr. San Jose, South Dakota' cardImg={projectImg4} /></div>
          </div>
          <div className="row"> 
            <div className="col-12 col-lg-6 p-0 mb-1 text-lg-center"><Button buttonName="&#8592; Back" buttonClass="btn btn-dark text-white px-5 mx-5" /></div>
            <div className="col-12 col-lg-6 p-0 mb-1 text-lg-center"><Button buttonName="Next &#8594;" buttonClass="btn btn-dark text-white px-5 mx-5" /> </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project;



