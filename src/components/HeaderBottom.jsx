'use client'
import { Fragment, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { avatar, LigthLogo } from '../assets'
import { Link } from 'react-router-dom'
import navigation from './Headers/dataHedaer'
import CartSide from './CartSide'
import { useDispatch, useSelector } from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { logOut } from '../redux/shopSlice';
import { getAuth, signOut } from 'firebase/auth';
import { motion } from 'framer-motion';



export default function HeaderBottom() {
  const auth = getAuth()
  const [open, setOpen] = useState(false)
  const [profile, setProfile] = useState(false)
  const [searchAvailable, setSearchAvailable] = useState(false)
  const [language, setLanguage] = useState(false)
  const userInfo = useSelector((state) => state.shopReducer.userInfo)
  const dispatch = useDispatch()

  const handleSearchClick = () => {
    setSearchAvailable(true);
  };

  const handleCloseClick = () => {
    setSearchAvailable(false);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        dispatch(logOut())
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const toggleProfile = () => {
    setProfile(prevProfile => !prevProfile);
  };
  return (
    <div className=" bg-white sticky z-50 top-0 ">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 
          transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto
             bg-white pb-12 shadow-xl transition duration-300 ease-in-out 
             data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                          </div>
                          <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6" >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <Link to={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                               
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <Link to='/sign' className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </Link>
              </div>
              <div className="flow-root">
                <Link to='/reg' className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </Link>
              </div>
            </div>


          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop menu */}
      <header className="relative bg-white  ">

        <div className='flex h-10 items-center justify-around   bg-indigo-600 
        px-4 text-sm font-medium  sm:px-6 lg:px-8 '>
          <p className=" text-white ">
            Get free delivery on orders over $100
          </p>
          {/* ############################### */}
          {/* Language */}




          {/* Language */}
          {/* ############################### */}
        </div>


        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="hidden lg:block ml-4 flex lg:ml-0">
                <Link href="/">

                  <img
                    alt=""
                    src={LigthLogo}
                    className=" w-16  "
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <PopoverButton className="relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[state=open]:text-indigo-600">
                        {category.name}
                        <span className="absolute inset-x-0 -bottom-px z-20 h-0.5 bg-indigo-600 transition duration-200 ease-out opacity-0 data-[state=open]:opacity-100" />
                      </PopoverButton>

                      <PopoverPanel className="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500">
                        {/* MegaMenu */}
                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                        <div className="relative z-20 mx-auto max-w-7xl bg-white">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16 px-8">
                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              {category.featured.map((item) => (
                                <div key={item.name} className="group relative text-base sm:text-sm">
                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img alt={item.imageAlt} src={item.imageSrc} className="object-cover object-center" />
                                  </div>
                                  <Link href={item.href} className="mt-6 block font-medium text-gray-900">
                                    <span aria-hidden="true" className="absolute inset-0 z-10" />
                                    {item.name}
                                  </Link>
                                  <p aria-hidden="true" className="mt-1">Shop now</p>
                                </div>
                              ))}
                            </div>
                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${section.name}-heading`}
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="flex">
                                        <Link to={item.href} className="hover:text-gray-800">
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}

                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <Link key={page.name} to={page.href} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      {page.name}
                    </Link>
                  ))}

                  {/* Search */}

                </div>
              </PopoverGroup>
              {/* Search */}



              <div className="ml-auto flex items-center">
                <div className="flex flex-1 items-center justify-end space-x-6">
                  {userInfo ? (
                    <div className="text-black font-bold text-sm flex items-center">
                      <div className="cursor-pointer relative" onClick={toggleProfile}>
                        <span className="relative font-light">
                          <img
                            className="w-7 h-7 object-cover rounded-2xl"
                            src={avatar}
                            alt="User Avatar"
                          />
                          <span className="absolute left-5 top-4 flex h-2 w-2 mx-1 py-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                          </span>
                        </span>


                        {/*Start Profile dropDown */}
                        {profile && (
                          <motion.div
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}

                            className="bg-stone-200 shadow-lg border absolute z-40 right-5 my-1 w-[170px] rounded">
                            <ul className="my-3 mx-4 text-black font-medium">

                              <Link className='flex justify-between items-center text-fuchsia-600	 '>
                                <li className="cursor-pointer my-2 break-words">Your Profile</li>
                                <AccountCircleIcon className='text-blue-700 animate-bounce' />
                              </Link>

                              <Link to='/setings' className='flex justify-between items-center  text-fuchsia-600'>
                                <li className="cursor-pointer my-2 break-words">Settings</li>
                                <SettingsIcon className='text-blue-700  animate-spin' />
                              </Link>

                              <Link onClick={handleLogOut} className='flex justify-between items-center  text-fuchsia-600'>
                                <li className="cursor-pointer my-2 break-words">Sign Out</li>
                                <LogoutIcon className='text-blue-700' />
                              </Link>

                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-1 items-center justify-end space-x-6">
                      <Link
                        to="/sign"
                        className=" text-sm font-medium text-gray-400 hover:text-gray-800 transition duration-700 ease-in-out"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>

                      </Link>
                    </div>

                  )}



                  {/* Search */}

                  <div className={`  flex items-center justify-center z-10`}>
                    <button
                      onClick={handleSearchClick}
                      className="p-2 text-gray-400  "
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>

                    </button>
                    <motion.div
                      initial={{ y: '-50%', opacity: 0 }}
                      animate={{ y: searchAvailable ? '0%' : '-100%', opacity: searchAvailable ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      className="fixed top-0 right-0 w-full sm:w-1/3 bg-gray-200 shadow-xl 
                      p-4 h-[230px] flex flex-col rounded-lg"
                    >
                      <button
                        onClick={handleCloseClick}
                        className="self-end p-2 text-blue-600 font-bold hover:text-red-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="mt-4 p-2 border border-gray-300 rounded-md focus:outline-none 
                        focus:ring-2 focus:ring-blue-500"
                        placeholder="Search For Products..."
                      />

                    </motion.div>
                  </div>

                </div>







                {/* Cart components*/}
                <div>
                  <CartSide />
                  
                </div>
                {/* Cart */}


              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>

  )
}
