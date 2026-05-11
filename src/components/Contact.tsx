/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, Twitter, Dribbble, Send, Loader2, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      let data;
      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response received:", text);
        // Clean HTML tags and provide a snippet
        const preview = text.slice(0, 100).replace(/<[^>]*>?/gm, '').trim();
        throw new Error(`Server Error (${response.status}): ${preview || 'Unexpected response format'}`);
      }

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setStatusMessage(data.message || "Thank you! Your message has been sent successfully.");
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      const errMessage = error instanceof Error ? error.message : "Connection failed";
      setStatusMessage(`Submission failed: ${errMessage}. Please try again later.`);
    }
  };

  return (
    <section id="contact" className="py-24 bg-pure-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-6xl font-display font-bold tracking-tighter">Contact Me</h2>
              <p className="text-xl text-light-gray/60 leading-relaxed max-w-md">
                Let's build something great together. Fill the form or drop an email.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:mahameng3@gmail.com" className="flex items-center gap-4 group">
                <div className="bg-white/5 p-4 rounded-xl group-hover:bg-azure-blue transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-light-gray/40 font-bold">Email</p>
                  <p className="text-lg font-medium">mahameng3@gmail.com</p>
                </div>
              </a>
              <a href="tel:+14154006220" className="flex items-center gap-4 group">
                <div className="bg-white/5 p-4 rounded-xl group-hover:bg-azure-blue transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-light-gray/40 font-bold">Direct Line</p>
                  <p className="text-lg font-medium">+1 (415) 400-6220</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/mahamkhan-data" },
                { Icon: Twitter, href: "#" },
                { Icon: Dribbble, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, backgroundColor: "rgba(37, 99, 235, 1)" }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-4 rounded-xl transition-colors"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-off-black p-10 rounded-3xl border border-white/5 shadow-2xl relative"
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
              >
                <div className="bg-azure-blue/10 p-6 rounded-full">
                  <CheckCircle2 size={64} className="text-azure-blue" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-light-gray/60 max-w-sm">{statusMessage}</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-azure-blue font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-light-gray/40">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-pure-black border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-azure-blue transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-light-gray/40">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-pure-black border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-azure-blue transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-light-gray/40">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-pure-black border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-azure-blue transition-colors resize-none" 
                  />
                </div>
                
                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">{statusMessage}</p>
                )}

                <motion.button
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-pure-black disabled:bg-white/50 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all"
                >
                  {status === "loading" ? (
                    <>Sending... <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
