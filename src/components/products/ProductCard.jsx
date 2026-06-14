function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{product.tags[0]}</span>
          <span className="font-semibold text-slate-900">${product.price}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.description}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <button className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
            Add to cart
          </button>
          <button className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
