import { weddingStills, work } from '@/libs/Data'
import { dancing } from '@/pages'
import { gsap } from 'gsap'
import React, { useEffect } from 'react'

export default function Wedding() {
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
            <img src={work[0].src} alt="" className=" w-full h-full object-cover" />
            <div className=" absolute top-0 p-8 flex items-end justify-center right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent ">
                  <div className=" text-white space-y-4 lg:w-[60%] text-center">
                    <h6 className=" font-medium text-slate-400 small-heading">PHOTOGRAPHY & FILM MAKING</h6>
                    <h1 className=" font-bold md:text-5xl space-x-1 big-heading text-3xl flex items-center justify-center">{work[0].title} </h1>
                    <p className=" text-sm font-medium description ">Capture the essence of every moment with our premier photography studio. At OMM Studios, we specialize in creating stunning visual narratives that preserve your cherished memories forever. Our team of highly skilled photographers and state-of-the-art equipment ensure that every image we capture is a true masterpiece.</p>
                  </div>
                </div>
        </div>
        <div className="py-[100px]  space-y-12 lg:w-[90%] px-8 mx-auto ">
        <div className=" space-y-2 text-white  text-center">
            <h1 className={` font-semibold md:text-5xl text-3xl ${dancing.className}`}>WEDDING'S & PRE-WEDDINGS</h1>
        </div>
        <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-6 md:py-12">
            <div className=" col-span-1  flex  justify-center">
                <div className=" space-y-4">
                    <h1 className=" text-3xl font-medium text-white">"Forever Uniting Hearts: Capturing Your Wedding Day Bliss"</h1>
                    <p className=" text-md font-medium text-gray-300 text-justify">"Forever Uniting Hearts" presents wedding photography services that eloquently document the moments of bliss, love, and unity on your special day. As your wedding photographers, we recognize the significance of each heartfelt exchange and the profound emotions shared with your beloved family and friends. With a discreet and unobtrusive approach, our skilled photographers will artfully document every precious detail, from the tender vows spoken to the jubilant laughter and heartfelt tears of joy. Our goal is to create an authentic visual narrative that weaves together the magical tapestry of emotions that define your wedding celebration. With "Forever Uniting Hearts," you can relive the extraordinary beauty of your wedding day through stunning images that will forever hold the essence of your union. Trust us to preserve these cherished memories as a tribute to the beginning of your eternal journey together.</p>
                </div>
            </div>
            <div className="max-w-full max-h-full col-span-1 relative rounded-[20px] overflow-hidden">
            <img src="/website/Wedding/w-2.jpg" alt="" />
            <div className=" absolute top-0 px-6 py-12 flex items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
        </div>
        <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-6 py-12">
            <div className="max-w-full lg:order-1 order-2 max-h-full rounded-[20px] col-span-1 relative  overflow-hidden">
            <img src="/website/Prewedding/w-6.jpg" className='w-full  h-full' alt="  " />
            <div className=" absolute top-0 px-6 py-12 flex items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className=" col-span-1  flex  justify-center">
                <div className=" space-y-4">
                    <h1 className=" text-3xl font-medium text-white">"Love's Prelude: Capturing Your Pre-Wedding Romance"</h1>
                    <p className=" text-md font-medium text-gray-300 text-justify">Step into the enchanting world of "Love's Prelude," where we specialize in pre-wedding photography that encapsulates the romance, excitement, and anticipation leading up to your wedding day. Our team of passionate photographers is committed to creating a captivating visual story of your love journey, portraying the unique connection between you and your partner. Whether amidst breathtaking landscapes, in the heart of the city, or in the comfort of your own haven, we aim to craft timeless images that beautifully reflect the joyous prelude to your wedding celebration. From candid moments of laughter to tender gazes that convey unspoken emotions, "Love's Prelude" captures the essence of your love story, preserving these cherished memories as a testament to the magical journey you are embarking upon together.</p>
                </div>
            </div>
        </div>
       <div className=" py-[12]">
       <div className=" space-y-2 text-white  text-center">
            <h1 className={` font-semibold md:text-5xl text-3xl uppercase ${dancing.className}`}>Wedding STILL'S</h1>
        </div>
        <div className=" w-full grid lg:grid-cols-3 gap-6 py-12">
            {
                weddingStills.map(item => (
                    <div className=" max-w-full rounded-[20px] overflow-hidden max-h-full">
                        <img src={item.src} alt="" className="" />
                    </div>
                ))
            }
        </div>
       </div>
        
        </div>
        
    </div>
  )
}
