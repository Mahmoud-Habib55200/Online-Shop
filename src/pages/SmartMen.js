/* eslint-disable react/jsx-pascal-case */
import T_Shirt from './T_Shirt';
 
const SmartMen = ({ data, title }) => {
    return (
        <T_Shirt
            data={data}
            title={title}
      imageSize="w-full h-[300px] " // حجم الصورة مع object-cover في الشاشات الصغيرة وobject-auto في الشاشات الكبيرة
        />
    );
};

export default SmartMen;
