import React from "react";
import "./homepage.css";

const Carousel = () => {
  return (
    <div className="carouselmaindiv">
      <div className="center1 banner">
        
          <div className="homeh1h2">
            <h1>We Are Creative Agency</h1>
            <h3>Focused On Client Relationship</h3>
          </div>
        
        <div className="squarediv">
          <div className="square" Style="--i:0;"></div>
          <div className="square" Style="--i:1;"></div>
          <div className="square" Style="--i:2;"></div>
          <div className="square" Style="--i:3;"></div>
          {/* <div className="square" Style="--i:4;"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
