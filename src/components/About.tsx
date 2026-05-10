/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Download, MapPin, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-soft-white text-pure-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-display font-bold mb-8 tracking-tight">Executive Summary</h2>
            <div className="space-y-6 text-lg text-charcoal leading-relaxed">
              <p>
                As a Senior Data Engineer with over a decade of experience, I specialize in architecting cloud-native data platforms and GenAI infrastructure for enterprise-scale organizations. My journey includes leading high-impact initiatives at NVIDIA and managing mission-critical healthcare systems at Deaconess.
              </p>
              
              <div className="grid grid-cols-2 gap-6 py-6">
                <div>
                  <p className="text-4xl font-display font-bold text-azure-blue">3x</p>
                  <p className="text-xs uppercase font-bold text-charcoal/60 tracking-widest mt-1">Query Speedup</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-bold text-emerald-ai">55%</p>
                  <p className="text-xs uppercase font-bold text-charcoal/60 tracking-widest mt-1">Fewer Incidents</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-black/10">
                <div className="flex items-center gap-3">
                  <div className="bg-pure-black text-white p-2 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <span className="font-semibold text-base">Based in: New City, NY (Remote US)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-pure-black text-white p-2 rounded-lg">
                    <Briefcase size={20} />
                  </div>
                  <span className="font-semibold text-base">Specializing in Lakehouse & AI Infrastructure</span>
                </div>
              </div>

              <motion.a
                href="resume.pdf"
                download="Maham_Khan_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-10 py-4 bg-pure-black text-white rounded-full font-bold flex items-center gap-3 shadow-xl transition-all hover:bg-charcoal"
              >
                Download Executive CV <Download size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-azure-blue/10 rounded-full blur-3xl group-hover:bg-azure-blue/20 transition-all" />
              <div className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Maham Khan Professional Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
