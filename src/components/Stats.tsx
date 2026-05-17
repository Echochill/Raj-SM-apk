import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: '10X', label: 'Fast Schedule' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '80%', label: 'Time Management' },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <center className="mb-16">
          <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-xs font-bold rounded-full uppercase tracking-wider">
            Effortless Social Media
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 tracking-tighter text-white">
            Powering Your <span className="text-primary italic">Social Growth</span>
          </h2>
        </center>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 group"
            >
              <span className="text-6xl md:text-8xl font-black tracking-tighter text-slate-800 group-hover:text-primary transition-all duration-500">
                {stat.value}
              </span>
              <span className="text-lg text-slate-400 font-medium max-w-[120px] text-left leading-tight hidden md:block">
                {stat.label}
              </span>
              <span className="text-lg text-slate-400 font-medium text-center md:hidden">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
