import React, { useEffect, useState } from "react";
import { Popover, Transition } from '@headlessui/react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const Links = [
  {
    link: "Business areas",
    subChildren: [
      {
        link: "Weddings and Pre-Weddings",
        href: "/weddings",
      },
      {
        link: "Naming Ceremany",
        href: "/naming-ceremany",
      },
      {
        link: "Cultural Events",
        href: "/cultural-events",
      },
      {
        link: "Family Celebrations",
        href: "/family-celebrations",
      },
      {
        link: "School & College Annual Day",
        href: "/family-celebrations",
      },
      {
        link: "Engagements",
        href: "/family-celebrations",
      },
    ],
  },
  {
      link:"Gallery",
      href:"/gallery"
  },{
      link:"About",
      href:"/contact"
  },
  {
      link:"Contact",
      href:"/contact"
  }
];
export default function Navbar() {
  const [color, setColor] = useState(false)
 

  const changebackground = () => {
      if(window.scrollY >= 80){
          setColor(true)
      }else{
        setColor(false)
      }
  }
useEffect(() => {
  window.addEventListener("scroll", changebackground)
}, [])


  return (
    <nav className={` fixed top-0 right-0  left-0 z-[999] transition-all ease-linear duration-300 ${color ? " bg-black bg-opacity-90" : ""}`}>
      <div className=" w-[90%] mx-auto px-8 py-2 flex items-center justify-between">
      <div className=" logo">
      <h1 className=" font-bold md:text-5xl text-white text-3xl flex items-center justify-center"><img src="/icon.png" alt="" className="bg-white rounded-full  w-[35px] h-[35px]" />  <span className="">MM</span></h1>
      <p className=" font-medium border-t text-lg text-slate-200 pl-[37px]">PICTURES</p>
      </div>
        <div className=" flex items-center w-[45%] text-white justify-between">
            {
                Links.map(link => (
                  link.subChildren && link.subChildren.length ? (
                    <Popover className={` relative `}>
                    <Popover.Button className={`outline-none space-x-2`}><span className="">{link.link}  </span> <FontAwesomeIcon className="text-sm" icon={faChevronDown} /> </Popover.Button>
              
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Popover.Panel className={` absolute top-[10px] `}>
                          <div className=" w-[max-content] p-6 rounded-lg bg-black text-white font-light text-md space-y-4">
                            {
                                link.subChildren.map(child => (
                                    <Link className=" hover:underline-offset-1 hover:underline block" href={child.href}>{child.link}</Link>
                                ))
                            }
                          </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                  ) : <Link href={link.href}>{link.link}</Link>
                   
                ))
            }
             <Link className=" px-6 py-3 rounded-full font-semibold border-2 hover:underline border-white text-white" href="">+91-7022766423</Link>
        </div>
        {/* <div className=" flex items-center gap-4">
         

            <div className=" flex flex-col gap-2 p-4 bg-white rounded-full">
              <div className="w-[30px] h-[3px] bg-black "></div>
              <div className="w-[30px] h-[3px] bg-black "></div>
              <div className="w-[30px] h-[3px] bg-black "></div>
            </div>

        </div> */}
      </div>
    </nav>
  );
}
