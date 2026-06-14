function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">EC-Store</h3>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Discover unique products that inspire your lifestyle. Quality
              craftsmanship meets modern design.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Shop
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>All Products</li>
              <li>New Arrivals</li>
              <li>Featured</li>
              <li>Sale</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact
            </p>
            <p className="mt-4 text-sm text-slate-300">123 Fashion Street</p>
            <p className="text-sm text-slate-300">hello@ec-store.com</p>
            <p className="text-sm text-slate-300">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © 2026 EC-Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
