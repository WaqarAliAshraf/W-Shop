import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Off from '../Off'

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