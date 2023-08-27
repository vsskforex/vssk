import React from 'react'
import './Reasons.css'
import image1 from '../../assets/trading1.jpg'
import image2 from '../../assets/trading2.webp'
import image3 from '../../assets/image(5).jpg'
import image4 from '../../assets/trading3.jpg'
import tick from '../../assets/tick1.jpg'
import service1 from '../../assets/kucoinlogo.png'
import service2 from '../../assets/okxlogo.webp'
import service3 from '../../assets/BinanceLogo.png'


const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
       <span>Some Reasons</span>
       <div>
        <span className='stroke-text'>why</span>
        <span> Choose us?</span>
       </div>
       <div className='details-r'>
       <div>
        <img src={tick} alt=""></img>
        <span>Get instant reply</span>
        </div>
       <div>
        <img src={tick} alt="" />
        <span>24*7 coustmer support</span>
        </div>
       <div>
        <img src={tick} alt="" />
        <span>100% trusted</span>
        </div>
       <div>
        <img src={tick} alt="" />
        <span>**User document submission is mandatory for trusted transactions</span>
         </div>
        </div>
        <span
        style={{
          color:'var(--gray)',
          fontWeight:'normal',
        }}
        >
          OUR SERVICES ARE IN

        </span>
        <div className="partners">
          <img src={service1} alt="" />
          <img src={service2} alt="" />
          <img src={service3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
