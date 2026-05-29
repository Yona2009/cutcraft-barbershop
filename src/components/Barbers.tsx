import { barbersData } from "../data/barbersData";

const specialties = ["Fade", "Beard", "Texture", "Styling"];

const Barbers = () => {
  return (
    <section id="barbers" className="bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div className="scroll-reveal">
            <p className="section-kicker">Barbers</p>
            <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
              Meet the hands behind the craft.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Three grooming specialists focused on sharp details, clean
              finishing, and client confidence.
            </p>
          </div>

          <div className="rounded-4xl border border-cyan-300/30 bg-slate-950 p-7 shadow-2xl shadow-cyan-400/10 scroll-reveal">
            <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
              Team Standard
            </p>
            <h3 className="mt-3 text-3xl font-black text-white">
              Precision over everything.
            </h3>
            <p className="mt-3 leading-7 text-slate-400">
              Every barber follows a clean detail-first process for consistent
              premium results.
            </p>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {barbersData.map((barber, index) => (
            <article
              key={barber.id}
              className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-950 scroll-reveal"
            >
              <div className="relative h-470px overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="h-full w-full object-cover object-center opacity-90"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/35 to-transparent" />

                <div className="absolute left-5 top-6 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-cyan-300 px-3 py-1.5 text-xs font-black text-slate-950">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-slate-300 backdrop-blur-xl">
                    Pro
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                    {barber.role}
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white">
                    {barber.name}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <p className="text-slate-400">{barber.experience}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {specialties.map((skill) => (
                    <span key={skill} className="skill-pill text-center">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-800 pt-5">
                  <p className="text-sm font-black uppercase tracking-widest text-slate-500">
                    Available
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

export default Barbers;