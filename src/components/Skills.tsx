/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { SKILLS } from "../constants";

export default function Skills() {
  const categories = Object.keys(SKILLS) as Array<keyof typeof SKILLS>;

  return (
    <section id="services" className="py-24 bg-pure-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-5xl font-display font-bold tracking-tighter mb-4">Core Expertise</h2>
          <p className="text-light-gray/60 max-w-2xl mx-auto">
            A comprehensive stack honed over 12 years of professional development, focusing on performance, scalability, and modern UI/UX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-off-black border border-white/5 rounded-3xl hover:border-azure-blue/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-azure-blue/5 rounded-full blur-2xl -mr-12 -mt-12" />
              <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-azure-blue mb-8 block">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map(skill => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 rounded-xl text-sm font-semibold text-light-gray border border-white/5 hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
