import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../Utils/cardSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = (item.card.info.price || item.card.info.defaultPrice) / 100;
      const quantity = item.quantity || 1;
      return total + price * quantity;
    }, 0);
  };

  const handleBuyNow = () => {
    setShowSuccess(true);
    dispatch(clearCart());

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto text-center my-12 font-sans bg-gray-100 rounded-xl relative">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>

      {showSuccess && (
        <div className="absolute top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-lg shadow-lg animate-bounce z-50">
          <strong className="font-bold">✅ Purchase Successful!</strong>
          <p>Thanks for your order.</p>
        </div>
      )}

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => {
            const { name, imageId, price, defaultPrice } = item.card.info;
            const quantity = item.quantity || 1;
            const itemPrice = (price || defaultPrice) / 100;
            const total = itemPrice * quantity;

            return (
              <div
                key={`${item.card.info.id}-${index}`}
                className="flex items-center justify-between bg-gray-50 border p-4 mb-4 rounded-lg shadow-2xl"
              >
                <div className="w-24 h-24 overflow-hidden rounded">
                  <img
                    src={
                      imageId
                        ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_200,c_fit/${imageId}`
                        : "https://via.placeholder.com/100"
                    }
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-left flex-1 px-4">
                  <h2 className="font-bold text-lg">{name}</h2>
                  <p className="text-sm text-gray-700">₹{itemPrice} each</p>
                  <p className="text-sm font-semibold text-gray-800">
                    Quantity: {quantity}
                  </p>
                  <p className="text-sm font-bold text-green-600">
                    Total: ₹{total.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button
                    onClick={() => dispatch(addItem(item))}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeItem(item))}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              Total Amount: ₹{getTotalAmount().toFixed(2)}
            </h2>
            <button
              onClick={handleBuyNow}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              🛍️ Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
