/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-pure-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-4 tracking-tighter italic">Projects</h2>
            <p className="text-light-gray/60 max-w-xl">
              A selection of engineering challenges I've tackled, ranging from fintech platforms to distributed systems and AI monitoring.
            </p>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-white text-pure-black rounded-lg font-bold text-sm"
          >
            View All
          </motion.button>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 space-y-6">
                <h3 className="text-4xl font-display font-bold tracking-tight">{project.name}</h3>
                <p className="text-lg text-light-gray leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-azure-blue">
                      {t}
                    </span>
                  ))}
                </div>
                
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-4 py-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-display font-bold text-white">{m.value}</span>
                          <span className="text-[10px] uppercase font-bold text-light-gray/40 tracking-widest">{m.label}</span>
                        </div>
                        <p className="text-[10px] text-light-gray/60 leading-tight">{m.context}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-8 py-3 bg-azure-blue text-white rounded-full font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full font-bold text-sm hover:bg-white/5 transition-colors"
                  >
                    Documentation
                  </motion.a>
                </div>
              </div>

              <div className="flex-1 w-full relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-electric-blue/20 to-cyan-glow/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-off-black aspect-video shadow-2xl">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pure-black/60 to-transparent flex items-end p-8">
                     {/* Overlay effect */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
