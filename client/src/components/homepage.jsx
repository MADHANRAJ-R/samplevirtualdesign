import React from "react";
import "./homepage.css";

const Carousel = () => {
  return (
    <div className="carouselmaindiv">
      <div className="center1 banner">
        
          <div className="homeh1h2">
            <h1>We specialize in creative solutions</h1>
            <h3>With a focus on client relationships</h3>
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
