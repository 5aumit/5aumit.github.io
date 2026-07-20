---
layout: single
title: "SetScout"
excerpt: "Agentic dataset discovery from natural-language requirements to ranked reports across Hugging Face and Kaggle catalogs."
collection: portfolio
header:
  teaser: /images/work/setscout.svg
---

<div class="work-detail">

<p class="revamp-meta">LangGraph · Hugging Face · Kaggle</p>

<img class="work-detail__img" src="/images/work/setscout.svg" alt="SetScout pipeline diagram">

<h2>Problem</h2>
<p>Finding the right public dataset means tab-hopping across Hugging Face, skimming READMEs, and mentally scoring fit against your constraints. SetScout automates that loop: describe what you need in plain language, and a four-node LangGraph pipeline searches sources, fetches evidence, and returns a structured markdown report with per-dataset requirement checks and rankings.</p>

<h2>Pipeline</h2>
<p><strong>Decomposer.</strong> Turns form inputs into a <code>SearchSpec</code> with keywords, MeSH terms, sources, and hard constraints. LLM with rule-based fallback.</p>
<p><strong>Searcher.</strong> Parallel async search across Hugging Face and Kaggle. Returns up to 8 candidates.</p>
<p><strong>Gather evidence.</strong> Fetches dataset cards and README excerpts in parallel.</p>
<p><strong>Evaluator.</strong> Single batch LLM call scores all candidates: requirement checks, known issues, fit summaries, and final ranking.</p>

<h2>Stack</h2>
<p>LangGraph, LangChain, Pydantic, Gemini API. Optional Langfuse tracing and Kaggle credentials for extended search.</p>

<h2>Status</h2>
<p>Active development. A Gradio UI and Hugging Face Spaces deployment are in progress; live demo coming soon.</p>

<div class="btn-row">
  <a class="revamp-btn revamp-btn--primary" href="https://github.com/5aumit/setscout">GitHub</a>
  <a class="revamp-btn revamp-btn--primary" href="https://deepwiki.com/5aumit/setscout">DeepWiki</a>
  <a class="revamp-btn revamp-btn--secondary" href="/work/">Back to Work</a>
</div>

</div>
