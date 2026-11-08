# Demirer Lab website

Source for https://www.demirerlab.com, migrated from Wix in November 2026. The PI (Gözde Demirer) asks Claude for routine updates ("add this paper", "add/remove this person", "add this photo", "post this news"). This file is the playbook for those requests.

- GitHub repository: https://github.com/DemirerLab/demirerlab.github.io (public, first pushed 2026-11-07; the live site builds from `main`). Commits here use the PI's private GitHub address (`267142305+gozdedemirer@users.noreply.github.com`, set in this repo's git config), so no personal email shows in the public history.
- Custom domain: www.demirerlab.com, with demirerlab.com forwarding to it (switched 2026-11-07; set by the `CNAME` file, and verified for the DemirerLab org). Builds deploy the `CNAME` file, so change the domain there, never only in the Pages settings (a build would switch it back). GitHub's certificate covers both names and Enforce HTTPS is on (since 2026-11-08; GitHub renews the certificate automatically). Check with `gh api repos/DemirerLab/demirerlab.github.io/pages --jq .https_certificate`. Don't remove, re-save or switch the custom domain: each change restarts GitHub's certificate request, which stalled for about 12 hours here (it cleared after an org admin opened the repo's Settings > Pages page). DNS stays at Wix: the apex `demirerlab.com` has A records to GitHub's four IPs (185.199.108-111.153), `www` is a CNAME to `demirerlab.github.io`, and a `_github-pages-challenge-DemirerLab` TXT record keeps the domain verified (don't delete it). The domain is registered at Wix and expires 2026-12-17, so keep auto-renew on.

## How the site works

- Jekyll site built from Greene Lab's [lab-website-template](https://github.com/greenelab/lab-website-template) v1.4.0. GitHub Actions builds it on every push to `main` and publishes it to the `gh-pages` branch, which GitHub Pages serves. Pull requests get a preview at `/preview/pr-<N>/`, linked in a PR comment. CI may push an "Update citations" commit to `main` or to the PR branch.
- Publications: `_data/sources.yaml` is the hand-edited list. The cite process (`_cite/cite.py`) expands every `id: doi:...` with Manubot into `_data/citations.yaml`. Never edit `citations.yaml` by hand. Fields set in `sources.yaml` override what Crossref returns.
- Old Wix URLs keep working through `redirect_from` front matter (`/about-4`, `/copy-of-rhizosphere`, `/copy-of-rhizosphere-1` → `/research/<area>/`).
- Local changes to the template (keep them when updating from upstream):
  - Ruby 3.4 and the updated `Gemfile.lock` from upstream PR #356 (unmerged upstream as of 2026-11-04). All jobs are pinned to `runs-on: ubuntu-24.04`.
  - `deploy-preview.yaml` only accepts known PR actions from the preview artifact. `update-citations.yaml` and `update-url.yaml` use `git diff` instead of `tj-actions/verify-changed-files`. `build-site.yaml` checks out the tip of `main`. `first-time-setup.yaml` and `versioning.yaml` are removed (template-only; the first would overwrite our config). `CITATION.cff` is removed.
  - `.nojekyll` is in the repo and in `_config.yaml` `include:`, so GitHub Pages never re-runs Jekyll on the built site.
  - `_includes/citation.html` shows the year only and hides the id for manual entries. `_styles/citation.scss` no longer capitalizes journal names. `_includes/meta.html` uses per-page absolute URLs, a canonical link, and the page's own image for sharing.
  - The tag links in `_includes/post-info.html` and the search link in `_layouts/member.html` point to `news/` and `publications/`. The "last updated" line on posts only appears when a post sets `updated:` (`_layouts/post.html`, `_includes/post-excerpt.html`). The News list uses `thumbnail:` when a post has one (`_includes/list.html`, `_includes/post-excerpt.html`).
  - The footer carries the Caltech/CCE address. `_config.yaml` sets the lab's title, links, a header that follows the dark-mode toggle (`header-dark: auto`) and an always-dark footer (`footer-dark: true`), `/team/<name>/` and `/news/<date>/<title>/` permalinks, and `collections.members.order`.

## Design

"Fresh botanical editorial" (PI-approved design A, November 2026): Fraunces headings over Inter body text, leaf-green and lime accents, full-bleed photo banners, figures on white mat cards, fade-up reveals. All of it is hand-written CSS and vanilla JS in `_styles/`, `_scripts/`, `_includes/` and `_layouts/` (every `_styles/*.scss` and `_scripts/*.js` loads on every page). Refine within it rather than redesigning.

