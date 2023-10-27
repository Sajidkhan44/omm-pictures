import React from 'react'
import HomepageBanner from './HomepageBanner'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import ContactForm from './ContactForm'

export default function Homepage() {
  return (
    <div className="">
        <HomepageBanner />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <ContactForm />
        <SectionFive />
    </div>
  )
}
