import { Stars, Sparkles, Users, Wrench, PartyPopper } from "lucide-react";

const reasons = [
  { title: "Space to build ideas", icon: Wrench, color: "from-emerald-500/20 to-teal-400/10" },
  { title: "A community to grow with", icon: Users, color: "from-fuchsia-500/20 to-pink-400/10" },
  { title: "Tools to accelerate progress", icon: Stars, color: "from-cyan-500/20 to-sky-400/10" },
  { title: "Opportunities to collaborate", icon: Sparkles, color: "from-amber-500/20 to-orange-400/10" },
  { title: "A celebration to close the year", icon: PartyPopper, color: "from-rose-500/20 to-red-400/10" },
];

function Reason({ r }) {
  const Icon = r.icon;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90">
      <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${r.color} border border-white/10 mb-3`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="font-semibold">{r.title}</h3>
    </div>
  );
}

export default function Why() {
  return (
    <section id="why" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Christmas Bonanza?</h2>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto">Africa’s December playground for innovation, culture and festive magic.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <Reason r={r} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
