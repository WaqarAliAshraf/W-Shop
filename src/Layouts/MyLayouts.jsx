import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Off from '../components/Off'

const MyLayouts = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Off/>
        <Footer/>
        
    </div>
  )
}

export default MyLayouts