import React, { FC } from 'react'
import FooterSymbol from './FooterSymbol'
import { Button } from '@mui/material'

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import socialMediaItems from './socialMediaItems';

const Footer: FC = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title secondary-title text-start fw-normal mb-4">Company</h4>
              <a className="btn btn-link" href="">About Us</a>
              <a className="btn btn-link" href="">Contact Us</a>
              <a className="btn btn-link" href="">Reservation</a>
              <a className="btn btn-link" href="">Privacy Policy</a>
              <a className="btn btn-link" href="">Terms & Condition</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title secondary-title text-start fw-normal mb-4">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Jalan 123, Selangor, Malaysia</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+60 12-345 6789</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
              <div className="d-flex pt-2">
                {socialMediaItems.map((socialMediaItem, index) => (
                <a 
                  key={index}
                  className="btn btn-outline-light btn-social" 
                  target="_blank" 
                  href={socialMediaItem.link}
                >
                  <socialMediaItem.icon />
                </a>

                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title secondary-title text-start fw-normal mb-4">Opening</h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title secondary-title text-start fw-normal mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                <Button 
                  type="button" 
                  className="book-button py-2 position-absolute top-0 end-0 mt-2 me-2" 
                  variant="contained"
                >
                  SignUp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSymbol />
    </>
  )
}

export default Footer