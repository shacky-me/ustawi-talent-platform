import Image from "next/image";

const CuratedCollections = () => {
  const collections = [
    {
      title: "Contemporary Minimal",
      href: "/collections/minimal",
      accent: "from-slate-900 via-slate-700 to-slate-500",
      image:
        "https://images.unsplash.com/photo-1730646315525-093dcd342bcf?w=1400&auto=format&fit=crop",
    },
    {
      title: "Abstract Forms",
      href: "/collections/abstract",
      accent: "from-rose-500 via-fuchsia-500 to-indigo-500",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "Figurative Classics",
      href: "/collections/figurative",
      accent: "from-amber-500 via-orange-500 to-rose-500",
      image:
        "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative isolate">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Curated Collections
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Handpicked series that celebrate distinct moods and movements.
            </p>
          </div>
          <a
            href="/collections"
            className="hidden sm:inline-flex text-sm text-slate-700 hover:text-slate-900"
          >
            View all
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div
                className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.accent} opacity-[0.08]`}
              />
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image}
                  alt={`${c.title} cover`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    →
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Explore works in this collection
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CuratedCollections;
