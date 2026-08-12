# Flipbox — PHP / WordPress Compatibility Report

**Plugin:** Flipbox (`flipbox`)
**Version:** 1.3.1 → 1.5.0
**Branch:** `flipbox-dev` (branched off `latest`, not `master` — see note)
**Date of audit:** 2026-08-09

> **Branch note:** the skill's default is to branch off `master`, but `master` here is
> 5 commits *behind* `latest` and has nothing `latest` lacks. Branching off `master`
> would have silently dropped the WP 6.5 compatibility commit (`a010a31`) and the
> webpack frontend-JS work (`9fdf4b9`). Branched off `latest` instead.

---

## 1. Detected original baseline (and how)

Header/readme claims vs. what the code actually proves:

| | Declared before this pass | Proven by code |
|---|---|---|
| PHP | *not declared at all* | **8.0+** (see below) |
| WordPress | `Requires at least: 5.6`, `Tested up to: 6.5` | **5.6** floor, honest |

**PHP evidence, oldest → newest construct found:**

| Evidence | File:line | Implies |
|---|---|---|
| `[]` short array syntax throughout | `flipbox.php:42`, everywhere | PHP 5.4+ |
| `...$args` variadic + `new static( ...$args )` | `includes/font-loader.php:21,23` | PHP 5.6+ |
| `throw new Error( … )` (`Error` class did not exist pre-7.0) | `flipbox.php:36` | PHP 7.0+ |
| `str_contains()` | `includes/helpers.php:46` | **PHP 8.0+** |

So the shipped 1.3.1 silently required **PHP 8.0** while declaring no floor at all —
any site on PHP 7.4 or below got a fatal `Call to undefined function str_contains()`
the moment a post edit screen was opened. That is the single worst finding here.

**WordPress evidence:**

| Evidence | File:line | Implies |
|---|---|---|
| `register_block_type` + `WP_Block_Type_Registry` | `flipbox.php:113-114` | WP 5.0+ |
| Explicit `<= 5.6` branch returning the block *name* instead of a *path* | `includes/helpers.php:92` | author deliberately supports WP 5.6 |
| `register_block_type( __DIR__ )` path form (the other branch) | `flipbox.php:115` | WP 5.8+ path form, 5.5+ via `block.json` |
| `block.json` `apiVersion: 2` | `block.json:2` | WP 5.6+ |
| `site-editor.php` hook handling | `includes/helpers.php:46` | WP 5.9+ |

WP floor of **5.6** is genuine and was already declared correctly.

---

## 2. Target range

Checked live on **2026-08-09**:

- `https://www.php.net/releases/index.php?json&max=4` → latest **PHP 8.5.9**;
  actively supported branches: **8.2, 8.3, 8.4, 8.5**
- `https://api.wordpress.org/core/version-check/1.7/` → current **WordPress 7.0.3**
  (offers also list 6.9.6, 6.8.7, 6.7.6)

**Target range verified against:**

- PHP: 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5
- WordPress: 5.6, 5.7, 5.8, 5.9, 6.0 → 6.9, **7.0**

After the fixes, the PHP source is syntactically valid back to 5.6, and the lowest
version it genuinely *runs* on is 7.0 (`throw new Error()` at `flipbox.php:58`
needs the PHP 7 `Error` class).

The **declared** floor is deliberately higher than either: **PHP 7.4 / WP 6.0**,
the policy minimum. The rule is *detected original, or the policy minimum,
whichever is higher* — here the policy minimum wins on both axes:

| | Detected original | Policy minimum | **Declared** |
|---|---|---|---|
| PHP | 7.0 (`Error` class) | 7.4 | **7.4** |
| WordPress | 5.6 (`< 5.7` branch) | 6.0 | **6.0** |

No code depends on the gap. Every fix in this pass is a single construct valid
across the whole 5.6 → 8.5 range, so raising the declaration changes no behaviour —
it only stops WordPress offering the plugin to sites below the line.

One consequence: at a WP 6.0 floor the `version_compare( …, '5.7', '<' )` branch in
`Flipbox_Helper::get_block_register_path()` is now unreachable. Left in place —
removing it is a code change, not a metadata change. See §5(h).

