import React from 'react'
import './Header.css'
import people from '../../Assets/people.png'
import ai from '../../Assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAl</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia in repellendus accusantium. Dolor autem voluptatibuo!</p>
        <div className="gpt3__header-content_input">
          <input type='email' placeholder='Please Enter your email' />
          <button>Get started</button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people" />
          <p>1500 people requested Access to our Api</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header