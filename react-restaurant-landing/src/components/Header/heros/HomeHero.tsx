import React from 'react'
import homeHero from "./../../../assets/home/hero.png";
import Button from "@mui/material/Button";
import "./heros.scss";

const HomeHero = () => {
  return (
    <div className="hero-header">
      <div className="container-xxl py-5 ">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Enjoy Our<br/>Delicious Meal
              </h1>
              
              <p className="text-white animated slideInLeft mb-4 pb-2">
                paragraph paragraph paragraph
                paragraph paragraph paragraph
                paragraph paragraph paragraph
                paragraph paragraph paragraph
              </p>

              <Button variant="contained">Book A Table</Button>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={homeHero} alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero