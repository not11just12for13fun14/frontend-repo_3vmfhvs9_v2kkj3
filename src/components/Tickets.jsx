import { BadgeCheck, Gift, Users, Laptop, MapPin } from "lucide-react";

const passes = [
  {
    name: "Virtual Access Pass",
    emoji: "💻",
    highlight: "For remote participants",
    perks: [
      "All virtual sessions",
      "AI 101 + Strategy + Blockchain + Cybersecurity",
      "Code labs & challenges",
      "Pitch training",
      "Project submissions",
      "Discord community",
      "Digital certificate",
    ],
    cta: "Choose Virtual",
    color: "from-sky-500 to-cyan-400",
  },
  {
    name: "Full Hybrid Pass",
    emoji: "🎟️",
    highlight: "Virtual + Physical access",
    perks: [
      "Everything in Virtual",
      "Madmax Karting Day",
      "Competition Day (Holiday Inn)",
      "Closing Christmas Celebration",
      "Networking with founders, partners, sponsors",
      "Physical badge + merch (tier‑based)",
    ],
    cta: "Go Hybrid",
    color: "from-emerald-500 to-green-400",
  },
  {
    name: "Competition Pass",
    emoji: "🏆",
    highlight: "For teams & projects",
    perks: [
      "Eligibility to compete",
      "Mentor sessions",
      "Pitch Day access",
      "Finalist check‑ins",
      "Prize eligibility",
      "Judges feedback",
      "Access to all physical events",
    ],
    cta: "Compete",
    color: "from-fuchsia-500 to-pink-500",
  },
];

function PassCard({ p }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:-translate-y-1 transition-transform">
      <div className={`absolute -inset-1 bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-30 transition`}></div>
      <div className="relative p-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{p.emoji}</div>
          <h3 className="text-white font-extrabold text-lg">{p.name}</h3>
        </div>
        <p className="text-white/80 text-sm mt-2">{p.highlight}</p>
        <ul className="mt-4 space-y-2">
          {p.perks.map((perk, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-white/90">
              <BadgeCheck className="w-4 h-4 text-emerald-400" /> {perk}
            </li>
          ))}
        </ul>
        <button className="mt-6 w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">{p.cta}</button>
      </div>
    </div>
  );
}

export default function Tickets() {
  return (
    <section id="tickets" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Tickets & Access Passes</h2>
          <p className="text-white/70 mt-2">Choose your experience — virtual, hybrid or competition‑ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {passes.map((p, i) => (
            <PassCard p={p} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
