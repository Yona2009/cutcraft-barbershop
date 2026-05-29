const galleryDetails = [
  {
    title: "Cinematic Lighting",
    desc: "Controlled dark ambience with subtle cyan glow for a premium visual mood.",
  },
  {
    title: "Luxury Waiting Area",
    desc: "Comfortable seating, polished surfaces, and calm masculine atmosphere.",
  },
  {
    title: "Clean Barber Stations",
    desc: "Organized tools, mirror lighting, and professional grooming setup.",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className=" bg-transparent px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div className="scroll-reveal">
            <p className="section-kicker">Gallery</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black text-white md:text-6xl">
              A space designed for sharp results.
            </h2>
          </div>

          <p className="max-w-xl leading-8 text-slate-400 scroll-reveal lg:justify-self-end">
            Every corner of CUTCRAFT is built to feel bold, clean, and premium —
            from the lighting mood to the barber stations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="gallery-main scroll-reveal lg:col-span-7">
            <img
              src="/images/gallery-1.jpg"
              alt="CUTCRAFT interior"
              className="h-96 w-full object-cover lg:h-full"
            />

            <div className="gallery-fade" />

            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                Interior Experience
              </p>
              <h3 className="mt-2 text-3xl font-black text-white">
                Dark luxury with electric detail.
              </h3>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-5">
            <div className="rounded-4xl border border-slate-800 bg-slate-900 p-7 scroll-reveal">
              <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                Studio Details
              </p>

              <div className="mt-7 grid gap-5">
                {galleryDetails.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-slate-800 pb-5 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="gallery-info scroll-reveal">
                <p className="text-5xl font-black text-cyan-300">01</p>
                <h3 className="mt-6 text-2xl font-black text-white">
                  Premium Mood
                </h3>
                <p className="mt-4 leading-8 text-slate-400">
                  Dark charcoal atmosphere with modern lighting and refined
                  textures.
                </p>
              </div>

              <div className="gallery-info scroll-reveal">
                <p className="text-5xl font-black text-cyan-300">02</p>
                <h3 className="mt-6 text-2xl font-black text-white">
                  Pro Setup
                </h3>
                <p className="mt-4 leading-8 text-slate-400">
                  Sharp tools, clean stations, and a professional grooming
                  layout.
                </p>
              </div>
            </div>

            <div className="rounded-4xl border border-cyan-300/30 bg-slate-900 p-7 scroll-reveal">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  ["05", "Stations"],
                  ["24", "Tools"],
                  ["100%", "Detail"],
                ].map(([num, label]) => (
                  <div key={label}>
                    <p className="text-3xl font-black text-white">{num}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;