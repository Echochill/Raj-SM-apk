import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <center className="mb-16">
          <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-xs font-bold rounded-full uppercase tracking-wider">
            Our Customer Are Saying
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tighter text-white">
            Success Stories From Users
          </h2>
        </center>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            <div className="relative">
                <div className="w-full aspect-square max-w-[400px] mx-auto relative z-10">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-30" />
                    <div className="relative h-full w-full rounded-[40px] overflow-hidden border-4 border-slate-800 shadow-2xl">
                        <img 
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                          alt="Customer" 
                          className="w-full h-full object-cover grayscale-[0.3]"
                        />
                    </div>
                </div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white shadow-xl z-20">
                    <Quote className="w-8 h-8 fill-white" />
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <div className="flex gap-1 text-cyan-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-cyan-400" />)}
                </div>
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-slate-200 italic">
                  "Before using this platform, managing our social media was overwhelming and time-consuming. Now, we can plan and schedule weeks of content in just few hours! The intuitive interface and AI suggestions are a game changer."
                </p>
                
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/40">
                           <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Avatar" />
                        </div>
                        <div>
                            <div className="font-bold text-lg text-white">Amanda Reyes</div>
                            <div className="text-slate-500 text-sm">Owner FeaterDev</div>
                        </div>
                    </div>
                    
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                            <ChevronLeft />
                        </button>
                         <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
