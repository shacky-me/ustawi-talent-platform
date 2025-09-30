"use client";

import { useEffect, useRef } from "react";

const ShowcaseMarquee = () => {
  const trackRef = useRef(null);
  const contentWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Measure half-width since items are duplicated for seamless loop
    const measure = () => {
      const children = track.children;
      let halfWidth = 0;
      for (let i = 0; i < children.length / 2; i++) {
        const el = children[i];
        halfWidth += el.getBoundingClientRect().width + 16; // gap-4 ~ 1rem = 16px
      }
      // Subtract the trailing gap on the last item
      halfWidth = Math.max(0, halfWidth - 16);
      contentWidthRef.current = halfWidth;
    };

    measure();
    window.addEventListener("resize", measure);

    let animationFrame;
    let lastTs = performance.now();
    let offset = 0; // px
    const speedPxPerSec = 30; // tune speed

    const tick = (ts) => {
      const dt = (ts - lastTs) / 1000; // seconds
      lastTs = ts;
      const distance = speedPxPerSec * dt;
      offset += distance;
      const loopWidth = contentWidthRef.current || 0;
      if (loopWidth > 0) {
        // Reset when we've scrolled past one set of items
        if (offset >= loopWidth) {
          offset -= loopWidth;
        }
      }
      track.style.transform = `translateX(-${offset}px)`;
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const brands = [
    {
      name: "Spotify",
      url: "https://i.pinimg.com/736x/3e/4e/4f/3e4e4fa4e72ceeef4f436b0e0ef2a8a6.jpg",
    },
    {
      name: "Coca-Cola",
      url: "https://i.pinimg.com/736x/50/9f/bc/509fbc93c9d63ab71bc84e006d08e91f.jpg",
    },
    {
      name: "Netflix",
      url: "https://i.pinimg.com/1200x/73/a7/28/73a72898a5265702b913ff227b8a0204.jpg",
    },
    {
      name: "Adobe",
      url: "https://i.pinimg.com/1200x/4d/3c/df/4d3cdf398e946991aa7a3c5c4960f06c.jpg",
    },
    {
      name: "Microsoft",
      url: "https://i.pinimg.com/1200x/08/48/58/084858e17760cdcf8eccb77c6554f978.jpg",
    },
    {
      name: "Apple",
      url: "https://i.pinimg.com/1200x/cf/11/eb/cf11ebcc0a874e3ad3830431f7b0ab58.jpg",
    },
    {
      name: "Google",
      url: "https://i.pinimg.com/1200x/17/d2/3c/17d23cc03ac85f50a39402f46ba9bca4.jpg",
    },
    {
      name: "Nike",
      url: "https://i.pinimg.com/736x/e1/9f/4b/e19f4ba22896c8c897c55864142f5bfe.jpg",
    },
    {
      name: "Samsung",
      url: "https://i.pinimg.com/1200x/05/0a/c9/050ac92cb432973286bbba0b3637f17c.jpg",
    },
    {
      name: "Airbnb",
      url: "https://i.pinimg.com/1200x/48/42/48/484248c26da8e4a31b454351abab6794.jpg",
    },
  ];

  return (
    <section className="relative isolate">
      <div className="max-w-none px-0 py-10 bg-gradient-to-b from-white to-slate-50 border-y border-slate-200/70">
        <div className="overflow-hidden">
          <div className="will-change-transform flex gap-4 px-6" ref={trackRef}>
            {[...brands, ...brands].map((b, idx) => (
              <div
                key={`${idx}-${b.name}`}
                className="relative shrink-0 w-56 h-36 overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <img
                  src={b.url}
                  alt={`${b.name} logo`}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowcaseMarquee;
