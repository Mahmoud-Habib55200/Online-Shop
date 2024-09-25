import React from 'react'
import T_Shirt from './T_Shirt'

const Bags = ({ data, title }) => {
    return (

        <T_Shirt data={data} title={title} imageSize='w-full h-[300px] ' />
    )
}

export default Bags