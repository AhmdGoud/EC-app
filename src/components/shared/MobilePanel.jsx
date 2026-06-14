function MobilePanel() {
  return (
    <>
      <div className="absolute left-0 right-0 top-full z-40 mt-2 rounded-b-lg bg-white shadow-md md:hidden">
        <div className="px-4 py-4">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a
              href="#home"
              className="block rounded-md px-2 py-2 hover:bg-slate-50"
            >
              Home
            </a>
            <a
              href="#shop"
              className="block rounded-md px-2 py-2 hover:bg-slate-50"
            >
              Shop
            </a>
            <a
              href="#contact"
              className="block rounded-md px-2 py-2 hover:bg-slate-50"
            >
              Contact
            </a>
          </nav>

          <div className="mt-3">
            <form role="search" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="mobile-search" className="sr-only">
                Search products
              </label>
              <div className="relative">
                <input
                  id="mobile-search"
                  type="search"
                  placeholder="Search products..."
                  className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                />
              </div>
            </form>
          </div>

          <div className="mt-3 flex gap-2">
            <button className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Sign in
            </button>
            <button className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobilePanel;
