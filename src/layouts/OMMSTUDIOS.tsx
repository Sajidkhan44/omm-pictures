import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function OMMSTUDIOS({children}) {
  return (
    <div className="">
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
