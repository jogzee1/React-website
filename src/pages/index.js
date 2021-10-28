import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/sidebar'
import TopSection from '../components/TopSection'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen) 
  }


    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} /> 
          <TopSection />
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <TopSection />
          <InfoSection {...homeObjTwo}/>
          <Services />
          <InfoSection {...homeObjThree}/>
          <Footer />
        </>
    )
}

export default Home
