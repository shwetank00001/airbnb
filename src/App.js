import React from 'react'
import Nav from './ComponentsRev/Nav'
import Hero from './ComponentsRev/Hero'
import Card from './ComponentsRev/Card'

import Katie from './images/katie.png'



const App = () => {
  return (
    <div>
      <Nav />
      <Hero />

      <Card
        pic = {Katie}
        rating = "5.0"
        reviewCount = {6}
        title = "Win at life with Shwetank"
        price = {136}
        country = "India"
         />
    </div>
  )
}

export default App