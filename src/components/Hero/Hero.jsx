import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/heroimage1.webp"
import Heart from "../../assets/bitcoin-sign.png"
import Tcoin from "../../assets/tether.webp"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

const transition = {type:'spring',duration:3}
const mobile = window.innerWidth<=7687 ? true: false;

  return (
    <div className='hero' id='Home'>

      <div className="blur hero-blur"></div>
       <div className="left-h">
           <Header/>

           <div className='the-best'>
            <motion.div
            initial={{left:mobile? '125px':'298px'}}
            whileInView={{left:'5px'}}
            transition={{...transition,type:'tween'}}            
            
            
            >
            </motion.div>
           
           <span>Providing Best P2P service</span>
        </div>
        <div className='hero-text'>
            <div>
                <spans className="stroke-text">Safe</spans>
                <spans> and </spans>
            </div>
            <div>
                <span>
                   secure transition
                </span>
            </div>
            <div> <span>The main idea of this services is to provide crypto exchange </span></div>
        </div>
          
          {/* count */}
          <div className="figures">
             <div>
                <span>
                  <NumberCounter end={3} start={0} delay='1' preFix='+'/>
                </span>
                <span>Years of Expert Trading</span>
             </div>
             <div>
                <span>
                <NumberCounter end={100} start={50} delay='1' preFix='+'/>
                  </span>
                <span>Happy coustmers</span>
            </div>
             <div>
                <span >
                <NumberCounter end={50} start={10} delay='1' preFix='+'/>
                </span>
                <span>workshops on trading</span>
            </div>

          </div>
          <div className='hero-buttons'>
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn more</button>
          </div>

       </div>
       <div className="right-h">
       <button className='btn'>Contact Me</button>


        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:'4rem'}}
        transition={transition}
        className='heart-rate'>
            <img src={Heart} alt="" />
            <span>BITCOIN</span>
            <span>$12321 cost</span>
        </motion.div>
         <img src={ hero_image} alt=' ' className='hero-image'/>
          {/*T coin*/}
          <motion.div 
          initial={{right:"45rem"}}
          whileInView={{right:"40rem"}}
          transition={transition}
          className="tcoin">
            <img src={Tcoin} alt='' />
            <div>
            <span>Tether Coin</span><span>$3545456 cost</span>  
            </div>
          
          </motion.div>
       </div>

    </div>
  )
}

export default Hero