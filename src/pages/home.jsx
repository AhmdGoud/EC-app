import Navbar from "../components/layouts/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Products from "../components/home/Products";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layouts/Footer";

function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
