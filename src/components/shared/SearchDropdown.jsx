import { Link } from "react-router-dom";

function SearchDropdown({ items, searchQuery, onClose }) {
  if (!searchQuery.trim() || items.length === 0) {
    return null;
  }

  return (
    <div className="absolute left-1/2 top-full z-50 mt-1 w-full max-w-xl -translate-x-1/2 rounded-lg border border-slate-200 bg-white shadow-lg">
      <div className="max-h-96 overflow-y-auto">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/products?id=${item.id}`}
            onClick={onClose}
            className="flex items-center gap-3 border-b border-slate-100 px-4 py-3 transition hover:bg-slate-50"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-12 w-12 rounded object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                {item.name}
              </p>
              <p className="text-xs text-slate-500">{item.category}</p>
            </div>
            <p className="text-sm font-semibold text-slate-900">
              ${item.price.toFixed(2)}
            </p>
          </Link>
        ))}
      </div>
      <div className="border-t border-slate-100 px-4 py-2 text-center">
        <Link
          to="/products"
          onClick={onClose}
          className="text-sm font-semibold text-slate-600 transition hover:text-slate-900"
        >
          View all results
        </Link>
      </div>
    </div>
  );
}

export default SearchDropdown;
