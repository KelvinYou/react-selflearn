import React from 'react'
import ServicesItem from './ServicesItem'

import "./Services.scss";

const Services = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title secondary-title text-start fw-normal">
              Our Services
            </h5>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          
          <ServicesItem num={8} />
        </div>
      </div>
    </div>
  )
}

export default Services