import React from "react";
import "./service.css";
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
      <div className="wrapper">
        <div className="slider">
          <div className="container owl-carousel owl-theme">
            <div className="card item">
              <div className="img_container">
                <img src={hdr4} alt="companylogo" />
              </div>

              <div className="info">
                <span className="name">HDR BLENDING</span>

                <p className="about">
                The indoor space can be expertly edited to achieve optimal views,
                ensuring exceptional quality and meeting standard time frames.
                </p>
              </div>

              <div className="footer">
                <div className="btn">
                  <button>Visit More...</button>
                </div>
              </div>
            </div>

            <div className="card item">
              <div className="img_container">
                <img src={flash1} alt="companylogo" />
              </div>

              <div className="info">
                <span className="name">FLASH AMBIENT</span>

                <p className="about">
                Color enhancement, sky transformation, and border accents vividly capture the essence of the outdoors.
                </p>
              </div>

              <div className="footer">
                <div className="btn">
                  <button>Visit More...</button>
                </div>
              </div>
            </div>

            <div className="card item">
              <div className="img_container">
                <img src={single4} alt="companylogo" />
              </div>

              <div className="info">
                <span className="name">DAY TO DUSK & NIGHT</span>

                <p className="about">
                A Day to Dusk photo typically captures the exterior of the property, expertly showcasing its enchanting charm at dusk.
                </p>
              </div>

              <div className="footer">
                <div className="btn">
                  <button>Visit More...</button>
                </div>
              </div>
            </div>

            <div className="card item">
              <div className="img_container">
                <img src={twilight4} alt="companylogo" />
              </div>

              <div className="info">
                <span className="name">TWILIGHT</span>

                <p className="about">
                A twilight photo is expertly taken of the exterior property, capturing the beautiful and serene sunset of dusk.
                </p>
              </div>

              <div className="footer">
                <div className="btn">
                  <button>Visit More...</button>
                </div>
              </div>
            </div>

            <div className="card item">
              <div className="img_container">
                <img src={staging1} alt="companylogo" />
              </div>

              <div className="info">
                <span className="name">VIRTUAL STAGING</span>

                <p className="about">
                Virtually staging a home with Home Styler is simple, allowing you to effortlessly do it from the screen interface.
                </p>
              </div>

              <div className="footer">
                <div className="btn">
                  <button>Visit More...</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
