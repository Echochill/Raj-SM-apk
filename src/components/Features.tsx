import { motion } from 'motion/react';
import { CheckCircle2, Zap, Brain, Users, Clock, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Zap />, title: 'All-In-One Platform', desc: 'Manage all accounts from a single dashboard' },
    { icon: <Clock />, title: 'Time Save Automate', desc: 'Schedule posts way in advance automatically' },
    { icon: <Brain />, title: 'AI-Powered Insights', desc: 'Deep analytics driven by advanced machine learning' },
    { icon: <ShieldCheck />, title: 'Advanced AI Analytic', desc: 'Protect your brand with smart moderation' },
    { icon: <Users />, title: 'Collaboration Made', desc: 'Seamless workflow for you and your clients' },
    { icon: <ShieldCheck />, title: '24/7 Time Support', desc: 'Expert help whenever you need it most' },
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-2xl opacity-20" />
             <div className="relative glass rounded-[40px] p-8 border border-white/10 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">S</div>
                    <div className="h-2 w-24 bg-slate-800 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                  </div>
                </div>
                
                <div className="bg-slate-900/80 rounded-3xl p-6 shadow-inner border border-white/5 mb-6">
                   <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-1">Total Audience</div>
                        <div className="text-2xl font-bold text-white tracking-tight">1.2M+</div>
                      </div>
                      <div className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-[10px] font-bold rounded shadow-[0_0_8px_rgba(34,211,238,0.2)]">+12.5%</div>
                   </div>
                   <div className="flex items-end gap-1.5 h-32">
                      {[40, 60, 35, 85, 45, 95, 75, 55, 80, 60, 40, 90].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          className={`flex-1 rounded-t-lg ${i === 5 ? 'bg-primary' : 'bg-slate-800 hover:bg-primary/50'} transition-all`}
                        />
                      ))}
                   </div>
                </div>

                <div className="flex items-center gap-4">
                   <div className="flex-1 p-4 bg-slate-900/60 rounded-2xl border border-white/5 shadow-sm">
                      <div className="text-slate-500 text-[10px] font-bold mb-1 uppercase tracking-wider">Posts Created</div>
                      <div className="text-xl font-bold text-white">856</div>
                   </div>
                   <div className="flex-1 p-4 bg-slate-900/60 rounded-2xl border border-white/5 shadow-sm">
                      <div className="text-slate-500 text-[10px] font-bold mb-1 uppercase tracking-wider">Growth Rate</div>
                      <div className="text-xl font-bold text-white">77.4%</div>
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-white">Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light text-glow">Scale Your Brand</span></h2>
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 w-6 h-6 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 text-slate-200 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="mt-10 px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
