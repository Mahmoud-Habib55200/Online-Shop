import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Categ = ({ items }) => {
  return (
    <div className="mt-16 bg-white w-full mx-auto max-w-7xl p-6">
      <div className="text-center my-6">
        
        <h1 className="text-5xl  font-bold tracking-wide text-gray-800">
          New Category
        </h1>
        <p className="text-gray-500 mt-2">Discover our latest categories</p>
      </div>
      <div
        className="overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`.no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        <Marquee
          pauseOnHover
          speed={50}
          gradient={false}
          className="no-scrollbar"
        >
          <div className="flex space-x-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden 
                transition-transform 
                duration-500 ease-in-out transform scale-100 hover:scale-105 
                 w-56"
                style={{ width: "200px" }}
              >
                <Link
                  className="flex justify-center items-center flex-col"
                  to={item.href}
                >
                  <img
                    className="w-1/2 h-40 object-cover "
                    src={item.img}
                    alt={item.name}
                    style={{ height: "150px" }}
                  />
                  <div className="p-4">
                    <p className="text-center text-lg font-medium text-gray-800">
                      {item.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Categ;
