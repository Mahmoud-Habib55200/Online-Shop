/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import HeaderBottom from "./components/HeaderBottom.jsx";
import "./index.css";
import Home from "./pages/Home";
import Footer from "./pages/Footer.js";
import Login from "./account/Login";
import Regestration from "./account/Regestration.js";
import Settings from "./account/Settings.js";
import Glasess from "./pages/Glasess.js";
import T_Shirt from "./pages/T_Shirt.js";
import Payment from "./cart/Payment.js";
import SwitcShirt from "./pages/SwitcShirt.js";
import Jackit from "./pages/Jackit.js";
import Polo from "./pages/Polo.js";
import Pluvor from "./pages/Pluvor.js";
import Paints from "./pages/Paints.js";
import TshirtKids from "./pages/TshirtKids.js";
import Loading from "./Loading.js"; // تأكد من استيراد شاشة التحميل
import { bannerJackit, bannerPants, bannerPolo, bannerSwitShirt, bannerTshirt, glasbanner, } from "./assets/index.js";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, ScrollRestoration, } from "react-router-dom";
import {
  bags,
  dataJackit, dataPaints, dataPluvor, dataPolo, dataSwitShirt, GlaseseData, hates, JensWom, mekaup, paintstWom, poloKids, ShirtsKids, SkinCare,
  Skinhair, SmartWatchMen, smartWom, SweetPaints, SwitWom, T_ShirtData, TshirstKids, tshirtWom,
} from "./constant/data.js";
import ShirtKids from "./pages/ShirtKids.js";
import PoloKidss from "./pages/PoloKidss.js";
import SweetPants from "./pages/SweetPants.js";
import SmartMen from "./pages/SmartMen.js";
import SkinKare from './pages/SkinKare';
import HairCare from "./pages/HairCare.js";
import Mekaup from "./pages/Mekaup.js";
import Componey from './components/Componey';
import JensWommen from "./pages/JensWommen.js";
import ShirtWommen from "./pages/ShirtWommen.js";
import PaintWommen from "./pages/PaintWommen.js";
import SwitShirtWomman from "./pages/SwitShirtWomman.js";
import SmartWommen from "./pages/SmartWommen.js";
import Bags from "./pages/Bags.js";
import Hats from "./pages/Hats.js";
 
const Layout = () => {
  return (
    <div>
      <HeaderBottom />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // تشغيل شاشة التحميل لمدة 3 ثواني
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // مدة التحميل

    return () => clearTimeout(timer); // تنظيف التايمر عند تدمير المكون
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/sign" element={<Login />}></Route>
          <Route path="/reg" element={<Regestration />}></Route>
          <Route path="/setings" element={<Settings />}></Route>
          <Route path="/compony" element={<Componey />}></Route>
          <Route path="/glass" element={<Glasess data={GlaseseData} banner={glasbanner} title="Glasess For Wommen" />} />
          <Route path="/t-shirt" element={<T_Shirt data={T_ShirtData} banner={bannerTshirt} title="MENS T-SHIRTS" />} />
          <Route path="/switShirt" element={<SwitcShirt dataa={dataSwitShirt} bannerSwit={bannerSwitShirt} title="Men's Hoodies & Sweatshirts" />} />
          <Route path="/jackit" element={<Jackit data={dataJackit} bannerJackit={bannerJackit} title="Men's Jackets" />} />{" "}
          <Route path="/polo" element={<Polo data={dataPolo} bannerPolo={bannerPolo} title="Men's Polo Shirts" />} />
          <Route path="/pluvor" element={<Pluvor data={dataPluvor} bannerPlover={dataPluvor} title="Men's Pullovers" />} />
          <Route path="/paints" element={<Paints data={dataPaints} bannerPlover={bannerPants} title="Men's Pants" />} />
          <Route path="/tshirt" element={<TshirtKids data={TshirstKids} title='Kids T-shirts' />} />
          <Route path="/shirtKids" element={<ShirtKids data={ShirtsKids} title='Kids Shirts' />} />
          <Route path="/poloKids" element={<PoloKidss data={poloKids} title='Kids Polo Shirts' />} />
          <Route path="/sweetPants" element={<SweetPants data={SweetPaints} title='Mens SweatPants' />} />
          <Route path="/smart" element={<SmartMen data={SmartWatchMen} title='Smart Watch For Men ' />} />
          <Route path="/skin" element={<SkinKare data={SkinCare} title='Skin Care' />} />
          <Route path="/hair" element={<HairCare data={Skinhair} title='Hair Care' />} />
          {/* Start Data For Wommen */}
          <Route path="/mekaup" element={<Mekaup data={mekaup} title='Mekaup For Wommen' />} />
          <Route path="/jensWommen" element={<JensWommen data={JensWom} title='Jeans For Wommen' />} />
          <Route path="/shirtWommen" element={<ShirtWommen data={tshirtWom} title='T-Shirt For Wommen' />} />
          <Route path="/paintsWommen" element={<PaintWommen data={paintstWom} title='Paints For Wommen' />} />
          <Route path="/switShirtWommen" element={<SwitShirtWomman data={SwitWom} title='Swit-Shirt For Wommen' />} />
          <Route path="/smartWatchWommen" element={<SmartWommen data={smartWom} title='Swit-Shirt For Wommen' />} />
          <Route path="/bags" element={<Bags data={bags} title='Bags For Wommen' />} />
          <Route path="/hats" element={<Hats data={hates} title='Hats For Wommen' />} />
        
        </Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Route>
    )
  );

  return (

    <div className="bg-dark">

      {isLoading ? (
        <Loading /> // عرض شاشة التحميل أثناء تحميل البيانات
      ) : (
        <RouterProvider router={router}>

        </RouterProvider> // عرض المحتوى بعد انتهاء التحميل
      )}
    </div>
  );
};

export default App;
