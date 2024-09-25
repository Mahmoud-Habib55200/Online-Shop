/* eslint-disable react/jsx-pascal-case */
import React from "react";
import T_Shirt from "./T_Shirt"; // استدعاء الكومبوننت الأساسية

const SwitcShirt = ({ dataa, bannerSwit, title }) => {
  return (
    <T_Shirt
      data={dataa}
      banner={bannerSwit}
      title={title}

    />
  );
};

export default SwitcShirt;
