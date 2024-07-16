import React from "react";
import "./whoweare.css";
import twilight5 from "../Assets/VRLOGO.png";


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
            <span className="wwp3"> Helping you with</span> <br />
            <span className="wwp2">top-tier Photo Editing</span>
            <span className="wwp3">, supported by</span>
            <br /> <span className="wwp2">Highly trained</span>
            <br />
            <span className="wwp3">and</span>{" "}
            <span className="wwp2">dedicated</span> <br />
            <span className="wwp3">editors for each project.</span>
          </p>
        </div>
        <div className="whoweare2div">
          <img src={twilight5} alt="companylogo" />
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
