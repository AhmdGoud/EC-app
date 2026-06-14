import { createPortal } from "react-dom";

function ProductModal({ isOpen, product, onClose }) {
  if (!isOpen) return null;

  const stars = Math.round(product.rating ?? 0);
  const starElements = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < stars ? "text-amber-400" : "text-slate-300"}
    >
      ★
    </span>
  ));

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-6 sm:px-6 sm:py-8">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[calc(100vh-3rem)] overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
        <div className="flex flex-col gap-6 p-5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Product details
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                {product.name}
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                {product.description}
              </p>
            </div>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-200"
            >
              Close
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Price</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    {product.currency ? `${product.currency} ` : ""}
                    {product.price}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-slate-50 p-5 shadow-sm">
                  <p className="text-sm text-slate-500">Stock</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    {product.stock ?? "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.5rem] bg-slate-50 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Rating</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-base font-semibold text-slate-900">
                  <div className="flex text-amber-400">{starElements}</div>
                  <span className="text-sm text-slate-500">
                    {product.rating ?? "N/A"} ({product.reviews ?? 0} reviews)
                  </span>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Category</p>
                <p className="mt-2 text-base font-medium text-slate-800">
                  {product.category || "N/A"}
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Tags</p>
                <p className="mt-2 text-base font-medium text-slate-800">
                  {(product.tags || []).join(", ") || "N/A"}
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Colors</p>
                <p className="mt-2 text-base font-medium text-slate-800">
                  {(product.colors || []).join(", ") || "N/A"}
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-slate-50 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Sizes</p>
                <p className="mt-2 text-base font-medium text-slate-800">
                  {(product.sizes || []).join(", ") || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ProductModal;
