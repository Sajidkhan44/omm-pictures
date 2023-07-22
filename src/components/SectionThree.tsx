import Link from 'next/link'
import React from 'react'

export default function SectionThree() {
  return (
    <div className="min-h-[70vh] grid lg:grid-cols-2 ">
        <div className=" col-span-1 bg-[#333] flex p-12 md:justify-start justify-center items-center">
            <div className=" md:w-[70%] w-full space-y-3 md:block flex items-center flex-col md:text-start text-center">
                <h1 className=" text-lg font-medium text-white">THE GEAR CAGE</h1>
                <p className=" text-sm font-light text-slate-300">The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
                <Link href={`/`} className=' px-2 py-2 w-[max-content] rounded-xl font-medium bg-white flex items-center gap-1'> <img src="/icon.png" alt="" className=" w-[30px] h-[30px]" /><span className=""> Get in touch</span></Link>
            </div>
        </div>
        <div className=" max-w-full  max-h-full">
            <img src="/gear.jpg" alt="" className=" w-full h-full object-cover" />
        </div>
    </div>
  )
}
