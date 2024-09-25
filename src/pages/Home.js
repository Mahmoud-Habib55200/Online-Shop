import React from "react";
import Products from "../Home/Products";
import Banner from "./Banner";
import Categ from "./Categ";
import { useSelector } from "react-redux";
 import BabyKids from "./BabyKids";
import NewArrivals from "./NewArrivals";
import { imageList } from "./dataCategoey";
import { glasesCategory } from "../constant/data";
import VideopPlayer from "../components/VideopPlayer";
import BigBanner from "./BigBanner";

const Home = () => {
  const user = useSelector((state) => state.shopReducer.userInfo);

  return (
    <div className="scroll-smooth">
      <Banner />
      {user ? (
        <div>
          <VideopPlayer />
          <Categ items={imageList} images={glasesCategory} />
          <BigBanner/>
          <BabyKids />
          <NewArrivals />
        </div>
      ) : (
        <div>
            <Products />
            
        </div>
      )}
    </div>
  );
};

export default Home;
