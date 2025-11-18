import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-6 backdrop-blur">
            <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
            Nov 28 – Dec 12 • Nairobi + Online
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_5px_35px_rgba(16,185,129,0.35)]">
            Christmas Bonanza
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/85 max-w-2xl">
            A 14‑day hybrid tech and creativity festival for Africa’s brightest builders. Learn, build, collaborate and celebrate — powered by the BuildaDAO community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#tickets" className="px-5 py-3 rounded-xl bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all">Get a Pass</a>
            <a href="#agenda" className="px-5 py-3 rounded-xl bg-white/15 border border-white/20 text-white font-semibold hover:bg-white/20 transition">Explore the Agenda</a>
          </div>
        </div>
      </div>
    </section>
  );
}
