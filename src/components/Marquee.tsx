/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Marquee() {
  const words = [
    "Databricks",
    "Snowflake",
    "Apache Spark",
    "Kafka",
    "Azure",
    "AWS",
    "GCP",
    "dbt",
    "Airflow",
    "Delta Lake",
    "MLflow",
    "Pinecone",
    "Weaviate",
    "Kubernetes",
    "Terraform",
    "PySpark",
  ];

  return (
    <div className="bg-pure-black border-y border-white/10 py-10 overflow-hidden relative">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 40, 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12">
            {words.map((word) => (
              <div key={word} className="flex items-center gap-12 group">
                <span className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white group-hover:text-azure-blue transition-colors">
                  {word}
                </span>
                <span className="text-2xl md:text-4xl font-display font-light text-white/20">/</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
