import React from "react";
import "./photography.css";
import twilight4 from "../Assets/TWILIGHT-s/FB_IMG_1673001470852.jpg";

const Photography = () => {
  return (
    <section className="photographysection">
      <div className="photographydiv">
        <div className="photoimgdiv">
          <img src={twilight4} alt="companylogo" />
        </div>

        <div className="photo2div">
          <h1>Photography Editing</h1>
          <p>
            Photography editing involves manipulating and enhancing images using
            software tools after they are captured with a camera. It enables
            photographers to correct imperfections, enhance specific features,
            and apply creative effects, thereby shaping the final appearance of
            the image. This process empowers photographers to refine their
            vision digitally, correcting flaws, enhancing features, and adding
            creative elements to achieve a polished final image.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photography;
