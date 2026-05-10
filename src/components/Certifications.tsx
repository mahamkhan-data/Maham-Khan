/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CERTIFICATIONS } from "../constants";
import { Award, ShieldCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-pure-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-5xl font-display font-bold tracking-tighter mb-4">Credentials</h2>
          <p className="text-light-gray/60 max-w-2xl mx-auto">
            Professional certifications and ongoing technical specializations in the data and AI ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-off-black border border-white/5 rounded-2xl flex items-center gap-6 hover:border-azure-blue/50 transition-all group"
            >
              <div className="bg-azure-blue/10 p-4 rounded-xl group-hover:bg-azure-blue transition-colors">
                {cert.name.includes('(In Progress)') ? <ShieldCheck size={28} className="text-azure-blue group-hover:text-white" /> : <Award size={28} className="text-azure-blue group-hover:text-white" />}
              </div>
              <div>
                <h3 className="text-lg font-bold leading-tight mb-1">{cert.name}</h3>
                <p className="text-xs uppercase tracking-widest text-light-gray/40 font-bold">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
