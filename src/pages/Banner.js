import React from "react";
import Slider from "react-slick";
import { banner1, banner2, banner3, banner4 } from "../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="banner" />
        </div>
        <div>
          <img src={banner2} alt="banner" />
        </div>
        <div>
          <img src={banner3} alt="banner" />
        </div>
        <div>
          <img src={banner4} alt="banner" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
