import { gallery, weddingStills } from "@/libs/Data";
import { gsap } from "gsap";
import React, { useEffect } from "react";

export default function Gallery() {
  useEffect(() => {
    gsap.fromTo(
      '.small-heading',
      { y: "20px", transformOrigin: "left", opacity: 0 },
      { y: "0px", duration: 1, opacity: 1 } as gsap.AnimationVars // Use type assertion here
    );
    gsap.fromTo(
      '.big-heading',
      { y: "20px", transformOrigin: "left", opacity: 0 },
      { y: "0px", duration: 1, opacity: 1 } as gsap.AnimationVars // Use type assertion here
    );
    gsap.fromTo(
      '.description',
      { y: "20px", transformOrigin: "left", opacity: 0 },
      { y: "0px", duration: 1, opacity: 1 } as gsap.AnimationVars // Use type assertion here
    );
  }, []);
  return (
    <div className="">
      <div className=" relative w-[100vw] lg:h-[100vh] h-[80vh]">
        <img
          src={`/website/Maternity/g-1.jpg`}
          alt=""
          className=" w-full h-full object-cover"
        />
        <div className=" absolute top-0 p-8 flex items-end justify-center right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent ">
          <div className=" text-white space-y-4 lg:w-[60%] text-center">
            <span className=" font-medium text-slate-400 uppercase small-heading">
              our best work
            </span>
            <h1 className=" font-bold md:text-5xl big-heading space-x-1 text-3xl flex items-center justify-center uppercase">
              OUR GALLERY
            </h1>
            <p className=" text-sm font-medium description ">
              Capture the essence of every moment with our premier photography
              studio. At OMM Studios, we specialize in creating stunning visual
              narratives that preserve your cherished memories forever. Our team
              of highly skilled photographers and state-of-the-art equipment
              ensure that every image we capture is a true masterpiece.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[84%] mx-auto flex flex-col py-[100px] ">
        <div className=" grid lg:grid-cols-5 gap-4">
            {
                weddingStills.map(still => (
                    <div className="max-w-full">
                    <img src={still.src} alt="" className="" />
                </div>
                ))
            }
        {
        gallery.map(gallery => (
            <div className="max-w-full">
                <img src={gallery.src} alt="" className="" />
            </div>
        ))
        }
        </div>
      </div>
    </div>
  );
}
