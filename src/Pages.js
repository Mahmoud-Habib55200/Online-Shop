import { bannerSwitShirt, bannerTshirt } from "./assets";
import { dataSwitShirt, T_ShirtData } from "./constant/data";

export const pagesData = {
  tShirt: {
    data: T_ShirtData,
    banner: bannerTshirt,
    title: "MENS T-SHIRTS",
  },
  switShirt: {
    data: dataSwitShirt,
    banner: bannerSwitShirt,
    title: "Men's Hoodies & Sweatshirts",
  },
 
};

export default pagesData