import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import Image from "../assets/healthNetwork.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm left sides">
            <h5>Quick Link</h5>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/volunteer">Take Action</Link>
              </li>
              <li>
                <Link to="/services#services">Our Services</Link>
              </li>
              <li>
                <a href="tel: +263718218456" target="_blank">
                  Warm line 855-600-WARM
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm center">
            <h5>24/7 California Peer-Run Warm Line</h5>
            <img src={Image} alt="Support Us" />
          </div>
          <div className="col-sm right sides">
            <h5>Get in Touch</h5>
            <ul>
              <li>
                <a href="tel:855-845-7415" target="_blank">
                  855-845-7415
                </a>
              </li>
              <li>
                <a href="mailto:info@mentalhealthsf.org" target="_blank">
                  info@mentalhealthsf.org
                </a>
              </li>
              <li>
                <a href="https" target="_blank">
                  870 Market Street, Suite 928
                </a>
              </li>
              <li>
                <a href="">San Francisco, CA 94102</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
