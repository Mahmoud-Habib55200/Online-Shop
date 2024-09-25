/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import T_Shirt from './T_Shirt'

const Glasess = ({ data, title, banner }) => {
  return (
    <T_Shirt
      banner={banner}
      data={data}
      title={title}
      imageSize="w-full h-[300px] " // حجم الصورة مع object-cover في الشاشات الصغيرة وobject-auto في الشاشات الكبيرة
    />
  )
}

export default Glasess