- Where things live:
  - Colors (light and dark), fonts, widths, radii, shadows: `_styles/-theme.scss`. Dark mode has three synced switches: a moon / sun button at the end of the main header bar on wide screens, a "Dark mode" row at the end of the phone and tablet menu (both in `_includes/header.html`, `_styles/header.scss`), and the footer switch. `_scripts/dark-mode.js` keeps them in step and remembers the choice.
  - Header: `_includes/header.html`, `_styles/header.scss`. The first four pages by `nav.order` form the main bar; the rest sit in the slim green strip above it (one menu button on phones and tablets held upright, where the menu opens as a card). The Research dropdown lists the pages under `research/`, ordered by `menu-order:` in their front matter; Escape closes it, and on touch screens the first tap on Research opens it (`_scripts/effects.js`). The phone menu closes when one of its links is followed, so it is closed after Back.
  - Banners: a section with a background image (`{% include section.html background="..." %}`) gets `data-banner` (`_includes/content.html`) and becomes a full-bleed photo under a green gradient (`_styles/background.scss`, which also holds the home hero, tagline and mission panel; the panel narrows on small laptops and tablets to keep the seedling in view and grows on very wide screens). The first paragraph after a banner is a larger standfirst with a drop cap (`_styles/paragraph.scss`). A page without a banner opens with a pale masthead and a leaf drawing (`_styles/section.scss`). News posts always open with that masthead, not a photo banner (`_layouts/post.html`): lab photos are mostly portrait phone shots of people, which a wide banner would crop through faces and enlarge past their resolution, so the photos show whole in the post body instead.
  - Figures: an image alone in its paragraph (a plain markdown image) sits on a white mat card (softer `#eef2e8` in dark mode, on purpose) and opens larger on click (`_styles/image.scss`, `_scripts/lightbox.js`, `_styles/lightbox.scss`). Figure includes in a grid become equal tiles with an incomplete last row centered, and news photos sit in dark frames in dark mode (`_styles/figure.scss`, `_styles/grid.scss`). In `cols.html`, a video and a figure side by side share one height, and a figure beside text stays in view while the text scrolls, never taller than the window (below 1000 px it follows the text) (`_styles/cols.scss`).
  - Research area pages (any page under `research/<area>/`, marked `data-research-area` on `<body>` in `_layouts/default.html`) read as one column at the figure width (`--figure`, 1000 px): the banner title, text, headings, figure cards, video rows, grids and paper lists share both edges, every figure card spans the column (a small figure stays at its own size, centered on its card), section headings sit as balanced blocks on the left edge, and the text is a little larger, 20 px on desktop and about 18 px on phones (the Nanotechnology intro text gets a bit more of its row than the figure beside it) (`_styles/section.scss`, `_styles/paragraph.scss`, `_styles/image.scss`, `_styles/cols.scss`). Other pages keep the 704 px reading measure (`--measure`).
  - Research feature rows and the Home card grid: `_styles/feature.scss`. The Home "Research Directions" cards form a 2 x 2 grid when there are four and one row of three when there are three (on tablets, three cards stack with the image beside the text), so adding or removing a card re-balances on its own. Team rows and member pages: `_styles/portrait.scss`, `_styles/member.scss`. Footer: `_includes/footer.html`, `_styles/footer.scss` (on phones the template link takes a line of its own).
  - Reveals: `_scripts/effects.js` and `_styles/reveal.scss`. Only content below the first screen fades up; nothing is hidden without JavaScript, under reduced motion (which also stops the eCIS video loop) or when printing. While the eCIS animation isn't playing it shows a still, `images/design/ecis-poster.jpg` (set in `_scripts/effects.js`); make a new still if the video is replaced.
