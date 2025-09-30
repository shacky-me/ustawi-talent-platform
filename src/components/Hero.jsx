const Hero = () => {
  return (
    <section className="relative isolate">
      {/* Background decorative gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[38rem] w-[80rem] rounded-full bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 opacity-[0.08] blur-3xl" />
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Content */}
        <div className="pt-28 lg:pt-36 pb-16 lg:pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium tracking-widest uppercase text-slate-600">
              Ustawi Gallery
            </span>

            <h1 className="mt-5 text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-extrabold tracking-tight text-slate-900">
              Where Art Thrives
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              Discover and collect exceptional works from talented artists.
              Ustawi is a curated destination where creativity flourishes and
              collectors find their next masterpiece.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/explore"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Artworks
              </a>
              <a
                href="/sell"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:border-slate-400"
              >
                Become a Seller
              </a>
            </div>
          </div>

          {/* Showcase card strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="aspect-[4/5] rounded-2xl bg-[url('/globe.svg')] bg-center bg-no-repeat bg-white border border-slate-200" />
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-100 to-white border border-slate-200" />
            <div className="aspect-[4/5] rounded-2xl bg-[url('/window.svg')] bg-center bg-no-repeat bg-white border border-slate-200" />
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-white to-slate-100 border border-slate-200" />
            <div className="aspect-[4/5] rounded-2xl bg-[url('/file.svg')] bg-center bg-no-repeat bg-white border border-slate-200" />
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-100 to-white border border-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
