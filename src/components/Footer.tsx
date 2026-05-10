/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-pure-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold tracking-tighter mb-1">MAHAM KHAN</h3>
            <p className="text-sm text-light-gray/40 font-medium">Senior Data Engineer & GenAI Architect</p>
          </div>
          
          <div className="flex gap-12 text-sm font-medium text-light-gray/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/mahamkhan-data" target="_blank" rel="noopener noreferrer" className="text-light-gray/40 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-light-gray/40 hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-light-gray/20 font-bold">
            &copy; {new Date().getFullYear()} Maham Khan. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-light-gray/20 font-bold">
            Designed with Premium Craftsmanship
          </p>
        </div>
      </div>
    </footer>
  );
}
