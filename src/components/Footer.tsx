import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const links = {
    Product: ['Pricing', 'Integration', 'Features', 'Templates', 'Changelog'],
    Company: ['About Us', 'Our Blog', 'In The Pass', 'Press', 'Community'],
    Resources: ['On-Boarding', 'Help Center', 'Perks Benefits', 'Partnerships', 'Work With Us'],
  };

  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold transform rotate-12 shadow-lg shadow-primary/20">R</div>
                <span className="text-xl font-bold tracking-tight text-white">Raj SM Agency</span>
             </div>
             <p className="text-slate-500 max-w-sm mb-8 leading-relaxed font-medium text-sm">
               Empower your teams, streamlined your processes, and achieve your goals with our AI-first infrastructure.
             </p>
             <div className="flex gap-2 p-1.5 glass bg-slate-900/50 rounded-full max-w-xs border border-white/5">
                <input type="email" placeholder="Email Address" className="bg-transparent px-4 py-2 focus:outline-none flex-1 text-sm font-medium text-white placeholder:text-slate-600" />
                <button className="px-6 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-lg shadow-primary/10">Subscribe</button>
             </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-slate-200">{title}</h4>
              <ul className="flex flex-col gap-4">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 text-sm hover:text-primary transition-colors font-medium">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-white/5 rounded-[40px] p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="relative z-10">
             <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold rounded-full uppercase tracking-widest">Get In Touch With Us Today</span>
             <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tighter text-white">NEED SUPPORT <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white ml-2 shadow-[0_0_30px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform"><ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" /></span></h2>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-[10px] font-bold text-slate-600 uppercase tracking-widest gap-4">
           <div>Copyright @2026 Raj SM Agency. Optimized for the AI Era.</div>
           <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Your Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms Of Conditions</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
