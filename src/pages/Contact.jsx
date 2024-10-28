import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt, FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

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
              <h2>Get In Touch</h2>
            </div>
            <div className="col-md left">
              <p>
                We’re here to offer support and guidance. Whether you need
                someone to talk to, have questions, or want to get involved,
                reach out to us. Together, we can foster mental wellness for
                all.
              </p>
              <div className="contact-ways">
                <a href="tel:+263718218456" className="way">
                  <span>
                    <FaPhone />
                  </span>
                  <p>+263 718 218 456</p>
                </a>
                <a href="mailto:info@mentalhealthsf.org" className="way">
                  <span>
                    <MdEmail />
                  </span>
                  <p>info@mentalhealthsf.org</p>
                </a>
                <div className="way">
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <p>870 Market Street, Suite 928, San Francisco, CA</p>
                </div>
              </div>
              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaLinkedin />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <AiFillInstagram />
                  </span>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <FaFacebook />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.4930497265104!2d-122.40860109081413!3d37.78511364412907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085fddbb56b%3A0x418b7b5da2ae8798!2s870%20Market%20St%20%23%20928%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2szw!4v1730103625219!5m2!1sen!2szw"
                allowFullScreen=""
                loading="lazy"
                className="map"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="take-action">
        <div className="container">
          <div className="call-to-action">
            <p>Take Action Now</p>
            <h2>Lend a Hand and Talent to Enhance Mental Wellness</h2>
          </div>
          <button>
            <Link
              to="/volunteer"
              onClick={() => {
                handleClick(3);
              }}
              className={` ${activeTab === 3 ? "active" : ""} `}
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
