import { Sparkles, LineChart, BellRing, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sparkles,
    title: 'Captaincy model',
    desc: 'Weighted xGI, opponent xGC, and bookies odds combined into a simple confidence score.'
  },
  {
    icon: LineChart,
    title: 'Price change radar',
    desc: 'Real-time rise/fall probability tracker to avoid getting priced out.'
  },
  {
    icon: BellRing,
    title: 'Deadline alerts',
    desc: 'Smart push reminders for injuries, suspensions, and team news.'
  },
  {
    icon: Database,
    title: 'Open data API',
    desc: 'Clean endpoints to query fixtures, teams, and players from your own scripts.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="tools" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.06 * i }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-600/10 p-3 ring-1 ring-inset ring-blue-500/20">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="text-white font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300/80">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
