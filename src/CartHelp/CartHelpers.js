import { addToCart } from '../redux/shopSlice';

export const handleAddToCart = (
    item,
    cart,
    dispatch,
    setLoadingState, // استخدم setLoadingState لإدارة حالة التحميل لكل منتج
    setAlertMessage,
    setAlertType
) => {
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);

    // تفعيل حالة التحميل لهذا المنتج فقط
    setLoadingState((prevState) => ({ ...prevState, [item.id]: true }));

    setTimeout(() => {
        if (isItemInCart) {
            setAlertMessage("Product already in cart!");
            setAlertType("error");
        } else {
            dispatch(
                addToCart({
                    id: item.id,
                    img: item.img,
                    title: item.title,
                    price: item.price,
                    quantity: 1,
                })
            );
            setAlertMessage("Product added to cart successfully!");
            setAlertType("success");
        }

        // إيقاف حالة التحميل لهذا المنتج فقط
        setLoadingState((prevState) => ({ ...prevState, [item.id]: false }));

        setTimeout(() => {
            setAlertMessage("");
        }, 3000);
    }, 500);
};