---

## 3. Issue table

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `flipbox.php:27` | `require_once` of `lib/style-handler/style-handler.php`, an **uninitialised git submodule** (`git submodule status` shows `-74863767…`), with no existence guard → `Failed to open required file` fatal, site-wide | Any PHP / any WP, whenever the submodule is not checked out | **Critical** |
| 2 | `includes/helpers.php:46` | `str_contains()` — PHP 8.0+ function, called on every `post.php` / `post-new.php` / `themes.php` admin load | PHP 5.6 – 7.4 (fatal) | **Critical** |
| 3 | `includes/helpers.php:47` | `$controls_dependencies = include_once …` — `include_once` returns **`bool true`**, not the array, if the file was already included. Then `$controls_dependencies['dependencies']` is `null` and `array_merge(null)` throws `TypeError` | PHP 8.0+ (fatal); PHP 7.x warning + broken editor controls | **Critical** |
| 4 | `includes/helpers.php:92` | `(float) get_bloginfo('version') <= 5.6` — float cast of a version string. `(float) "5.10"` is `5.1`, `(float) "7.0.3"` drops the patch | Any x.10+ release → block registered by name instead of path | **High** |
| 5 | `flipbox.php` (header) | No `Requires PHP`, no `Requires at least`, no `Tested up to` in the main plugin header | WP 5.5+ cannot warn users before a fatal install; wp.org shows "untested" | **High** |
| 6 | `includes/helpers.php:58` | `'eb_wp_version' => (float) get_bloginfo('version')` — same float-cast defect, but the value crosses into the `controls` submodule's JS | WP x.10+ | **High** — *flagged, not fixed, see §5* |
| 7 | `flipbox.php:110` | `filemtime()` with no `file_exists()` guard; on a missing file it warns and returns `false`, which is then passed as the stylesheet version | PHP 8.0+ (warning + broken cache-bust) | **Medium** |
| 8 | `flipbox.php:1` | Missing `if ( ! defined( 'ABSPATH' ) ) exit;` guard — the file is directly reachable over HTTP | All versions | **Medium** |
| 9 | `assets/js/eb-animation-load.js:26` | `DOMNodeInserted` — a Mutation Event, **removed from Chrome 127+ and Firefox 127+ (2024)**. The editor animation-preview handler simply stopped binding | Current browsers, all WP/PHP | **Medium** |
| 10 | `includes/post-meta.php:12` | `add_filter('init', …)` used to register an action; the callback returns `null` | Works today by accident; wrong-by-contract | **Low** |
| 11 | `flipbox.php:30-32` | `define()` calls inside the `init` callback, so the constants do not exist before `init:99` | Latent — nothing currently reads them earlier | **Low** |
| 12 | `flipbox.php:84-103` | Three `wp_register_style()` calls with no `$ver` argument → WordPress falls back to the *core* version string for cache-busting | All versions (stale-cache risk on plugin update) | **Low** |
| 13 | `flipbox.php:36` | `throw new Error()` inside an `init` action — an uncatchable fatal over a missing build artifact; also `Error` does not exist on PHP 5.6 | PHP 5.6 (wrong error), all versions (white screen) | **Low** — *flagged, not fixed, see §5* |
| 14 | `block.json:2` | `apiVersion: 2`; API v3 (iframed editor) has been available since WP 6.3 | Not broken, but the block renders in the compatibility iframe path | **Low** — *flagged, not fixed, see §5* |
| 15 | `src/index.js:24-28` | Block keywords use text domain `"essential-blocks"`, but the plugin's declared `Text Domain` is `flipbox` | Translations for those strings never load | **Low** — *flagged, not fixed, see §5* |
| 16 | `readme.txt:3` | 8 entries in `Tags:` — wp.org honours a maximum of 5 | wp.org listing only | **Low** — *flagged, not fixed, see §5* |
| 17 | `flipbox.php:106-120` | `fontpicker-default-theme` and `fontpicker-matetial-theme` are registered against `assets/css/fonticonpicker.base-theme.react.css` and `…material-theme.react.css`, **neither of which exists on disk**. Both handles are also never enqueued anywhere in the codebase | Harmless today (registration alone requests nothing), but dead code pointing at 404s | **Low** — *flagged, not fixed, see §5* |
| 18 | `.gitattributes:46` | `dist/**/*.* export-ignore` — if the zip is ever cut with `git archive` instead of `wp dist-archive`, the entire built `dist/` output is stripped and the plugin ships broken. `.gitattributes` also lacks `config` and `controls` entries that `.distignore` has | Any `git archive`-based build | **Medium** — *flagged, not fixed, see §5* |

