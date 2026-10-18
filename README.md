# adhooge.github.io

Personal website of [Adrien Hooge](https://adhooge.github.io), built on a customized version of the [multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio) theme (a multilingual fork of the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme for academics).

This repository has two remotes:

| Remote    | Repository                                        | Purpose                          |
| --------- | ------------------------------------------------- | -------------------------------- |
| `origin`  | `adhooge/adhooge.github.io`                       | Your website (deploys on push)   |
| `upstream`| `george-gca/multi-language-al-folio`              | Original theme source to sync from |

---

## Fetching changes from the source theme

### 1. One-time setup: add the upstream remote

```bash
git remote add upstream https://github.com/george-gca/multi-language-al-folio.git
git fetch upstream
```

Verify the remotes are configured correctly:

```bash
git remote -v
```

You should see `origin` pointing to `adhooge/adhooge.github.io` and `upstream` pointing to `george-gca/multi-language-al-folio`.

### 2. Fetch and merge upstream changes

```bash
git checkout main
git fetch upstream
git merge upstream/main
```

### 3. Resolve conflicts

If there are merge conflicts, resolve them by keeping your personal customizations (typically in `_config.yml`, `_data/`, `_pages/`, `_bibliography/`, etc.) while taking upstream fixes for theme code (`_layouts/`, `_includes/`, `_sass/`, `assets/`).

If the merge goes wrong, abort and start over:

```bash
git merge --abort
```

### 4. Test locally, then push

After resolving conflicts, [test the site locally](#testing-locally) before deploying. Once everything works, push:

```bash
git push origin main
```

GitHub Actions will rebuild and redeploy the site automatically.

---

## Testing locally

Before pushing changes, build and preview the site locally. Two options are available.

### Option A: Ruby + Bundler

Requires Ruby and Bundler (see [INSTALL.md](INSTALL.md) for setup details):

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open [http://localhost:4000](http://localhost:4000) in your browser. The site reloads automatically when you edit files.

### Option B: Docker

```bash
docker compose up
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Deploying

Once the site works locally, commit and push your changes to `origin`:

```bash
git push origin main
```
