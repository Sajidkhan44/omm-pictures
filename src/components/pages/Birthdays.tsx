import { babyshoot, work } from "@/libs/Data";
import React from "react";

export default function Birthdays() {
  return (
    <div className="">
      <div className=" relative w-[100vw] lg:h-[100vh] h-[80vh]">
        <img
          src={`/website/babyshoot/b-7.jpg`}
          alt=""
          className=" w-full h-full object-cover"
        />
        <div className=" absolute top-0 p-8 flex items-end justify-center right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent ">
          <div className=" text-white space-y-4 lg:w-[60%] w-full text-center">
            <span className=" font-medium text-slate-400">
              PHOTOGRAPHY & FILM MAKING
            </span>
            <h1 className=" font-bold md:text-5xl space-x-1 text-3xl flex items-center justify-center uppercase">
              {work[3].title} photography
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
          <h1 className=" font-semibold md:text-5xl text-3xl uppercase">
            BABY
          </h1>
        </div>
        <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-6 md:py-12">
          <div className=" col-span-1  flex  justify-center">
            <div className=" space-y-4">
              <h1 className=" text-3xl font-medium text-white">
                "Timeless Milestones: Capturing Birthday Joy and Baby's First
                Moments"
              </h1>
              <p className=" text-md font-medium text-gray-300 text-justify">
                Welcome to "Timeless Milestones," where we specialize in
                photography that beautifully captures the joy of birthdays and
                the precious moments of a baby's early days. From the exuberant
                celebrations of birthdays to the heartwarming magic of a baby's
                first smiles, our talented photographers are dedicated to
                preserving these treasured memories with creativity and care.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Birthday Celebrations:
                </span>{" "}
                "Timeless Milestones" brings to life the spirit of birthdays,
                capturing the happiness and excitement that surround these
                special occasions. Whether it's a 1st birthday, sweet sixteen,
                or a milestone year for an adult, our photography showcases the
                love shared with family and friends as the birthday person marks
                another year of life's journey.
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
                  A Joyful Narrative:
                </span>{" "}
                Our photographers artfully document the essence of birthday
                parties, from the blowing out of candles to the contagious
                laughter and camaraderie. The images become a joyful narrative
                of these cherished moments, creating lasting keepsakes that
                families will treasure for generations. Our photography style
                emphasizes elegance and timelessness, ensuring that each
                portrait showcases the grace and beauty of motherhood. We use
                creative lighting and artistic compositions to craft images that
                will be treasured for generations to come.{" "}
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Baby's First Moments:
                </span>{" "}
                There is a unique magic in capturing a baby's first moments –
                the innocence, wonder, and unconditional love that radiate from
                the little bundle of joy. "Timeless Milestones" specializes in
                newborn and baby shoots, preserving the essence of these
                precious early days for families to cherish forever. Maternity
                photography is not just about the expectant mother; it's about
                celebrating the bond between mother and child. We capture the
                tender moments of connection as the unborn baby is lovingly
                embraced and cherished.
              </p>
              <p className=" text-md font-medium text-gray-300 text-justify">
                <span className=" text-white text-xl inline-block">
                  Tender Connections:
                </span>{" "}
                Our photographers focus on the tender connections between
                parents and their newborns, capturing the purest expressions of
                love and devotion. The gentle touch, the loving gaze, and the
                warmth of family bonds form a heartwarming tableau of love in
                our baby photoshoots. Personalized and Meaningful: Every
                maternity photography session at "Radiant Expectations" is
                tailored to the unique personality and preferences of the
                expectant mother. We collaborate closely with our clients to
                create photographs that hold deep emotional significance.
              </p>
            </div>
          </div>
          <div className="max-w-full max-h-full col-span-1 relative rounded-[20px] overflow-hidden">
            <img src="/website/Babyshoot/b-8.jpg" alt="" />
            <div className=" absolute top-0 px-6 py-12 flex items-end right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
        </div>
        <div className=" py-[12]">
          <div className=" space-y-2 text-white  text-center">
            <h1 className=" font-semibold md:text-5xl text-3xl uppercase">
              Birthday and babyshoot STILL'S
            </h1>
          </div>
          <div className=" w-full grid lg:grid-cols-2 grid-cols-1 gap-6 py-12">
            {babyshoot.map((item) => (
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
