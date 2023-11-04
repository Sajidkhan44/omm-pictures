import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div className=" min-h-[100vh] px-8 text-white flex flex-col items-center  py-[100px] lg:w-[90%] mx-auto">
      <div className="w-full">
      <div className="space-y-2 text-white w-full text-center overflow-hidden">
      <h1 className="font-semibold text-5xl heading">ABOUT OMM PICTURES</h1>
      <p className="font-medium text-2xl description-second overflow-hidden">Meet Niranjan - Your Storyteller Through the Lens</p>
    </div>
        <div className=" w-full grid lg:grid-cols-3 grid-cols-1 gap-8 mt-[50px]">
            <div className=" col-span-1">
        <img src="/about.jpg" alt="" className="" />
            </div>
        <div className=" w-full lg:col-span-2 text-justify">
        <p className="text-gray-300 mb-4">
          At OMM Pictures, we believe that every moment is a piece of a larger story waiting to be told. We are a passionate team of photographers led by Niranjan, a dedicated professional who has made it his mission to capture the essence of your life's most precious events and turn them into timeless memories.
        </p>
        <p className="text-gray-300 mb-4">
          Our journey began with a simple yet profound vision: to immortalize your special moments through the art of photography. Over the years, we have successfully transformed countless events into beautiful, lasting memories for our clients.
        </p>
        <p className="text-gray-300 mb-4">
          We understand that every event is unique, and we take pride in our ability to adapt to different styles, themes, and locations. Whether it's a grand wedding, a corporate event, a family gathering, or a personal photoshoot, our team is committed to capturing the genuine emotions and candid moments that make your event extraordinary.
        </p>
        <p className="text-gray-300 mb-4">
          Why Choose OMM Pictures?
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><b>Experience:</b> With years of experience under our belt, we know how to capture the heart and soul of your event.</li>
          <li><b>Passion:</b> We are driven by a deep passion for photography and storytelling, and it reflects in every frame we capture.</li>
          <li><b>Creativity:</b> Our creative approach ensures that every image is a work of art, telling your story with authenticity and artistry.</li>
          <li><b>Personal Touch:</b> We pride ourselves on building a strong rapport with our clients, ensuring that your vision and expectations are met.</li>
          <li><b>Location:</b> Based in Hospet, Karnataka, we are well-versed in the local culture and have an innate understanding of the region's unique beauty.</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Let Us Be Part of Your Story
        </p>
        <p className="text-gray-300 mb-4">
          We invite you to explore our portfolio and get in touch with us to discuss how we can be a part of your upcoming event. OMM Pictures is here to capture your memories, your stories, and your moments, preserving them for generations to come.
        </p>
        <p className="text-gray-300 mb-4">
          Thank you for considering OMM Pictures for your photography needs. We look forward to collaborating with you to create beautiful, lasting memories.
        </p>
        <p className="text-gray-300 mb-4">
          Contact Us
        </p>
        <Link href={`tel:8904260662`} className="text-gray-300 mb-2 font-bold">Phone: 8904260662</Link>
        </div>
        </div>
      </div>
    </div>
  )
}





