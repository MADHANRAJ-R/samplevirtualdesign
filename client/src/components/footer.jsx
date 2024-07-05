import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import fblogo from "../Assets/fblogo.jpg";
import messenger from "../Assets/messenger.png";
import maillogo from "../Assets/message.png";
import phonelogo from "../Assets/telephone.png";
import companylogo from "../Assets/home-img-1.avif";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 200);
  };
  
  return (
    <footer>
      <div className="footer1">
        <div className="footerdiv1">
          <h1>Contact Us</h1>
          <div className="spanfooter">
            <span>
              <img src={maillogo} alt="" />
              <a href="mailto:vrvirtualrealitypicx@gmail.com">vrvirtualrealitypicx@gmail.com</a>
            </span>
            <span>
              <img src={phonelogo} alt="" />
              <a className="contact-a" href="tel:8489409293">+91-8489409293</a>            
          </span>
          </div>

          <div className="socialmedialink">
            <img src={fblogo} alt="companylogo" />
            <img src={messenger} alt="companylogo" />
          </div>
        </div>
        <div className="routerlink1">
          <p onClick={()=>handleNavigation('/')}>Home</p>
          <p onClick={()=>handleNavigation('/AboutUs')}>About us</p>
          <p onClick={()=>handleNavigation('/Gallery')}>Gallery</p>
          <p onClick={()=>handleNavigation('/Contact')}>Contact</p>
        </div>
        <div onClick={()=>handleNavigation('/Gallery')} className="footerimgdiv">
          <img src={companylogo} alt="companylogo" />
          <img src={companylogo} alt="companylogo" />
          <img src={companylogo} alt="companylogo" />
          <img src={companylogo} alt="companylogo" />
          <img src={companylogo} alt="companylogo" />
          <img src={companylogo} alt="companylogo" />
          <img src={companylogo} alt="companylogo" />
          <img src={companylogo} alt="companylogo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
