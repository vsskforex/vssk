import React from 'react'
import './Silder.css'
import { Swiper, SwiperSlide } from 'swiper/react';
//import {Pagination,Navigation} from "swiper";
import { SliderProducts } from '../../data/products';
//import { Pagination, Navigation  } from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';


//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Silder = () => {
  return (


    <div className='s-container' id='products'>

<div className='Programs' id='programs'>           
<div className="Programs-header">
    <span className='stroke-text'>Explore</span><span>our </span><span>products</span>
</div>
           
 
 
        <Swiper
        breakpoints={{
           640:{
            slidesPerView:3
           },
        0:{
    slidesPerView:1
         }
        }}
             
        



        modules={ [Navigation, Pagination]}
        className='mySwiper'
        navigation={true}
        loopFillGroupWithBlank={true}

        
         slidesPerView={3}
         spaceBetween={40}
         slidesPerGroup={1}
         loop={true}
        >
      {SliderProducts.map((Silde,i)=>(
                
                <SwiperSlide >
                        <div className='left-s'>
                            <div className='name'>
                                <span>
                                    {Silde.name}
                                </span>
                                <span>
                                    {Silde.detail}
                                </span>
                            </div>

                            
                                <span>{Silde.price}$</span>
                                <div>Order Now</div>
                            

                        </div>

                        <img src={Silde.img} alt='products' className='img-p'/>

                </SwiperSlide>


               ))}
          
           
        </Swiper>
        </div> 
    </div>
  )
}

export default Silder
