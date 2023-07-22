import Birthdays from '@/components/pages/Birthdays'
import OMMSTUDIOS from '@/layouts/OMMSTUDIOS'
import React from 'react'

export default function index() {
  const seo ={
    pageTitle:"Birthday Photography - OMM Pictures",
     description: "Capture the magic of your special day with OMM Pictures' birthday photography services. Our professional photographers will make sure to capture every precious moment of your birthday celebration.",
      url:"www.omm-pictures.in/birthday"
  }
  return (
    <OMMSTUDIOS>
        <Birthdays />
    </OMMSTUDIOS>
  )
}
