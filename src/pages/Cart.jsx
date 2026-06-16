import Cart from "../components/cart/Cart";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const CartPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Cart />
      </main>
      <Footer />
    </>
  );
};
export default CartPage;
