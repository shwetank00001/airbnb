import React from 'react'
import './card.css'
import Katie from '../images/katie.png'
import Star from '../images/star-logo.png'

const Card = (props) => {
  let badge;
  if(props.openSpots === 0){
    badge = "Sold Out"
  }
  else if (props.country === "Online"){
    badge = "ONLINE"
  }
  return (
    <div className='cardmain'>  
            <img className='cardImg' src= {props.pic} alt='katie'/>
            <hr />
            <p>{badge}</p>

            <hr />

            <div>
                <div className='ratings'>
                    <img className='starImg' src={Star} alt='katie'/>
                    <p>{props.rating} ({props.reviewCount}) • {props.country}</p>
                </div> 
                <p>{props.title}</p>
                <p><b>From ${props.price}</b>/person</p>
                <p>{props.openSpots}</p>
            </div>

          </div>
  )
}

export default Card