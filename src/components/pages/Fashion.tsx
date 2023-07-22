import { babyshoot, fashion, work } from "@/libs/Data";
import { dancing } from "@/pages";
import React from "react";

export default function Fashion() {
  return (
    <div className="">
      <div className=" relative w-[100vw] lg:h-[100vh] h-[80vh]">
        <img
          src={`/website/Fashion/f-2.jpg`}
          alt=""
          className=" w-full h-full object-cover"
        />
        <div className=" absolute top-0 p-8 flex items-end justify-center right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent ">
          <div className=" text-white space-y-4 lg:w-[60%] text-center">
            <span className=" font-medium text-slate-400">
              PHOTOGRAPHY & FILM MAKING
            </span>
            <h1 className=" font-bold md:text-5xl space-x-1 text-3xl flex items-center justify-center uppercase">
              {work[4].title} photography
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
          <h1
            className={`${dancing.className} font-semibold md:text-5xl text-3xl uppercase`}
          >
            FASHION & modeling
          </h1>
        </div>
        <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-6 md:py-12">
          <div className=" col-span-1  flex  justify-center">
            <div className=" space-y-4">
              <h1 className=" text-3xl font-medium text-white">
                "Elegance Unveiled: Fashion and Modeling Photography at its
                Finest"
              </h1>
              <p className=" text-md font-medium text-gray-300 text-justify">
                Welcome to "Elegance Unveiled," where we specialize in fashion
                and modeling photography that goes beyond the ordinary and
                embraces the essence of artistry and sophistication. Our
                talented team of photographers is dedicated to capturing the
                beauty, grace, and individuality of fashion designs and the
                captivating charisma of models.{" "}
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Celebrating Fashion as an Art:
                </span>{" "}
                "Elegance Unveiled" views fashion as an expressive form of art,
                and our photography reflects this belief. We collaborate closely
                with designers and stylists to portray the true vision and
                artistry behind their creations, elevating fashion photography
                to a captivating visual narrative.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Enigmatic and Striking:
                </span>{" "}
                Our photography style is enigmatic and striking, capturing the
                essence of fashion with dynamic compositions, bold contrasts,
                and creative angles. We aim to evoke emotions and draw the
                audience into the story of each image.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Models as Masterpieces:
                </span>{" "}
                We believe that models are masterpieces of beauty and
                expression, and our photography celebrates their uniqueness and
                individuality. We empower models to showcase their true selves,
                capturing the charisma and confidence that make them shine.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Versatility in Fashion Styles:
                </span>{" "}
                "Elegance Unveiled" embraces a wide range of fashion styles,
                from high-end couture to street fashion and everything in
                between. Our photographers adapt their approach to complement
                the specific aesthetics and vision of each project.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Unifying Creativity:
                </span>{" "}
                Fashion and modeling photography require a cohesive and unified
                creative effort. At "Elegance Unveiled," we collaborate closely
                with designers, stylists, makeup artists, and models to create a
                harmonious synergy that brings the fashion story to life.
              </p>
            </div>
          </div>
          <div className="max-w-full max-h-full col-span-1 relative rounded-[20px] overflow-hidden">
            <img src="/website/Model/m-2.jpg" alt="" />
            <div className=" absolute top-0 px-6 py-12 flex items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
        <div className=" py-[12]">
          <div className=" space-y-2 text-white  text-center">
            <h1
              className={` ${dancing.className} font-semibold md:text-5xl text-3xl uppercase`}
            >
              Modelling STILL'S
            </h1>
          </div>
          <div className=" w-full grid lg:grid-cols-2 gap-6 py-12">
            {fashion.map((item) => (
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
