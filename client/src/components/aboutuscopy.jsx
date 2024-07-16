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
            Photography acts as a timeless alert, freezing moments to capture
            and preserve the essence of fleeting experiences.
          </p>
        </div>
        <div className="aboutuscopycard">
          <img src={service} alt="companylogo" />
          <b>On-site and remote support</b>
          <p>
            Photography offers on-site and remote assistance, enabling
            documentation of both local environments and distant landscapes
          </p>
        </div>
        <div className="aboutuscopycard">
          <img src={valueformoney} alt="valueformoney" />
          <b>On-value for money</b>
          <p>
            Getting the best value for money involves smart investments in
            equipment and services, balancing cost and quality while minimizing
            unnecessary expenses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutuscopy;
