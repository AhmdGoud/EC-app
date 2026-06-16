import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../store/cartSlice";

function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">
        Shopping cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-slate-500 py-16">
          Your cart is empty. Add products from the shop to begin.
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 p-4 sm:flex-row sm:items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded-2xl object-cover"
              />

              <div className="flex-1">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                <p className="mt-3 text-sm text-slate-700">
                  ${item.price.toFixed(2)} each
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(
                        updateQuantity({ productId: item.id, delta: -1 }),
                      )
                    }
                    className="h-8 w-8 rounded-full bg-white text-slate-900 shadow-sm transition hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="min-w-[2rem] text-center font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(updateQuantity({ productId: item.id, delta: 1 }))
                    }
                    className="h-8 w-8 rounded-full bg-white text-slate-900 shadow-sm transition hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>

                <p className="text-sm font-semibold text-slate-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-sm font-semibold text-red-600 transition hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="rounded-3xl bg-slate-50 p-5">
            <div className="flex items-center justify-between text-lg font-semibold text-slate-900">
              <span>Estimated total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
