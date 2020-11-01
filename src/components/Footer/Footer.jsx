import { Link } from "gatsby"
import React from "react"
import "./footer.css"
import telegram from '../../images/social-icons/telegram.png'
import whatsapp from '../../images/social-icons/whatsapp.png'
import vk from '../../images/social-icons/vk.png'
import inst from '../../images/social-icons/inst.png'
import logo from '../../images/logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="footer_social">
      <Link to='#'><img src={telegram} alt="telegram" /></Link>
      <Link to='#'><img src={whatsapp} alt="telegram" /></Link>
      <Link to='#'><img src={vk} alt="vk" /></Link>
      <Link to='#'><img src={inst} alt="inst" /></Link>
    </div>
    <div className="footer_year">
      <strong>© {new Date().getFullYear()}, #webreznov__studio</strong>
    </div>
    <div className="footer_logo">
      <Link to='#'><img src={logo} alt="logo" /></Link>
    </div>
  </footer>
)

export default Footer
