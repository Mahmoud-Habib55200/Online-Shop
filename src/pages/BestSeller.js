import React from "react";
import { new3, newArr1, newArr2, newArr3, newArrival } from "../assets";

const BestSeller = () => {
  return (
    <div className="mx-auto max-w-7xl mt-14 ">
      <div>
        <img src={newArrival} alt="" />
      </div>

      <div className="mt-10 w-full  mx-auto max-w-7xl">
        <div className="flex justify-center items-center">
          <div className="mx-10">
            <img src={newArr1} alt="" />
            <h2>Hoodies & Sweatshirt</h2>
            <p>Explore Now!</p>
          </div>
          <div className="mx-10">
            <img src={newArr2} alt="" />
            <h2>Hoodies & Sweatshirt</h2>
            <p>Explore Now!</p>
          </div>
          <div className="mx-10">
            <img src={newArr3} alt="" />
            <h2>Hoodies & Sweatshirt</h2>
            <p>Explore Now!</p>
          </div>
          <div className="mx-10">
            <img className="rounded w-[100px] h-[100px]" src={new3} alt="" />
            <h2>Hoodies & Sweatshirt</h2>
            <p>Explore Now!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
