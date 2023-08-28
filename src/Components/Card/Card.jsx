import React from 'react'
import './Card.css'
const Card = ({emoji,heading,detail}) => {
  return (
    <>
      <img src={emoji} alt=''/>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='c-button'>Learn More</button>
   
    </>
  )
}

export default Card
