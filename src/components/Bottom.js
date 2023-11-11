import React from 'react'
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Bottom.css'

const details={
    "linkedIn" : "https://www.Linkedin.com/in/srivatsa-boddu",
    "email" : "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=srivatsaboddu@gmail.com&su=resume-website-contact&body=",
    "whatsapp":"https://wa.me/919100533545",
    "telegram":"https://t.me/srivatsaboddu",
    "instagram":"https://ig.me/m/srivatsa_boddu"

}
function Bottom() {
  return (
    <div className='footer'>
        <IconButton sx={{color: 'greenyellow'}} onClick={() => window.open(details.linkedIn)}>
            <LinkedInIcon className='icon' style={{width:"45",height:"45"}}/>
        </IconButton>

        <IconButton  sx={{color: 'greenyellow'}} onClick={() => window.open(details.email)}>
        <MailIcon className='icon' style={{width:"45",height:"45"}}/>
        </IconButton>

        <IconButton  sx={{color: 'greenyellow'}} onClick={() => window.open(details.whatsapp)}>
        <WhatsAppIcon className='icon'  style={{width:"45",height:"45"}}/>
        </IconButton>

        <IconButton  sx={{color: 'greenyellow'}} onClick={() => window.open(details.telegram)}>
        <TelegramIcon className='icon' style={{width:"45",height:"45"}}/>
        </IconButton>

        <IconButton  sx={{color: 'greenyellow'}} onClick={() => window.open(details.instagram)}>
        <InstagramIcon className='icon' style={{width:"45",height:"45"}}/>
        </IconButton>
    </div>
  )
}

export default Bottom;