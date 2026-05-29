import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Barbers from "./components/Barbers";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const elements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-reveal");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-999 grid place-items-center bg-slate-950 text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 35%, rgba(34,211,238,0.16), transparent 32%),
              linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
            `,
            backgroundSize: "auto, 72px 72px, 72px 72px",
          }}
        />

        <div className="relative text-center">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-cyan-300">
            CUTCRAFT
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-widest text-white md:text-7xl">
            LOADING
          </h1>

          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Precision. Style. Confidence.
          </p>

          <div className="mx-auto mt-8 h-1 w-56 overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-full animate-pulse rounded-full bg-cyan-300" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 85% 15%, rgba(34,211,238,0.12), transparent 32%),
            radial-gradient(circle at 10% 80%, rgba(34,211,238,0.08), transparent 35%),
            linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 72px 72px, 72px 72px",
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Barbers />
        <Gallery />
        <Testimonials />
        <BookingCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;