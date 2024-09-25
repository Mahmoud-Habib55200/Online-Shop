/* eslint-disable react/jsx-pascal-case */
 import T_Shirt from './T_Shirt'

const HairCare = ({title , data }) => {
  return (
      <T_Shirt
          data={data}
          title={title}
          imageSize="w-full    "
      />
  )
}

export default HairCare