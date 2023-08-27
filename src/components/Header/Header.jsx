import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logoss.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuOpened] = useState(false)
  return (
    <div className='header'>
      <img src={Logo} alt='' className='logo'/>

      {menuOpened === false && mobile === true ? (
        <div
        style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}} 
         
        onClick={()=>setMenuOpened(true)}

        >
          <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/>
          </div>
      ) : (
      <ul className='header-menu'>
        <li  >
           <Link
           onClick={()=>setMenuOpened(false)}
           to='Home'
           spy={true}
           >
            Home</Link>
        </li>
        <li >
        <Link
        onClick={()=>setMenuOpened(false)}
        to='programs'
        spy={true}
        >Services</Link> 
        </li>
        <li>
        <Link
        onClick={()=>setMenuOpened(false)}
        to='reasons'
        spy={true}
        >Why us</Link>
        </li>
        <li>
        <Link
        onClick={()=>setMenuOpened(false)}
        to='products'
        spy={true}
        >Products</Link>
        </li>
        <li >
        <Link 
         onClick={()=>setMenuOpened(false)}
        to='Team'
        spy={true}>
          Team</Link>
        </li>
      </ul>

)}
    </div>
  )
}

export default Header