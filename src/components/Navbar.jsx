import { Menu, Flame, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-[0_0_60px_rgba(59,130,246,0.15)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="grid place-items-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-2 shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white font-bold tracking-tight text-lg"
              >
                FPL Nexus
              </motion.span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#tools" className="text-slate-300 hover:text-white transition-colors">Tools</a>
              <a href="#data" className="text-slate-300 hover:text-white transition-colors">Data</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>Star</span>
              </a>
              <button className="inline-flex md:hidden p-2 rounded-lg border border-white/10 text-slate-200">
                <Menu className="w-5 h-5" />
              </button>
              <a
                href="#tools"
                className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 px-4 py-2 font-medium text-white shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(56,189,248,0.8)] transition-shadow"
              >
                Launch app
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
