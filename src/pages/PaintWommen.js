/* eslint-disable react/jsx-pascal-case */
import T_Shirt from "./T_Shirt"



const PaintWommen = ({ title, data }) => {
    return (
        <T_Shirt
            data={data}
            title={title}
            imageSize="w-full h-[350px] object-cover "     // تعديل الحجم ليكون أصغر
        />
    );
}

export default PaintWommen