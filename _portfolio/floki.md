---
title: "Floki 🧭 — MLflow Experiment Agentic Chatbot"
excerpt: "A CLI-based assistant for ML experimentation that helps researchers query, analyze, and gain insights from MLflow logs using LLMs."
collection: portfolio
---

**Floki** is a CLI-based assistant for machine learning experimentation designed to empower researchers to explore, query, and analyze their MLflow experiment logs. 

### Key Features
* **Agentic Insights**: Utilizes LLMs (such as Llama models via Groq) to accurately route intents and analyze historical experiment runs.
* **Observability Integrated**: Features robust session tracking, multi-turn tracing, and analytics monitoring powered by Langfuse.
* **Clean Terminal UI**: Simple command-line interface allowing immediate insights from your `mlruns` directory.

### Architecture & Development Journey
The project is iteratively engineered to handle specialized data retrieval workflows efficiently:
* Optimized context lengths by decoupling core run discovery tools from heavy metric/parameter tables.
* Implemented unified Langfuse tracing architecture under a strict $0 budget ceiling.

[View the Repository](https://github.com/5aumit/floki)