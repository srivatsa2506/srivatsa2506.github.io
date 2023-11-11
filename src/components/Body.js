import React from 'react'
import '../styles/Body.css'
import Projects from './Projects'
import ExtraCur from './ExtraCur'
import Knowledge from './Knowledge'

function Body() {
  return (
    <div className='body'>
        <div className='leftbody'>
        <Projects/>
        </div>
        <div className='rightbody'> 
        <Knowledge/>
        <ExtraCur/>
        </div>

             

    </div>
  )
}

export default Body