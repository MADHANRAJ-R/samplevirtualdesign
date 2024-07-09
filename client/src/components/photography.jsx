import React from "react";
import "./photography.css";
import companylogo from "../Assets/home-img-1.avif";
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
            Photography Editing is a manipulation and enhancement of images
            using software tools after they have been captured with a camera.
            Photographic editing allows photographers to correct imperfections,
            enhance specific features, and apply creative effects, ultimately
            shaping the final appearance of the image. This process empowers
            photographers to correct flaws, enhance features, and add creative
            elements, contributing to the final, polished image. In essence,
            photographic editing is a transformative stage where the
            photographer’s vision comes to life through digital refinement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photography;