No `$wpdb` usage, no `mysql_*`, no `create_function`, no `each()`, no
`FILTER_SANITIZE_STRING`, no `${var}` interpolation, no curly-brace offsets, no
implicit-nullable parameters, no dynamic-property creation, no jQuery at all
(the plugin is vanilla JS), and no REST routes — so the entire REST
`permission_callback` and `$wpdb->prepare()` class of findings is not applicable.

---

## 4. Fixes applied

Mapped 1:1 to the table above.

| # | Fix |
|---|---|
| 1 | `flipbox.php` — wrapped the style-handler `require_once` in `file_exists()`. The plugin now degrades instead of fataling when the submodule is absent. |
| 2 | `includes/helpers.php` — `str_contains($x, $y)` → `strpos($x, $y) !== false`. Identical semantics, valid on every PHP version in range, no polyfill needed. The query string is now also run through `sanitize_text_field( wp_unslash( … ) )` and `isset()`-guarded. |
| 3 | `includes/helpers.php` — `include_once` → `include`, plus a `file_exists()` pre-check and an `is_array()` / `isset(['dependencies'])` guard that returns early rather than fataling. |
| 4 | `includes/helpers.php` — `(float) get_bloginfo('version') <= 5.6` → `version_compare( get_bloginfo('version'), '5.7', '<' )`. `< 5.7` is the exact behavioural equivalent of the old `<= 5.6` float test (`5.6.2` → old `5.6 <= 5.6` true; new `version_compare('5.6.2','5.7','<')` true), so no branch flips on any real release. |
| 5 | `flipbox.php` header — added `Requires at least: 6.0`, `Tested up to: 7.0`, `Requires PHP: 7.4`. Same three fields added/updated in `readme.txt`. These are the **policy floors** (PHP 7.4 / WP 6.0), which sit above the code's detected original baseline — see §2. |
| 7 | `flipbox.php` — `filemtime()` guarded by `file_exists()`, falling back to `EB_FLIPBOX_BLOCKS_VERSION`. |
| 8 | `flipbox.php` — added the `ABSPATH` guard. |
| 9 | `assets/js/eb-animation-load.js` — `DOMNodeInserted` listener replaced with a `MutationObserver` on `document.body` plus an idempotent bind guard (`boundAnimationSelect`) so the change handler is attached exactly once. Restores the originally intended behaviour on current browsers; no new behaviour added. |
| 10 | `includes/post-meta.php` — `add_filter('init', …)` → `add_action('init', …)`. |
| 11 | `flipbox.php` — the three `define()` calls moved to file scope, each wrapped in `! defined()`, and placed **above** the `require_once` block so the includes can rely on them. Ordering is otherwise unchanged; nothing read these constants before `init` previously, so this is a hardening move, not a behaviour change. |
| 12 | `flipbox.php` — added `EB_FLIPBOX_BLOCKS_VERSION` as the `$ver` argument to the two fontpicker styles and the FontAwesome style. |

Version bumped **1.3.1 → 1.5.0** (minor) and kept in sync across `flipbox.php`
header, `EB_FLIPBOX_BLOCKS_VERSION`, `readme.txt` `Stable tag`, and
`package.json`. A `= 1.5.0 =` changelog entry was added to `readme.txt`.

---

## 5. Flagged, not auto-fixed — your decision

These all change user-facing behaviour or cross a repository boundary, so they
were left alone.

