import React from 'react'
import '../styles/Projects.css'

const Projs={
  "Self project" : "Fetching data from NASA using API’s by React Js and SpringBoot.",
  "Internship project - Team Lead" : "Claims Management System using React Js, SpringBoot and AWS.",
  "Major project(College) - Team Lead" : "3D Holographic audio visualizer using gesture controller.",
  "Mini project(College)" : "Pulmonary CT scan image segmentation using U-Net architecture.",
}


function Projects() {
  return (
    <div className='projs'>
    <div className='title'>PROJECTS</div>
    {
      Object.keys(Projs).map((i)=> {
      return <div className='heading'>{i}<div className='content'>{Projs[i]}</div></div>
      })
    }
</div>
  )
}

export default Projects