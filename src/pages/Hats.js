/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import T_Shirt from './T_Shirt'

const Hats = ({ data, title }) => {
    return (
        <T_Shirt data={data} title={title} imageSize='w-full  h-[260px]' />
    )
}

export default Hats