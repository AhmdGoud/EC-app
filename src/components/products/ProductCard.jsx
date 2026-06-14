import { useState } from "react";
import ProductModal from "./ProductModal";

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md group">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="absolute inset-0 flex items-start justify-end p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        <button
          onClick={() => setIsModalOpen(true)}
          className="pointer-events-auto rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-white"
        >
          More details
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{product.tags?.[0]}</span>
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
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold transition ${isWishlisted ? "bg-red-600 text-white" : "border bg-white text-slate-700 hover:bg-slate-100"}`}
          >
            ♥
          </button>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        product={product}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default ProductCard;
