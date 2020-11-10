import React from "react"
import "./offer.css"
import macbook from '../../images/macbook_PNG50 1.png'
import bgBottom from '../../images/Ellipse_12(2).png'
import bgTop from '../../images/Rectangle11.png'

const Offer = (props) => (
  <>
    <section className="offer">
      <img className='bg-op' src={bgTop} alt="bg-top" />
      <div className="container">
        <div className="offer_block">
          <h3 className='offer_block_title'>Создаем <span>удобные</span> и <span>эффективные</span> сайты</h3>
          <p className='offer_block_text'>выгодно выделяем вас среди конкурентов</p>

          <div onClick={()=>props.setShow(true)} className='offer_btn'>оставить заявку</div>

          <div className="offer_special">
            <h3 className="offer_special-title">Специальное предложение!</h3>
            <p className="offer_special-text">Оставте завку на разработку лэндинга и получите возможность составить ТЗ бесплатно!</p>
          </div>
          
        </div>
        <div className="offer_slider">
          <img src={macbook} alt="slider-bg" />
        </div>
      </div>
    </section>
    <div>
      <img className='bg-bottom' src={bgBottom} alt="bg-bottom" />
    </div>
  </>
)

export default Offer
