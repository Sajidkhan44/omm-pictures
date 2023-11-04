import React from "react";
import { Links } from "./Navbar";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full  ">
      <div className=" lg:w-[90%] w-full px-8 mx-auto md:py-[50px] ">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 pb-12 border-b border-slate-700 ">
          <div className="  col-span-1 space-y-3 md:block flex items-center justify-center flex-col ">
            <div className=" w-[max-content] ">
              <img src="/omm pictures.png" alt="" className=" w-[150px] h-[150px]" />
            </div>
            <p className=" font-medium text-sm md:text-start text-center text-slate-300">Photographers & videographers capturing the world around us.</p>
          </div>
          <div className=" col-span-1 text-white md:text-start text-center grid gap-5 lg:grid-cols-2 grid-cols-1">
            <div className=" col-span-1 space-y-3 ">
              <h1 className=" font-medium text-2xl">{Links[0].link}</h1>
              <ul className=" text-slate-300 text-md">
                {Links[0].subChildren?.map((link) => (
                  <li className="">
                    <Link href={link.href}>{link.link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" col-span-1 space-y-3">
              <h1 className=" font-medium text-2xl">Pages</h1>
              <ul className=" text-slate-300 text-md">
                {Links.filter((item, index) => index !== 0).map((link) => (
                  <li className="">
                    <Link href={link.href && link.href || ""}>{link.link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-5 py-12 border-b border-slate-700 ">
          <div className=" col-span-1 space-y-3 md:text-start text-center">
            <h1 className=" text-lg font-medium text-white">MAIL US</h1>
            <p className="  text-sm  text-slate-300">
              Read about all the things we do
            </p>
          </div>
          <div className=" col-span-1 w-full ">
            <div className=" relative lg:w-[70%]">
              <input type="text" placeholder="ommstudios@gmail.com" className=" relative z-[2] pl-6 pr-28 py-3.5 w-full rounded-xl bg-white" />
              <button className=' absolute z-[3] top-[50%] right-[0.5%] -translate-x-[0.5%] -translate-y-[50%] px-2 py-2  w-[max-content] rounded-xl font-medium bg-black text-white flex items-center gap-1'> <img src="/icon.png" alt="" className=" w-[30px] h-[30px] bg-white rounded-full" /><span className=""> submit</span></button>
            </div>
          </div>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 md:text-start text-center gap-5 py-12 text-slate-300 ">
          <div className=" col-span-1">
            <p className=" my-auto">© OMM Pictures, Inc. All rights reserved. Licensing.</p>
          </div>
          <div className=" flex col-span-1 items-center md:justify-start justify-center gap-4">
            {/* <img src="/twitter.svg" alt="" className=" w-[30px] " /> */}
           <Link target="_blank" href={`https://instagram.com/omm_pictures?igshid=MzRlODBiNWFlZA==`}><img src="/instagram.svg" alt="" className=" w-[30px] " /></Link> 
        <Link target="_blank" href={`https://youtube.com/channel/UCReRuR7qb_QkUGKUlJHbJTA`}>   <img src="/you-2.svg" alt="" className="  h-[40px] " /></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}
