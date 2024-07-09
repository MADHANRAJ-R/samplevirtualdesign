import React from "react";
import "./galleryhp.css";

const Galleryhp = () => {
  return (
    <section className="galleryhpsec">
      <div className="center slider1">
        <div className="ghp1">
          <p>[PHOTOGRAPHY]</p>
          <h1>Gallery</h1>
        </div>
        <div className="squarediv">
          <div className="square sqr0" Style="--i:0;"></div>
          <div className="square sqr1" Style="--i:1;"></div>
          <div className="square sqr2" Style="--i:2;"></div>
          <div className="square sqr3" Style="--i:3;"></div>
          {/* <div className="square" Style="--i:4;"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Galleryhp;
