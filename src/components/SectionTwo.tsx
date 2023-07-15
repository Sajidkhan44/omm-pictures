import { work } from '@/libs/Data'
import Link from 'next/link'
import React from 'react'

export default function SectionTwo() {
  return (
    <div className=" min-h-[100vh] px-8 flex flex-col items-center  py-[100px] w-[90%] mx-auto">
        <div className=" space-y-2 text-white w-full text-center">
            <h1 className=" font-semibold text-5xl">What we do.</h1>
            <p className=" font-medium text-2xl">The areas that we're specialized in.</p>
        </div>
        <div className=" grid grid-cols-2 gap-6 mt-12 w-[100%] mx-auto ">
          {
              work.map(type => (
                <div className="max-w-full group overflow-hidden  max-h-[1000px] relative">
                  <img src={type.src} alt="" className=" group-hover:scale-[105%] scale-100 duration-1000 ease-in-out w-full h-full object-cover " />
                  <div className=" absolute top-0 px-6 py-12 flex items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
                    <div className=" space-y-2 ">
                    <h1 className=" text-lg font-medium text-white">{type.title}</h1>
                    <p className=" line-clamp-3  h-[0px] group-hover:h-[80px] opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 duration-500  ease-linear  text-sm  text-slate-300">{type.description}</p>
                    <Link href={`/`} className=' px-2 py-2 w-[max-content] rounded-xl font-medium bg-white flex items-center gap-1'> <img src="/icon.png" alt="" className=" w-[30px] h-[30px]" /><span className=""> Read more</span></Link>
                    </div>
                    
                  </div>
                  
                </div>
              ))
          }
        </div>
    </div>
  )
}
