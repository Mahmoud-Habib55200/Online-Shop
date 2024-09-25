import React, { useState } from "react";
import { Minuis, Plus } from "./icon";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../redux/shopSlice";

const AddItem = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shopReducer.Products);
  const [clickedItemId, setClickedItemId] = useState(null); // state to track which item was clicked

  const handleIncrement = (id) => {
    setClickedItemId(id); // set the clicked item ID
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    setClickedItemId(id); // set the clicked item ID
    dispatch(decrementQuantity(id));
  };

  return (
    <div className="flex justify-center items-center gap-4">
      {products.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <button
            onClick={() => handleIncrement(item.id)}
            className="font-semibold"
          >
            <Plus />
          </button>
          <button type="button" className="text-xl -tracking-widest">
            {item.quantity} {/* تأكد من أنك تستخدم item.quantity */}
          </button>
          <button
            onClick={() => handleDecrement(item.id)}
            className="font-semibold"
          >
            <Minuis />
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddItem;
