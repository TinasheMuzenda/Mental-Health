import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (number) => {
    setActiveTab(number);
  };
  return (
    <main>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md left">
              <div className="home-content">
                <h1>
                  Mental Health Association of <span>San Francisco</span>
                </h1>
                <div className="buttons">
                  <button className="firstButton">
                    <Link
                      to="/contact"
                      onClick={() => {
                        handleClick(5);
                      }}
                      className={` ${activeTab == 5 ? "active" : ""} `}
                    >
                      Contact Us
                    </Link>
                  </button>
                  <button className="secondButton">
                    <Link to="/signIn">Sign Up</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
