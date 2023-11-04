import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



export default function Testimonials() {
    const prevBtn = useRef(null)
    const nextBtn = useRef(null)
    const [inIt, setinIt] = useState(true)
    useEffect(() => {
        setinIt(true)
    }, [inIt])
    const testimonials = [
        {
            name: 'Kenzie Edgar',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor...',
            imgSrc: 'https://i.pravatar.cc/100?img=1',
        },
        {
            name: 'Stevie Tifft',
            text: 'Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus...',
            imgSrc: 'https://i.pravatar.cc/100?img=2',
        },
        {
            name: 'Tommie Ewart',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam...',
            imgSrc: 'https://i.pravatar.cc/100?img=3',
        },
        {
            name: 'Charlie Howse',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum...',
            imgSrc: 'https://i.pravatar.cc/100?img=4',
        },
        {
            name: 'Nevada Herbertson',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati...',
            imgSrc: 'https://i.pravatar.cc/100?img=5',
        },
        {
            name: 'Kris Stanton',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate...',
            imgSrc: 'https://i.pravatar.cc/100?img=6',
        },
    ];
    return (
        <div className="min-h-[70vh] px-8 flex flex-col items-center  py-[100px] lg:w-[90%] mx-auto">
            <div className="w-full bg-black  px-5  text-white pt-5 pb-16">
                <div className="w-full mx-auto">
                    <div className="text-center  mx-auto">
                        <h2 className={`font-semibold md:text-5xl heading-gallery text-3xl text-center mb-4`}>
                        What people <br /> are saying.
                        </h2>
                        <div className="text-center mb-16">
                            <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
                            <span className="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                            <span className="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
                            <span className="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
                        </div>
                    </div>
                 
                    <div className=" w-full items-start">
                        <Swiper
                        navigation={{
                            prevEl: prevBtn.current,
                            nextEl: nextBtn.current,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            450: {
                                slidesPerView: 1,
                            },
                        }}
                     
                        onInit={() => setinIt(!inIt)}
                            spaceBetween={30}
                            
                            
                            modules={[Autoplay,Navigation, Pagination]}
                            autoplay={{ delay: 5000 }}
                            className=" mySwiper text-center mx-auto lg:w-[70%]"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full mx-auto rounded-lg bg-black border border-gray-200 p-5 text-white font-light mb-6">
                                        <div className="w-full flex mb-4 items-center justify-start text-start">
                                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src={testimonial.imgSrc} alt={testimonial.name} />
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-white">{testimonial.name}</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight">
                                                <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                                                {testimonial.text}
                                                <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex items-center lg:pl-16 justify-center  gap-2 mt-[30px] w-full">
                            <button
                                ref={prevBtn}
                                className=" min-w-[50px] h-[50px] bg-[#119de2] border-b-4 border-[#112448] rounded-full flex items-center justify-center text-white"
                            >
                                <FontAwesomeIcon
                                    className=" text-sm w-4 h-4"
                                    icon={faChevronLeft}
                                />
                            </button>
                            <button
                                ref={nextBtn}
                                className=" min-w-[50px] h-[50px] bg-[#119de2] border-b-4 border-[#112448] rounded-full flex items-center justify-center text-sm text-white"
                            >
                                <FontAwesomeIcon
                                    className=" text-sm w-4 h-4"
                                    icon={faChevronRight}
                                />
                            </button>

                            <div className="custom-pagination md:ml-12 md:order-2 order-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
