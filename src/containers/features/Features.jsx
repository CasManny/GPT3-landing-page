import React from 'react'
import './Features.css'
import { Feature } from "../../components";

const featuresData = [
  { title: "Lorem ipsum dolor sit amet", text: "adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sequi?Earum," },
  { title: "Lorem ipsum dolor sit amet", text: "adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sequi? Earum," },
  { title: "Lorem ipsum dolor sit amet", text: "adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sequi? Earum," },
  { title: "Lorem ipsum dolor sit amet", text: "adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sequi? Earum," },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sequi?</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index) => (
          <Feature text={item.text} title={item.title} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Features