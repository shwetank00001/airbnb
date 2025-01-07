import React from 'react'
import Nav from './ComponentsRev/Nav'
import Hero from './ComponentsRev/Hero'
import Card from './ComponentsRev/Card'

import Katie from './images/katie.png'
import Data from './ComponentsRev/data'


const App = () => {
  const ele = Data.map(function(item){
    return <Card 
    pic = {item.coverImg}
    rating = {item.rating}
    reviewCount = {item.reviewCount}
    title = {item.description}
    price = {item.price}
    country = {item.location}

    />
  })
  return (
    <div>
      <Nav />
      <Hero />

      {/* <Card
        pic = {Katie}
        rating = "5.0"
        reviewCount = {6}
        title = "Win at life with Shwetank"
        price = {136}
        country = "India"
         /> */}
          {ele}
         
    </div>
  )
}

export default App