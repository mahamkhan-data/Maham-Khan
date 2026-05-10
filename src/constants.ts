/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PROJECTS = [
  {
    id: "lakehouse-modernization",
    name: "Enterprise Lakehouse Modernization",
    description: "Consolidated 4 legacy data systems into a unified Databricks-Snowflake lakehouse. Architected automated ingestion for SAP and Salesforce data, achieving a 32% cost reduction and $1.2M in annual infrastructure savings.",
    highlights: ["500+ TB/month data processing", "3x query performance improvement", "Unity Catalog governance"],
    tech: ["Azure", "Databricks", "Snowflake", "Unity Catalog", "Delta Live Tables"],
    image: "https://picsum.photos/seed/lakehouse/1200/800",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "streaming-platform",
    name: "Real-Time Streaming & Data Quality",
    description: "Built a high-throughput streaming platform processing 5M+ events per day with sub-30 second latency. Integrated 200+ automated validation rules to reduce data incidents by 55%.",
    highlights: ["5M+ events/day", "<30s latency", "200+ validation rules"],
    tech: ["Kafka", "Spark Structured Streaming", "AWS", "GCP", "Python"],
    image: "https://picsum.photos/seed/streaming/1200/800",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "genai-infrastructure",
    name: "GenAI & LLM Data Platform",
    description: "Architected the data backbone for production RAG pipelines and embedding generation. Orchestrated vector storage and feature stores for 5+ production AI models, reducing retrieval latency by 45%.",
    highlights: ["5+ Production AI Models", "Vector Search Optimization", "RAG Pipeline Orchestration"],
    tech: ["Pinecone", "Weaviate", "MLflow", "Databricks", "Feature Store"],
    image: "https://picsum.photos/seed/genai/1200/800",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "hipaa-platform",
    name: "HIPAA-Compliant Clinical Data Platform",
    description: "Designed a secure foundation for clinical analytics processing 200+ TB/year. Implemented robust PHI masking and real-time healthcare telemetry while maintaining 99.9% SLA adherence.",
    highlights: ["HIPAA/GDPR Compliant", "99.9% SLA Adherence", "PHI Masking & Security"],
    tech: ["Snowflake", "Airflow", "Kafka", "dbt", "Azure"],
    image: "https://picsum.photos/seed/healthcare/1200/800",
    liveUrl: "#",
    githubUrl: "#",
  }
];

export const EXPERIENCE = [
  {
    company: "NVIDIA",
    role: "Senior Data Engineer",
    period: "Jan 2024 - Present",
    description: "Leading the architecture of production-grade GenAI data platforms and high-scale cloud-native lakehouse systems.",
    achievements: [
      "Architected production GenAI platform supporting 5+ AI models across 10+ business units, reducing inference retrieval latency by 45%.",
      "Governed Databricks and Snowflake lakehouses using medallion architecture and Unity Catalog, processing 500+ TB/month of multi-structured data.",
      "Standardized dimensional modeling frameworks (Star/Snowflake, Data Vault 2.0) improving average query performance by 2-3x.",
      "Designed ingestion pipelines for SAP S/4HANA and Salesforce processing 50M+ records per day with full audit trails."
    ],
    tech: ["Databricks", "Snowflake", "Unity Catalog", "Pinecone", "Weaviate", "Spark"]
  },
  {
    company: "Deaconess Health System",
    role: "Senior Data Engineer",
    period: "Jan 2019 - Dec 2023",
    description: "Engineered robust, HIPAA-compliant healthcare data platforms and real-time clinical streaming architectures.",
    achievements: [
      "Built Kafka and Spark Structured Streaming pipelines processing 5M+ healthcare events per day, reducing data latency from 6 hours to under 10 minutes.",
      "Implemented data quality and monitoring frameworks across 30+ production pipelines, reducing failures by 40%.",
      "Developed AI/ML feature engineering pipelines reducing feature preparation time by 50%.",
      "Built CI/CD pipelines using GitHub Actions and Azure DevOps, cutting deployment time from 4 hours to under 45 minutes."
    ],
    tech: ["Azure", "AWS", "BigQuery", "Kafka", "dbt", "Airflow"]
  },
  {
    company: "RevSpring",
    role: "Data Engineer",
    period: "Jan 2016 - Dec 2018",
    description: "Specialized in ETL/ELT pipeline automation and high-performance data modeling for analytics reporting.",
    achievements: [
      "Built Python-based ETL frameworks reducing full-load runtimes by 65% and cutting processing costs by 28%.",
      "Developed dbt-based dimensional models across 5 reporting domains, improving query performance 3x.",
      "Implemented Kafka event streams for real-time operational analytics with sub-30 second end-to-end latency.",
      "Delivered optimized datasets for Tableau and Power BI, improving dashboard load times by 55%."
    ],
    tech: ["Python", "PySpark", "Redshift", "Kafka", "dbt", "Tableau"]
  },
  {
    company: "Devsinc",
    role: "Associate Data Engineer",
    period: "Jan 2014 - Dec 2015",
    description: "Foundational role building enterprise ETL integrations and automated reporting systems.",
    achievements: [
      "Built ETL/ELT pipelines integrating Salesforce, HubSpot, and REST APIs, reducing manual data preparation by 70%.",
      "Developed dimensional models supporting BI dashboards that cut recurring reporting preparation time by 70%.",
      "Implemented data lineage tracking and metadata management, improving audit request response times by 50%."
    ],
    tech: ["Python", "SQL", "Java", "Salesforce API", "HubSpot API"]
  }
];

export const SKILLS = [
  { category: "Programming", items: ["Python", "SQL", "PySpark", "Scala", "Java"] },
  { category: "Cloud & Infrastructure", items: ["Azure", "AWS", "GCP", "Terraform", "Kubernetes", "Docker"] },
  { category: "Data Platforms", items: ["Databricks", "Snowflake", "Apache Spark", "Kafka", "Delta Lake", "Unity Catalog"] },
  { category: "Analytics & ML", items: ["MLflow", "dbt", "Pinecone", "Weaviate", "Airflow", "Feature Stores"] }
];

export const CERTIFICATIONS = [
  { name: "Databricks Certified Associate Developer", issuer: "Databricks" },
  { name: "dbt Analytics Engineering", issuer: "dbt Labs" },
  { name: "Apache Kafka Fundamentals", issuer: "Confluent" },
  { name: "MLflow for ML Lifecycle", issuer: "Databricks" },
  { name: "AWS Certified Data Analytics", issuer: "AWS (In Progress)" },
  { name: "Azure DP-203", issuer: "Microsoft (In Progress)" }
];

export const STATS = [
  { label: "Years Experience", value: "10+", suffix: "" },
  { label: "Data Processing", value: "500+", suffix: "TB/Month" },
  { label: "AI Models Prod", value: "5+", suffix: "" },
  { label: "Infrastructure Savings", value: "$1.2M", suffix: "" }
];
