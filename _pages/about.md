---
permalink: /
title: "Hi, I'm Saumit"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


## About Me
I am an **Applied Machine Learning Engineer** with over three years of experience specialized in building **FDA-approved computer vision models** for medical imaging. Currently, I am pursuing my **Master of Science in Electrical Engineering** at **North Carolina State University**. My expertise spans generative AI, audio signal processing, and medical diagnostics, with a focus on creating high-impact, regulatory-standard AI solutions.

## 🚀 Featured Project: [Floki](https://github.com/5aumit/floki)
<!-- {: .notice--info} -->

<img src="../assets/images/floki-banner.png" alt="Floki Banner" style="width:90%; border-radius: 4px; margin-bottom: 15px;">


**Floki** is an open-source, CLI-based agentic chatbot engineered to automate the query, analysis, and discovery workflows of local MLflow experiment metrics. 

When I was a Data Scientist at DeepTek, I often asked my teammates to help me understand issues in my experiments. MLflow logs were one of the first places we looked. This project aimed to make it more accessible for ML Engineers to do this on their own.

It is actively being developed.

### See it in Action
<img src="../assets/images/floki-demo.gif" alt="Floki CLI Demo" style="width:90%; border: 1px solid #e1e4e8; border-radius: 6px; margin-bottom: 15px;">
*The following GIF is sped up to focus on the demo and move past the MLflow Client load time.*{: .small style="color: #6a737d; display: block; margin-bottom: 15px;"} 

* **Agentic Insights:** Built on LangChain to intelligently route intents and parse historical `mlruns` data logs.
* **Zero-Budget Observability:** Leverages a unified architecture integrating Langfuse multi-turn session tracing.

[ Explore the Repository ](https://github.com/5aumit/floki){: .btn .btn--primary} [ Read Technical Diary ](https://github.com/5aumit/floki/blob/master/diary.md){: .btn .btn--info}

---

## Education
* **M.S. in Electrical Engineering**, North Carolina State University (2027)
* **B.Tech in Electrical & Electronics Engineering**, Manipal Institute of Technology (2022)

## Professional Experience

### Data Scientist | [**DeepTek.ai**](https://deeptek.ai/)  
*June 2022 – July 2025*

* **Regulatory AI Approval (FDA & CE):** Curated localized test sets and designed biostatistical pipelines for global clinical approvals, successfully clearing multi-class algorithms for the **US FDA, CE, Thai FDA, and Singapore HSA**. Managed an MRMC study with **24 US FDA radiologists**, evaluating localization gains using **wAFROC curves** and confidence intervals.
* **Computer Vision Architectures:** Built and optimized semantic segmentation models for chest X-ray scans. Deployed a localized Pleural Effusion model using a **DenseNet backbone with a Feature Pyramid Network (FPN)** that achieved **>90% AUROC** on global testing data.
* **Algorithmic Data Cleaning:** Solved an ambiguous labeling constraint for a fracture detection project by engineering a lung-segmentation overlap pipeline to dynamically segregate mixed rib and clavicular annotations, training a specialized **3-channel multi-class segmentation network** (Rib vs. Clavicle vs. Background).
* **Multi-Modal POC Projects:** 
  * *Digital Pathology (SSL):* Built a proof-of-concept for a Japanese client using Self-Supervised Learning (SSL); mapped ultra-high-resolution histopathological scans (**50k x 50k pixels**) using windowing to generate patch-level embeddings for drug effectiveness classification.
  * *Veterinary Biosignal Analysis:* Engineered a canine arrhythmia detection system by windowing raw dog ECG streams and applying **Mel-Frequency Cepstral Coefficients (MFCCs)** to generate spectrogram inputs for a CNN classifier, achieving **85% recall** across complex cardiac abnormalities.
* **Internal MLOps Tooling:** Led an intern team to build an automated experiment evaluation web app. Replaced tedious evaluation notebooks with a single-line Python logging script that populates a database automatically, exposing an **interactive dashboard** with custom metric sliders, ROC/PRC curves, and runtime rankings.

### Data & Automation Intern | **Anheuser-Busch InBev**
*January 2022 – May 2022*

* **Data Pipeline Engineering:** Engineered and maintained robust ETL data pipelines within **Azure Data Factory** to ingest, clean, and aggregate multi-source operational logs for high-priority Return-To-Office (RTO) analytics.
* **Large-Scale Ingestion:** Integrated disparate internal corporate data streams—including API logs from Produtivo (task mining) and Hop-A-Seat (internal desk reservation tool)—processing over **1M+ rows of data** into a centralized database.
* **Executive Analytics Support:** Architected the backend database layer feeding an executive-facing **Power BI dashboard**, transforming raw asset utilization data into actionable workplace intelligence used by GCC leadership to optimize hybrid work policies.

---

## Publications
* [A Comprehensive Evaluation of DeepTek CXR Analyzer in Detecting and Localising Suspicious Findings in Chest X-rays](https://dx.doi.org/10.26044/ecr2024/C-23322) (ECR 2024)
* [Artificial Intelligence as a Proficient Tool in Detecting Pulmonary Tuberculosis in Massive Population Screening Programmes](https://doi.org/10.2185/jrm.2024-015) (JRM 2024)

---

## Technical Skills
* **Programming Languages**: Python, R
* **ML & AI**: PyTorch, TensorFlow, Keras, Transformers, Ollama, LangChain, Generative AI, RAG , LangFuse
* **Data & Pipelines**: SQL, MongoDB, Azure Data Factory, MLFlow, Pandas, NumPy, OpenCV
* **Version Control & MLOps**: Git, DVC


