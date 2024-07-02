import React from "react";
import companylogo from "../Assets/home-img-1.avif";
import "./whoweare.css";

const Whoweare = () => {
  return (
    <section className="whowearesection">
      <div className="whowearemaindiv">
        <div className="whoweare1div">
          <div className="squarediv">
            <div className="square1" Style="--i:0;"></div>
            <div className="square1" Style="--i:1;"></div>
            <div className="square1" Style="--i:2;"></div>
          </div>

          <h1>Who We Are?</h1>
          <p>
            <span className="wwp3"> Helping you to</span> <br />
            <span className="wwp2">Premier Photo Editing</span>
            <span className="wwp3">.</span>
            <br /> <span className="wwp2">Highly trained</span>
            <br />
            <span className="wwp3">and</span>{" "}
            <span className="wwp2">dedicated</span> <br />
            <span className="wwp3">editors for Each.</span>
          </p>
        </div>
        <div className="whoweare2div">
          <img src={companylogo} alt="companylogo" />
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
