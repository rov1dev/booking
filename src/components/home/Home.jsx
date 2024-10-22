import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import Destinations from '../destinations/Destinations'
import BestHotels from '../hotels/BestHotels'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="home-container">
            <Destinations/>
            <BestHotels/>
        </div>
    </div>
  )
}

export default Home