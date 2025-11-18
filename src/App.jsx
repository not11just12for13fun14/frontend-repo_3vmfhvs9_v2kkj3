import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Agenda from './components/Agenda';
import Tickets from './components/Tickets';
import Partners from './components/Partners';
import Why from './components/Why';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(236,72,153,0.15),transparent),radial-gradient(600px_300px_at_80%_0%,rgba(6,182,212,0.15),transparent)] pointer-events-none" />
      <Navbar />
      <Hero />
      <Agenda />
      <Tickets />
      <Partners />
      <Why />
      <footer className="py-10 text-center text-white/60 border-t border-white/10 bg-slate-950">© 2024 Christmas Bonanza • Built by BuildaDAO</footer>
    </div>
  )
}

export default App