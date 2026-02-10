import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between border-b pb-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          Your Cart
        </h1>

        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 cursor-pointer"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Cart Content */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg font-medium text-gray-700">
            Your cart is empty
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Add items to see them here
          </p>
        </div>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