- What new content gets automatically: a plain markdown image becomes a mat card that enlarges on click (write a real alt text); a new page under `research/` joins the dropdown and the phone menu (set `menu-order:`) and gets the one-column research layout; a news post's `image:` sets its News list thumbnail (unless `thumbnail:` is set) and the picture shown in link previews, while the post page shows its photos whole in the body; Publications and News searches hide year headings, and whole sections, left without a match.
- Special cases keyed on content: an image whose alt text has the word "logo" or "logos" is not zoomable, and up to three such images in a row share one panel at a matching size (the funder logos on the Research page). Other figures never join, so put related photos in a grid. The Team page balances rows of 5 and of 7-8 people (`_styles/portrait.scss`); check it when a group reaches 6 or 9. The Team alumni list keeps one line per person only while its heading stays "Alumni" (id `alumni`), and a paragraph that is only bold text inside a paper list ("Highlights" on Publications) is styled as a label (`_styles/section.scss`). A `<br>` in a banner title is dropped on phones so the title wraps evenly, so keep a space before it (`Delivery <br>for`).
- Avoid: inline `style` on sections or `<br>` for spacing; third-party libraries or CDNs for effects; Chrome-only CSS such as scroll-driven animations (many visitors use Safari on iPhones and Macs, so pair `backdrop-filter` with `-webkit-backdrop-filter`; the PI uses Chrome); hiding content in CSS outside the `html.reveal-on` guard; new colors without checking WCAG AA contrast in light and dark mode.

## Local tools on the PI's Mac

Each command runs in a fresh shell, so keep the exports on the same line. Always run from the repo root.

```bash
# build (output kept off the iCloud-synced Desktop)
cd ~/Desktop/caltech/projects/demirerlab-website && export PATH="$HOME/.rubies/ruby-3.4.12/bin:$PATH" LANG=en_US.UTF-8 && bundle exec jekyll build --destination "$HOME/Library/Caches/demirerlab-website/_site"

# regenerate _data/citations.yaml (must run from the repo root with the venv's bin on PATH, because cite.py reads _data/ relative to the working directory and calls manubot by name)
cd ~/Desktop/caltech/projects/demirerlab-website && V="$HOME/.local/share/demirerlab-website/venv" && PATH="$V/bin:$PATH" "$V/bin/python" _cite/cite.py

# check what a DOI resolves to
"$HOME/.local/share/demirerlab-website/venv/bin/manubot" cite doi:10.xxxx/yyyy

# check internal links and images in the built site
cd ~/Desktop/caltech/projects/demirerlab-website && export PATH="$HOME/.rubies/ruby-3.4.12/bin:$PATH" LANG=en_US.UTF-8 && bundle exec htmlproofer "$HOME/Library/Caches/demirerlab-website/_site" --disable-external --allow-missing-href --no-enforce-https --ignore-empty-alt
```

