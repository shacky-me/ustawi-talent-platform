const StatsStrip = () => {
  const stats = [
    { label: "Artists", value: "1,200+" },
    { label: "Artworks", value: "9,500+" },
    { label: "Collectors", value: "18k+" },
    { label: "Countries", value: "40+" },
  ];

  return (
    <section className="relative isolate">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
            >
              <div className="text-2xl font-extrabold tracking-tight text-slate-900">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StatsStrip;
