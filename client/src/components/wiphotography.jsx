import React from "react";
import "./wiphotography.css";
import tick from "../Assets/check-mark.png";

const Wiphotography = () => {
  return (
    <section className="wiphotographysection">
      <div className="wiphotographydiv">
        <h1>What Is Photography</h1>
        <ul>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
              Mastering composition principles like the rule of thirds, leading
              lines, framing, and symmetry can significantly boost the visual
              appeal of your photographs.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
              Lighting is fundamental in photography. Exploring natural and
              artificial light, and understanding how different lighting
              conditions affect the mood and tone, can greatly enhance your
              images.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
              Get to know your camera's settings, such as aperture, shutter
              speed, and ISO. Mastering these controls gives you greater control
              over exposure and the creative elements of your photos.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
              Try different angles and perspectives to add depth and intrigue to
              your photos. Use framing elements to guide the viewer's attention
              to the main subject.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Wiphotography;
