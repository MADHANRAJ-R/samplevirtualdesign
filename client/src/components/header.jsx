import React, { useState } from 'react';
import './header.css';
import companylogo from '../Assets/VRLOGO3.png';
import fblogo from "../Assets/fblogo.jpg";
import messenger from "../Assets/messenger.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 200);
  };
  
  return (
    <div className="headerdiv">
      <header>
        <div  className="companylogo">
            <img onClick={()=>handleNavigation('/')} className='companyimg' src={companylogo} alt="companylogo" />
        </div>
        <div className={`routerlink ${isOpen ? 'open' : ''}`}>
            <p className={props.active1} onClick={()=>handleNavigation('/')}>Home</p>
            <p className={props.active2} onClick={()=>handleNavigation('/AboutUs')}>About us</p>
            <p className={props.active3} onClick={()=>handleNavigation('/Gallery')}>Gallery</p>
            <p className={props.active4} onClick={()=>handleNavigation('/Contact')}>Contact</p>
        </div>
        <div className="socialmedialink1">
        <img src={fblogo} alt="companylogo" />
        <img  src={messenger} alt="companylogo" />
        </div>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
    </header>
    </div>
  )
}

export default Header