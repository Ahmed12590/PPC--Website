import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./img/logo.png";
import { NavLink } from "react-router-dom";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="align-items-start">
          <Col sm={12} md={6} lg={3}>
            <div className="footer-logo-wrapper">
              <img src={logo} alt="footer logo" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="footer-links-wrapper">
              <h4 className="footer-head">Quick Links</h4>
              <ul className="footer-link-list">
                <li className="footer-link">
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to={`/`}>Website Design</NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to={`/`}>SEO</NavLink>
                </li>
                <li className="footer-link">
                  <NavLink to={`/`}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="social-links-wrapper">
              <h4 className="footer-head">Social Links</h4>
              <div className="social-icons">
                {/* Add social media icons here */}
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="contact-us-wrapper">
              <h4 className="footer-head">Contact Us</h4>
              <div className="contact-details">
                <div className="contact-location">
                  {/* Add location icon if needed */}
                  <div>Location: Street 16</div>
                </div>
                <div className="contact-email">
                  {/* Add email icon if needed */}
                  <div>Email: Devtribe@gmail.com</div>
                </div>
                <div className="contact-phone">
                  {/* Add phone icon if needed */}
                  <div>Phone: +122 456 7890</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
