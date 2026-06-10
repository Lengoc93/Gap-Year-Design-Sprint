# Plan: Split Vingroup Opportunity Files by Track (A, B, C)

## Context Summary

The monolithic `opportunities/vingroup.md` (~820 lines) contains three distinct opportunity tracks under the same Vingroup/VinSmartFuture umbrella. They share ~80% group context (org culture, compensation structure, recruiting entity, VP, market position) but differ in team lead, product domain, interview process, and outcome. Supporting files in `archive/` and `Vingroup-AIAlignment-PreOnboardingPrep/` are already track-specific but aren't organized consistently.

**Track statuses:**
- **Track A** — Hải Long's Team (Data Services) → `Redirected`
- **Track B** — Mao's Team (Customer Service AI) → `Closed — Out of Budget`
- **Track C** — Giáp Lê's Team (AI Alignment) → `Accepted (June 11, 2026)`

**Template:** `opportunities/masan.md` — used as the structural template for each track's cheatsheet.

---

## Output Files

| # | File | Content | Status |
|---|---|---|---|
| 1 | `opportunities/vingroup-shared.md` | Group-level context shared across all tracks (~80% overlap) | New |
| 2 | `opportunities/vingroup-track-a-hailong.md` | Track A — Hải Long's Data Services team | New |
| 3 | `opportunities/vingroup-track-b-mao.md` | Track B — Mao's Customer Service AI team | New |
| 4 | `opportunities/vingroup-track-c-giap.md` | Track C — Giáp Lê's AI Alignment team | New |
| 5 | `archive/vingroup_monolithic_pre-split.md` | Original `vingroup.md` preserved | Move |

---

## Step 1: Create `opportunities/vingroup-shared.md`

Group-level reference material that each track file links to. Contains:

- **Header:** Vingroup / VinSmartFuture overview, dual-team track approach, VP (Phạm Nhật Hoàng) context
- **Shared Opening Questions** (#1–15) — org-wide questions about culture, compensation structure, decision-making, contract entity
- **Organization Research:** Team map, green/red flags, recruiting entity (VinSmartFuture), VinSmartFuture ecosystem analysis, market position, heir risk analysis, tokenized assets signal
- **Shared Touchpoints:** Mar 5 CV submission, Mar 11 HR call, Mar 11 Tam side effect, Mar 13 interview prep, Apr 1 Dương Le call — these predate track differentiation or apply to the org broadly
- **Shared 90-Day Friction:** Personality × Environment friction table (org-wide: sao đỏ, military culture, sign-off overhead, ENFP-7 patterns)
- **Shared Competency Gaps:** General self-assessment against Vingroup environment

---

## Step 2: Create `opportunities/vingroup-track-a-hailong.md`

Following Masan template structure:

| Masan Section | Track A Content Source |
|---|---|
| Header (Type, Source, Status) | Track A description: Data Services team, lead Nguyễn Hải Long, `Redirected` |
| Compass Filter | Unscored (redirected before formal per-track scoring) — note shared compass signals |
| Emotional Read | Mar 19 post-interview: "Want the win (ego) but not the job" |
| Opening Questions | Track A questions A1–A10 |
| Research Notes | JD Analysis (risk JD, 50-60% fit), simulated role fits (Embedded Finance 82-88%), VinSmartFuture ecosystem context, Hải Long's profile |
| Competency Map | Risk JD competency mapping, honest gaps, interviewer feedback |
| Touchpoints | Mar 19 Director interview (detailed notes), Mar 22 redirect outcome |
| Running Verdict | Track A entries (Mar 16 → Mar 22) |
| 90-Day Onboarding | N/A — `Redirected before this stage` |
| Strategic Roadmap | N/A — `Closed` |
| Related Files | `archive/vingroup_hailong_prep_2026-03-19.md` |

---

## Step 3: Create `opportunities/vingroup-track-b-mao.md`

Following Masan template structure:

| Masan Section | Track B Content Source |
|---|---|
| Header | Customer Service Data Service, lead Nguyễn Xuân Mão, `Closed — Out of Budget` |
| Compass Filter | Unscored — note team-specific signals (0→1 build, clear scope) |
| Emotional Read | "More engaged than Track A. The 0→1 nature and clear product scope feel right." |
| Opening Questions | Track B questions B1–B8 |
| Research Notes | Product architecture (5-layer), VinFast use cases, team dynamics (Mao/Hà/PMO/DS), package intel (T5–T4 range, SI on 70%) |
| Competency Map | Portfolio artifacts mapping, Mao's interview feedback |
| Touchpoints | Mar 24 pre-interview call, Mar 24/29 panel interview + feedback call, May 13 closure |
| Running Verdict | Track B entries (Mar 22 → May 13) |
| 90-Day Onboarding | N/A — `Closed` |
| Strategic Roadmap | N/A — `Closed` |
| Related Files | `archive/vingroup_mao_team_interview_prep_oral_test.md` |

---

## Step 4: Create `opportunities/vingroup-track-c-giap.md`

The richest file — the accepted track. Following Masan template structure:

| Masan Section | Track C Content Source |
|---|---|
| Header | AI Alignment / BKTT, lead Giáp Lê, `Offer Accepted (June 11, 2026)`. Includes scope of work, offer package details, working hours |
| Compass Filter | Derived from shared compass + Track C interview data. Sovereignty: execution-with-coaching. Diversification: max cross-P&L, cross-market. Excellence: platform AI governance. |
| Emotional Read | Across all Track C touchpoints (May 14, Dương call, May 15, offer acceptance) |
| Opening Questions | Track C questions C1–C20 (richly answered) |
| Research Notes | AI Alignment product definition (C1 confirmed), solution architecture (2-layer), 3 sub-domains, Giáp Lê leadership profile, org hierarchy (AI as Services → AI as Products transition) |
| Competency Map | 72% fit, key advantage (FDCPA→guardrail → 3-domain mapping), key gaps (RAG, VN AI regulatory, conglomerate politics) |
| Touchpoints | May 14 interview with Giáp, May 14 eve Dương due diligence, May 15 follow-up with Giáp, May 26 offer details, May 27 offer letter accepted |
| Running Verdict | Track C entries (May 13 → May 27 accepted) |
| Growth Model Analysis | Chip Huyen H1/H2/H3 framework (unique to Track C) |
| 90-Day Onboarding | Full 90-day section from vingroup.md (most relevant to accepted track) |
| Strategic Roadmap | Pre-decision (all resolved), If YES first 90 days, If NO exit strategy, decision timeline |
| Related Files | All `Vingroup-AIAlignment-PreOnboardingPrep/` files |

---

## Step 5: Archive original & commit

1. Move `opportunities/vingroup.md` → `archive/vingroup_monolithic_pre-split.md`
2. Commit all changes with descriptive message
3. Push to `claude/funny-planck-wxqaiq`

---

## Content Mapping Principles

1. **No content duplication** — shared context lives in `vingroup-shared.md`, track files reference it via link
2. **Masan template is structural guide** — sections that don't apply get a one-line note (`N/A — track closed before this stage`)
3. **Touchpoints split by relevance** — pre-track touchpoints → shared; track-specific meetings → track file
4. **Running verdict entries split** — each track gets only its verdict entries; shared file gets initial entries (Mar 5–Mar 13)
5. **Existing supporting files stay in place** — track files reference them, don't absorb them
