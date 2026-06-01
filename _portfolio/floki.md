---
layout: single
title: "Floki 🧭 — LLM-Powered Agentic Assistant for MLflow"
excerpt: "An open-source CLI agent built with Python and LangChain to automate structural queries, run analysis, and observability tracing over local MLflow logs."
collection: portfolio
header:
  teaser: /assets/images/floki-banner.png
---

## 🚀 Featured Project: [Floki](https://github.com/5aumit/floki)

<img src="{{ base_path }}/assets/images/floki-banner.png" alt="Floki Banner" style="width:100%; border-radius: 4px; margin-bottom: 15px;">

### 💡 The Inspiration
During my tenure as a Data Scientist at DeepTek, debugging machine learning experiments was a highly collaborative but time-intensive process. Whenever anomalies arose, my teammates and I would immediately dive into our raw MLflow logs to isolate the root cause. Realizing how much friction researchers face while manually parsing dense tables and parameters, I engineered **Floki**—an intelligent, command-line companion designed to make experiment auditing instantaneous, autonomous, and accessible for ML engineers.

### 🎬 See it in Action
<img src="{{ base_path }}/assets/images/floki-demo.gif" alt="Floki CLI Demo" style="width:100%; border: 1px solid #e1e4e8; border-radius: 6px; margin-bottom: 5px;">
*The following GIF is sped up to focus on the core user interaction loop and bypass standard MLflow Client initialization overhead.*
{: .small style="color: #6a737d; display: block; margin-bottom: 25px;"}

---

### 🛠️ Core Architecture & Key Features

* **Agentic Run Discovery:** Powered by LangChain, Floki acts as an autonomous agent that dynamically routes user intents to targeted sub-tools. It translates natural language questions into structured queries capable of filtering, matching, and extracting insights from local `mlruns` directories.
* **Production-Grade Observability (On a $0 Budget):** Integrated end-to-end multi-turn session tracking and analytics monitoring using a unified Langfuse framework. Every agentic routing decision, prompt template iteration, and database payload transaction is fully traced natively under strict zero-cost infrastructure limits.
* **Clean Terminal UI:** Built on a decoupled console UI pattern, isolating backend inference engines from terminal rendering to ensure a smooth, low-latency command-line interface.

### 📈 Current Project Status
Floki is under active lifecycle development. Ongoing iterations are focused on expanding native database access adapters, introducing advanced statistical analysis modules for multi-run delta comparisons, and refining intent-routing prompts to maintain high accuracy when dealing with thousands of localized experiment runs.

---

<p align="left">
  <a href="https://github.com/5aumit/floki" class="btn btn--primary">🧭 Explore the Repository</a>
  <a href="https://github.com/5aumit/floki/blob/master/diary.md" class="btn btn--info">📖 Read the Technical Diary</a>
</p>