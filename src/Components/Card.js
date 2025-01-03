import React from 'react'

function Card(props){
  let badgeText
  if (props.openspots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.country === "Online") {
      badgeText = "ONLINE"
  }

  return (
    <div className='card'>
      {badgeText && <div className='card-badge'>{badgeText}</div>}

        <img src={props.image} alt ="katie" className='card-image'/>

          <div className='card-stats'>
            <img src={props.logo} alt="star" className='card-star'></img>
            <span>{props.rating}</span>
            <span className='gray'>({props.review}) .</span>
            <span className='gray'>{props.country}</span>

          </div>

        <p> {props.title}</p>
        <p> <span className='bold'>{props.price}</span>/ person</p>

    </div>
  )
}

export default Card