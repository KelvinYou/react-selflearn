import React from 'react'
import homeHero from "./../../assets/home/hero.png";
import "./Home.scss";

import ServicesItem from '../Services/ServicesItem';
import AboutDetails from '../About/AboutDetails';
import MenuContent from '../Menu/MenuContent';
import ReservationForm from './../Booking/ReservationForm';
import MasterChef from '../About/MasterChef';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <ServicesItem num={4} />
      </div>

      <div className="container">
        <AboutDetails />
      </div>

      <MenuContent />

      <ReservationForm />

      <div className="container">
        <MasterChef />
      </div>

      <div className="container">
        <Testimonial />
      </div>
    </>
  )
}

export default Home