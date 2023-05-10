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
                <h1 id='home-section-card-heading'>Tailored for your Needs</h1>
            </div>
        </section>
      
    </div>
  )
}

export default Home