- Ruby 3.4.12 lives in `~/.rubies/` (built with ruby-build, with libyaml in `~/.rubies/.deps`). Python with Manubot lives in `~/.local/share/demirerlab-website/venv`. `NotOpenSSLWarning` lines from that Python are harmless.
- Live preview: the Claude desktop app's `demirerlab-website` server (in `~/Desktop/.claude/launch.json`) runs `jekyll serve` on port 4000. Restart it after editing `_config.yaml`. To try an unpublished change on a phone or iPad, add `--host 0.0.0.0` to the `jekyll serve` command in `launch.json` and restart it; a device on the same Wi-Fi then opens `http://<the Mac's Wi-Fi address>:4000` (find the address with `ipconfig getifaddr en0`). Take the flag out again afterwards. The app stops the preview when its browser panel closes; start it again from the app.
- GitHub access: the PI installs the GitHub CLI and runs `gh auth login` and `gh auth setup-git` once, with access to the DemirerLab org. Claude never types or stores passwords or tokens.

## Routine requests

### Add a paper
1. Check whether it's already listed. Search `_data/sources.yaml` for the DOI, the first author and distinctive title words. If it's there as a manual entry (no `id`) or as a preprint, tell the PI and replace that entry rather than adding a second one (see step 4).
2. Confirm the DOI with `manubot cite doi:<doi>` (command above): the title, journal and year must match what the PI described. Never guess a DOI.
3. Put the entry in its section of `sources.yaml` (At Caltech, Prior to Caltech, Patents), newest first, under a one-line comment like the existing ones:
   ```yaml
   # Doe et al. 2026, Nature Plants
   - id: doi:10.xxxx/yyyy
     type: paper                 # paper | preprint (also set publisher: "bioRxiv") | patents: manual entries with type: patent and no group
     group: caltech              # "prior" only for pre-Caltech work
     tags: [genetic-engineering] # optional: nanotechnology, genetic-engineering, rhizosphere (lists the paper on that research page; ask before tagging prior work)
   ```
   - Markers: add an `authors:` list only to keep markers. Copy Manubot's names in Crossref order and append `\*` (equal contribution) or `‡` (corresponding author), quoted as the existing entries do, for example `- "Huan Zhang\*"`. A bare `*` is read as Markdown and italicizes the names between two markers.
   - On Caltech-era papers, mark the corresponding author(s) with ‡, as every existing Caltech entry marks Gözde. Ask the PI if unsure.
4. A paper without a DOI yet ("in press") is a manual entry with `title`, `authors`, `publisher`, `date: YYYY-MM-DD` and `link` (never invent a link). When the DOI arrives, rewrite it as an `id` entry and delete `title`, `publisher`, `date` and `link`, because those fields would override Crossref. Keep `type`, `group`, `tags` and any marker `authors`.
5. Only the year is shown, but the full date sets the order within a year. Placeholder days (with a comment) are used to keep the old site's order, e.g. the in-press paper is dated 2026-12-31 to list first.
6. Copy `_data/citations.yaml` aside, then run the cite process. It must end with "All done!". A failed run still rewrites `citations.yaml` and the build won't complain, so on failure put the copy back (after the first commit: `git checkout -- _data/citations.yaml`), fix the entry, and don't build or push until it passes. A failing entry also blocks deploys in CI.

### Add a person
1. Create `_members/<slug>.md`, where the slug is the person's usual name in lowercase with hyphens, like the existing files (it becomes `/team/<slug>/`):
   ```yaml
   ---
   name: Jane Q. Doe
   image: images/team/jane-q-doe.jpg
   role: phd                        # exactly one of: principal-investigator, research-scientist, postdoc, visiting-professor, phd, undergrad
   description: PhD student, Bioengineering (2026)
   affiliation: NSF Fellow          # optional, used for fellowships
   aliases: [Doe JQ, J. Q. Doe, Jane Q. Doe]   # name forms used by the member page's paper search (include the Crossref form)
   ---

   Bio from the PI, verbatim. Leave the body empty if none was given.
   ```
   Any other `role` value silently leaves the person off the Team page. For a lab manager or technician, ask the PI where they belong (e.g. `role: research-scientist`, `description: Lab Manager`).
2. Photo: a square 800x800 JPEG under 500 KB at `images/team/<slug>.jpg`. Phone photos carry GPS location and `sips` keeps it, so always go through BMP (which drops all metadata and applies the camera rotation). Use separate `sips` calls, work on copies, and never touch the PI's original:
   ```bash
   sips -s format bmp "$SRC" --out "$TMPDIR/p.bmp"
   sips -c S S "$TMPDIR/p.bmp" --out "$TMPDIR/sq.bmp"     # S = shorter side; crops around the center. To move it add --cropOffset <top> <left> with values >= 1 (0 means centered) and check the size after
   sips -s format jpeg -s formatOptions 80 -Z 800 "$TMPDIR/sq.bmp" --out images/team/<slug>.jpg
   ```
   Check the size with `sips -g pixelWidth -g pixelHeight` and `ls -l`, and look at the image to make sure the face is centered.
3. The Team page groups members by role automatically. Within a role, the order follows `collections.members.order` in `_config.yaml`, and anyone not listed appears after the listed members. Add `- <slug>.md` there where the person belongs (it's ordered by role, then by start year).

### Remove a person or move them to alumni
1. Delete their `_members/` file, their photo, and their line in `collections.members.order`. Search the repo for `team/<slug>` to catch links.
2. Check the Alumni list in `team/index.md` first. The old site listed Nicole Yang and Gigi Pistilli as both current members and alumni, so update an existing line instead of adding a duplicate. Otherwise add `- **Name** (YYYY - YYYY Role) - Next position` at the end, and ask for years, role and destination if not given.
3. Git history on `main` and `gh-pages` keeps the old bio and photo. If someone asks to be fully erased, tell the PI that this needs a history rewrite of both branches.

### Post news or add photos
- New item: `_posts/YYYY-MM-DD-short-title.md`, dated today or earlier. Jekyll skips future-dated posts, and the site only rebuilds on a push. Front matter has `title` (a short headline), `image` (first photo), `thumbnail` (see below) and 1–2 `tags` from [award, paper, talk, funding, people, outreach, lab-life]. The body is the PI's sentence with the `YYYY.MM.DD - ` prefix the other posts use. Don't add `date_note`, which marks migrated posts with approximate dates.
- Photos: `images/news/YYYY-MM-DD-<n>.jpg`, numbered per date across posts (if `-1` to `-5` exist for that date, start at `-6`). Strip GPS through BMP as for team photos, then `sips -s format jpeg -s formatOptions 80 -Z 1600 "$TMPDIR/p.bmp" --out images/news/<file>.jpg` (under about 500 KB). Make the list thumbnail with `sips -s format jpeg -s formatOptions 80 --resampleWidth 960 images/news/<file>.jpg --out images/news/thumbs/<file>.jpg` (960 px wide, also for portrait photos, so it stays sharp on Retina screens and phones; use the photo's own width if it is narrower) and set `thumbnail: images/news/thumbs/<file>.jpg`.
- In the body use `{% include figure.html image="images/news/<file>.jpg" caption="..." %}`, and wrap several of them in `{% capture content %}...{% endcapture %}{% include grid.html content=content %}`. To add photos to an existing item, edit that post.

### Edit page text
| Page | File |
|---|---|
| Home | `index.md` |
| Research (+ sub-pages) | `research/index.md`, `research/{nanotechnology,genetic-engineering,rhizosphere}/index.md` |
| Team | `team/index.md` (people are in `_members/`) |
| Publications | `publications/index.md` (papers are in `_data/sources.yaml`) |
| News | `news/index.md` (items are in `_posts/`) |
| Open positions, Contact, Diversity Pledge, DEIA Resources, Recommendation Letters | `<page>/index.md` |

Internal links use Liquid so they also work in PR previews, e.g. `[Team]({{ '/team/' | relative_url }})`. Keep the PI's own wording when moving text. For new prose, follow the lab's conventions (active voice, confident but plain).

## Making a change

1. `git switch main && git pull --rebase` (CI may have pushed commits), then create a branch.
2. Make the change, build, run the link check, and look at the affected pages.
3. Open a pull request and share the preview link from the PR comment (about 5 minutes) with the PI.
4. Merge after the PI approves, or push straight to `main` when the PI says so. The live site updates about 5 minutes later. Never force-push `main`.

## One-time setup: publishing on GitHub

Only the PI signs in. Claude runs the rest with the PI's `gh` session.
1. Create the repo empty, with no README or license: `gh repo create DemirerLab/demirerlab.github.io --public`.
2. Settings:
   - `gh api -X PUT repos/DemirerLab/demirerlab.github.io/actions/permissions -F enabled=true -f allowed_actions=all`
   - `gh api -X PUT repos/DemirerLab/demirerlab.github.io/actions/permissions/workflow -f default_workflow_permissions=read -F can_approve_pull_request_reviews=true` (needed for the weekly citation PR)
   - `gh api -X PUT repos/DemirerLab/demirerlab.github.io/actions/permissions/fork-pr-contributor-approval -f approval_policy=all_external_contributors`
   - No branch protection on `main` that GitHub Actions can't bypass (the workflows push citation updates to `main`).
3. First commit and push of `main`. On-push run #1 skips both jobs by design.
4. Create `gh-pages` with only `.nojekyll`: `git clone --no-checkout <repo-url> <tmp> && cd <tmp> && git switch --orphan gh-pages && touch .nojekyll && git add .nojekyll && git commit -m "Initialize Pages branch" && git push origin gh-pages`.
5. `gh api -X POST repos/DemirerLab/demirerlab.github.io/pages -f "source[branch]=gh-pages" -f "source[path]=/"` (the org must allow public Pages sites), then `gh workflow run on-push.yaml` and check that https://demirerlab.github.io looks right.

## Switching www.demirerlab.com to GitHub Pages

Only after the PI approves the github.io site.
1. Verify `demirerlab.com` for the DemirerLab org (org Settings → Pages → Add a domain, TXT record) to prevent takeover.
2. In Wix (the PI does this): Domains → demirerlab.com → DNS. Point the apex A records to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153 (AAAA 2606:50c0:8000::153 to 2606:50c0:8003::153), and point `www` with a CNAME to `demirerlab.github.io`. Wix may require unassigning the domain from the Wix site first.
3. Commit a `CNAME` file containing `www.demirerlab.com` (or `gh api -X PUT repos/DemirerLab/demirerlab.github.io/pages -f cname=www.demirerlab.com`). Once the certificate is issued, set `-F https_enforced=true`.
4. Check the home page, `sitemap.xml` and the old Wix URLs (`/about-4` etc.). After that, the PI unpublishes the Wix site, deletes the leftover media listed in `MIGRATION_NOTES.md` (item 22) from Wix's Media Manager, and cancels the Wix premium plan at the end of its term. Keep the domain's auto-renew on, or transfer the registration later.
