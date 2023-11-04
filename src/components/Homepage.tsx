import React from 'react'
import HomepageBanner from './HomepageBanner'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import ContactForm from './ContactForm'
import Testimonials from './Testimonials'

export default function Homepage() {
  return (
    <div className="">
        <HomepageBanner />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        {/* <Testimonials /> */}
        <ContactForm />
        <SectionFive />
    </div>
  )
}
