import { Link } from "gatsby"
import React, { useState } from "react"
import InputMask from 'react-input-mask'

import '../Contact/contact-form.css'
import './popup.css'

import telegram from '../../images/social-icons/telegram2.png'
import whatsapp from '../../images/social-icons/whatsapp2.png'
import vk from '../../images/social-icons/vk2.png'
import inst from '../../images/social-icons/inst2.png'
import phoneBg from '../../images/phone-015.png'
import Axios from "axios"

const Popup = (props) => {
    const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i;
    const mask = [firstLetter]
    const [emailInput, setEmailInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')

    const handlerSendMail = () => {
        Axios({
            method: 'post',
            url: 'https://webreznov.herokuapp.com/sendmailer',
            data: {
              email: emailInput,
              message: `email: ${emailInput}\nphone: ${phoneInput}`
            }
          });
    }

    if (props.show) {
        return (
            <div onClickCapture={() => props.setShow(false)} className='popup_wrapper'>
                <div onClickCapture={() => props.setShow(true)} className="popup_wrapper_block">
                    <form onSubmit={()=>handlerSendMail()} className="form" id="form">
                        <h2 className='form_title'>Оставьте свои контактные данные</h2>
                        <div className="form_fields">
                            {/* <input type="text" className='form_fields_input' placeholder='Ваше имя' /> */}
                            <InputMask onChange={()=>setEmailInput()} value={emailInput} mask={mask} maskChar=" " type="text" className='form_fields_input' placeholder='Ваше имя' required/>
                            <InputMask onChange={()=>setPhoneInput()} value={phoneInput} mask="+7\999 999 99 99" maskChar="_" type="phone" className='form_fields_input' placeholder='Ваш телефон' required/>
                            <input type="email" className='form_fields_input' placeholder='Ваш email' required/>
                            <input type="submit" className='form_fields_btn' value="отправить" />
                            <button onClickCapture={() => props.setShow(false)} className='form_close' title='закрыть окно'>X</button>
                            <input style={{"display":"none"}} onChange={null} readOnly value={props.info}/>
                        </div>
                        <div className="form_social">
                            <Link to='#'><img src={telegram} alt="telegram" /></Link>
                            <Link to='#'><img src={whatsapp} alt="telegram" /></Link>
                            <Link to='#'><img src={vk} alt="vk" /></Link>
                            <Link to='#'><img src={inst} alt="inst" /></Link>
                        </div>
                        <img className='form_bg' src={phoneBg} alt="phone" />
                    </form>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default Popup