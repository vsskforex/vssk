import React from 'react'
import'./Footer.css'
import Tele from "../../assets/tel.png" 
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logoss.png'

const Footer = () => {
  return (
    
      <div className="Footer-container">
        <hr/>
        <div className="footer">
          <div className="social-links">
          <img src={Tele} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />

          </div>
          <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      
        </div>
      
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
      
      </div>


    
  )
}

export default Footer