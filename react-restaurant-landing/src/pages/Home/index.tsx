import React from 'react'
import homeHero from "./../../assets/home/hero.png";
import "./Home.scss";

import ServicesItem from '../Services/ServicesItem';
import AboutDetails from '../About/AboutDetails';

const Home = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <ServicesItem num={4} />
      </div>

      <div className="container">
        <AboutDetails />
      </div>
    </div>
  )
}

export default Home