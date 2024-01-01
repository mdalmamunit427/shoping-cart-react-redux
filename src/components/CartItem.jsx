/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/carts/actions";
import { addQuantity, removeQuantity } from "../redux/products/actions";
import { IoMdClose } from "react-icons/io";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, imgUrl, quantity, category, price, productId } = product;

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
    dispatch(addQuantity(productId, quantity));
  };

  if (quantity === 0) {
    handleRemoveFromCart();
  }

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
    dispatch(removeQuantity(productId));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
    dispatch(addQuantity(productId, 1));
  };
  return (
    <div>
       <div className="rounded-lg">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src={imgUrl}
                alt="product-image"
                className="w-full h-28 rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">

                {/* product details */}
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-700">Price: ${price}</p>
                  <p className="mt-1 text-sm text-gray-700">Category: ${category}</p>
                </div>

                  {/* add & minus quantity */}
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={handleDecreaseQuantity}>
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={quantity}
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"  onClick={handleIncreaseQuantity}>
                  
                      +
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">${price * quantity}</p>
                  
                    <button className="lws-removeFromCart" onClick={handleRemoveFromCart}>
                    <IoMdClose />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default CartItem;
