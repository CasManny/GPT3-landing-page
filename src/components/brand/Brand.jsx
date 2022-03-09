import React from 'react'
import './Brand.css'
import { google, slack, atlassian, dropbox, shopify } from './import'

const brand = [
  {src: google, alt: google},
  {src: slack, alt: slack},
  {src: atlassian, alt: atlassian},
  {src: dropbox, alt: dropbox},
  {src: shopify, alt: shopify},

]

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {brand.map((item,index) => (
        <div key={index}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  )
}

export default Brand