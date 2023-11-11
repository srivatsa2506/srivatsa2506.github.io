import React from 'react'
import '../styles/WorkExperience.css'

const WorkExp=[
  { "role" : "Student Employee (Part Time)", "description" : "Part time job at Campus Dining and Services at University at Buffalo", "period" : "(September 2023-Present)"},
  { "role" : "Programmer Analyst", "description" : "Full time job at Cognizant Technological Solutions", "period" : "(October 2022-June 2023)"},
  {"role" : "Full Stack Developer - Team Lead", "description" : "Internship at Cognizant Technological Solutions", "period" : "(March 2022-August 2022)"} 
]

function WorkExperience() {
  return (
    <div className='workexp'>
        <div className='title'>WORK EXPERIENCE</div>
        
           { WorkExp.map((data)=>{
            return (
                    <div className='heading'>{data.role}
                    <div className='content'>{data.description}</div>
                    <div className='date'>{data.period}</div>
                    </div>
                    )
            })
          }
        
       
    </div>
  )
}

export default WorkExperience