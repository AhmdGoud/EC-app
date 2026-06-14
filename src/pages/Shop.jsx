import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import products from "../data/products.json";
import ProductCard from "../components/products/ProductCard";

function Shop() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              All products
            </p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">
              Shop our collection
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Discover our full range of quality products handpicked for style
              and comfort.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Shop;
