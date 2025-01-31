import React from 'react'
import logo from './photogrid.png'
function Hero(){
    return(
        <section className='hero'>
            <img src={logo} alt ="photogrid" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero