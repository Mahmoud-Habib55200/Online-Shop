import React from 'react'
 import { bigBanner } from '../assets'
import { motion } from 'framer-motion';

const BigBanner = () => {
  return (
    <div className="w-full overflow-hidden"> {/* لضمان عدم تجاوز الصورة حواف العنصر الأب */}
      <motion.img
        loading='lazy'
        className="w-full object-cover hover:brightness-90 transition-all ease-out"
        src={bigBanner}

        alt=""
        whileHover={{ scale: 1.1 }}  // تكبير الصورة بنسبة 10% عند التحويم
        whileTap={{ scale: 0.95 }}   // تقليل الحجم قليلاً عند الضغط على الصورة
        transition={{
          type: "spring",  // استخدام نوع التحريك "spring" لجعل التحريك أكثر طبيعية
          stiffness: 100,  // ضبط قوة النابض
          damping: 40,     // تقليل التذبذب 
          duration: 0.5    // مدة الانتقال
        }}
      />
    </div>
  )
}

export default BigBanner