**a. `eb_wp_version` float cast (issue #6, `includes/helpers.php:58`)**
`'eb_wp_version' => (float) get_bloginfo('version')` is handed to JavaScript and
consumed inside the **`controls` submodule**, which is not checked out here, so
its comparison logic is not visible. On WP 7.0.3 the cast yields `7`, which still
compares correctly against every threshold the plugin cares about — so this is not
broken *today*. It breaks the first time WordPress ships an `x.10` release
(`(float) "7.10"` is `7.1`, which is *less* than `7.9`).
**Recommendation:** change both sides together — pass the raw string and switch the
`controls` JS to a semver-aware comparison. Not something to do from inside this
plugin alone. *Awaiting your decision.*

**b. `throw new Error()` on a missing build artifact (issue #13, `flipbox.php:36`)**
Throwing from inside an `init` action white-screens the entire site — front end
and admin — because a `dist/` file is missing. A graceful `return` plus an
`admin_notice` would be far safer, but that is a visible behaviour change (silent
degradation instead of a hard stop), so I left the `throw` in place.
**Recommendation:** replace with an early `return` + admin notice. *Awaiting your decision.*

**c. `block.json` `apiVersion: 2` (issue #14)**
API v3 has been the standard since WP 6.3 and is what the iframed editor expects.
Bumping it changes how the block is rendered inside the editor canvas and needs a
visual pass on the flip animation and the FontAwesome icon rendering.
**Recommendation:** bump to `3` and QA the editor preview in a follow-up. *Awaiting your decision.*

**d. Text-domain mismatch in block keywords (issue #15, `src/index.js:24-28`)**
`__("eb flipbox", "essential-blocks")` etc. use the `essential-blocks` domain
while the plugin declares `flipbox`. Fixing it changes translation lookup keys and
requires a `dist/` rebuild.
**Recommendation:** switch to `flipbox` and rebuild. *Awaiting your decision.*

**e. `readme.txt` has 8 tags (issue #16)**
wp.org honours 5. Which three to drop is a marketing/SEO call, not a technical one.
*Awaiting your decision.*

**f. Dead fonticonpicker style registrations (issue #17, `flipbox.php:106-120`)**
`assets/css/` contains only `animate.min.css` and `fontawesome/` — the two
`fonticonpicker.*.react.css` files the plugin registers were never in the repo.
Neither handle is enqueued anywhere either, so nothing 404s at runtime; they are
simply dead. Either the files should be restored (if the icon picker is meant to
be themed) or the two `wp_register_style()` blocks removed.
**Recommendation:** delete the two registrations. Left in place because removing a
public style handle can break anything that enqueues it as a dependency.
*Awaiting your decision.*

**h. Dead WP 5.x branch after the floor was raised to 6.0 (`includes/helpers.php:104-112`)**
`Flipbox_Helper::get_block_register_path()` still carries
`version_compare( get_bloginfo('version'), '5.7', '<' )`, which returns the block
*name* instead of the *path* on WordPress older than 5.7. With `Requires at least: 6.0`
that branch can no longer be reached.
**Recommendation:** collapse the method to always return `$blockPath`, or drop it and
inline the path at the `register_block_type()` call. Left alone because it is a code
change, and the branch is harmless dead weight. *Awaiting your decision.*

**g. `.gitattributes` contradicts `.distignore` (issue #18)**
`.gitattributes` carries `dist/**/*.* export-ignore`, which strips the entire built
output. It is harmless while builds go through `wp dist-archive` (which reads
`.distignore`), but it is a live trap for any `git archive` / GitHub source-zip
path, and it is missing the `config` and `controls` entries `.distignore` has.
**Recommendation:** drop the `dist/**/*.*` line and bring the two files into sync.
Not touched — you only asked for `.distignore`. *Awaiting your decision.*

---

## 6. Genuine old-vs-new conflicts

**Declared PHP floor.** The code as shipped in 1.3.1 required PHP 8.0
(`str_contains`) while `readme.txt` implied support back to whatever WP 5.6 allowed
(PHP 5.6.20). That contradiction is now resolved *downward*: `str_contains` was
removed, so the source is syntactically valid to PHP 5.6, and the floor is declared
at **7.0** — set by `throw new Error()` alone. If item **5(b)** is accepted, the
floor could legitimately drop to 5.6; if instead you prefer to track WordPress's
own current floor, **7.2.24** would be the modern choice. I picked 7.0 because it
is the lowest version the code genuinely runs on today, which is what the field is
supposed to mean.

No other conflict: nothing else in this plugin needed a version-gated code path.
Every fix is a single construct valid across the entire 5.6 → 8.5 range, so no
`PHP_VERSION_ID` or `function_exists()` gates were introduced.

---

## 7. Declared compatibility after this pass

| Field | `flipbox.php` | `readme.txt` |
|---|---|---|
| `Requires at least` | 6.0 | 6.0 |
| `Tested up to` | 7.0 | 7.0 |
| `Requires PHP` | 7.4 | 7.4 |
| Version / `Stable tag` | 1.5.0 | 1.5.0 |

Effective declared range: **PHP 7.4 → 8.5.9**, **WordPress 6.0 → 7.0.3**.

The code was audited and fixed across the wider **PHP 5.6 → 8.5.9 / WP 5.6 → 7.0.3**
range, so sites below the declared floor are not *broken* — they are simply out of
declared support.

---

## 8. Verification performed

- `php -l` (PHP 8.5.8 CLI) across every PHP file, `node_modules` excluded —
  **8/8 clean**, including the generated `*.asset.php` files:
  `flipbox.php`, `includes/post-meta.php`, `includes/font-loader.php`,
  `includes/helpers.php`, `dist/index.asset.php`, `dist/frontend.asset.php`,
  `dist/modules.asset.php`, `dist/frontend/index.asset.php`.
- `node --check assets/js/eb-animation-load.js` — clean.
- Post-fix grep for PHP 8.0+-only constructs (`str_contains`, `str_starts_with`,
  `str_ends_with`, `?->`, `fn(`, `match(`, `readonly`, `enum`, `never`, `#[`,
  `??`, `<=>`) across `flipbox.php` and `includes/` — **zero hits in code**
  (three hits are the explanatory comments added by this pass).
- Grep for legacy PHP (`mysql_*`, `create_function`, `ereg*`, `money_format`,
  `strftime`, `utf8_encode`, `FILTER_SANITIZE_STRING`) and for `$wpdb` — no hits.
- Grep for jQuery-3 / Migrate removals (`.live()`, `.size()`, `andSelf`,
  `$.parseJSON`, `$.trim`) across `src/` and `assets/` — no hits; the plugin
  ships no jQuery.
- Confirmed every enqueued asset path resolves on disk (`dist/style.css`,
  `dist/modules.js`, `dist/frontend/index.js`, `dist/index.js`, `dist/modules.css`,
  `dist/style-modules.css`, `assets/css/animate.min.css`,
  `assets/css/fontawesome/css/all.min.css`).
- `phpcs` — **not installed** on this machine (`phpcs: command not found`).
  Skipped rather than installing global tooling unprompted.
- **Not run:** live smoke test in a browser against a real WP 7.0.3 install, and
  any test on the `controls` submodule, which is not checked out
  (`git submodule status` shows both submodules uninitialised).

Nothing was committed or pushed. All changes are in the working tree on
`flipbox-dev`.

---

## 9. Frontend breakage — root cause and fix (post-audit)

**Symptom:** block correct in the editor, broken on the front end.

**Root cause: the `lib/style-handler` git submodule was never initialised.**

Flipbox has no CSS in its saved markup. `src/save.js` emits structure only. Styling
comes from two places:

| Context | Source of CSS |
|---|---|
| Editor | `StyleComponent` (JS) renders a live `<style>` tag *and* stores the generated CSS in the block's `blockMeta` attribute |
| Front end | PHP `EbStyleHandler` reads `blockMeta` out of the saved block, builds `wp-content/uploads/eb-style/eb-style-<postID>.min.css`, and enqueues it on `wp_enqueue_scripts` |

`EbStyleHandler` lives in `lib/style-handler/style-handler.php` — the uninitialised
submodule (issue #1). With that file absent, the front-end half of the pipeline
simply does not exist: no per-post CSS is generated, nothing is enqueued, and the
block renders with no width, height or colours. The editor is unaffected because it
never uses the PHP path. That asymmetry is exactly the reported symptom.

The `file_exists()` guard added in §4 is what turns this from a site-wide fatal into
a silent front-end-only failure — correct behaviour, but it means the missing
submodule fails quietly rather than loudly.

**Why it was masked on this dev site:** `EbStyleHandler` is wrapped in
`class_exists()`, and four sibling plugins ship the same library. With
`image-comparison` and `price-table-block` active, one of them supplied the class and
flipbox's front end worked. Flipbox shipped on its own — as it is on wordpress.org —
has nothing to fall back on.

**Fix applied:** `git submodule update --init --recursive` (checks out
`lib/style-handler` at `74863767` and `controls` at `807ed39e`). No plugin code
changed.

**Controlled reproduction** — WP 7.0.3, PHP 8.2.29, `twentytwentyfive` (block theme),
flipbox the only active plugin, one page carrying a flipbox with `blockMeta`:

| Condition | `eb-style-36.min.css` built | Enqueued | Result |
|---|---|---|---|
| `lib/style-handler` absent | no | no | **broken — unstyled block** |
| `lib/style-handler` present | yes (541 B, both media queries) | yes | **correct** |

With the submodule present and flipbox alone, all five front-end assets load:
`dist/style.css`, `dist/frontend/index.js`, `assets/js/eb-animation-load.js`,
`assets/css/animate.min.css`, `assets/css/fontawesome/css/all.min.css`. Zero PHP
notices, warnings or fatals on the rendered page.

### Hypothesis tested and rejected

An earlier theory — that the `'style' => 'eb-flipbox-block-frontend-style'` register
argument is not honoured on block themes, so `dist/style.css` never loads — was
**disproved by direct test**. Removing the handle from the render callback still
produced `dist/style.css` in the page source on WP 7.0.3. A `wp_enqueue_style()` call
added on that basis was reverted; `flipbox.php`'s render callback is unchanged from
the original apart from the §4 compatibility work.

### New issue found, not fixed

| # | File:line | Issue | Impact | Severity |
|---|---|---|---|---|
| 19 | `includes/helpers.php:71-75` | `EssentialBlocksLocalize` omits `responsiveBreakpoints`, which `StyleComponent` reads to build the editor preview's media queries. It emits `@media all and (max-width: undefinedpx)`, so every tablet/mobile rule is discarded **in the editor preview** | Editor responsive preview only. The front end is unaffected — `build_css()` wraps `blockMeta` with its own hardcoded 1024px/767px breakpoints | **Medium** |

Not fixed: it is an editor-side change, and the brief was to fix the front end
without touching working editor behaviour. `price-table-block` already carries this
fix (`'responsiveBreakpoints' => self::get_responsive_breakpoints()`) and can be
copied verbatim. *Awaiting your decision.*

### Release impact

`flipbox.1.5.0.zip` was packaged **before** the submodule was initialised, so it
contains an empty `lib/style-handler/` and reproduces this bug on any site where no
sibling Essential Blocks plugin is active. It must be rebuilt.

---

## 10. "Selected Side" not honoured on the front end

> **STATUS: REVERTED — 2026-08-09, at the user's request.**
> The fix described below was implemented, verified, and then **backed out**.
> `src/style.js` is restored to its committed state (`git checkout -- src/style.js`)
> and `dist/` rebuilt to match, so **"Selected Side = Back" once again has no effect
> on the front end**. The root-cause analysis is kept for reference; the "Fix" and
> "Verification" sections describe work that is no longer in the tree.
> The `lib/style-handler` fix in §9 is unaffected and remains in place.

**Symptom:** setting **Selected Side → Back** and saving still shows the front face
on the front end.

### Root cause

The feature's front-end half was never implemented.

| File | Flipper class |
|---|---|
| `src/edit.js:146` | `` `eb-flipper${isHover \|\| selectedSide === "back" ? " back-is-selected" : ""}` `` |
| `src/save.js:60` | `` `eb-flipper${"hover" === flipMode ? " " + flipType : ""}` `` — **no `back-is-selected`** |

`src/style.js:646` generates the rule that implements the feature:

```css
.eb-flipbox-container.<blockId> .eb-flipper.back-is-selected { transform: rotateY(-180deg); }
```

`flipperStyle` is part of `desktopAllStyles`, so that rule *is* saved into `blockMeta`
and *is* shipped to the front end — verified present in the generated
`eb-style-<postID>.min.css`. But because `save.js` never emits `back-is-selected`,
the selector matches no element on the front end and the rule is inert. The editor
works because `edit.js` does add the class.

Confirmed never implemented rather than regressed: `back-is-selected` appears in no
version of `save.js`, in none of the six entries in `src/deprecated.js`, and in no
commit reachable from any branch (`git log --all -S"back-is-selected" -- src/save.js`
returns nothing).

### Fix

`src/style.js` only — **no markup change**, so existing content stays valid and no
new `deprecated.js` entry is required. When `selectedSide === "back"`, additional
rules are emitted keyed on the block's own `blockId` class rather than the
editor-only class. Resting state shows the back; the flip interaction reveals the
front. Three families are handled:

| `flipType` | Technique |
|---|---|
| `flip-left` / `flip-right` / `flip-up` / `flip-bottom` | flipper `transform` at rest, `transform:none !important` on flip |
| `zoom-in` / `zoom-out` | flipper `transform` plus back-face `z-index:5` at rest, both reverted on flip |
| `fade` | opacity swap (`front:0 / back:1` at rest, inverted on hover) |

The extra `.${blockId}` and `!important` are required to outrank the `!important`
rules in `dist/style.css`, which assume front-is-default:

| Rule | Specificity |
|---|---|
| `dist/style.css` `.eb-flipbox-container:not(.eb-click-mode):hover .flip-left` | (0,4,0) |
| new `.eb-flipbox-container.<blockId>:not(.eb-click-mode):hover .eb-flipper` | **(0,5,0)** — wins |
| `dist/style.css` `.eb-flipbox-container.eb-click-mode .flip-left` | (0,3,0) |
| new `.eb-flipbox-container.<blockId>.eb-click-mode .eb-flipper.<flipType>` | **(0,5,0)** — wins |

Load order also favours the fix: `uploads/eb-style/eb-style-<id>.min.css` is emitted
after `plugins/flipbox/dist/style.css` — confirmed in the rendered page source.

`src/save.js`, `src/edit.js` and `src/deprecated.js` are untouched.

### Verification

WP 7.0.3 / PHP 8.2.29 / `twentytwentyfive`, `flipType: flip-left`, `flipMode: hover`:

| Case | Generated `eb-style-36.min.css` | Result |
|---|---|---|
| `selectedSide: "back"` | `.eb-flipper{transform:rotateY(-180deg);}` + `:not(.eb-click-mode):hover .eb-flipper{transform:none !important;}` | back at rest, hover reveals front ✅ |
| `selectedSide: "front"` (control) | neither rule emitted | unchanged, no regression ✅ |

`npm run build` recompiled cleanly (`dist/index.js` 82.3 → 83.6 KiB) and the new
selectors and all three branches are present in the bundle. All PHP lints clean.

**Not visually confirmed in a browser** — the Chrome extension is not connected in
this environment. Verification was done on the served CSS plus cascade analysis; a
visual pass on hover/click across all seven `flipType` values is still worth doing.

### Operational caveat

Front-end CSS is served from `blockMeta`, which is computed in the editor and frozen
into the post at save time. **Existing flipboxes will not pick this up until each
post is re-opened and re-saved**, which regenerates `blockMeta` and rewrites
`eb-style-<postID>.min.css`. New and re-saved blocks get it immediately.

### Release impact

`dist/index.js` and `dist/index.asset.php` changed, so `flipbox.1.5.0.zip` is stale
again and must be rebuilt.
