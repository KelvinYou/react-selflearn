import React, { FC } from 'react'

interface ServicesItemInterface {
  num: number
}

import "./Services.scss";

interface servicesItemProps {
  title: string,
  paragraph: string,
  icon?: any,
}

const servicesItems: servicesItemProps[] = [
  {
    title: "Master Chefs",
    paragraph: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    title: "Quality Food",
    paragraph: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    title: "Online Order",
    paragraph: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    title: "24/7 Service",
    paragraph: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    title: "Master Chefs",
    paragraph: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    title: "Quality Food",
    paragraph: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    title: "Online Order",
    paragraph: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  },
  {
    title: "24/7 Service",
    paragraph: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
  }
]
const ServicesItem: FC<ServicesItemInterface> = (props) => {
  return (
    <div className="row g-4">
      {servicesItems.slice(0,props.num).map((servicesItem, index) => (
        <div 
          key={index + servicesItem.title} 
          className="col-lg-3 col-sm-6 wow fadeInUp" 
          data-wow-delay="0.1s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
              <h5>{servicesItem.title}</h5>
              <p>{servicesItem.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
        
    </div>
  )
}

export default ServicesItem