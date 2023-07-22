import React, { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Links = [
  {
    link: "Business areas",
    subChildren: [
      {
        link: "Weddings and Pre-Weddings",
        href: "/wedding",
      },
      {
        link: "Birthdays and Babyshoots",
        href: "/birthday",
      },
      {
        link: "Maternity",
        href: "/maternity",
      },
      {
        link: "Fashion and Models",
        href: "/fashion-model",
      },
    ],
  },
  {
    link: "Gallery",
    href: "/gallery",
  },
  {
    link: "About",
    href: "/contact",
  },
  {
    link: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [color, setColor] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const changebackground = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changebackground);
  }, []);

  return (
    <div className="">
      <nav
      className={` fixed top-0 right-0  left-0 z-[999] transition-all ease-linear duration-300 ${
        color ? " bg-black bg-opacity-90" : ""
      }`}
    >
      <div className=" lg:w-[90%] w-full mx-auto px-8 py-2 flex items-center justify-between">
        <Link href="/" className=" logo">
            <img
              src="/omm pictures.png"
              alt=""
              className="bg-white rounded-full  max-w-[60px] max-h-[60px]"
            />{" "}

        </Link>
        <div className={" lg:flex hidden items-center w-[45%] text-white justify-between"}>
          {Links.map((link) =>
            link.subChildren && link.subChildren.length ? (
              <Popover key={link.link} className={` relative `}>
                <Popover.Button className={`outline-none space-x-2`}>
                  <span className="">{link.link} </span>{" "}
                  <FontAwesomeIcon className="text-sm" icon={faChevronDown} />{" "}
                </Popover.Button>

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
                      {link.subChildren.map((child) => (
                        <Link
                          className=" hover:underline-offset-1 hover:underline block"
                          href={child.href}
                        >
                          {child.link}
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            ) : (
              <Link href={link.href && link.href || ""}>{link.link}</Link>
            )
          )}
          <Link
            className=" px-6 py-3 rounded-full font-semibold border-2 hover:underline border-white text-white"
            href=""
          >
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            +91-7022766423
          </Link>
        </div>
        <div className="lg:hidden   flex items-center justify-center gap-4">
         

            <div onClick={() => setShowSidebar(!showSidebar)} className=" flex flex-col items-center justify-center gap-[2px]  min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px] bg-white rounded-full">
              <div className={`w-[20px] transition-all duration-300 ease-linear ${showSidebar ? " rotate-45 translate-y-1.5 " : " "} h-[3px] bg-black `}></div>
              <div className={`w-[20px] transition-all duration-300 ease-linear ${showSidebar ? " scale-0 " : " "} h-[3px] bg-black `}></div>
              <div className={`w-[20px] transition-all duration-300 ease-linear ${showSidebar ? " -rotate-45 -translate-y-[5px] " : " "} h-[3px] bg-black `}></div>
            </div>

        </div>
      </div>
    </nav>
      <div className={` ${showSidebar ? " translate-x-0 " : " translate-x-[110%] "} duration-300 ease-linear flex  lg:hidden fixed top-0 flex-col min-h-[100vh] items-center md:justify-center uppercase space-y-8 z-[88] right-0 bg-black px-12 font-semibold  lg:w-0 md:w-[70vw] w-[100vw] py-[200px]  text-white `}>
          {Links.map((link) =>
            link.subChildren && link.subChildren.length ? (
              <div key={link.link} className={` relative flex flex-col items-center `}>
                <button onClick={() => setShowDropdown(!showDropdown)} className={`  md:text-4xl text-xl gap-1 w-[max-content] text-center flex items-center font-semibold justify-center uppercase space-x-2`}>
                  <span className="">{link.link} </span>{" "}
                  <FontAwesomeIcon className="md:text-3xl text-xl f" icon={faChevronDown} />{" "}
                </button>


                    <div className={`  rounded-lg bg-black text-white font-light lg:text-3xl md:text-2xl text-xl text-center  space-y-4 dropdown ${showDropdown ? " show py-4" : " "}`}>
                      {link.subChildren.map((child) => (
                        <Link
                          className=" hover:underline-offset-1 hover:underline block"
                          href={child.href}
                        >
                          {child.link}
                        </Link>
                      ))}
                    </div>

                </div>
            ) : (
              <Link className="md:text-4xl text-xl" href={link.href && link.href || ""}>{link.link}</Link>
            )
          )}
          <Link
            className=" px-6 py-3 w-[max-content] mx-auto block md:text-4xl text-xl font-medium rounded-full  border-2 hover:underline border-white text-white"
            href=""
          >
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            +91-7022766423
          </Link>
        </div>
    </div>
    
  );
}
