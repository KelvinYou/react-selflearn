import React from 'react'
import FadeInSection from '../../components/FadeInSection'

const ContactContent = () => {
  return (
    <FadeInSection>
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
        <h1 className="mb-5">Contact For Any Query</h1>
      </div>
      <div className="row g-4">
        <div className="col-12">
            <div className="row gy-4">
                <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                    <p><i className="fa fa-envelope-open text-primary me-2"></i>book@example.com</p>
                </div>
                <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                    <p><i className="fa fa-envelope-open text-primary me-2"></i>info@example.com</p>
                </div>
                <div className="col-md-4">
                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                    <p><i className="fa fa-envelope-open text-primary me-2"></i>tech@example.com</p>
                </div>
            </div>
        </div>
        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
          <iframe className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300656.629604023!2d98.91481892837143!3d4.090953995429804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2smy!4v1682154293130!5m2!1sen!2smy"
            style={{ minHeight: "350px", border: "0"}} allowFullScreen={true} aria-hidden="false"
            tabIndex={0}></iframe>
        </div>
        <div className="col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                        <label>Your Name</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                        <label>Your Email</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                        <label>Subject</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}

export default ContactContent