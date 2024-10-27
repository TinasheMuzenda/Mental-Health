import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (number) => {
    setActiveTab(number);
  };
  return (
    <main>
      <Navbar />
      <section className="contact-banner">
        <h1>Contact Us</h1>
      </section>

      <section className="get-in-touch">
        <div className="container">
          <div className="row">
            <div className="headings">
              <h2>GET IN TOUCH</h2>
            </div>
            <div className="col-md left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                fugit quos nostrum. Consequatur dolore odio numquam quia aliquid
                corrupti. Distinctio obcaecati rerum ea laborum harum aliquam
                dolorem enim in rem.
              </p>
              <div className="contact-ways">
                <a href="tel: +263718218456" className="way" target="_blank">
                  <span>P</span>
                  <p>855-845-7415</p>
                </a>
                <a
                  href="mailto: lassyruswa7@gmail.com"
                  className="way"
                  target="_blank"
                >
                  <span>E</span>
                  <p>info@mentalhealthsf.org</p>
                </a>
                <a href="tel: +263718218456" className="way" target="_blank">
                  <span>A</span>
                  <p>870 Market Street, Suite 928</p>
                </a>
              </div>
              <div className="contact-socials">
                <a href="." target="_blank">
                  L
                </a>
                <a href="." target="_blank">
                  I
                </a>
                <a href="." target="_blank">
                  F
                </a>
              </div>
            </div>
            <div className="col-md right">
              <div className="map">MAP</div>
            </div>
          </div>
        </div>
      </section>

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
      <Footer />
    </main>
  );
};

export default Contact;
