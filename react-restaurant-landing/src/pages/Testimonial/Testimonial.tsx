import React from 'react'

import Testimonial1 from "./../../assets/testimonial/testimonial-1.jpg";
import Testimonial2 from "./../../assets/testimonial/testimonial-2.jpg";
import Testimonial3 from "./../../assets/testimonial/testimonial-3.jpg";
import Testimonial4 from "./../../assets/testimonial/testimonial-4.jpg";
import FadeInSection from '../../components/FadeInSection';

interface testimonialItemInterface {
  clientName: string,
  clientRole: string,
  comment: string,
  image: string,
}

const testimonialItems: testimonialItemInterface[] = [
  {
    clientName: "Client Name",
    clientRole: "Profession",
    comment: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: Testimonial1,
  },
  {
    clientName: "Client Name",
    clientRole: "Profession",
    comment: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: Testimonial2,
  },
  {
    clientName: "Client Name",
    clientRole: "Profession",
    comment: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: Testimonial3,
  },
  {
    clientName: "Client Name",
    clientRole: "Profession",
    comment: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    image: Testimonial4,
  }
]

const Testimonial = () => {
  return (
    <FadeInSection>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h5 className="section-title secondary-title text-center fw-normal">Testimonial</h5>
                <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              {testimonialItems.map((testimonialItem, index) => (
                <div key={ index + testimonialItem.clientName } 
                className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>{ testimonialItem.comment }</p>
                  <div className="d-flex align-items-center">
                    <img 
                      className="img-fluid flex-shrink-0 rounded-circle" 
                      src={ testimonialItem.image } 
                      style={{ width: "50px", height: "50px"}}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">{ testimonialItem.clientName }</h5>
                      <small>{ testimonialItem.clientRole }</small>
                    </div>
                  </div>
                </div>
              ))}
                
            </div>
        </div>
      </div>
    </FadeInSection>

  )
}

export default Testimonial