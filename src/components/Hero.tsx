/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Linkedin } from "lucide-react";
import { STATS } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-azure-blue/10 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-ai/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="flex flex-wrap gap-6 mb-10">
            {STATS.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-5xl font-display font-bold text-white">{stat.value}</span>
                  <span className="text-xs font-bold text-azure-blue">{stat.suffix}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-light-gray/60 font-bold mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.h1 
            className="text-7xl md:text-9xl font-display font-extrabold mb-6 tracking-tighter leading-[0.85] text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Maham Khan
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-light-gray font-medium mb-8 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            AI Data Platform Engineer at <span className="text-white border-b-2 border-azure-blue">NVIDIA</span>
            <span className="hidden md:block w-2 h-2 rounded-full bg-azure-blue" />
            Cloud-Native Infrastructure Specialist
          </motion.p>
          
          <motion.p 
            className="text-light-gray/60 max-w-lg mb-12 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Architecting enterprise-scale cloud-native data platforms and production GenAI pipelines that power the next generation of intelligent systems.
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 bg-azure-blue text-white rounded-full font-bold flex items-center gap-3 transition-all hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              View Projects <ChevronRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold transition-all hover:border-white hover:bg-white/5"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/maham-khan-data"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold transition-all hover:bg-white/10 flex items-center gap-2"
            >
              <Linkedin size={18} className="text-azure-blue" /> LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Abstract Data Visual */}
          <div className="relative w-full aspect-square max-w-xl group">
            <div className="absolute inset-0 bg-azure-blue/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative z-10 w-full h-full border border-white/10 rounded-3xl backdrop-blur-3xl bg-white/5 overflow-hidden p-8 flex flex-col justify-center gap-8">
              {/* Mock Dashboard Elements */}
              <div className="space-y-4">
                <div className="w-1/2 h-4 bg-white/20 rounded-full" />
                <div className="w-full h-32 bg-azure-blue/10 rounded-2xl border border-azure-blue/20 flex items-end gap-2 p-4">
                  {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1 + i * 0.1, duration: 1 }}
                      className="flex-1 bg-azure-blue/40 rounded-t-sm" 
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-light-gray/40 mb-2">Ingestion Rate</div>
                  <div className="text-2xl font-bold font-display">1.2 GB/s</div>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-light-gray/40 mb-2">Model Accuracy</div>
                  <div className="text-2xl font-bold font-display text-emerald-ai">99.4%</div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-8">
                <div className="w-16 h-16 border-2 border-azure-blue rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="w-2 h-2 bg-azure-blue rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
