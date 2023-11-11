import React from 'react'
import '../styles/Certificates.css'

const Certi={
  "Google Certification":"Fundamentals of Digital Marketing",
  "Cyber Security":"Attended Cyber-security workshop at Mahatma Gandhi Institute of Technology which was conducted by CSI.",
  "Internet Of Things":"Attended IOT workshop at Mahatma Gandhi Institute of Technology which was conducted by CSI.",
  "Smart India Hackathon 2020":"Participated in Smart India Hackathon 2020 as a team leader.",
  "Coursera and Cisco courses":"Completed and certified with Python for everybody, Python Data structures, AWS Fundamentals :Going cloud native and Programming Foundations with javascript, HTML, CSS courses from Coursera and Introduction to Network, Programming through C++ courses from Cisco."
}

function Certificates() {
  return (
    <div className='certifs'>
    <div className='title'>CERTIFICATES</div>
    {
      Object.keys(Certi).map((i)=>{
        return <div className='heading'>{i}<div className='content'>{Certi[i]}</div></div>
      })
    }
</div>

  )
}

export default Certificates