import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Contact.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import CallToAction from "../miscellaneous/CallToAction";

const Contact = () => {
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
                We are here to offer support and guidance. Whether you need
                someone to talk to, have questions or want to get involved,
                reach out to us. Together, we can foster mental wellness for
                all.
              </p>
              <div className="contact-ways">
                <a href="tel: +263718218456" className="way" target="_blank">
                  <span>
                    <FaPhone />
                  </span>
                  <p>855-845-7415</p>
                </a>
                <a
                  href="mailto: lassyruswa7@gmail.com"
                  className="way"
                  target="_blank"
                >
                  <span>
                    <MdEmail />
                  </span>
                  <p>info@mentalhealthsf.org</p>
                </a>
                <a href="tel: +263718218456" className="way" target="_blank">
                  <span>
                    <FaLocationDot />
                  </span>
                  <p>870 Market Street, Suite 928</p>
                </a>
              </div>
              <div className="contact-socials">
                <a href="." target="_blank">
                  <span>
                    <FaLinkedin />
                  </span>
                </a>
                <a href="." target="_blank">
                  <span>
                    <AiFillInstagram />
                  </span>
                </a>
                <a href="." target="_blank">
                  <span>
                    <FaFacebook />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.4930497265104!2d-122.40860109081413!3d37.78511364412907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085fddbb56b%3A0x418b7b5da2ae8798!2s870%20Market%20St%20%23%20928%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2szw!4v1730103625219!5m2!1sen!2szw"
                allowfullscreen=""
                loading="lazy"
                className="map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <CallToAction/>
      <Footer />
    </main>
  );
};

export default Contact;
