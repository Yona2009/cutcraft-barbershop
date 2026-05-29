import { useState } from "react";

const BookingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="booking" className="bg-transparent px-5 py-24 lg:px-8">
      <div className="booking-panel scroll-reveal">
        <p className="section-kicker">Book Your Chair</p>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black text-white md:text-6xl">
          Ready for a cleaner, sharper, more confident look?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
          Reserve your session today and experience premium grooming crafted
          with precision.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => setIsOpen(true)}
            className="cta-primary justify-center"
          >
            Make Appointment
          </button>

          <a href="#services" className="cta-secondary justify-center">
            See Pricing
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-999 grid place-items-center bg-slate-950/80 px-5 backdrop-blur-xl">
          <div className="w-full max-w-xl rounded-4xl border border-cyan-300/30 bg-slate-950 p-7 shadow-2xl shadow-cyan-400/10">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-cyan-300">
                  CUTCRAFT Booking
                </p>
                <h3 className="mt-3 text-3xl font-black text-white">
                  Reserve your session.
                </h3>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm font-black text-white"
              >
                X
              </button>
            </div>

            <form className="mt-8 grid gap-5">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
              />

              <select className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-300">
                <option>Signature Cut</option>
                <option>Beard Sculpt</option>
                <option>Executive Grooming</option>
              </select>

              <select className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-300">
                <option>Axel Rhodes</option>
                <option>Miles Carter</option>
                <option>Dante Brooks</option>
              </select>

              <input
                type="date"
                className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-cyan-300"
              />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-cyan-300 px-8 py-4 text-sm font-black uppercase tracking-widest text-slate-950"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingCTA;