import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
     
   
  return (
    <>
    <HeroSection/>
    <Qualities/>
    
    {console.log('hi1kjsdbkdfsjb')}
    <WhoAreWe/>
    <Footer/>
    {/* <About/>
    <Menu/>
    <Team/>
    <Reservation/> */}
    
    </>
  )
}

export default Home
