"use client";

const Footer = () => {
  return (
    <footer className="relative isolate border-t border-slate-200/70 bg-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-40 right-1/2 translate-x-1/2 h-[36rem] w-[70rem] rounded-full bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-500 opacity-[0.06] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900">
                  Ustawi
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                  Gallery
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 max-w-sm">
              A curated destination where creativity flourishes and collectors
              find their next masterpiece.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="/explore"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Artworks
                </a>
              </li>
              <li>
                <a
                  href="/artists"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Artists
                </a>
              </li>
              <li>
                <a
                  href="/collections"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/sell"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Sell Art
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/stories"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Stories
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-900">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-slate-600">
              Get curated highlights and stories in your inbox.
            </p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@domain.com"
                className="w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-slate-400"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ustawi Gallery. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="/terms" className="hover:text-slate-700 transition-colors">
              Terms
            </a>
            <span aria-hidden>•</span>
            <a
              href="/privacy"
              className="hover:text-slate-700 transition-colors"
            >
              Privacy
            </a>
            <span aria-hidden>•</span>
            <a
              href="/cookies"
              className="hover:text-slate-700 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
