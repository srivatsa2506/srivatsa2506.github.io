import React from 'react'
import '../styles/Details.css'
import Personal from './Personal'
import Technical from './Technical'
function Details() {
  return (
    <div className='details'>
        <Personal/>
        <Technical/>
    </div>
    
  )
}

export default Details