import Link from 'next/link'
import React from 'react'

export default function SectionFive() {
  return (
    <div className="w-full px-8 flex flex-col items-center justify-center text-center pb-[100px]">
        <div className=" lg:w-[70%] flex flex-col items-center space-y-3 ">
            <h1 className=" font-medium md:text-5xl text-4xl text-white">Need help with photography or videography?</h1>
            <p className=" text-xl font-medium text-slate-300">We're here for you!</p>
            <Link href={`/`} className=' px-2 py-2 w-[max-content] rounded-xl font-medium bg-white flex items-center gap-1'> <img src="/icon.png" alt="" className=" w-[30px] h-[30px]" /><span className=""> Get in touch</span></Link>
        </div>

    </div>
  )
}
