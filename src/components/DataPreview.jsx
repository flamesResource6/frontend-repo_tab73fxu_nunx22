import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function DataPreview() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/fpl/health`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setStats(data);
      } catch (e) {
        setError('Backend not connected yet');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="data" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-white text-2xl font-semibold tracking-tight">Live data status</h2>
              <p className="text-slate-300/80 mt-1 max-w-prose">Quick check that the API is reachable. Once connected, this feeds fixtures, teams and player stats.</p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 min-w-[260px]"
            >
              {loading ? (
                <span className="col-span-4 text-slate-300">Loading…</span>
              ) : error ? (
                <span className="col-span-4 text-rose-300">{error}</span>
              ) : (
                <>
                  <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4 text-center">
                    <div className="text-emerald-400 text-sm">status</div>
                    <div className="text-white font-bold">{stats.status}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4 text-center">
                    <div className="text-cyan-300 text-sm">fixtures</div>
                    <div className="text-white font-bold">{stats.fixtures}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4 text-center">
                    <div className="text-cyan-300 text-sm">teams</div>
                    <div className="text-white font-bold">{stats.teams}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4 text-center">
                    <div className="text-cyan-300 text-sm">players</div>
                    <div className="text-white font-bold">{stats.players}</div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
