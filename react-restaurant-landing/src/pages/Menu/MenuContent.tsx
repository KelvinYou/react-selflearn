import React from 'react'

import Menu1 from "./../../assets/menu/menu-1.jpg";
import Menu2 from "./../../assets/menu/menu-2.jpg";
import Menu3 from "./../../assets/menu/menu-3.jpg";
import Menu4 from "./../../assets/menu/menu-4.jpg";
import Menu5 from "./../../assets/menu/menu-5.jpg";
import Menu6 from "./../../assets/menu/menu-6.jpg";
import Menu7 from "./../../assets/menu/menu-7.jpg";
import Menu8 from "./../../assets/menu/menu-8.jpg";
import { Container } from 'react-bootstrap';
import FadeInSection from '../../components/FadeInSection';

import "./Menu.scss";
import CoffeeIcon from '@mui/icons-material/Coffee';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantIcon from '@mui/icons-material/Restaurant';

interface menuItemInterface {
  image: string,
  name: string,
  price: number,
  description: string
}

const menuItems: menuItemInterface[] = [
  {
    image: Menu1,
    name: "Chicken Burger",
    price: 15,
    description: "Ipsum ipsum clita erat amet dolor justo diam"
  },
  {
    image: Menu2,
    name: "Chicken Burger",
    price: 15,
    description: "Ipsum ipsum clita erat amet dolor justo diam"
  },
  {
    image: Menu3,
    name: "Chicken Burger",
    price: 15,
    description: "Ipsum ipsum clita erat amet dolor justo diam"
  },
  {
    image: Menu4,
    name: "Chicken Burger",
    price: 15,
    description: "Ipsum ipsum clita erat amet dolor justo diam"
  },
  {
    image: Menu5,
    name: "Chicken Burger",
    price: 15,
    description: "Ipsum ipsum clita erat amet dolor justo diam"
  },
  {
    image: Menu6,
    name: "Chicken Burger",
    price: 15,
    description: "Ipsum ipsum clita erat amet dolor justo diam"
  },
  {
    image: Menu7,
    name: "Chicken Burger",
    price: 15,
    description: "Ipsum ipsum clita erat amet dolor justo diam"
  },
  {
    image: Menu8,
    name: "Chicken Burger",
    price: 15,
    description: "Ipsum ipsum clita erat amet dolor justo diam"
  },
]

const MenuContent = () => {
  const currency = "RM";

  return (
      <Container> 
        <FadeInSection>

        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title secondary-title text-center fw-normal">Food Menu</h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        </FadeInSection>

        <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
          <FadeInSection>
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill">
                  <CoffeeIcon />
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill">
                  <FastfoodIcon />
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill">
                  <RestaurantIcon />
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>
          </FadeInSection>

          
            <div className="tab-content">
              <div className="row g-4">
                {menuItems.map((menuItem, index) => (
                  <div key={index + menuItem.name} className="col-lg-6">
                    <FadeInSection>
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={ menuItem.image } alt="" style={{ width: "80px" }}/>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{ menuItem.name }</span>
                            <span className="">{ currency + " " } { menuItem.price }</span>
                          </h5>
                          <small className="fst-italic">{ menuItem.description }</small>
                        </div>
                      </div>
                    </FadeInSection>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </Container>

    
  )
}

export default MenuContent