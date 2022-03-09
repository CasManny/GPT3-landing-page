import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.svg'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const links = [
  {href: '#home', text: 'Home'},
  {href: '#whatgpt3', text: 'What is GPT?'},
  {href: '#possibility', text: 'Open AI'},
  {href: '#features', text: 'Case Studies'},
  {href: '#blog', text: 'Library'},
]

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          {links.map((item, index) => (
            <p key={index}>
              <a href={item.href}>{item.text}</a>
            </p>
          ))}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign Up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color={"#fff"}
            size={27}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <RiMenu3Line
            color={"#fff"}
            size={27}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {links.map((item, index) => (
                <p key={index}>
                  <a href={item.href}>{item.text}</a>
                </p>
              ))}
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar