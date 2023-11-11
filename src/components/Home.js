import React from 'react'
import '../styles/Home.css';

const details={
  "name":"SRIVATSA BODDU",
  "description": "Graduate Student MS CSE @UB, SUNY",
  "image" : "https://firebasestorage.googleapis.com/v0/b/srivatsa-boddu-resume.appspot.com/o/img.png?alt=media&token=4ff9f0e0-56a9-4261-8f06-482f95d8dac2",

}

function Home() {
      return (
    <div className='home'>
        <div className='profile_img'>
            <img src={details.image} alt="profile img" width={123} height={164}/>
        </div>
       <div className='name'><label>{details.name}</label>
       <div className='description'><label>{details.description}</label></div>
       </div> 
       
    </div>
  )
}

export default Home