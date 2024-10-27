import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import AboutImage from "../assets/aboutSection.jpg";
import VolunteerHands from "../assets/volunteerHands.jpg";
import VolunteerLove from "../assets/volunteerLove.jpg";
import Hands from "../assets/hands.svg";
import ServImg from "../assets/healthNetwork.jpg";
import Line from "../assets/warmLine.jpg";

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

      <section id="services" className="services">
        <div className="container">
          <div className="headings">
            <h2>OUR SERVICES</h2>
          </div>
          <div className="row">
            <div className="col-md left">
              <h4>
                <span>Department of Education & Innovation</span>
              </h4>
              <p>
                The Department of Education & Innovation empowers individuals
                with lived experience through workforce development services,
                offers evidence-based mental health trainings to professionals,
                and enhances digital access in underserved communities. Our
                commitment to advocacy, innovation, training and workforce
                development aims to foster autonomy and resilience among diverse
                populations.
              </p>
            </div>
            <div className="col-md right display">
              <img src={ServImg} alt="Services Health Network" />
            </div>
          </div>
        </div>
      </section>

      <section className="line">
        <div className="container">
          <div className="headings">
            <h2>WARM LINE</h2>
          </div>

          <div className="row">
            <div className="col-md-5 left">
              <img src={Line} alt="Warm Line Image" />
            </div>
            <div className="col-md-7 right">
              <p className="underline">
                The MHASF Warm Line is here for you 24/7.
              </p>

              <div className="text">
                <p>
                  Call or Text{" "}
                  <a href="tel: +263718218456" target="_blank">
                    855-600 WARM (9276)
                  </a>{" "}
                  to speak with a counselor 24/7 use our Chat widget at the
                  bottom right to speak to a counselor.
                </p>
                <p>
                  The Warm Line provides accessible mental health support by
                  using the wisdom of lived experience to connect, inspire hope,
                  and empower our community toward unlimited recovery. We have
                  provided assistance via phone and web chat to anyone in need
                  since 2014. Some concerns callers share are challenges with
                  interpersonal relationships, anxiety, pain, depression,
                  finances, alcohol drug use, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="support">
        <div className="container">
          <div className="inside">
            <div className="textHead">
              <h2>SUPPORT OUR CASE</h2>
              <h3>Help sustain our frontline workers</h3>
            </div>
            <p>
              As a result of the COVID-19 pandemic ,MHASF services have
              significantly increased Our Warm Line team has been working
              non-stop to provide emotional and mental support to the entire
              state of CA. If you are able to donate, we can hire more people to
              meet the demand of our calls. We appreciate your help and support
              during this difficult timeThe COVID-19 pandemic has skyrocketed
              the demand for MHASF's mental health services. Our Warm Line team
              has been tirelessly providing emotional and mental support to
              Californians. To meet this growing need, we urge your generous
              support to expand our team. Your donation will enable us to hire
              additional staff, ensuring that no one is left without the vital
              assistance they need during this challenging time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
