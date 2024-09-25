import React from 'react'
import T_Shirt from './T_Shirt'

const SweetPants = ({data , title}) => {
  return (
      <div className="container mx-auto">

          <div className="text-center my-10 text-3xl font-semibold">
              <h1>{title}</h1>
              <div className="text-sm">
                  <T_Shirt data={data} />
              </div>
          </div>
      </div>
  )
}

export default SweetPants