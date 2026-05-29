const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-5 pt-32 lg:px-8">
      <div className="hero-orb-left" />
      <div className="hero-orb-right" />
      <div className="subtle-grid" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 pb-24 lg:grid-cols-2">
        <div className="scroll-reveal">
          <p className="section-kicker mb-6">Luxury Urban Barbershop</p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Precision cuts for modern confidence.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            CUTCRAFT delivers premium grooming with sharp fades, sculpted beards,
            and a sleek urban experience made for modern gentlemen.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#booking" className="cta-primary justify-center">
              Reserve Chair
            </a>

            <a href="#services" className="cta-secondary justify-center">
              View Services
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["12K+", "Happy Clients"],
              ["4.9", "Client Rating"],
              ["8+", "Years Crafting"],
            ].map(([value, label]) => (
              <div key={label} className="stat-card">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative scroll-reveal">
          <div className="hero-image-glow" />
          <div className="hero-frame">
            <img
              src="/images/hero-barber.jpg"
              alt="CUTCRAFT barber"
              className="h-96 w-full rounded-3xl object-cover lg:h-160"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-slate-700 bg-slate-950/85 p-5 backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-widest text-cyan-300">
                Signature Standard
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                Sharp. Clean. Confident.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;