import { work } from '@/libs/Data'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo() {
    useEffect(() => {
      // Select the heading element
      const heading = document.querySelector('.heading');
      const description = document.querySelector('.description-second');
  
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
      
      tl.fromTo(".heading span", { y:"10px" , opacity:0 }, { y:"0px", opacity:1, stagger:{ amount:0.5 } })

    // Animate each letter
    tl.fromTo(".description-second  span", { y:"40px" , opacity:0 }, { y:"0px", opacity:1, stagger:{ amount:0.5 } }, "<50%")
    // Clean up the ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };

  
  }, []);
  return (
    <div className=" min-h-[100vh] px-8 flex flex-col items-center  py-[100px] lg:w-[90%] mx-auto">
       <div className="space-y-2 text-white w-full text-center overflow-hidden">
      <h1 className="font-semibold text-5xl heading">What we do.</h1>
      <p className="font-medium text-2xl description-second overflow-hidden">The areas that we're specialized in.</p>
    </div>
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 mt-12 w-[100%] mx-auto ">
          {
              work.map(type => (
                <Link href={type.href} key={type.title} className="max-w-full card group overflow-hidden rounded-[20px]  max-h-[1000px] relative">
                  <img src={type.src} alt="" className=" group-hover:scale-[105%] scale-100 duration-1000 ease-in-out w-full h-full object-cover " />
                  <div className=" absolute  top-0 px-6 py-12 flex items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
                    <div className=" space-y-2 ">
                    <h1 className=" text-lg font-medium text-white">{type.title}</h1>
                    <p className=" line-clamp-3  h-[0px] group-hover:h-[80px] opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 duration-500  ease-linear  text-sm  text-slate-300">{type.description}</p>
                    <div className=' px-2 py-2 w-[max-content] rounded-xl font-medium bg-white flex items-center gap-1'> <img src="/icon.png" alt="" className=" w-[30px] h-[30px]" /><span className=""> Read more</span></div>
                    </div>
                    
                  </div>
                  
                </Link>
              ))
          }
        </div>
    </div>
  )
}
