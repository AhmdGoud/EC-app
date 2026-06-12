import products from "../../data/products.json";

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
          <div
            key={product.id}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={`../../${product.image}`}
              alt={product.name}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>{product.tags[0]}</span>
                <span className="font-semibold text-slate-900">
                  ${product.price}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {product.description}
              </p>
              <button className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
