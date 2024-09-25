/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import T_Shirt from './T_Shirt'

const JensWommen = ({title , data }) => {
  return (
      <T_Shirt
          data={data}
          title={title}
          imageSize="w-full h-[300px] object-cover "
      />
  )
}

export default JensWommen