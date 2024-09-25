import React from "react";
import { babyKids, imgYello, rectaenalg } from "../assets/arrivals/index";

const BabyKids = () => {
  return (
    <div className="container mx-auto  ">
      <div className="grid sm:grid-cols-1  my-10 md:grid-cols-2">
        <div className="my-10 ">
          <h1 className="sm:text-3xl sm:text-center lg:text-start lg:text-5xl tracking-wider   font-semibold">
            Baby & Kids Fashion
          </h1>
          <div className="my-3 py-2 sm:px-7 lg:px-0 flex flex-col relative">
            <img className="relative max-w-[350px]" src={rectaenalg} alt="Sale banner" />
            <h1 className="text-6xl font-bold absolute top-10 left-24 text-white">
              SALE!
            </h1>
            <p className="absolute top-1/2 left-32 mt-3 text-lg font-medium text-white">
              07 to 14 February
            </p>
          </div>
          <button className="ml-32 bg-[#004743] px-8 py-4 rounded-full text-white font-medium hover:bg-[#003c36] transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="relative mb-10">
          <div className="flex">
            <img
              className="relative opacity-35"
              src={imgYello}
              alt="Yellow background"
            />
            <img
              className="absolute"
              src={babyKids}
              alt="Baby and kids fashion"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyKids;
