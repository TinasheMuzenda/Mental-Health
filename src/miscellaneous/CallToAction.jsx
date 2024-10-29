import { useState } from "react";
import "../styles/miscellaneous.css";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (number) => {
    setActiveTab(number);
  };

  return (
    <main>
      <section className="take-action">
        <div className="container">
          <div className="call-to-action">
            <p>Take Action Now</p>
            <h2>Lend A Hand And Talent To Enhance Mental Wellness</h2>
          </div>
          <button>
            <Link
              to="/volunteer"
              onClick={() => {
                handleClick(3);
              }}
              className={` ${activeTab == 3 ? "active" : ""} `}
            >
              Join Us
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
};

export default CallToAction;
