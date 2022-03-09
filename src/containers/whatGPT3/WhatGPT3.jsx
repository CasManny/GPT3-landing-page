import React from 'react'
import { Feature } from '../../components'
import './WhatGPT3.css'

const whatGPT3 = () => {
  return (
    <div
      className="gpt3__whatgpt3 section__padding"
      id={"whatgpt3"}
    >
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title={"what is GPT-3"}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus dignissimos quod officiis dolorum repellat inventore saepe reprehenderit temporibus earum!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title={"Chatbot"}
          text="voluptatibus dignissimos quod officiis dolorum repellat inventore saepe reprehenderit temporibus earum!"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus dignissimos quod officiis"
        />
        <Feature
          title="Education"
          text="Odio voluptatibus dignissimos quod officiis dolorum repellat inventore saepe reprehenderit temporibus earum"
        />
      </div>
    </div>
  );
}

export default whatGPT3