import React from "react";
import "./service.css";
import companylogo from '../Assets/home-img-1.avif'
import hdr4 from "../Assets/HDR-s/IMG_0624.jpg";
import flash1 from "../Assets/FLASH-s/Flash.jpg";
import single4 from "../Assets/SINGLE-s/IMG_0937.jpg";
import twilight4 from "../Assets/TWILIGHT-s/FB_IMG_1673001470852.jpg";
import staging1 from "../Assets/STAGING-s/1J8A5315.jpg";
import { useNavigate } from "react-router-dom";






const Service = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 200);
  };
  return (
    <section className="servicesection">
      <h1>Our Services</h1>
      <div className="webdiv" style={{ "--t": "30s" }}>
        <div className="otherweb-div">
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={hdr4} alt="companylogo" />
            <h2>HDR BLENDING</h2>
            <p>The optimal view of the indoor space can be expertly edited with exceptional quality and standard time frame.</p>
            
              <button className="visit-btn">Visit more</button>
            
          </div>
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={flash1} alt="companylogo" />
            <h2>FLASH AMBIENT</h2>
            <p>Color enhancement, sky transformation, and border accents vividly bring the thrilling essence of the outdoors to life.</p>
            
              <button className="visit-btn">Visit more</button>
            
          </div>
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={single4} alt="companylogo" />
            <h2>DAY TO DUSK & NIGHT</h2>
            <p>A Day to Dusk photo is typically taken of the exterior of the property, expertly capturing its enchanting charm at dusk.</p>
            
              <button className="visit-btn">Visit more</button>
            
          </div>
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={twilight4} alt="companylogo" />
            <h2>TWILIGHT</h2>
            <p>A twilight photo is usually expertly taken of the exterior of the property, capturing the dusk's beautiful and serene sunset.</p>
            
              <button className="visit-btn">Visit more</button>
           
          </div>
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={staging1} alt="companylogo" />
            <h2>VIRTUAL STAGING</h2>
            <p>Virtually staging a home with Home styler is simple, and you can effortlessly do it from the screen interface.</p>
            
              <button className="visit-btn">Visit more</button>
           
          </div>
          
        </div>

        <div className="otherweb-div">
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={hdr4} alt="companylogo" />
            <h2>HDR BLENDING</h2>
            <p>The optimal view of the indoor space can be expertly edited with exceptional quality and standard time frame.</p>
            
              <button className="visit-btn">Visit more</button>
            
          </div>
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={flash1} alt="companylogo" />
            <h2>FLASH AMBIENT</h2>
            <p>Color enhancement, sky transformation, and border accents vividly bring the thrilling essence of the outdoors to life.</p>
            
              <button className="visit-btn">Visit more</button>
            
          </div>
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={single4} alt="companylogo" />
            <h2>DAY TO DUSK & NIGHT</h2>
            <p>A Day to Dusk photo is typically taken of the exterior of the property, expertly capturing its enchanting charm at dusk.</p>
            
              <button className="visit-btn">Visit more</button>
            
          </div>
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={twilight4} alt="companylogo" />
            <h2>TWILIGHT</h2>
            <p>A twilight photo is usually expertly taken of the exterior of the property, capturing the dusk's beautiful and serene sunset.</p>
            
              <button className="visit-btn">Visit more</button>
           
          </div>
          <div onClick={()=>handleNavigation('/Gallery')} className="otherWeb-card">
            <img src={staging1} alt="companylogo" />
            <h2>VIRTUAL STAGING</h2>
            <p>Virtually staging a home with Home styler is simple, and you can effortlessly do it from the screen interface.</p>
            
              <button className="visit-btn">Visit more</button>
           
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Service;
