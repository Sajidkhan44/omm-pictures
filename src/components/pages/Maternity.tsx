import { maternity, weddingStills, work } from "@/libs/Data";
import { dancing } from "@/pages";
import React from "react";

export default function Maternity() {
  return (
    <div className="">
      <div className=" relative w-[100vw] lg:h-[100vh] h-[80vh]">
        <img
          src={`/website/Maternity/w-1.jpg`}
          alt=""
          className=" w-full h-full object-cover"
        />
        <div className=" absolute top-0 p-8 flex items-end justify-center right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent ">
          <div className=" text-white space-y-4 lg:w-[60%] text-center">
            <span className=" font-medium text-slate-400">
              PHOTOGRAPHY & FILM MAKING
            </span>
            <h1 className=" font-bold md:text-5xl space-x-1 text-3xl flex items-center justify-center uppercase">
              {work[2].title} photography
            </h1>
            <p className=" text-sm font-medium ">
              Capture the essence of every moment with our premier photography
              studio. At OMM Studios, we specialize in creating stunning visual
              narratives that preserve your cherished memories forever. Our team
              of highly skilled photographers and state-of-the-art equipment
              ensure that every image we capture is a true masterpiece.
            </p>
          </div>
        </div>
      </div>
      <div className="py-[100px]  space-y-12 lg:w-[90%] px-8 mx-auto ">
        <div className=" space-y-2 text-white  text-center">
          <h1 className={` font-semibold md:text-5xl text-3xl uppercase ${dancing.className}`}>maternity</h1>
        </div>
        <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-6 md:py-12">
          <div className=" col-span-1  flex  justify-center">
            <div className=" space-y-4">
              <h1 className=" text-3xl font-medium text-white">
                "Radiant Expectations: Capturing the Beauty of Motherhood"
              </h1>
              <p className=" text-md font-medium text-gray-300 text-justify">
                Welcome to "Radiant Expectations," where we specialize in
                maternity photography that celebrates the awe-inspiring journey
                of motherhood. Pregnancy is a magical and transformative time,
                and our team of skilled photographers is dedicated to preserving
                these precious moments through artistry and compassion.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Embracing the Miracle of Life:
                </span>{" "}
                Our maternity photography sessions are designed to capture the
                radiance and natural beauty of expectant mothers as they embrace
                the miracle of life growing within them. Each image tells a
                unique story of hope, love, and the incredible power of
                motherhood.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  A Journey of Love:
                </span>{" "}
                "Radiant Expectations" invites you to witness the profound love
                and anticipation shared by expectant mothers and their families.
                From tender touches to joyful laughter, our photographs portray
                the emotions that intertwine with this remarkable journey.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Elegant and Timeless Portraits:
                </span>{" "}
                Our photography style emphasizes elegance and timelessness,
                ensuring that each portrait showcases the grace and beauty of
                motherhood. We use creative lighting and artistic compositions
                to craft images that will be treasured for generations to come.{" "}
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Celebrating Connection:
                </span>{" "}
                Maternity photography is not just about the expectant mother;
                it's about celebrating the bond between mother and child. We
                capture the tender moments of connection as the unborn baby is
                lovingly embraced and cherished.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                Personalized and Meaningful:
                </span>{" "}
                Personalized and Meaningful: Every maternity photography session at "Radiant Expectations" is tailored to the unique personality and preferences of the expectant mother. We collaborate closely with our clients to create photographs that hold deep emotional significance.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                The Gift of Memories:
                </span>{" "}
                 As the pregnancy journey unfolds, we provide a gift of cherished memories. Our high-quality prints and products ensure that these fleeting moments are beautifully preserved, allowing families to relive the anticipation and excitement for years to come.              </p>
            </div>
          </div>
          <div className="max-w-full max-h-full col-span-1 relative rounded-[20px] overflow-hidden">
            <img src="/website/Maternity/w-6.jpg" alt="" />
            <div className=" absolute top-0 px-6 py-12 flex items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
        <div className=" py-[12]">
          <div className=" space-y-2 text-white  text-center">
            <h1 className={` font-semibold text-5xl uppercase ${dancing.className}`}>
              Maternity STILL'S
            </h1>
          </div>
          <div className=" w-full grid lg:grid-cols-2 gap-6 py-12">
            {maternity.map((item) => (
              <div className=" max-w-full rounded-[20px] overflow-hidden max-h-full">
                <img src={item.src} alt="" className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
