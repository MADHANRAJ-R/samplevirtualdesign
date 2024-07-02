import React from "react";
import notification from "../Assets/notification-bell.png";
import service from "../Assets/customer-service.png";
import valueformoney from "../Assets/value.png";

import "./aboutuscopy.css";

const Aboutuscopy = () => {
  return (
    <section>
      <div className="aboutuscopy2div">
        <div className="aboutuscopycard">
          <img src={notification} alt="companylogo" />
          <b>On-time notifications</b>
          <p>
            Photography serves as a timeless notification, freezing moments in
            time to capture and preserve the essence of fleeting experiences.
          </p>
        </div>
        <div className="aboutuscopycard">
          <img src={service} alt="companylogo" />
          <b>On-site and remote support</b>
          <p>
            Photography provides on-site and remote support, allowing the
            documentation of both immediate surroundings and distant landscapes.
          </p>
        </div>
        <div className="aboutuscopycard">
          <img src={valueformoney} alt="valueformoney" />
          <b>On-value for money</b>
          <p>
            Value for money is achieved by investing wisely in equipment and
            services balance between cost and quality without unnecessary
            expenses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutuscopy;
