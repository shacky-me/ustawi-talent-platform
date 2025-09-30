import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative isolate">
      {/* Background decorative gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[38rem] w-[80rem] rounded-full blur-3xl" />
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
            {[
              "https://images.unsplash.com/photo-1594794312433-05a69a98b7a0?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?q=80&w=1200&auto=format&fit=crop",
              "http://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1567162020871-8292cd07ccae?q=80&w=1200&auto=format&fit=crop",
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <Image
                  src={src}
                  alt="Artwork preview"
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                  priority={idx < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
