/* eslint-disable react/jsx-pascal-case */
import T_Shirt from "./T_Shirt"

 
const ShirtWommen = ({data , title}) => {
  return (
      <T_Shirt
          data={data}
          title={title}
          imageSize="w-full h-[300px] object-cover "  
      />
  )
}

export default ShirtWommen