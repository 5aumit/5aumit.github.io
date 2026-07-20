---
layout: single
title: "Floki"
excerpt: "Agentic CLI for querying and analyzing local MLflow experiment logs with natural-language routing, Langfuse tracing, and zero-cost observability."
collection: portfolio
header:
  teaser: /assets/images/floki-banner.png
---

<div class="work-detail">

<p class="revamp-meta">Python · LangChain · MLflow · Langfuse</p>

<h2>Inspiration</h2>
<p>At DeepTek, debugging ML experiments meant diving into raw MLflow logs whenever anomalies appeared. Researchers spent hours parsing dense parameter tables and run metadata. Floki is a CLI agent that makes experiment auditing instantaneous: ask questions in natural language and get structured answers from local <code>mlruns</code> directories without leaving the terminal.</p>

<h2>Demo</h2>
<img class="work-detail__gif" src="{{ '/assets/images/floki-demo.gif' | relative_url }}" alt="Floki CLI demo">
<p class="revamp-meta">Sped up to focus on the core interaction loop and bypass standard MLflow Client initialization overhead.</p>

<h2>Architecture and features</h2>
<p><strong>Agentic run discovery.</strong> Powered by LangChain, Floki routes user intents to targeted sub-tools. Natural language questions become structured queries that filter, match, and extract insights from local experiment directories.</p>
<p><strong>Langfuse observability.</strong> End-to-end multi-turn session tracking and analytics monitoring under strict zero-cost infrastructure limits. Every routing decision, prompt iteration, and database payload is traced natively.</p>
<p><strong>Terminal UI.</strong> A decoupled console UI pattern isolates backend inference from terminal rendering for a smooth, low-latency command-line experience.</p>

<h2>Status</h2>
<p>Active development. Current work expands native database access adapters, adds statistical analysis modules for multi-run delta comparisons, and refines intent-routing prompts for accuracy across thousands of localized experiment runs.</p>

<div class="btn-row">
  <a class="revamp-btn revamp-btn--primary" href="https://github.com/5aumit/floki">GitHub</a>
  <a class="revamp-btn revamp-btn--primary" href="https://deepwiki.com/5aumit/floki">DeepWiki</a>
  <a class="revamp-btn revamp-btn--secondary" href="https://github.com/5aumit/floki/blob/master/diary.md">Technical Diary</a>
  <a class="revamp-btn revamp-btn--secondary" href="/work/">Back to Work</a>
</div>

</div>
