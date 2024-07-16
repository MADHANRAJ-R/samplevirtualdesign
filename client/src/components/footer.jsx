import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import fblogo from "../Assets/fblogo.jpg";
import messenger from "../Assets/messenger.png";
import maillogo from "../Assets/message.png";
import phonelogo from "../Assets/telephone.png";
import flash1 from "../Assets/FLASH-s/Flash.jpg";
import twilight5 from "../Assets/TWILIGHT-s/FB_IMG_1673001476189.jpg";
import twilight4 from "../Assets/TWILIGHT-s/FB_IMG_1673001470852.jpg";
import staging1 from "../Assets/STAGING-s/1J8A5315.jpg";
import single1 from "../Assets/SINGLE-s/IMG_0979.jpg";
import hdr5 from "../Assets/HDR-s/IMG_0666.jpg";
import hdr6 from "../Assets/HDR-s/IMG_0672.jpg";
import flash6 from "../Assets/FLASH-s/IMG_1128.jpg";




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
          <img src={flash1} alt="companylogo" />
          <img src={flash6} alt="companylogo" />
          <img src={hdr5} alt="companylogo" />
          <img src={hdr6} alt="companylogo" />
          <img src={twilight4} alt="companylogo" />
          <img src={twilight5} alt="companylogo" />
          <img src={staging1} alt="companylogo" />
          <img src={single1} alt="companylogo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
