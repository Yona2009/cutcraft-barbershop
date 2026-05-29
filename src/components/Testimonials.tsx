import { testimonialsData } from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="scroll-reveal lg:col-span-7">
            <p className="section-kicker">Testimonials</p>

            <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
              Trusted by modern gentlemen.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Clients choose CUTCRAFT for clean detail, premium service, and a
              confident finish that lasts.
            </p>
          </div>

          <div className="rounded-4xl border border-cyan-300/30 bg-slate-950 p-7 shadow-2xl shadow-cyan-400/10 scroll-reveal lg:col-span-5">
            <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
              Studio Rating
            </p>

            <div className="mt-4 flex items-end justify-between gap-5">
              <h3 className="text-6xl font-black text-white">4.9</h3>

              <div className="text-right">
                <p className="text-xl text-cyan-300">★★★★★</p>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  1.2K+ visits
                </p>
              </div>
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-11/12 rounded-full bg-cyan-300" />
            </div>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {testimonialsData.map((item, index) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-950 p-7 scroll-reveal"
            >
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-black text-cyan-200">
                  {item.name.charAt(0)}
                </div>

                <span className="rounded-full border border-slate-700 px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-400">
                  Review 0{index + 1}
                </span>
              </div>

              <p className="text-cyan-300">{item.rating}</p>

              <p className="mt-6 min-h-40 leading-8 text-slate-300">
                “{item.text}”
              </p>

              <div className="mt-8 border-t border-slate-800 pt-6">
                <h3 className="font-black text-white">{item.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Verified Client
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 grid gap-7 md:grid-cols-3">
          {[
            ["98%", "Return Clients"],
            ["24h", "Fast Booking"],
            ["100%", "Detail Focused"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-4xl border border-slate-800 bg-slate-950 p-7 text-center scroll-reveal"
            >
              <p className="text-4xl font-black text-white">{value}</p>
              <p className="mt-2 text-sm font-black uppercase tracking-widest text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;