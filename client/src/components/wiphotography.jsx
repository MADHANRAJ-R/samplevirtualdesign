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
            Understanding and implementing the principles of composition, such
            as the rule of thirds, leading lines, framing, and symmetry, can
            greatly enhance the visual appeal of a photograph.
            </span>
          </li>
          <li>
          <img className="listImg" src={tick} alt="tick" />
           <span>
           Proper lighting is crucial in photography. Experimenting with natural light, artificial light sources, and understanding the impact of different lighting conditions on the mood and tone of a photo can significantly improve your images.
           </span>
          </li>
          <li>
          <img className="listImg" src={tick} alt="tick" />
            <span>Familiarize yourself with your camera's settings, including aperture, shutter speed, and ISO. Mastering these settings allows you to have better control over the exposure and creative aspects of your photos.
            </span>
          </li>
          <li>
            <img className="listImg" src={tick} alt="tick" />
            <span>
            Experiment with different angles and perspectives to add depth and interest to your photographs. Consider how framing elements within your shot can draw attention to the main subject.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Wiphotography;
