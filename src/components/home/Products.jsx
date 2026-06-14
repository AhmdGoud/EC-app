import products from "../../data/products.json";
import ProductCard from "../products/ProductCard";

function Products() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Featured products
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Top picks for you
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
