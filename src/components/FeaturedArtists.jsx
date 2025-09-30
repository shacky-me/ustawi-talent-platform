import Image from "next/image";

const FeaturedArtists = () => {
  const artists = [
    {
      name: "Amina K.",
      discipline: "Mixed media",
      href: "/artists/amina",
      image:
        "https://images.unsplash.com/photo-1627225339956-f52ea54f92f9?w=1200&auto=format&fit=crop",
    },
    {
      name: "Leo M.",
      discipline: "Abstract",
      href: "/artists/leo",
      image:
        "https://images.unsplash.com/photo-1658448027587-c599d74e01a6?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Nia O.",
      discipline: "Figurative",
      href: "/artists/nia",
      image:
        "https://images.unsplash.com/photo-1657042855066-7f09c6c2c350?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Sefu T.",
      discipline: "Photography",
      href: "/artists/sefu",
      image:
        "https://images.unsplash.com/photo-1607054137382-adc96dd5cbb2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative isolate">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Featured Artists
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Exceptional voices shaping contemporary art.
            </p>
          </div>
          <a
            href="/artists"
            className="hidden sm:inline-flex text-sm text-slate-700 hover:text-slate-900"
          >
            All artists
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {artists.map((a, idx) => (
            <a
              key={a.href}
              href={a.href}
              className="group rounded-2xl border border-slate-200 bg-white p-4"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={a.image}
                  alt={`${a.name} portrait`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={idx < 2}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  {a.name}
                </h3>
                <p className="text-xs text-slate-600">{a.discipline}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturedArtists;
