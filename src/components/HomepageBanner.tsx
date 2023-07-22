import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { bannerImages } from "@/libs/Data";

export default function HomepageBanner() {
  return (
    <div className=" ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-[100vw] lg:h-[100vh] h-[80vh]"
        modules={[Autoplay]}
        slidesPerView={1}
      >
        {bannerImages.map((image) => (
          <SwiperSlide key={image.src} className=" w-full h-full relative">
            <img
              src={image.src}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className=" absolute top-0 p-8 flex items-end justify-center right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent ">
              <div className=" text-white space-y-4 md:w-[60%] text-center">
                <h6 className=" font-medium text-slate-400">
                  PHOTOGRAPHY & FILM MAKING
                </h6>
                <h1 className=" font-bold md:text-5xl space-x-1 text-3xl flex items-center justify-center">
                  <img
                    src="/icon.png"
                    alt=""
                    className="bg-white rounded-full  w-[35px] h-[35px]"
                  />{" "}
                  <span className="">MM PICTURES</span>
                </h1>
                <p className=" text-sm font-medium ">
                  Capture the essence of every moment with our premier
                  photography studio. At OMM Studios, we specialize in creating
                  stunning visual narratives that preserve your cherished
                  memories forever. Our team of highly skilled photographers and
                  state-of-the-art equipment ensure that every image we capture
                  is a true masterpiece.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
