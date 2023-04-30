import React from 'react'

import { Container } from 'react-bootstrap';
import Button from "@mui/material/Button";

import FadeInSection from '../../components/FadeInSection';

import Team1 from "./../../assets/about/team-1.jpg";
import Team2 from "./../../assets/about/team-2.jpg";
import Team3 from "./../../assets/about/team-3.jpg";
import Team4 from "./../../assets/about/team-4.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


interface ChecItemInterface {
  fullname: string,
  role: string,
  profilePicture: string
}

const chefItems: ChecItemInterface[] = [
  {
    fullname: "Full Name",
    role: "Designation",
    profilePicture: Team1
  },
  {
    fullname: "Full Name",
    role: "Designation",
    profilePicture: Team2
  },
  {
    fullname: "Full Name",
    role: "Designation",
    profilePicture: Team3
  },
  {
    fullname: "Full Name",
    role: "Designation",
    profilePicture: Team4
  },
]

const MasterChef = () => {
  return (
    <Container fluid className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title secondary-title text-center fw-normal">Team Members</h5>
          <h1 className="mb-5">Our Master Chefs</h1>
        </div>
        <div className="row g-4">
          {chefItems.map((chefItem, index) => (
            <div 
              key={ index + chefItem.fullname }
              className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              {/* <FadeInSection> */}
                <div className="team-item text-center rounded overflow-hidden">
                  <div className="rounded-circle overflow-hidden m-4">
                    <img className="img-fluid" src={ chefItem.profilePicture } alt=""/>
                  </div>
                  <h5 className="mb-0">{ chefItem.fullname }</h5>
                  <small>{ chefItem.role }</small>
                  <div className="d-flex justify-content-center mt-3">
                    <Button className="btn"><FaFacebook /></Button>
                    <Button className="btn" ><FaTwitter /></Button>
                    <Button className="btn"><FaInstagram /></Button>
                  </div>
                </div>
              {/* </FadeInSection> */}
              
            </div>
          ))}
        </div>
      </div>
    
    </Container>

  )
}

export default MasterChef