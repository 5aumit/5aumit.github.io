# DLBA Pruning CXR project page design

## Goal

Add the DLBA Pruning CXR research project to the website's home and Work pages and provide a matching project detail page. The page must explain the study clearly and use selected visuals from its final report.

## Content and structure

The home and Work pages will list "Pruning CXR Models" after the existing Floki and SetScout projects. The home-page section heading will be "Projects." Its summary will state that the project studies how neural network pruning affects chest X-ray performance, compute cost, and demographic fairness.

The detail page will follow the existing Floki and SetScout structure. It will contain:

1. A short technology and research-area label.
2. The research question and motivation.
3. The method: unstructured L1 pruning of a pretrained TorchXRayVision DenseNet-121 model on a filtered NIH ChestX-ray8 test set.
4. The main result: performance remains stable through 80% sparsity and declines sharply above 85% to 90%.
5. The fairness result: pruning does not materially worsen or correct existing sex and age performance gaps before model collapse.
6. A clear exploratory-project status note.
7. Links to the GitHub repository, final report, and Work page.

## Visuals

Extract three figures from the final report and store optimized local image files in the website:

- Overall AUROC change across pruning levels.
- Age-group fairness results across pruning levels.
- Weight distributions at 0%, 80%, and 90% pruning.

The AUROC figure will also serve as the Work page thumbnail. Each image will include useful alternative text and a short caption that explains the result. Images will fit the existing content width and remain readable on small screens.

## Visual design

Reuse the site's current Quiet Technical design system: Young Serif headings, Hanken Grotesk body text, DM Mono metadata, blue-gray colors, thin borders, and restrained spacing. The paper figures provide the page's visual identity, so no new decorative system, animation, or dependency is needed.

## Implementation

- Add one Markdown file to `_portfolio`.
- Add one project row to `_pages/about.md` and rename its project section to "Projects."
- Add one project row to `_pages/work.md`.
- Add the extracted figure files under `assets/images`.
- Add only the small amount of CSS needed for figure captions or layout, if the existing project-image styles are insufficient.

## Validation

- Build the Jekyll site locally.
- Confirm the Work page links to the new detail page.
- Check the detail page at desktop and mobile widths.
- Verify image loading, captions, alternative text, external links, keyboard focus, and dark-theme readability.
- Start the local Jekyll server and leave it running for review.

## Scope limits

Do not refactor existing project pages, add dependencies, alter unrelated content, create a commit, or push changes.
