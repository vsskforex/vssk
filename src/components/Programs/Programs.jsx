import React from 'react'
import'./Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from "../../assets/rightArrow.png"

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        <div className="Programs-header">
            <span className='stroke-text'>Explore</span><span>our</span><span>Services</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program)=>
            <div className='category'>
                {program.image}
               <span>{program.heading}</span>
               <span>{program.details}</span>
               <div className='join-now'><span>Join Now</span><img src={RightArrow} alt=''></img> </div>
            </div> 
                )}

        </div>
    </div>
  )
}

export default Programs