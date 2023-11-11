import React from 'react'
import '../styles/Personal.css'
const dob = new Date('2001-06-25');
const currentDate = new Date();
const ageDifference = currentDate.getFullYear() - dob.getFullYear();
const age =
  currentDate.getMonth() < dob.getMonth() ||
  (currentDate.getMonth() === dob.getMonth() &&
    currentDate.getDate() < dob.getDate())
    ? ageDifference - 1
    : ageDifference;
const address=['81 Merrimac Street, Buffalo, NewYork, USA -14214'," ",'F.no:205,Prashanthi prangan apartments, beside Sai Sanjeevini Hospitals, Doctors Colony, Saroornagar, Hyderabad, Telangana, India - 500035']
const emails=['srivatsaboddu@gmail.com','sboddu@buffalo.edu', "s3designergarage@gmail.com"]
const mobno=['+1-7169365662 (USA)','+91-9100533545 (INDIA)']
const Details={
    "Date of Birth":"25 JUNE 2001",
    "Age": age,
    "Nationality":"Indian",
    "Email": emails,
    "Address": address,
    "Mobile Number ": mobno,
}

function Personal() {

     return (
    <div className='personal'>
        <div className='title' >PERSONAL DETAILS</div>
        
       
{Object.keys(Details).map((key, index) => (
  <div key={index} className='heading'>
    {key}
    <div className='content'>
      {Array.isArray(Details[key]) ? (
        Details[key].map((value, i) => (
          <React.Fragment key={i}>
            {value}
            {i < Details[key].length - 1 && <br />}
          </React.Fragment>
        ))
      ) : (
        Details[key]
      )}
    </div>
  </div>
))}






        
        
  </div>
  )
}

export default Personal