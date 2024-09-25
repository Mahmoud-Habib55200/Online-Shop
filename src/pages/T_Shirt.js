import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDetails, Basket, Compare, Heart } from "./icon";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
import { handleAddToCart } from "../../src/CartHelp/CartHelpers"; // استدعاء الدالة من الملف الجديد

const T_Shirt = ({ data, banner, title, imageSize }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shopReducer.Products);

  const [loadingState, setLoadingState] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  return (
    <div className="container mr-auto ml-auto my-10">
      <img className="rounded brightness-90" src={banner} alt="" />
      <div className="w-full"></div>

      <div className="text-center my-10 text-3xl font-semibold">
        <h1>{title}</h1>
      </div>

      {alertMessage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed top-5 right-5 p-3 rounded-md shadow-lg z-50 ${alertType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
        >
          {alertMessage}
        </motion.div>
      )}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">
        {data.map((item) => (
          <div key={item.id}>
            <div className="w-full h-auto flex justify-center items-center relative group">
              <img
                className={`z-10 hover:z-0 hover:brightness-90 ${imageSize}`}
                src={item.img}
                alt="ProductImage"
              />
              <ul className="w-full h-36 bg-white absolute bottom-[-14px] flex flex-col items-end justify-center gap-2 font-titleFont border-1 border-r group-hover:bottom-0 hover:z-30 transition-all duration-1000 overflow-hidden">
                <li className="productLi">
                  <div className="flexBoxIcon">
                    Compare
                    <span>
                      <Compare />
                    </span>
                  </div>
                </li>
                <li
                  onClick={() =>
                    !loadingState[item.id] &&
                    handleAddToCart(item, cart, dispatch, setLoadingState, setAlertMessage, setAlertType)
                  }
                  className="productLi flex justify-end items-start"
                >
                  {loadingState[item.id] ? (
                    <div className="flex justify-center items-center">
                      <RotatingLines
                        strokeColor="gray"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="25"
                        visible={true}
                      />

                    </div>
                  ) : (
                    <div className="flex gap-3">
                        <span>Add To Cart</span>
                        <Basket />
                    </div>
                  )}
                </li>
                <li className="productLi">
                  <Link to="" className="flexBoxIcon">
                    View Details
                    <span>
                      <ArrowDetails />
                    </span>
                  </Link>
                </li>
                <li className="productLi">
                  <Link className="flexBoxIcon">
                    Add to Wish List
                    <span>
                      <Heart />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <h1 className="text-center text-md mt-3 font-semibold">{item.title}</h1>
            <div className="text-center">
              <span className="text-black text-lg font-bold mx-4">${item.price}</span>
              <span className="text-red-600 font-bold capitalize">
                {item.price.substring(12, 30)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default T_Shirt;
