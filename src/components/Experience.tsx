/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { EXPERIENCE } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-soft-white text-pure-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold mb-20 tracking-tighter"
        >
          Career Timeline
        </motion.h2>

        <div className="relative border-l-2 border-pure-black/10 ml-4 md:ml-0 md:left-1/2 md:-translate-x-px space-y-24">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot */}
              <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-[9px] w-4 h-4 bg-azure-blue rounded-full z-10 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className="bg-white p-10 rounded-3xl shadow-xl border border-black/5 hover:border-azure-blue/10 transition-all group">
                  <span className="text-sm uppercase tracking-widest font-extrabold text-azure-blue block mb-2">{exp.period}</span>
                  <h3 className="text-3xl font-display font-bold mb-1 italic">{exp.role}</h3>
                  <h4 className="text-xl font-bold text-charcoal/40 mb-6">{exp.company}</h4>
                  <p className="text-charcoal text-lg mb-8 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className={`space-y-4 text-base text-charcoal/80 mb-8 ${index % 2 === 0 ? 'list-none md:flex md:flex-col md:items-end' : 'list-none'}`}>
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-4">
                        {index % 2 !== 0 && <span className="text-azure-blue mt-2.5 shrink-0 w-2 h-2 rounded-full bg-azure-blue" />}
                        <span>{a}</span>
                        {index % 2 === 0 && <span className="hidden md:block text-azure-blue mt-2.5 shrink-0 w-2 h-2 rounded-full bg-azure-blue" />}
                      </li>
                    ))}
                  </ul>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.tech.map(t => (
                      <span key={t} className="px-4 py-1.5 bg-off-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for flow */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
