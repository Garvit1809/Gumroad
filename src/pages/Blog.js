import React from 'react'
import GumroadFounder from '../components/blogComp/GumroadFounder'
import LatestNews from '../components/blogComp/LatestNews'
import Footer from '../components/generalComp/Footer'
import Navbar from '../components/generalComp/Navbar'
import ShareWork from '../components/generalComp/ShareWork'

const Blog = () => {
  return (
    <>
        <Navbar/>
        <LatestNews/>
        <GumroadFounder/>
        <ShareWork/>
        <Footer/>
    </>
  )
}

export default Blog