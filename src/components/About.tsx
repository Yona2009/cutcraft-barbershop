const values = [
  {
    number: "01",
    title: "Precision Mapping",
    desc: "Every haircut begins with face shape analysis and personal style direction.",
  },
  {
    number: "02",
    title: "Clean Technique",
    desc: "Sharp fades, balanced structure, and detailed line work with total control.",
  },
  {
    number: "03",
    title: "Premium Finish",
    desc: "Professional styling and refined finishing for a confident polished look.",
  },
];

const About = () => {
  return (
    <section id="about" className=" bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center scroll-reveal">
          <p className="section-kicker">About CUTCRAFT</p>

          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Where classic craft meets
            <span className="block text-cyan-300">modern precision.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            CUTCRAFT blends timeless barbering discipline with a premium urban
            atmosphere, delivering sharp grooming experiences built around
            confidence, detail, and consistency.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="rounded-4xl border border-slate-800 bg-slate-950 p-10 scroll-reveal lg:col-span-5">
            <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
              Our Philosophy
            </p>

            <h3 className="mt-5 text-3xl font-black text-white">
              Grooming is detail.
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Every detail matters — from the consultation process to the final
              finishing touch. Precision is not an option, it is our standard.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-5 border-t border-slate-800 pt-8 text-center">
              {[
                ["12K+", "Clients"],
                ["4.9", "Rating"],
                ["03", "Experts"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:col-span-7">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-4xl border border-slate-800 bg-slate-950 p-8 transition duration-500 hover:border-cyan-300/20 scroll-reveal"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                      {item.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                      {item.desc}
                    </p>
                  </div>

                  <div className="h-12 w-12 rounded-2xl border border-slate-700 bg-slate-900" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "Premium dark interior",
            "Professional-grade tools",
            "Consistent luxury service",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-center text-sm font-black uppercase tracking-widest text-slate-400 scroll-reveal"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;