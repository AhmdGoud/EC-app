const categories = [
  {
    name: "All Products",
    description: "Browse the full collection.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "New Arrivals",
    description: "Fresh drops for today.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Featured",
    description: "Curated styles you’ll love.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sale",
    description: "Shop the best offers.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=500&q=80",
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Browse
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Shop by collection
          </h2>
        </div>
        <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
          View all categories
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
