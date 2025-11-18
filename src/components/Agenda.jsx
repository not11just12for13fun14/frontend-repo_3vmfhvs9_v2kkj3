import { CalendarDays, MapPin, Video, Rocket, Wrench, GraduationCap, Shield, Trophy, PartyPopper, Coffee, Presentation, Car, Timer } from "lucide-react";

const days = [
  { date: "28 Nov", title: "Day 1: Bonanza Uno", mode: "Virtual", icon: Rocket, desc: "Kickoff orientation, community welcome, program walkthrough, and introduction to the “12 Nights of Code.”" },
  { date: "29 Nov", title: "Day 2: AI 101", mode: "Virtual", icon: GraduationCap, desc: "A gentle and exciting introduction to AI, web code essentials, automation tools, and the future of AI in Africa." },
  { date: "30 Nov", title: "Day 3: Break Day", mode: "—", icon: Coffee, desc: "A rest day to slow down, catch up, breathe, and reset." },
  { date: "1 Dec", title: "Day 4: AI Practical", mode: "Virtual", icon: Wrench, desc: "Hands-on building: simple AI workflows, automation tasks, small group labs, and troubleshooting." },
  { date: "2 Dec", title: "Day 5: Strategy 101", mode: "Virtual", icon: Presentation, desc: "Branding, business structure, finance, partnerships, storytelling, and personal branding." },
  { date: "3 Dec", title: "Day 6: Blockchain 101", mode: "Virtual", icon: Shield, desc: "Crypto basics, smart contracts, how Web3 works, and real blockchain tools for beginners." },
  { date: "4 Dec", title: "Day 7: Bonanza Fiesta", mode: "Madmax Karting Nairobi", icon: Car, desc: "Games, karting challenges, bonding, networking, and giveaways." },
  { date: "5 Dec", title: "Day 8: Cybersecurity 101", mode: "Virtual", icon: Shield, desc: "Basics of staying safe online, ethical hacking, secure coding and digital protection." },
  { date: "6 Dec", title: "Day 9: Bonanza Build & Break", mode: "Virtual", icon: Wrench, desc: "Fix errors, improve features, clean code, tighten ideas." },
  { date: "7 Dec", title: "Day 10: Break Day", mode: "—", icon: Coffee, desc: "Rest, mentorship sessions, team check-ins, and progress alignment." },
  { date: "8 Dec", title: "Day 11: Pre-Pitch Day", mode: "Virtual", icon: Presentation, desc: "Updates on standings, pitch coaching, improving presentations, and finale prep." },
  { date: "9 Dec", title: "Day 12: Bonanza HackQuest", mode: "Africa Hack Venue", icon: Trophy, desc: "CTF challenges, puzzles, team missions, and practical tasks." },
  { date: "10 Dec", title: "Day 13: Submission Deadline", mode: "Virtual", icon: Timer, desc: "Project submissions close at 11:59 PM. Finalize prototypes and docs." },
  { date: "11 Dec", title: "Day 14: Competition Day", mode: "Holiday Inn", icon: Trophy, desc: "Teams present live to judges, demo solutions, get feedback, and showcase." },
  { date: "12 Dec", title: "Grand Finale: Bonanza Day", mode: "Holiday Inn", icon: PartyPopper, desc: "Awards, trophies, recognition, performances, partner highlights, closing keynote, and the official party." },
];

function DayCard({ d }) {
  const Icon = d.icon;
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(16,185,129,0.15), transparent 40%)'}} />
      <div className="p-5 relative">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/70 font-medium">{d.date}</span>
          <span className="inline-flex items-center gap-2 text-xs text-white/80"><CalendarDays className="w-4 h-4" /> {d.mode}</span>
        </div>
        <div className="mt-3 flex items-start gap-3">
          <div className="shrink-0 p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-semibold">{d.title}</h3>
            <p className="text-white/80 text-sm mt-1">{d.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Agenda() {
  return (
    <section id="agenda" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">14‑Day Agenda — The Full Experience</h2>
          <p className="text-white/70 mt-2">Virtual sessions, hands‑on labs, meetups and a festive finale.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {days.map((d, i) => (
            <DayCard d={d} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
