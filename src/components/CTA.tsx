import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 bg-transparent px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-primary-dark to-purple-900 rounded-[40px] p-12 md:p-20 relative overflow-hidden text-center text-white shadow-2xl shadow-primary/20 border border-white/10">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
              Scale Your Presence <br/> <span className="text-cyan-200">With AI Automation</span>
            </h2>
            <p className="text-white/70 mb-10 text-lg font-light">
              Connect all your favorite tools to our centralized hub for a smooth, high-conversion growth engine.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 glass bg-black/20 border-white/10 p-2 rounded-full max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter Email Address" 
                className="flex-1 bg-transparent border-none focus:outline-none px-6 py-3 text-white placeholder:text-white/40 font-medium"
              />
              <button className="w-full sm:w-auto px-10 py-3 bg-white text-slate-900 font-black rounded-full hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 shadow-xl">
                Subscribe
                <Send className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
