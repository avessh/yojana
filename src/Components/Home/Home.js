import React from 'react'
import '../Home/home.css'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div>
       
        <section id='home-section'>
            <Navbar/>
            <div id='home-section-card'>
                <p id='home-section-card-para'>Best in Class Digital Solutions</p>
                <h1 id='home-section-card-heading'><b>Tailored for your Needs</b></h1>
                <button id='home-section-card-btn'>Yes, I'm interested</button>
            </div>
        </section>
      
    </div>
  )
}

export default Home
