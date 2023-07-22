import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from './Head';
export interface props {
  children?: React.ReactNode; 
}
export default function OMMSTUDIOS({children, seo}) {
  return (
    <div className="">
      {
        seo && <Head pageTitle={seo.pageTitle} description={seo.description} url={seo.url}/>
      }
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
