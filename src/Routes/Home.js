import React from 'react'
import Navbar from "../components/Navbar"
import Servi from "../components/Servi"
import "./Home.css"
import Heroimg1 from "../components/Heroimg1"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <p className="para">Building real-world Enterprise</p>
      <h1 className="hii">Solution at a big data scale</h1>
      <button className='btn'>Contact us</button>
    
      <Servi/>
     </div>
     
     
  )
}

export default Home