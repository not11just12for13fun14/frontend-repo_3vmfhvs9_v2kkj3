import { Sparkles, Trees, Gift, Snowflake } from "lucide-react";

function Logo() {
  return (
    <div className="flex items-center gap-2 text-white">
      <div className="relative">
        <div className="size-9 rounded-xl bg-gradient-to-br from-rose-500 via-red-500 to-amber-400 shadow-lg shadow-red-500/30 grid place-items-center">
          <Gift className="w-5 h-5 text-white" />
        </div>
        <Snowflake className="w-3 h-3 text-cyan-200 absolute -top-1 -right-1 animate-pulse" />
      </div>
      <div className="leading-tight">
        <p className="font-extrabold tracking-tight">Christmas Bonanza</p>
        <p className="text-xs text-white/70">By BuildaDAO</p>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30">
      <div className="backdrop-blur-xl bg-slate-900/50 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#agenda" className="hover:text-white transition-colors">Agenda</a>
            <a href="#tickets" className="hover:text-white transition-colors">Passes</a>
            <a href="#partners" className="hover:text-white transition-colors">Partners</a>
            <a href="#why" className="hover:text-white transition-colors">Why</a>
          </div>
          <a href="#tickets" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all">
            <Sparkles className="w-4 h-4" /> Get a Pass
          </a>
        </nav>
      </div>
    </header>
  );
}
