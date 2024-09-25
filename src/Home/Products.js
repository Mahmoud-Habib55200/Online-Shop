import React from "react";
import { watches } from "../constant/data";

import ShoppingBasketSharpIcon from "@mui/icons-material/ShoppingBasketSharp";

const Products = () => {
  return (
    <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl grid mx-10 my-10" >
      {watches.map((item) => (
        <div
          key={item.id}
          className=" px-4 my-10 flex-wrap   
      flex justify-center items-center flex-col text-center w-full"
        >
          <img className="w-40 h-40 mt-5" src={item.img} alt="" />
          <span>{item.title}</span>
          <p>{item.desc.substring(0, 20)}</p>
          <p>{item.amount}</p>
          <button
            className="bg-blue-400 rounded px-4 py-2 text-white my-4 
       focus:outline-none focus:ring focus:ring-blue-300 
       flex items-center justify-between w-40"
          >
            Add To Cart
            <span className="text-yellow-700">
              <ShoppingBasketSharpIcon />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
