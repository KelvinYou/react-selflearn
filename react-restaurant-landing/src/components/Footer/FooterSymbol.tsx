import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import "./Footer.scss";
import socialMediaItems from './socialMediaItems';

const FooterSymbol = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer-last">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Kelvin You</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} Kelvin</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              {socialMediaItems.map((socialMediaItem, index) => (
                <li className="social-icons" key={index + socialMediaItem.link}>
                  <a
                    href={socialMediaItem.link}
                    style={{ color: "white" }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <socialMediaItem.icon />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
  )
}

export default FooterSymbol