import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
 

const Loading = () => {
    const user = useSelector((state) => state.shopReducer.userInfo);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#bfbaba00] bg-opacity-80 z-50">
            {user ? (
                <div className="text-center text-dark">
                    <ScaleLoader color='aqua' />
                    <div className="loader"></div>
                    <p className="text-xl text-[#1e1b4b] font-medium mb-4">   Online Shop</p>



                </div>
            ) : (
                <div className="text-center text-dark">
                    <p className="text-xl mb-4">Loading... Please sign up to enjoy all features!</p>
                    <p className="text-xl mb-4">جاري التحميل... يرجى التسجيل للاستمتاع بجميع الميزات!</p>
                    <ScaleLoader color='aqua' />
                    <div className="loader"></div>
                    <p className="text-xl text-[#2dd4bf] font-medium mb-4">    Mahmoud Habib </p>

                         
           
 
                </div>
            )}
        </div>
    );
};

export default Loading;
