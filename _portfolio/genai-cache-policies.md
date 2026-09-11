---
layout: single
title: "Generative AI for Cache Policy Design"
excerpt: "Course project exploring a generate-simulate-improve loop for cache-replacement policy design."
collection: portfolio
header:
  teaser: /assets/images/genai-cache-policies/main-loop-report.png
---

<div class="work-detail">

<p class="revamp-meta">Generative AI · Computer Architecture · Cache Replacement · Simulation</p>

<figure class="work-detail__figure">
  <img class="work-detail__img" src="{{ '/assets/images/genai-cache-policies/main-loop-report.png' | relative_url }}" alt="Evolutionary process workflow showing LLM policy generation, memory, a surrogate, ChampSim, and feedback to the next prompt">
  <figcaption>Evolutionary process workflow.</figcaption>
</figure>

<h2>Question</h2>
<p>Can a generative AI workflow propose useful last-level cache replacement policies without simulating every candidate from scratch? This team project for NC State's Generative AI for Systems course explored that question with an LLM, a learned performance surrogate, and architecture simulation.</p>

<h2>The loop</h2>
<p>The system began with a candidate cache-replacement policy, then compiled and evaluated selected candidates in ChampSim. The simulator measured instructions per cycle, or IPC, across workloads. Those measurements became feedback for the next generation step, so the process could refine an idea instead of treating each prompt as an isolated answer.</p>

<h2>Memory without vector search</h2>
<p>Rather than retrieve documents through an embedding index, the project kept structured experiment memory. Policy descriptions, design lineage, compilation outcomes, and workload-level measurements gave the next prompt direct context about what had already been tried and how it behaved. This vectorless retrieval pattern made the prior experimental record part of the design conversation.</p>

<figure class="work-detail__figure">
  <img class="work-detail__img" src="{{ '/assets/images/genai-cache-policies/surrogate-heuristic-report.png' | relative_url }}" alt="Surrogate heuristic design showing workload correlation clusters, percentile baselines, representative simulation, policy rejection, and full simulation for candidates that continue">
  <figcaption>Surrogate heuristic design.</figcaption>
</figure>

<h2>Screen before the full run</h2>
<p>Not every generated policy needs the same evaluation budget. A screening heuristic compared representative workload evidence with baselines and surrogate estimates to identify weak candidates early. Candidates that cleared that screen moved to broader simulation, where measured outcomes, rather than the heuristic, became the evidence used by the next iteration.</p>

<div class="btn-row">
  <a class="revamp-btn revamp-btn--secondary" href="/work/">Back to Work</a>
</div>

</div>
