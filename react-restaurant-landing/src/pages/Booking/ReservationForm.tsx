import React from 'react'
import VideoImage from "./../../assets/home/video.jpg";

const ReservationForm = () => {
  return (
    <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row g-0">
        <div className="col-md-6">
          <div className="video">
            <img src={ VideoImage } />
          </div>
        </div>
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
            <h1 className="text-white mb-4">Book A Table Online</h1>
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
                <div className="col-md-6">
                  <div className="form-floating date" id="date3" data-target-input="nearest">
                    <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                    <label>Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select className="form-select" id="select1">
                      <option value="1">People 1</option>
                      <option value="2">People 2</option>
                      <option value="3">People 3</option>
                    </select>
                    <label>No Of People</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: "100px" }}></textarea>
                    <label>Special Request</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReservationForm