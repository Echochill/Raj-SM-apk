import { motion } from 'motion/react';
import { Play, Calendar, Instagram, Twitter, Facebook, Youtube, Share2, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-template-columns-[1.2fr_1fr] items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
            Sassi- Social Media Workflow
          </span>
          <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tighter">
            Seamless For <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-glow">Social Media</span> Management
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed font-light">
            Unlock social full potential your team with tool designed the drive in both efficiency an collaboration in the every project managed.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-2xl hover:brightness-110 transition-all shadow-xl shadow-primary/30 flex items-center gap-3">
              Start Scheduling Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 fill-primary text-primary ml-1" />
              </div>
              See Works
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main Hero Image Container */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Colorful Rings */}
            <div className="absolute inset-0 border-[2px] border-dashed border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 border-[2px] border-dashed border-primary/40 rounded-full animate-reverse-spin" />
            
            {/* Image Wrapper */}
            <div className="absolute inset-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full overflow-hidden shadow-2xl border-8 border-slate-900">
              <img 
                src="/src/assets/images/hero_professional_designer_1779012668203.png" 
                alt="Professional Social Media Manager"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all"
              />
            </div>

            {/* Floating Elements (Icons & Cards) */}
            <FloatingElement className="top-0 right-[10%] bg-pink-500" delay={0}>
              <Instagram className="text-white w-5 h-5" />
            </FloatingElement>
            <FloatingElement className="top-[30%] -right-8 bg-red-600 shadow-red-200" delay={0.5}>
              <Youtube className="text-white w-5 h-5" />
            </FloatingElement>
            <FloatingElement className="bottom-[15%] right-[5%] bg-purple-600" delay={1}>
              <Share2 className="text-white w-5 h-5" />
            </FloatingElement>
            <FloatingElement className="bottom-0 left-1/4 bg-blue-600" delay={1.5}>
              <Facebook className="text-white w-5 h-5" />
            </FloatingElement>
            <FloatingElement className="top-[40%] -left-12 bg-green-500" delay={2}>
              <div className="text-white font-bold text-xs">Up</div>
            </FloatingElement>
            <FloatingElement className="top-[10%] left-[5%] bg-red-500" delay={2.5}>
              <div className="text-white font-bold text-xs md:text-[10px]">P</div>
            </FloatingElement>

            {/* Stats/Floating Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] -left-20 glass p-3 rounded-2xl shadow-xl border border-white/50 hidden lg:block"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">S</div>
                   <div className="h-2 w-16 bg-gray-100 rounded" />
                </div>
                <div className="grid grid-cols-4 gap-1">
                   {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 bg-gray-200 rounded-lg" />)}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingElement({ children, className, delay = 0 }: { children: ReactNode, className: string, delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, y: [0, -10, 0] }}
      transition={{ 
        scale: { duration: 0.5, delay },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }
      }}
      className={`absolute w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 transition-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
