import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live for GW insights
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
            FPL tools and data, reimagined for speed
          </h1>

          <p className="mt-6 text-slate-300 text-lg md:text-xl max-w-2xl">
            Build your advantage with ultra-fast price change alerts, captaincy models, fixture difficulty, and player projection dashboards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#tools" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 text-white font-semibold shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.8)] transition-shadow">
              Explore tools
            </a>
            <a href="#data" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10">
              Browse data
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
