import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import AboutImage from "../assets/aboutSection.jpg";
import VolunteerHands from "../assets/volunteerHands.jpg";
import VolunteerLove from "../assets/volunteerLove.jpg";
import Hands from "../assets/hands.svg";

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

      <section className="about">
        <div className="container">
          <div className="aboutHeading headings">
            <h2>ABOUT US</h2>
          </div>
          <div className="row aboutRow">
            <div className="col-md-6 aboutLeft">
              <img src={AboutImage} alt="About Image" className="aboutImage" />
            </div>
            <div className="col-md-6 aboutRight">
              <div className="aboutSubHeading">
                <h3>
                  <span>Introduction</span> To MHASF
                </h3>
              </div>
              <div className="aboutParagraph">
                <p>
                  We are a non-profit cultivating peer leadership, building
                  community, and advancing social justice in mental health.We
                  rely on small donations to provide accessible mental health
                  services to our community. If you can donate today, it will go
                  a long way towards helping others.
                </p>
              </div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="volunteer">
        <div className="container">
          <div className="volunteerHeading headings">
            <h2>VOLUNTEER WITH US</h2>
          </div>
          <div className="volunteerText">
            <p>
              MHASF depends on the support of talented and enthusiastic
              volunteers to help out with an array of ongoing needs and
              projects. Whether you're interested in lending creative skills
              such as graphic design or writing, are passionate about mental
              health policy or advocacy issues, have a knack for administrative
              support, or want to pitch another way in which you'd like to help
              us, we want to hear from you!
            </p>
          </div>
          <div className="row">
            <div className="col-md-5 volunteerSides">
              <img
                src={VolunteerHands}
                alt="volunteering"
                className="volunteerImages"
              />
            </div>
            <div className="col-md-2 volunteerCenter">
              <Link
                to="/volunteer"
                onClick={() => {
                  handleClick(3);
                }}
                className={` ${activeTab == 3 ? "active" : ""} `}
              >
                <img
                  src={Hands}
                  alt="volunteering"
                  className="volunteerImages"
                />
                <p>Lend a hand</p>
              </Link>
            </div>
            <div className="col-md-5 volunteerSides">
              <img
                src={VolunteerLove}
                alt="volunteering"
                className="volunteerImages display"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
