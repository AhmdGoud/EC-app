import ShoppingCart from "./ShoppingCart";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="lg:col-span-2">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
