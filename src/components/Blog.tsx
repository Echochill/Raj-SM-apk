import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      date: '16 FEBRUARY 2025',
      title: 'How To Optimize Your Supply Chain Of Maximum Efficiency',
      category: 'GROW SMARTER WITH OUR BLOG',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600'
    },
    {
      date: '16 FEBRUARY 2025',
      title: 'How To Optimize Your Supply Chain Of Maximum Efficiency',
      category: 'GROW SMARTER WITH OUR BLOG',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600'
    },
    {
      date: '16 FEBRUARY 2025',
      title: 'How To Optimize Your Supply Chain Of Maximum Efficiency',
      category: 'GROW SMARTER WITH OUR BLOG',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="py-24 bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
          <div>
            <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 text-xs font-bold rounded-full uppercase tracking-wider">
              Grow Smarter With Our Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tighter text-white">
              Insights & <span className="text-glow">Case Studies</span>
            </h2>
          </div>
          <button className="px-8 py-3 bg-slate-900 border border-white/10 text-white font-bold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2 group">
            View Latest Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 rounded-[40px] p-6 border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                 <img src={post.image} alt="Blog post" className="w-full h-full object-cover group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold mb-4 uppercase tracking-widest">
                <Calendar className="w-4 h-4 text-primary" />
                {post.date}
              </div>
              <h3 className="text-xl font-bold mb-6 line-clamp-2 leading-tight text-white group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <button className="text-sm font-bold text-primary flex items-center gap-2 group/btn">
                Read Full Story
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
