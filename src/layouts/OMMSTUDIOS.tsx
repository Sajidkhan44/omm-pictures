import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
export interface props {
  children?: React.ReactNode; 
}
export default function OMMSTUDIOS({children}:props) {
  
  return (
    <div className="">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
