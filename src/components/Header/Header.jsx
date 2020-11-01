import { Link } from "gatsby"
import React from "react"
import "./header.css"
import telegram from '../../images/social-icons/telegram.png'
import whatsapp from '../../images/social-icons/whatsapp.png'
import vk from '../../images/social-icons/vk.png'
import inst from '../../images/social-icons/inst.png'
import logo from '../../images/logo.png'

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to='#'><img src={logo} alt=""/></Link>
    </div>
    <div className="contact-block">      
      <Link to='#'><img src={telegram} alt="telegram"/></Link>
      <Link to='#'><img src={whatsapp} alt="telegram"/></Link>
      <Link to='#'><img src={vk} alt="vk"/></Link>
      <Link to='#'><img src={inst} alt="inst"/></Link>      
    </div>
  </header>
)

export default Header
