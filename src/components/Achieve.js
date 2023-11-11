import React,{useState} from 'react'
import '../styles/Achieve.css'

function Achieve() {
  const [isActive,setActive]=useState(false);

  return (
    <div className='achieve' onClick={(e)=>setActive(!isActive)}>
        <div className='title'>ACHIEVEMENTS</div>
       
          <div className='content'><span className='dollar'>$</span> Secured <span className='heading'>Top 2%</span> among all the participants across the world in Introduction to Industry and Internet of Things 4.0 <span className='heading'> NPTEL course 2021 </span>and <span className='heading'>Top 5%</span> among all the participants across the world in Social Networks <span className='heading'> NPTEL course 2020</span>.</div>
          <div className='content'><span className='dollar'>$</span> Published a research paper <span className='heading'>“PULMONARY CT SCAN IMAGE SEGMENTATION”</span> with IJCRT.</div>
          <div className='content'><span className='dollar'>$</span> Certification in <span className='heading'>Google: Fundamentals of Digital Marketing</span>.</div>
          <div className='content'><span className='dollar'>$</span> Participated in <span className='heading'>Smart India Hackathon 2020 </span> as a <span className='heading'>team leader</span> for a team of 6members.</div>
          <div className='content'><span className='dollar'>$</span> Member of <span className='heading'>Developer Student Club - Google</span>.</div>
       
    </div>
  )
}

export default Achieve