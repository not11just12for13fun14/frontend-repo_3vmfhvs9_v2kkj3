import { Handshake, HeartHandshake, Rocket, Banknote, Gift, Wrench } from "lucide-react";

const supports = [
  { icon: Banknote, label: "Funding" },
  { icon: Handshake, label: "Mentorship" },
  { icon: Wrench, label: "Tools & Credits" },
  { icon: Rocket, label: "Workshops" },
  { icon: Gift, label: "Prizes" },
  { icon: HeartHandshake, label: "Brand Activations" },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Community & Partners</h2>
          <p className="text-white/70 mt-2 max-w-2xl mx-auto">Powered by BuildaDAO — bringing together Africa’s builders, students, creators, entrepreneurs and tech communities.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {supports.map((s, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center text-white/90">
              <s.icon className="w-6 h-6 mx-auto mb-2 text-white" />
              <p className="text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">Become a Partner</button>
        </div>
      </div>
    </section>
  );
}
