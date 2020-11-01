import { Link } from "gatsby"
import React from "react"
import InputMask from 'react-input-mask'

import telegram from '../../images/social-icons/telegram2.png'
import whatsapp from '../../images/social-icons/whatsapp2.png'
import vk from '../../images/social-icons/vk2.png'
import inst from '../../images/social-icons/inst2.png'
import "./contact.css"
import "./contact-form.css"

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      phone: '',
      email: ''
    }
  }
  render(){
    return (
      <section className="contact" id="contact">
        <div className="container">
          <form action="" className="form" id="form">
            <div className="form_fields">
              <input type="text" className='form_fields_input' placeholder='Ваше имя'/>
              <InputMask mask="+7\999 999 99 99" maskChar="_" type="phone" className='form_fields_input' placeholder='Ваш телефон' />
              <input type="email" className='form_fields_input' placeholder='Ваш email'/>
              <input type="button" className='form_fields_btn' value="отправить" />
            </div>
            <div className="form_social">
              <Link to='#'><img src={telegram} alt="telegram" /></Link>
              <Link to='#'><img src={whatsapp} alt="telegram" /></Link>
              <div className="separate"></div>
              <Link to='#'><img src={vk} alt="vk" /></Link>
              <Link to='#'><img src={inst} alt="inst" /></Link>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact
