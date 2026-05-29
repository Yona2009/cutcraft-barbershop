const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-black tracking-widest text-white">
            CUTCRAFT
          </h3>
          <p className="mt-3 max-w-sm leading-7 text-slate-500">
            Premium urban barbershop landing page built for a polished freelance
            portfolio.
          </p>
        </div>

        <div>
          <h4 className="font-black text-white">Contact</h4>
          <p className="mt-3 text-slate-500">adriyanorajacheza@gmail.com</p>
          <p className="mt-2 text-slate-500">Jakarta, Indonesia</p>
        </div>

        <div>
          <h4 className="font-black text-white">Hours</h4>
          <p className="mt-3 text-slate-500">Mon - Sat: 09:00 - 21:00</p>
          <p className="mt-2 text-slate-500">Sunday: 10:00 - 18:00</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-600">
        © 2026 CUTCRAFT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;