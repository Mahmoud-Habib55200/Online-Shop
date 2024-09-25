import { DarkLogo, LigthLogo } from "../assets";
import PaymentIcon from "@mui/icons-material/Payment";
import SecurityIcon from "@mui/icons-material/Security";
import SupportIcon from "@mui/icons-material/Support";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {   deleteItemInCart  } from "../redux/shopSlice";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "  Viverra tempor eget consectetur congue? ",
    desc: "In ullamcorper eleifend mi sed egestas aenean nibh egestas porta enim posuere sem condimentum faucibus phasellus.  ",
  },
  {
    id: 2,
    title: "  Cursus in orci tortor venenatis euismod? ",
    desc: "Tortor sit in molestie convallis auctor fermentum dolor, aliquam sagittis nullam elementum pharetra neque viverra enim felis lectus risus mattis nec egestas interdum sit in odio elit.",
  },
  {
    id: 3,
    title: " Elit metus felis id nullam vulputate? ",
    desc: "Mollis nibh tristique molestie massa ultricies nunc, nunc vitae, cras ornare odio imperdiet eros scelerisque urna eget vitae nulla volutpat erat risus magna nisi.  ",
  },
  {
    id: 4,
    title: "   Tincidunt elementum non posuere? ",
    desc: "Pellentesque velit id congue pellentesque aliquam quisque sem elit vestibulum amet sed hac et in aliquet pellentesque faucibus amet sed duis vel neque sed  ",
  },
  {
    id: 5,
    title: " Viverra tempor eget consectetur congue?  ",
    desc: " Pulvinar sagittis, in ut vitae diam ultrices vitae, tortor mi, ut neque iaculis ipsum risus rhoncus ",
  },
  {
    id: 6,
    title: "Cursus in orci tortor venenatis euismod?   ",
    desc: " Egestas ornare lacus sed ultricies diam egestas velit magna nulla pellentesque mattis ornare in elementum nam ",
  },
];

