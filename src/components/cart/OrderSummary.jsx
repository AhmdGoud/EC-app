import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cartSlice";
import { useToast } from "../shared/Toast";

function OrderSummary({ total, itemCount }) {
  const dispatch = useDispatch();

  const showToast = useToast();

  const shipping = total > 100 ? 0 : 5;
  const grandTotal = total + shipping;

  const handleSubmit = (e) => {
    showToast("Order placed successfully!", "placed");
    dispatch(clearCart());
  };

  return (
    <div className="rounded-3xl h-fit border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Order summary</h3>

      <div className="mt-4 space-y-3 text-sm text-slate-600">
        <div className="flex items-center justify-between">
          <span>Items</span>
          <span>{itemCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900">
          <span>Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        type="submit"
        onClick={() => handleSubmit()}
        disabled={itemCount === 0}
        className="w-full rounded-xl bg-slate-900 mt-2 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Place order
      </button>
    </div>
  );
}

export default OrderSummary;
