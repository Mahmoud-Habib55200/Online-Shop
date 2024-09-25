/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import HeaderBottom from "./components/HeaderBottom";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./account/Login";
import Registration from "./account/Regestration";
import Settings from "./account/Settings";
import Glasess from "./pages/Glasess";
import T_Shirt from "./pages/T_Shirt";
import Payment from "./cart/Payment";
import SwitcShirt from "./pages/SwitcShirt";
import Jackit from "./pages/Jackit";
import Polo from "./pages/Polo";
import Pluvor from "./pages/Pluvor";
import Paints from "./pages/Paints";
import TshirtKids from "./pages/TshirtKids";
import Loading from "./Loading"; // تأكد من استيراد شاشة التحميل
import {
  bannerJackit,
  bannerPants,
  bannerPolo,
  bannerSwitShirt,
  bannerTshirt,
  glasbanner,
} from "./assets/index";
import {
  bags,
  dataJackit,
  dataPaints,
  dataPluvor,
  dataPolo,
  dataSwitShirt,
  GlaseseData,
  hates,
  JensWom,
  mekaup,
  paintstWom,
  poloKids,
  ShirtsKids,
  SkinCare,
  Skinhair,
  SmartWatchMen,
  smartWom,
  SweetPaints,
  SwitWom,
  T_ShirtData,
  TshirstKids,
  tshirtWom,
} from "./constant/data";
import ShirtKids from "./pages/ShirtKids";
import PoloKidss from "./pages/PoloKidss";
import SweetPants from "./pages/SweetPants";
import SmartMen from "./pages/SmartMen";
import SkinKare from "./pages/SkinKare";
import HairCare from "./pages/HairCare";
import Mekaup from "./pages/Mekaup";
import Componey from "./components/Componey";
import JensWommen from "./pages/JensWommen";
import ShirtWommen from "./pages/ShirtWommen";
import PaintWommen from "./pages/PaintWommen";
import SwitShirtWomman from "./pages/SwitShirtWomman";
import SmartWommen from "./pages/SmartWommen";
import Bags from "./pages/Bags";
import Hats from "./pages/Hats";

const Layout = () => (
  <div>
    <HeaderBottom />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // تشغيل شاشة التحميل لمدة 3 ثواني
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // مدة التحميل

    return () => clearTimeout(timer); // تنظيف التايمر عند تدمير المكون
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/sign" element={<Login />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/compony" element={<Componey />} />
        <Route path="/glass" element={<Glasess data={GlaseseData} banner={glasbanner} title="Glasess For Wommen" />} />
        <Route path="/t-shirt" element={<T_Shirt data={T_ShirtData} banner={bannerTshirt} title="MENS T-SHIRTS" />} />
        <Route path="/switShirt" element={<SwitcShirt dataa={dataSwitShirt} bannerSwit={bannerSwitShirt} title="Men's Hoodies & Sweatshirts" />} />
        <Route path="/jackit" element={<Jackit data={dataJackit} bannerJackit={bannerJackit} title="Men's Jackets" />} />
        <Route path="/polo" element={<Polo data={dataPolo} bannerPolo={bannerPolo} title="Men's Polo Shirts" />} />
        <Route path="/pluvor" element={<Pluvor data={dataPluvor} bannerPlover={dataPluvor} title="Men's Pullovers" />} />
        <Route path="/paints" element={<Paints data={dataPaints} bannerPlover={bannerPants} title="Men's Pants" />} />
        <Route path="/tshirt" element={<TshirtKids data={TshirstKids} title='Kids T-shirts' />} />
        <Route path="/shirtKids" element={<ShirtKids data={ShirtsKids} title='Kids Shirts' />} />
        <Route path="/poloKids" element={<PoloKidss data={poloKids} title='Kids Polo Shirts' />} />
        <Route path="/sweetPants" element={<SweetPants data={SweetPaints} title='Mens SweatPants' />} />
        <Route path="/smart" element={<SmartMen data={SmartWatchMen} title='Smart Watch For Men' />} />
        <Route path="/skin" element={<SkinKare data={SkinCare} title='Skin Care' />} />
        <Route path="/hair" element={<HairCare data={Skinhair} title='Hair Care' />} />
        {/* Start Data For Wommen */}
        <Route path="/mekaup" element={<Mekaup data={mekaup} title='Mekaup For Wommen' />} />
        <Route path="/jensWommen" element={<JensWommen data={JensWom} title='Jeans For Wommen' />} />
        <Route path="/shirtWommen" element={<ShirtWommen data={tshirtWom} title='T-Shirt For Wommen' />} />
        <Route path="/paintsWommen" element={<PaintWommen data={paintstWom} title='Paints For Wommen' />} />
        <Route path="/switShirtWommen" element={<SwitShirtWomman data={SwitWom} title='Swit-Shirt For Wommen' />} />
        <Route path="/smartWatchWommen" element={<SmartWommen data={smartWom} title='Smart Watch For Wommen' />} />
        <Route path="/bags" element={<Bags data={bags} title='Bags For Wommen' />} />
        <Route path="/hats" element={<Hats data={hates} title='Hats For Wommen' />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    )
  );

  return (
    <div className="bg-dark">
      {isLoading ? (
        <Loading /> // عرض شاشة التحميل أثناء تحميل البيانات
      ) : (
        <RouterProvider router={router} /> // عرض المحتوى بعد انتهاء التحميل
      )}
    </div>
  );
};

export default App;
