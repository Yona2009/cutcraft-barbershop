import { servicesData } from "../data/servicesData";

const serviceBenefits = [
  ["Consultation", "Personal style direction"],
  ["Finishing", "Premium product styling"],
  ["Detailing", "Clean edges and sharp lines"],
];

const Services = () => {
  return (
    <section id="services" className="bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-kicker">Services</p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black text-white md:text-6xl">
              Premium grooming menu.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Every package is designed for men who want clean structure, sharp
              detail, and a finish that feels expensive.
            </p>
          </div>

          <div className="rounded-4xl border border-cyan-300/30 bg-slate-900 p-7 shadow-2xl shadow-cyan-400/10 lg:col-span-5">
            <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
              Included Experience
            </p>

            <div className="mt-6 grid gap-4">
              {serviceBenefits.map(([title, desc]) => (
                <div
                  key={title}
                  className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4 last:border-b-0"
                >
                  <div>
                    <h3 className="font-black text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{desc}</p>
                  </div>

                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-950"
            >
              <div className="relative h-470px overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center opacity-90"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/35 to-transparent" />

                <div className="absolute left-5 top-6 flex items-center gap-2">
                  <span className="rounded-full bg-cyan-300 px-3 py-1.5 text-xs font-black text-slate-950">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-slate-300">
                    Premium
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
                      Signature Service
                    </p>

                    <h3 className="mt-2 text-3xl font-black text-white">
                      {service.title}
                    </h3>
                  </div>

                  <p className="rounded-2xl bg-white px-4 py-2 text-lg font-black text-slate-950">
                    {service.price}
                  </p>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-8 text-slate-300">
                  {service.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Clean consultation",
                    "Detailed grooming",
                    "Premium finishing",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-5">
                  <p className="text-sm font-black uppercase tracking-widest text-slate-500">
                    {service.duration}
                  </p>

                  <a
                    href="#booking"
                    className="text-sm font-black uppercase tracking-widest text-cyan-300"
                  >
                    Book
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;