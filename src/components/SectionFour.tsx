import { grid } from '@/libs/Data'


import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
gsap.registerPlugin(ScrollTrigger)

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
    
  return (
    <div className=" min-h-[100vh] grid-class py-[100px]  relative  px-8 w-[90%] mx-auto ">
        <div className=" space-y-2 text-white w-full text-center">
            <h1 className=" font-semibold text-5xl">GALLERY</h1>
            <p className=" font-medium text-2xl">The areas that we're specialized in.</p>
        </div>
        <div className=" absolute top-0 px-6 py-12 flex items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black via-black to-transparent"></div>
            <div className=" overflow-hidden  gap-4 grid grid-cols-3 mt-12 ">
            {
                grid.map((image,index )=> (
                    <div key={image.col} className={` flex flex-col columns gap-4 w-full col-span-1 ${index % 2 ? "even" : "odd"} `}>
                    {
                        image.col.map((img,imageIndex) => (
                            <div key={img.src} className={`max-w-full h-[500px] ${img.scale && img.scale ? "scale-img " : ""}`}>
                                <img src={img.src} alt="" className=" w-full h-full object-cover" />
                            </div>
                        ))
                    }
                    </div>
                ))
            }
            </div>

    </div>
  )
}
