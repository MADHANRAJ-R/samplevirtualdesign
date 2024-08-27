import React from "react";
import "./service.css";
import hdr4 from "../Assets/HDR-s/IMG_0624.jpg";
import flash1 from "../Assets/FLASH-s/Flash.jpg";
import single4 from "../Assets/SINGLE-s/IMG_0937.jpg";
import twilight4 from "../Assets/TWILIGHT-s/FB_IMG_1673001470852.jpg";
import staging1 from "../Assets/STAGING-s/1J8A5315.jpg";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 200);
  };
  const settings = {
    center:false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 2400, // When the viewport is 1000px or less
        settings: {
          slidesToShow: 3, // Show 3 items
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1100, // When the viewport is 600px or less
        settings: {
          slidesToShow: 2, // Show 1 item
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800, // For viewport widths below 600px
        settings: {
          slidesToShow: 1, // Show 1 item
          slidesToScroll: 1
        }
      }
    ]
  };
  

  return (
    <section className="servicesection">
      <h1>Our Services</h1>
      
        <div className="container ">
          <Slider {...settings}>
          <div className="card item">
            <div className="img_container">
              <img src={hdr4} alt="HDR Blending" />
            </div>
            <div className="info">
              <span className="name">HDR BLENDING</span>
              <p className="about">
                The indoor space can be expertly edited to achieve optimal
                views, ensuring exceptional quality and meeting standard time
                frames.
              </p>
            </div>
            <div className="footer">
              <div className="btn">
                <button onClick={() => handleNavigation('/Gallery')}>Visit More...</button>
              </div>
            </div>
          </div>

          <div className="card item">
            <div className="img_container">
              <img src={flash1} alt="Flash Ambient" />
            </div>
            <div className="info">
              <span className="name">FLASH AMBIENT</span>
              <p className="about">
                Color enhancement, sky transformation, and border accents
                vividly capture the essence of the outdoors.
              </p>
            </div>
            <div className="footer">
              <div className="btn">
                <button onClick={() => handleNavigation('/Gallery')}>Visit More...</button>
              </div>
            </div>
          </div>

          <div className="card item">
            <div className="img_container">
              <img src={single4} alt="Day to Dusk & Night" />
            </div>
            <div className="info">
              <span className="name">DAY TO DUSK & NIGHT</span>
              <p className="about">
                A Day to Dusk photo typically captures the exterior of the
                property, expertly showcasing its enchanting charm at dusk.
              </p>
            </div>
            <div className="footer">
              <div className="btn">
                <button onClick={() => handleNavigation('/Gallery')}>Visit More...</button>
              </div>
            </div>
          </div>

          <div className="card item">
            <div className="img_container">
              <img src={twilight4} alt="Twilight" />
            </div>
            <div className="info">
              <span className="name">TWILIGHT</span>
              <p className="about">
                A twilight photo is expertly taken of the exterior property,
                capturing the beautiful and serene sunset of dusk.
              </p>
            </div>
            <div className="footer">
              <div className="btn">
                <button onClick={() => handleNavigation('/Gallery')}>Visit More...</button>
              </div>
            </div>
          </div>

          <div className="card item">
            <div className="img_container">
              <img src={staging1} alt="Virtual Staging" />
            </div>
            <div className="info">
              <span className="name">VIRTUAL STAGING</span>
              <p className="about">
                Virtually staging a home with Home Styler is simple, allowing
                you to effortlessly do it from the screen interface.
              </p>
            </div>
            <div className="footer">
              <div className="btn">
                <button onClick={() => handleNavigation('/Gallery')}>Visit More...</button>
              </div>
            </div>
          </div>
          </Slider>
        </div>
      
    </section>
  );
};

export default Service;
