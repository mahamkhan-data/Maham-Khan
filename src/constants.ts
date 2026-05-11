/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PROJECTS = [
  {
    id: "lakehouse-modernization",
    name: "Enterprise Lakehouse Framework",
    description: "Consolidated 4 legacy on-premise silos into a production Medallion architecture (Bronze/Silver/Gold) on Databricks. Engineered metadata-driven ingestion for SAP and Salesforce using Delta Live Tables, processing 500+ TB/month with full lineage tracking and PII masking via Unity Catalog.",
    highlights: ["Medallion Architecture", "Unity Catalog Governance", "Delta Live Tables"],
    metrics: [
      { label: "Cost Saving", value: "$1.2M", context: "Annual infra overhead reduction" },
      { label: "Performance", value: "3x Faster", context: "Query speedup via partition pruning" }
    ],
    tech: ["Azure", "Databricks", "Snowflake", "Terraform", "Unity Catalog"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/mahamkhan-data/lakehouse-framework",
  },
  {
    id: "streaming-platform",
    name: "Real-Time Observability Pipeline",
    description: "Built a high-throughput streaming platform serving 5M+ health telemetry events/day. Architected Spark Structured Streaming and Kafka integrations with sub-30s E2E latency. Integrated 200+ automated Great Expectations validation rules for preventative quality monitoring.",
    highlights: ["Kafka & Spark Streaming", "Schema Registry Enforcement", "Great Expectations JS"],
    metrics: [
      { label: "Latency", value: "<30s", context: "End-to-end data availability" },
      { label: "Reliability", value: "99.9%+", context: "SLA for clinical reporting" }
    ],
    tech: ["Kafka", "Spark", "AWS", "Python", "Great Expectations"],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/mahamkhan-data/streaming-observability",
  },
  {
    id: "genai-infrastructure",
    name: "GenAI RAG Infrastructure",
    description: "Architected the data foundation for production RAG pipelines supporting 5+ LLM models. Engineered multi-tenant vector indexing using Pinecone and Weaviate, orchestrating automated embedding regeneration cycles while reducing inference retrieval latency for internal teams.",
    highlights: ["Multi-tenant Vector Indexing", "Embedding Pipeline Optimization", "MLflow Tracking"],
    metrics: [
      { label: "Retrieval", value: "-45%", context: "Reduction in vector search latency" },
      { label: "Scaling", value: "5+ Models", context: "Productionized GenAI workloads" }
    ],
    tech: ["Pinecone", "Weaviate", "MLflow", "Databricks", "LlamaIndex"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/mahamkhan-data/genai-data-infra",
  },
  {
    id: "hipaa-platform",
    name: "HIPAA Data Warehouse (dbt)",
    description: "Designed a secure analytics foundation processing 200+ TB/year of PII/PHI data. Implemented dbt-based modular modeling to unify claims and EHR sources. Enforced column-level encryption and dynamic masking to maintain absolute compliance while enabling self-service analytics.",
    highlights: ["PHI Masking & Security", "dbt Modeling (Modular)", "Modular CI/CD Testing"],
    metrics: [
      { label: "Compliance", value: "HI-TRUST", context: "Audited security standards" },
      { label: "Insight Speed", value: "75%", context: "Faster self-service report generation" }
    ],
    tech: ["Snowflake", "dbt", "Airflow", "Azure", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "#",
    githubUrl: "https://github.com/mahamkhan-data/hipaa-warehouse-modeling",
  }
];

export const EXPERIENCE = [
  {
    company: "NVIDIA",
    role: "Senior Data Engineer",
    period: "Jan 2024 - Present",
    description: "Leading the architecture of high-throughput data platforms, focusing on the intersection of GenAI infrastructure and enterprise lakehouse governance.",
    achievements: [
      "Architected the data foundation for RAG-based LLM applications, implementing multi-tenant vector indexing that reduced retrieval latency by 45% for 10+ internal business units.",
      "Engineered a unified governance layer using Unity Catalog for a 500+ TB/month data estate, balancing strict PII/PHI compliance with developer self-service autonomy.",
      "Refactored legacy dimensional models into a scalable semantic layer, reducing engineering toil by 60% and improving reliability through automated data quality gates.",
      "Developed high-concurrency ingestion frameworks for SAP and Salesforce, processing 50M+ daily events with guaranteed exactly-once delivery and full lineage."
    ],
    tech: ["Databricks", "Snowflake", "Spark", "Pinecone", "Unity Catalog", "Azure"]
  },
  {
    company: "Deaconess Health System",
    role: "Senior Data Engineer",
    period: "Jan 2019 - Dec 2023",
    description: "Built and scaled HIPAA-compliant analytics infrastructure, focusing on real-time clinical data streams and predictive modeling foundations.",
    achievements: [
      "Modernized clinical data processing by implementing Kafka-based streaming, reducing the window for critical care reporting from 6 hours to under 10 minutes.",
      "Developed a custom AI/ML feature store that slashed feature preparation time by 50% for clinical decision support models serving 500+ clinicians.",
      "Established enterprise-wide data observability patterns, reducing production incidents by 40% through proactive profiling and schema-registry enforcement.",
      "Mentored a team of 4 junior engineers, establishing dbt and Airflow best practices that reduced onboarding time from months to weeks."
    ],
    tech: ["Kafka", "Spark", "Azure", "dbt", "Airflow", "BigQuery"]
  },
  {
    company: "RevSpring",
    role: "Data Engineer",
    period: "Jan 2016 - Dec 2018",
    description: "Standardized ETL/ELT lifecycles and optimized cloud warehouse costs for large-scale financial and patient engagement data.",
    achievements: [
      "Re-engineered Python-based ETL frameworks to support incremental loading, reducing runtime by 65% and realizing ~$90K in annual compute savings.",
      "Built resilient data models using dbt for 5 critical reporting domains, improving query performance significantly by optimizing join strategies and partition pruning.",
      "Architected Kafka event streams for real-time operational metrics, achieving sub-30 second latency for high-priority business dashboards.",
      "Designed and deployed optimized datasets for Power BI, reducing dashboard load times by 55% for 200+ executive users."
    ],
    tech: ["Python", "PySpark", "Redshift", "dbt", "Kafka", "Snowflake"]
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
