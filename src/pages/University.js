import React from 'react'
import styled from 'styled-components'
import Footer from '../components/generalComp/Footer'
import Navbar from '../components/generalComp/Navbar'
import ShareWork from '../components/generalComp/ShareWork'
import Advanced from '../components/pricingComp/Advanced'
import Archive from '../components/pricingComp/Archive'
import GrowTogether from '../components/pricingComp/GrowTogether'
import Review from '../components/pricingComp/Review'
import Starter from '../components/pricingComp/Starter'
import Learn from '../components/universityComp/Learn'


const University = () => {
  return (
    <>
     <Navbar/>
     <Learn/>
     <GrowTogether/>
     <Starter/>
     <Review/>
     <Advanced/>
     <Archive/>
     <ShareWork/>
     <Footer/>
    </>
  )
}

export default University