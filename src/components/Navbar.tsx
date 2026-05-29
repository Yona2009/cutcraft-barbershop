import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Barbers", href: "#barbers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const link of navLinks) {
        const section = document.querySelector(link.href);

        if (!section) continue;

        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(link.href);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#" className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-visible">
            <img
              src={logo}
              alt="CUTCRAFT logo"
              className="h-28 w-28 scale-150 object-contain"
            />
          </div>

          <div>
            <h1 className="text-lg font-black tracking-widest text-white">
              CUTCRAFT
            </h1>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Premium Grooming
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-2 py-2 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`rounded-full px-4 py-2.5 transition duration-300 ${
                activeLink === link.href
                  ? "bg-cyan-300 text-slate-950"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#booking" className="hidden cta-primary md:inline-flex">
          Book Now
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-bold text-white md:hidden"
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-5 py-5 md:hidden">
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsOpen(false);
                }}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                  activeLink === link.href
                    ? "bg-cyan-300 text-slate-950"
                    : "bg-slate-900 text-slate-200"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-cyan-300 px-4 py-3 text-center text-sm font-black text-slate-950"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;