const Payment = () => {
  const products = useSelector((state) => state.shopReducer.Products);
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState("");

  // calculate SubTotal
  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total);
    });
  }, [products]);
  return (
    <div className="bg-[#CDD0D6]">
      <div className="container mx-auto ">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img className="max-w-[100px]" src={LigthLogo} alt="" />
          </Link>{" "}
        </div>

        <div className="w-full">
          <h1 className=" sm:text-2xl text-center  lg:text-5xl font-medium opacity-40 capitalize ">
            You are almost there
          </h1>
          <p className="sm:text-sm md:text-lg text-center my-7 text-gray-700">
            Adipiscing bibendum id a condimentum risus nec sed malesuada ut
            etiam egestas.
          </p>

          <div className="flex flex-col sm:flex-col md:flex-row    justify-center items-center gap-7 text-gray-500">
            <div className="flexBoxIcon">
              <SecurityIcon />
              <p>SSL secured checkout</p>
            </div>
            <div className="flexBoxIcon">
              <SupportIcon />
              <p>24/7 support available</p>
            </div>
            <div className="flexBoxIcon">
              <PaymentIcon />
              <p>Payment option</p>
            </div>
          </div>
        </div>

        <section className="border border-gray-500 my-10 w-full ">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 my-10">
            <div className=" p-4">
              <h1 className="mb-4 text-xl font-semibold">
                Customer Information
              </h1>
              <form>
                <input
                  className="w-full p-2 border border-gray-500 focus:border-[#883ee3]  outline outline-gray-200 rounded"
                  type="email"
                  placeholder="Email Address *"
                />
                <h1 className="mb-4 text-xl font-semibold mt-6">
                  Billing details
                </h1>
                <div className="flex gap-4  w-full   ">
                  <input
                    className="w-1/2 p-2 border border-gray-500  outline outline-gray-200 focus:border-[#883ee3]  rounded"
                    type="text"
                    placeholder="First Name *"
                  />
                  <input
                    className="w-1/2 p-2 border  border-gray-500  outline outline-gray-200 focus:border-[#883ee3] rounded"
                    type="text"
                    placeholder="Second Name *"
                  />
                </div>
                <input
                  type="text"
                  className="my-10 w-full p-2 border  border-gray-500 focus:border-[#883ee3]  outline outline-gray-200 rounded"
                  placeholder="Your Compony"
                />

                <select
                  className="my-5 w-full p-2 border  border-gray-500 focus:border-[#883ee3]  outline outline-gray-200 rounded"
                  name="Country"
                >
                  <option className="text-gray-800" value="">
                    Ugand
                  </option>
                  <option className="text-gray-800" value="">
                    Egypt
                  </option>
                  <option className="text-gray-800" value="">
                    Emairates
                  </option>
                  <option className="text-gray-800" value="">
                    Saudia Arabia
                  </option>
                </select>

                <div className="flex gap-4  w-full   ">
                  <input
                    className="w-1/2 p-2 border border-gray-500  outline outline-gray-200 focus:border-[#883ee3]  rounded"
                    type="text"
                    placeholder="Town / City *"
                  />
                  <input
                    className="w-1/2 p-2 border  border-gray-500  outline outline-gray-200 focus:border-[#883ee3] rounded"
                    type="text"
                    placeholder="County*"
                  />
                </div>

                <input
                  type="phone"
                  className="my-10 w-full p-2 border  border-gray-500 focus:border-[#883ee3]  outline outline-gray-200 rounded"
                  placeholder="Phone"
                />

                <h1>Additional information</h1>
                <textarea
                  className="my-5 w-full p-2 border  border-gray-500 focus:border-[#883ee3]  outline outline-gray-200 rounded"
                  name=""
                  id=""
                  cols="80"
                  placeholder="Notes About your order , e.g. spechil notes for delivery"
                ></textarea>
              </form>

              <div className="w-full bg-[#994BFB] text-white text-center rounded py-3 font-medium">
       
                <span className="text-lg ">Place Order ${totalPrice}</span>

              </div>
            </div>

            {/*Start Section Two */}
            <div className="sm:mx-0 lg:mx-10 p-4">
              <h1 className="mb-4  text-xl font-semibold">Your Order</h1>
              <div className=" flex flex-col border border-gray-300 rounded py-7 px-4">
                <div className="flex justify-between items-center font-medium">
                  <span>Product </span>
                  <span>Subtotal</span>
                </div>


                {
                  products.length > 0 ? (
                    <div className=" w-full flex flex-col justify-between items-center my-6">

                      {products.map((item) => (
                        <div className="flex justify-between items-center my-6   w-full">
                          <div>
                            <img className="w-[50px] rounded" src={item.img} alt="" />
                          </div>
                          <div>
                            <p>{item.title.substring(0, 10)}</p>
                          </div>
                            <button> {item.quantity} </button>
                          <div className="flex">
                            <button
                              onClick={() => dispatch(deleteItemInCart(item.id))}
                              type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                              Remove
                            </button>
                          </div>
                         
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-purple-700 font-medium text-center mt-10">No Product Yest</div>
                  )
                }


                <div className="flex my-9 justify-between items-center font-bold text-2xl">
                  <span>Total</span>
                  <span className="text-lg font-bold">${totalPrice}</span>


                  
                </div>
              </div>
            </div>

            {/*End Section Two */}

          </div>
        </section>

        <main className="my-10 flex flex-col   items-center ">
          <div className="text-center  font-semibold my-10">
            <h1 className="sm:text-center sm:text-[24px] sm:font-bold lg:text-4xl opacity-55">
              Frequently asked questions
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {data.map((item) => (
              <div className="  flex-wrap max-w-[500px]" key={item.id}>
                <h1 className="sm:text-md  sm:font-bold lg:text-2xl my-3 font-semibold opacity-50 capitalize">
                  {item.title}
                </h1>
                <p className="sm:text-sm lg:font-medium capitalize opacity-45 ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </main>

        <div className="w-full flex flex-col justify-center items-center text-center">
          <div className="grid grid-cols-3   gap-2">
            <span>Refund policy</span>
            <span>Privacy policy</span>
            <span>Terms of service</span>
          </div>
          <div className="mt-4">
            <p>© 2022 Yoursite. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
