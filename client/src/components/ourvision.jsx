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
            <span>Pioneering the future of photography editing with cutting-edge
            technology at Infinity Infotech.</span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Revolutionizing image enhancement through state-of-the-art tech in
            the Infinity Infotech editing industry.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Innovating the photography landscape at Infinity Infotech with the
            latest technological advancements.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Harnessing the power of AI and advanced algorithms for unparalleled
            editing precision at Infinity Infotech.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Photography is the art of translating one's unique perspective into
            images that tell a compelling story and evoke emotions.
            </span>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Ourvision;
