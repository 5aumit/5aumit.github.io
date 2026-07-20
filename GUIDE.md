# Local guide (ui-revamp worktree)

This folder is a **git worktree** of `5aumit/5aumit.github.io`, on branch `ui-revamp`.

| | Path / branch |
|---|---|
| This worktree | `…/ui-revamp` → branch `ui-revamp` |
| Main checkout | `/mnt/d/5aumit-github-io/5aumit.github.io` → `master` |
| Live Site | https://5aumit.github.io (GitHub Pages from `master`) |

Prototype reference (not served): `.scratch/04-portfolio/`  
Product glossary: `CONTEXT.md`

---

## Edit content (no agent)

| What | Edit |
|------|------|
| Homepage (`/`) | `_pages/about.md` |
| Work | `_pages/work.md` |
| Publications page | `_pages/publications.html` |
| Paper entries | `_publications/*.md` (title, venue, date, `paperurl`, `header.teaser`) |
| Floki / SetScout | `_portfolio/floki.md`, `_portfolio/setscout.md` |
| Nav | `_data/navigation.yml` |
| Name, bio, socials | `_config.yml` → `author:` |
| Quiet Technical CSS | `assets/css/revamp.css` |
| Marquee / section spy | `assets/js/revamp.js` |
| Images | `images/` (logos, skills, writing, work) and `assets/images/` (Floki media) |

Copy rules (see `CONTEXT.md`): no em/en dashes in visitor-facing text; use `to` in date ranges.

After changing `_config.yml`, restart the server (config is not hot-reloaded).

---

## Run locally

From this worktree:

```bash
cd /mnt/c/Users/saumi_ougqrfm/orca/workspaces/5aumit.github.io/ui-revamp
bundle config set --local path 'vendor/bundle'   # once
bundle install                                   # once / after Gemfile changes
bundle exec jekyll serve -H 127.0.0.1 --port 4000
```

Open **http://127.0.0.1:4000** (or **http://localhost:4000**; same site).

Useful flags:

- Default `jekyll serve` watches files and rebuilds.
- `--no-watch` is faster on WSL/Windows mounts but **does not** pick up edits until you restart (or rebuild).
- One-shot rebuild without serving:

```bash
bundle exec jekyll build --config _config.yml,_config_docker.yml
```

`_config_docker.yml` sets `url: ""` so assets stay root-relative for local preview. Prefer that when doing a plain `build` while a server is already pointing at `_site`.

If nav links vanish after a change: primary items must keep the `persist` class in `_includes/masthead.html` (stops Academic Pages greedy-nav from hiding them).

---

## Go live

GitHub Pages serves **`master`**. This worktree is **`ui-revamp`**, so nothing here is public until it lands on `master`.

### Recommended: PR then merge

```bash
# in this worktree
git status
git add -A
git commit -m "Your message"
git push -u origin ui-revamp
```

Then open a PR into `master` (GitHub UI or `gh pr create --base master`), review, merge.

Or from the main checkout after the branch is pushed:

```bash
cd /mnt/d/5aumit-github-io/5aumit.github.io
git fetch origin
git checkout master
git merge origin/ui-revamp   # or merge via PR
git push origin master
```

After `master` updates, wait a minute for Pages to rebuild, then check https://5aumit.github.io.

### Do not

- Force-push `master` unless you intend to rewrite production history.
- Expect `.scratch/` Prototypes to appear on the Live Site (they are local only unless you deliberately add them).

---

## Quick checklist before shipping

1. `bundle exec jekyll serve` and click Home → Work → Publications → Floki → SetScout (light + dark).
2. Confirm CV PDF link and DeepWiki buttons.
3. Commit on `ui-revamp`, push, merge to `master`.
4. Verify https://5aumit.github.io.
