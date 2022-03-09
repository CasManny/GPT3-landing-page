import React from 'react'
import './Possibility.css'
import possibilityImage from '../../Assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id={'possibility'}>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get Started</h4>
        <h1 className="gradient__text">the possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ipsum repellat exercitationem consequuntur! Distinctio quis asperiores </p>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, at?</h4>
      </div>

    </div>
  )
}

export default Possibility