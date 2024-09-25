import React, { useEffect, useState, useRef } from 'react';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteItemInCart, incrementQuantity } from '../redux/shopSlice';

const CartSide = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.shopReducer.Products);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [totalPrice, setTotalPrice] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // =================================
  // calculate SubTotal
  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total);
    });
  }, [products]);
  // =================================

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('bg-gray-400', 'bg-opacity-50');
    } else {
      document.body.classList.remove('bg-gray-400', 'bg-opacity-50');
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative ml-4 flow-root lg:ml-6">
      <div onClick={toggleSidebar} className="group -m-2 flex items-center p-2 cursor-pointer">
        <ShoppingBagIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {products.length > 0 ? products.length : 0}
        </span>
      </div>



      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.5 }}
            className="fixed top-0 right-0 w-full 2xl:w-[450px] lg:w-[450px] md:w-[450px] sm:w-[300px] xs:w-[300px] h-full bg-white shadow-lg z-50"
          >
            <button onClick={toggleSidebar} className="absolute top-2 right-2">
              <CloseSharpIcon aria-hidden="true" className="h-6 w-6 text-gray-400 hover:text-gray-500" />
            </button>
            <div className="p-4 h-full flex flex-col">
              <h2 className="text-lg font-medium">Shopping cart</h2>
              <div className="flex-1 overflow-y-auto">
                {products.length > 0 ? (
                  <ul role="list" className="-my-6 divide-y divide-gray-200 my-4">
                    {products.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src={item.img} alt="image-Products" className="h-full w-full object-cover object-center" />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col ">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <Link href="#">{item.title.substring(0, 10)}</Link>
                              </h3>
                              <p className="ml-4 text-lg font-bold">${item.price}</p>
                            </div>
                          </div>

                          {/* Start Div Increase Quantity */}
                          <div className="flex flex-1 items-center justify-between text-sm">
                            <p className="text-gray-500">Qty </p>
                            {/* <AddItem /> */}
                            <div className='flex gap-5 text-2xl'>
                              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                              <button> {item.quantity} </button>
                              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                            </div>
                            <div className="flex">
                              <button
                                onClick={() => dispatch(deleteItemInCart(item.id))}
                                type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Remove
                              </button>
                            </div>
                          </div>

                          {/*End Div Increase Quantity */}

                          {/* Start Div Discount */}
                          <div className='flex items-start justify-between'>
                            <span className='text-gray-500'>
                              Total Price:
                            </span>
                            <div className="">
                              <p className="text-lg font-bold">
                                ${item.price * item.quantity}
                              </p>
                            </div>
                          </div >
                          {/* End Div Discount */}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500"> The Cart is Currently Empty </p>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <span className="text-lg font-bold">${totalPrice}</span>

                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <Link
                    to="/payment"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <Link to='/' type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Continue Shhoping
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartSide;
