import React from 'react'
import phgrid from './photogrid.png'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero_img'>
            <img src={phgrid} alt='grid'/>
        </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero