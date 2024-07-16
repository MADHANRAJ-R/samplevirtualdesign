import React from "react";
import tick from "../Assets/check-mark.png";
import "./ourvision.css";
const Ourvision = () => {
  return (
    <section className="visionsection">
      <h1>Our Vision</h1>
      {/* <div className="visiondiv"> */}
      {/* <div className="vision1div">
                <img src={companylogo} alt="companylogo" />
            </div> */}
      <div className="vision2div">
        <ul>
          {/* <div className="squarediv">
            <div className="square2" Style="--i:0;"></div>
            <div className="square2" Style="--i:1;"></div>
            <div className="square2" Style="--i:2;"></div>
            <div className="square2" Style="--i:3;"></div>
            <div className="square2" Style="--i:4;"></div>
          </div> */}
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>Leading the way in photography editing with advanced technology at Virtual Reality Services.</span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Transforming image enhancement through cutting-edge tech in the Virtual Reality editing sector.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Shaping the future of photography at Virtual Reality Services with innovative technological solutions.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Utilizing AI and advanced algorithms to achieve unmatched editing precision at Virtual Reality Services.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Photography captures unique perspectives and emotions, crafting compelling visual narratives at Virtual Reality Services.
            </span>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Ourvision;
