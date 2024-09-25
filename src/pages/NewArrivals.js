import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DataNewArrivals } from "../constant/data";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../CartHelp/CartHelpers";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Basket } from "./icon";
 

// Map for Data Title
const DataTitle = [
  {
    id: 1,
    title: "New Arrivals",
    desc: "Check out the most promising product bought by our buyers",
  },
];

const NewArrivals = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.shopReducer.Products);

  const [loadingState, setLoadingState] = useState({});
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  // Define state to hold currently displayed items
  const [displayedItems, setDisplayedItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedItems((prevItems) => {
        const newItems = DataNewArrivals.slice(index, index + 4);
        index = (index + 4) % DataNewArrivals.length;
        return newItems;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className=" my-20 ">
      <div className="container mx-auto">
        {DataTitle.map((item) => (
          <div className="text-center my-10" key={item.id}>
            <h1 className="tracking-wide text-5xl font-bold">{item.title}</h1>
            <p className="my-3 text-[#989898]">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="container mx-auto  ">
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


        <div className=" w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
              }}
              className="w-[300px] border hover:border-gray-300 "
            >
              <div className="relative w-full">
                <img
                  className="rounded-xl brightness-90 cursor-pointer"
                  src={item.img}
                  alt=""
                />
                <div className="absolute top-40 right-2 z-9 flex flex-col justify-center items-end">
                  <div className="bg-gray-700 text-gray-300 hover:bg-red-500 hover:text-white px-2 py-2 rounded-3xl cursor-pointer">
                    {item.favourite}
                  </div>

                  {/* ===================== Functian Add To Cart =================== */}

                  <div
                    onClick={() =>
                      !loadingState[item.id] &&
                      handleAddToCart(item, cart, dispatch, setLoadingState, setAlertMessage, setAlertType)
                    }
                    className="bg-gray-700 text-green-300 px-2 py-2 rounded-3xl my-3 cursor-pointer"
                  >
                    {/* {item.cart} */}

                    
                    {loadingState[item.id] ? (
                      <div className="flex justify-center items-center">
                        <RotatingLines
                          strokeColor="aqua"
                          strokeWidth="5"
                          animationDuration="0.75"
                          width="25"
                          visible={true}
                        />
                         
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        {item.cart}
                      </div>
                    )}
                  </div>

                  {/* ===================== Functian Add To Cart =================== */}
                  <div
                    onClick={() => handleImageClick(item.img)}
                    className="bg-gray-700 text-orange-300 px-2 py-2 rounded-3xl cursor-pointer"
                  >
                    {item.preview}
                  </div>
                </div>
                <div className="absolute top-1 left-1 w-[60px] h-[80px]">
                  <div className="flex justify-center items-center">
                    <h1
                      style={{ backgroundColor: item.bgColor }}
                      className="px-2 py-4 text-white rounded-full text-xl font-bold"
                    >
                      {item.topDiscount}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex flex-col scale-95 mt-4">
                <div className="flex justify-between">
                  <p className="text-[#989898] font-medium">{item.type}</p>
                  <div className="flex text-yellow-500">
                    {item.star}
                    {item.star}
                    {item.star}
                  </div>
                </div>

                <div className="my-1">
                  <h1 className="font-medium text-xl">{item.title}</h1>
                </div>
                <div>
                  <p className="text-[#74CA4D] text-2xl font-bold">
                    {item.price}
                    <del className="text-[#989898] mx-4 text-lg font-medium">
                      {item.discount}
                    </del>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full px-4 py-2"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
