import { grid } from '@/libs/Data'
import { dancing } from '@/pages'


import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function SectionFour() {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:".grid-class",
                start:"-600px",
                end:"100%",
            }
        })
        tl.fromTo(".grid-class",{width:"50%"  }, { width:"90%",})
        tl.fromTo(".even", { translateY:"500px",   }, { translateY:"0px", duration:1, opacity:1 })
        tl.fromTo(".odd", { translateY:"-500px",  }, { translateY:"0px", duration:1, opacity:1},"<")
    }, [])

    useEffect(() => {
        // Select the heading element
        const heading = document.querySelector('.heading-gallery');
        const description = document.querySelector('.description-gallery');
    
        // Split the heading text into individual words
        const words = heading.textContent.split(' ');
    
        // Wrap each letter in a span element with additional styling
        const wrappedWords = words.map(word => {
          const letters = word.split('');
          const wrappedLetters = letters.map(letter => {
            return `<span style="display: inline-block; transform-origin: bottom; opacity: 0;">${letter}</span>`;
          });
          return `<span style="white-space: nowrap">${wrappedLetters.join('')}</span>`;
        });
    
        // Set the modified HTML back to the heading
        heading.innerHTML = wrappedWords.join(' ');
    
        const descriptionWords = description.textContent.split(' ');
    
        // Wrap each word in a span element with additional styling
        const wrappedDescriptionWords = descriptionWords.map(word => {
          return `<span style="display: inline-block; opacity: 0;">${word}</span>`;
        });
    
        // Set the modified HTML back to the description
        description.innerHTML = wrappedDescriptionWords.join(' ');
    
        // Create the GSAP timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%', // Adjust the trigger point as per your requirements
          },
        });
        const descriptionTl = gsap.timeline({
          scrollTrigger: {
            trigger: description,
            start: 'top 80%', // Adjust the trigger point as per your requirements
          },
        });
    
        // Animate each word in the description
        
        tl.fromTo(".heading-gallery span", { y:"10px" , opacity:0 }, { y:"0px", opacity:1, stagger:{ amount:0.5 } })
    
      // Animate each letter
      tl.fromTo(".description-gallery  span", { y:"40px" , opacity:0 }, { y:"0px", opacity:1, stagger:{ amount:0.5 } }, "<50%")
      // Clean up the ScrollTrigger on unmount
      return () => {
        ScrollTrigger.getAll().forEach(instance => instance.kill());
      };
    
    
    }, []);
    
  return (
    <div className=" lg:min-h-[100vh] grid-class py-[100px]  relative  px-8 lg:w-[90%] w-full mx-auto ">
        <div className=" space-y-2 text-white w-full text-center">
            <h1 className={` font-semibold md:text-5xl ${dancing.className} heading-gallery text-3xl`}>GALLERY</h1>
            <p className=" font-medium md:text-2xl text-md description-gallery">Welcome to the OMM Pictures Gallery, where we proudly present a curated collection of captivating photographs that embody the essence of our artistic vision.</p>
        </div>
        <div className=" absolute top-0  py-12 lg:flex hidden items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black  to-transparent"></div>
            <div className=" mt-12 ">
            <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 1, 700: 4, 900: 5, 1980:5 }} >
              <Masonry gutter="15px">
            {
                grid.map((image,index )=> (
                    <div className="">
                      <img  src={image.src} alt="" className="" />
                    </div>
                  
                ))
            }
            </Masonry>
      </ResponsiveMasonry>
           
            </div>

    </div>
  )
}
