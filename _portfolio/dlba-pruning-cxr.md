---
layout: single
title: "Pruning CXR Models"
excerpt: "Study of how neural network pruning changes chest X-ray classification performance, model footprint, and demographic fairness."
collection: portfolio
header:
  teaser: /assets/images/dlba-pruning-cxr/overall-auroc.png
---

<div class="work-detail">

<p class="revamp-meta">PyTorch · TorchXRayVision · Model Pruning · Medical AI Fairness</p>

<h2>Research question</h2>
<p>Can a chest X-ray model become small enough for resource-constrained devices without losing diagnostic performance or increasing demographic bias? This course project for Deep Learning Beyond Accuracy at NC State tests that trade-off directly.</p>

<h2>Method</h2>
<p>We applied unstructured L1 pruning to the convolutional weights of a pretrained TorchXRayVision DenseNet-121 model. The evaluation used 2,797 unique patients from the NIH ChestX-ray8 test set and focused on atelectasis, infiltration, pleural thickening, and pneumonia.</p>
<p>We tested sparsity from 0% through 100%. At each level, we measured AUROC, recall, and specificity. We also compared worst-group accuracy and true-positive-rate disparity across sex and age groups.</p>

<h2>Performance under pruning</h2>
<figure class="work-detail__figure">
  <img class="work-detail__img" src="{{ '/assets/images/dlba-pruning-cxr/overall-auroc.png' | relative_url }}" alt="Line chart showing almost no AUROC change through 80 percent pruning, followed by sharp declines at higher sparsity levels">
  <figcaption>AUROC stays close to the unpruned baseline through 80% sparsity. Most conditions decline sharply above 85% to 90%.</figcaption>
</figure>
<p>The model retained nearly all baseline AUROC through 80% sparsity. Beyond 85% to 90%, performance fell quickly. At extreme pruning levels, predictions became almost constant: recall moved toward 1 while specificity collapsed toward 0.</p>

<h2>Fairness across age groups</h2>
<figure class="work-detail__figure">
  <img class="work-detail__img" src="{{ '/assets/images/dlba-pruning-cxr/age-fairness.png' | relative_url }}" alt="Four charts comparing AUROC, worst-group accuracy, true-positive-rate disparity, and accuracy gaps across age groups and pruning levels">
  <figcaption>Age-group metrics remain stable through 80% sparsity. Changes at extreme sparsity occur alongside total model failure.</figcaption>
</figure>
<p>Pruning did not materially worsen or correct the existing performance gaps between sex or age groups before the model collapsed. This suggests that the observed inequities came mainly from the training data, not from the low-magnitude weights removed during pruning.</p>

<h2>What the weights show</h2>
<figure class="work-detail__figure work-detail__figure--narrow">
  <img class="work-detail__img" src="{{ '/assets/images/dlba-pruning-cxr/weight-distributions.png' | relative_url }}" alt="Weight distributions across DenseNet model blocks at zero, 80, and 90 percent pruning">
  <figcaption>High-magnitude weights remain structurally similar at 80% sparsity, showing substantial redundancy in the pretrained model.</figcaption>
</figure>

<h2>Contributions and status</h2>
<p>I worked on exploratory data analysis, data cleaning, TorchXRayVision setup and integration, and results analysis.</p>
<p>This is exploratory course-project work preserved for reference. The repository contains rough notebooks, incomplete experiments, and environment-specific paths rather than a repeatable production pipeline.</p>

<div class="btn-row">
  <a class="revamp-btn revamp-btn--primary" href="https://github.com/5aumit/DLBA-Pruning-CXR">GitHub</a>
  <a class="revamp-btn revamp-btn--primary" href="https://github.com/5aumit/DLBA-Pruning-CXR/blob/main/reports/final-report.pdf">Final Report</a>
  <a class="revamp-btn revamp-btn--secondary" href="/work/">Back to Work</a>
</div>

</div>
