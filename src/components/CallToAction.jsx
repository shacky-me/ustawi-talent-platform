const CallToAction = () => {
  return (
    <section className="relative isolate">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="absolute inset-0 -z-10 opacity-[0.06] bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500" />
          <div className="px-8 py-12 lg:px-12 lg:py-14">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Join the Ustawi community
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base">
                Sell your work, follow artists you love, and build your
                collection.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="/sell"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Start selling
                </a>
                <a
                  href="/explore"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:border-slate-400"
                >
                  Explore artworks
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
