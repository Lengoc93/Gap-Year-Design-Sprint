# OB1 — Optimal Onboarding Date Formula

**Owner:** Ngọc | **Built:** May 28, 2026 | **Last updated:** May 28, 2026 (v2 — T_HN_settle corrected to 3 days; India June 12 return constraint added)
**Decision horizon:** June 25, 2026 (hard ceiling)
**Purpose:** Calculate the optimal first-day date at VinSmart Future (AI Alignment PM, TechnoPark Tower HN), given the M-one apartment exit, international travel, and HN arrival sequence.

---

## The One Rule

> OB1 must be **≤ June 25, 2026**. Beyond that date, re-negotiating with HR becomes very difficult.
> Every decision between today and OB1 is judged by this single constraint.

---

## Section 1 — Variable Definitions

All time values are in calendar days from **D₀ = May 28, 2026 (today)**.

### Fixed Constants

| Symbol | Name | Value | Notes |
|--------|------|-------|-------|
| **D₀** | Reference date (today) | May 28, 2026 | Base for all calculations |
| **D_start** | Negotiated start date | June 11, 2026 | Day 14 from D₀. Accepted in offer letter. |
| **D_ceiling** | Hard HR deadline | June 25, 2026 | Day 28 from D₀. Re-negotiation very difficult beyond this. |
| **T_HN_settle** | HN arrival buffer | **3 days** | Arrive, unpack carry-on, rest, orient, ready Day 1. Dương's sofa confirmed available from June 11. No apartment hunting needed before start. |
| **T_travel_min** | Minimum travel duration | 8 days | Constraint: >1 week. |
| **T_travel_med** | Median travel duration | **9 days** | Used for all 80% confidence calculations. |

### Variable Inputs

| Symbol | Name | Range | Distribution |
|--------|------|-------|--------------|
| **T_MH_exit** | Days from D₀ to M-one apartment exit | 0 to 49 days | Scenario-weighted (see Section 2) |
| **T_travel_prep** | Days from MH exit to flight departure | 3 to 10 days | Destination-dependent (see Section 3) |
| **T_travel** | Actual travel duration | 8–10 days | Median = 9 days for 80% confidence |

### Scenario Probability Weights

| Symbol | Scenario | Probability | Basis |
|--------|----------|-------------|-------|
| **P_S1** | Raj takes over lease (best case) | 0.65 | Active WhatsApp negotiation ongoing as of today |
| **P_S2a** | Find new tenant before leaving (rainy season delay) | 0.20 | Rainy season suppresses demand; duplex at 9M is upper-end for Tân Hưng |
| **P_S2b** | Accept deposit formula loss, exit now | 0.15 | Financially available. Last resort but viable. |

**Calibration note on P_Raj = 0.65:** If no confirmation from Raj by June 2, downgrade P_S1 to 0.40 and upgrade P_S2b to 0.25. Reassess the formula at that trigger.

---

## Section 2 — Apartment Exit (T_MH_exit)

### Scenario 1 — Raj Takes Over (S1)

Raj moves in under his name. Ngọc keeps belongings in unit (reversibility insurance). Deposit returned. Light packing only — carry-on + curated essentials. The apartment remains a physical home base.

```
T_MH_exit_S1 = 7 to 10 days
               midpoint = 8 days
               D_MH_exit_S1 = May 28 + 8 = June 5, 2026
```

Financial impact: **0 VND loss** (deposit returned, lease continues under Raj).
Risk: Raj backs out after verbal confirmation. Buffer: 2 days absorbed in prep window. If this happens → pivot immediately to S2b.

---

### Scenario 2a — Find New Tenant Before Leaving (S2a)

Must find a replacement tenant before physically leaving to avoid triggering deposit penalty.

```
T_MH_exit_S2a = 28 to 49 days  (4–7 weeks, rainy season market)
                midpoint = 38 days
                D_MH_exit_S2a ≈ July 5 to July 16, 2026
```

**This scenario violates OB1 ≤ June 25 if travel follows it.** S2a is calendar-incompatible with OB1. See Section 5 for the S2a contingency handling.

**Financial formula (S2a — agent engaged, tenant found):**

```
Loss_S2a = Agent commission ≈ 1 month rent = 9,000,000 VND
           (standard VN agent fee for a tenant placement on a short-term contract)
OB1 impact: FAILS constraint — calendar cost exceeds financial cost here
```

---

### Scenario 2b — Accept Deposit Formula Loss, Exit Now (S2b)

Accept the deposit penalty and leave within 3–5 days. Time required: moving logistics + selling valuable big items (washing machine, furniture, electronics bought ~1.5 years ago).

```
T_MH_exit_S2b = 3 to 5 days
                midpoint = 4 days
                D_MH_exit_S2b = May 28 + 4 = June 1, 2026
```

**Financial loss formula (S2b — deposit forfeited, no agent):**

```
Loss_S2b = 9,000,000 × E_months / 12

Where:
  9,000,000 VND = monthly rent (= deposit amount = 1 month)
  E_months      = estimated months a tier-average agent needs to find
                  a replacement tenant for this unit under current market conditions
  12            = months in a year (normalisation base)

Current market estimate for E_months:
  Unit: furnished duplex, 35m²/85m² usage, 9M/mo, Tân Hưng, Level 4, corner
  Season: early rainy season (May–June) — demand suppressed ~30% vs. dry season
  Agent tier: average (not premium)
  E_months estimate: 2.0 months  (conservative for rainy season, tier-average agent)

  Loss_S2b = 9,000,000 × 2.0 / 12 = 1,500,000 VND

Sensitivity:
  E_months = 1.5 (optimistic, agent is good) → Loss = 1,125,000 VND
  E_months = 2.0 (base case, rainy season)   → Loss = 1,500,000 VND
  E_months = 2.5 (pessimistic, slow market)  → Loss = 1,875,000 VND
```

> **Key insight:** Corrected formula significantly changes the financial calculus vs. a flat 9M assumption. The expected loss of S2b is **1.5M VND** (base case) — representing 1.6% of one month's Vin net salary (96.86M). S2b is a strongly viable fallback.

**Income from selling big items (offsets Loss_S2b):**

| Item | Age | Est. resale (Facebook Marketplace) |
|------|-----|-------------------------------------|
| Washing machine (brand new, 1.5 yr use) | 1.5 yrs | 2,000,000 – 3,500,000 VND |
| Other large appliances/furniture | 1.5 yrs | 1,000,000 – 2,000,000 VND |
| **Total resale estimate** | | **3,000,000 – 5,500,000 VND** |

**Net S2b financial position:**

```
Net_S2b = Loss_S2b (deposit) − Income_big_items
         = 1,500,000 − 3,000,000 to 5,500,000
         = −1,500,000 to −4,000,000 VND  (net GAIN in base case)
```

> Under the corrected formula, S2b is **net financially positive** when big item resale is included. The 3–5 day exit window covers both selling and moving logistics.

---

## Section 3 — Travel Destination Analysis

### Prep Time by Destination

| Destination | Visa | Flight (from HCM) | Cost (USD RT) | Out-of-comfort-zone | T_travel_prep | Special constraints |
|-------------|------|-------------------|---------------|---------------------|---------------|---------------------|
| **Singapore** | Visa-free | 1.5h | $150–250 | Low (familiar) | 3 days | None |
| **Taiwan** | Visa-free (90 days) | 3–4h | $200–350 | Medium | 4 days | None — **recommended** |
| **India (Pune — Raj)** | E-visa: **$140 USD, 4 days processing** | ~4h | $250–400 | Highest | **Parallel: 5 days** (visa applied Day 0, ready Day 4) | **Travel must end by June 12** (Raj's flight window) |

### Travel Duration

```
T_travel = 9 days  (median, 80% confidence, satisfies ">1 week" constraint with 1 buffer day)
T_travel_India_constrained = 8 days  (June 5 depart → June 12 return, to satisfy June 12 constraint)
```

### India Path — Special Constraint + e-Visa Correction

> **India travel must complete (return) by June 12, 2026**, to overlap with Raj's available travel window.
> **e-Visa:** $140 USD, 4 days processing (corrected from earlier estimate).
> **Access:** Singapore and Taiwan are visa-free, zero cost. India requires e-visa only.

**With 4-day processing, visa applied May 28 → ready June 1.** This is earlier than previously modelled (was 6 days). It changes India viability significantly — see updated parallel model below.

**India parallel processing model (corrected):**

```
T_India_parallel = max(T_MH_exit, T_visa_processing) + T_booking

S2b path:
  = max(T_MH_exit_S2b=4, T_visa=4) + T_booking=1
  = 4 + 1 = 5 days from D₀

  Departure: D₀ + 5 = June 2 (earliest) or June 5 (comfortable)
  Return:    June 5 + 8 days = June 12 ✓  (June 2 + 8 = June 10 ✓)

  OB1_S2b_India_parallel = June 12 + T_HN_settle(3) = June 15, 2026

S1 path (Raj confirms):
  Visa applied May 28 → ready June 1 (before Raj confirmation date)
  Raj confirms by June 3 (Day 6) → book June 3 → depart June 5 → return June 12 ✓
  Raj confirms by June 5 (Day 8) → depart June 7 → return June 15 → FAILS June 12 constraint ✗

  OB1_S1_India_parallel (Raj by June 3) = June 12 + 3 = June 15, 2026  ✓
```

**India under S1 is NOW VIABLE** (changed from previous version) **if Raj confirms by June 3 (Day 6).** The 4-day visa processing means the visa is ready before Raj's confirmation deadline, removing the prior sequencing blocker. Apply visa today regardless of which scenario activates — it costs $140 and secures the India option under both S1 and S2b.

---

## Section 4 — Core OB1 Formula

### The Critical Path

Parallel tasks (Zalo team greeting call with Giáp's AI Alignment team, agentic pipeline setup, working gear purchase) are explicitly **off the critical path**. All completable within any 7-day window concurrent with travel or MH exit.

**Standard (sequential) formula — Singapore and Taiwan:**

```
OB1 = D₀ + T_MH_exit + T_travel_prep + T_travel + T_HN_settle

     = May 28 + T_MH_exit + T_travel_prep + 9 + 3

Subject to: OB1 ≤ June 25, 2026

Budget constraint (working backwards from ceiling):
  T_MH_exit + T_travel_prep ≤ 28 − 9 − 3 = 16 days
```

**Parallel formula — India only (S2b path with same-day visa application):**

```
OB1_India_parallel = D₀ + max(T_MH_exit_S2b, T_visa) + T_booking + T_travel_constrained + T_HN_settle
                   = May 28 + max(4, 6) + 1 + 8 + 3
                   = May 28 + 18 days
                   = June 15, 2026

Additional constraint: return ≤ June 12 → OB1 ≤ June 15  ✓ (consistent)
```

The 16-day budget (sequential) is the binding constraint for Singapore and Taiwan paths. India has its own June 12 return constraint which is more restrictive and requires parallel execution.

---

## Section 5 — Scenario Matrix

### Full Matrix: OB1 by Scenario × Destination

Format: `[T_MH_exit] + [T_travel_prep] + [T_travel] + [T_settle=3] = Total → OB1 date → Passes?`

---

**S1 × Singapore** (P ≈ 0.065)
```
8 + 3 + 9 + 3 = 23 days → June 20 → PASSES ✓
```

**S1 × Taiwan** (P ≈ 0.293)
```
8 + 4 + 9 + 3 = 24 days → June 21 → PASSES ✓
```

**S1 × India — parallel visa (P ≈ 0.293, conditional)**
```
Requires: e-visa applied May 28 → ready June 1 (4 days processing)

Fast-close (Raj by Day 6 = June 3):
  Book June 3 → depart June 5 → return June 12 ✓
  max(6, 4) + 1 + 8 + 3 = 6 + 1 + 8 + 3 = 18 days → June 15 → PASSES ✓

Midpoint-close (Raj by Day 8 = June 5):
  Depart June 7 → return June 15 → VIOLATES June 12 constraint ✗

S1 × India PASSES only if Raj confirms by June 3.
Probability conditional on Raj fast-close ≈ 40% of S1 = 0.26 of total.
```

---

**S2a × Any destination** (P = 0.20)
```
38 + any + 9 + 3 = 50+ days → July 17+ → FAILS catastrophically ✗
```
**S2a contingency options:**
- **Option A (recommended):** No credible tenant by June 4 (Day 7) → pivot to S2b immediately.
- **Option B:** Negotiate OB1 extension with HR (very difficult; last resort).
- **Option C:** Move to HN while keeping M-one running. Double rent: 9M + 6.5M HN = 15.5M/mo. One overlap month ≈ within the 15M Relocation Fund. Survivable once.

**S2a decision rule: If no credible tenant by June 4 → pivot to S2b regardless.**

---

**S2b × Singapore** (P ≈ 0.015)
```
4 + 3 + 9 + 3 = 19 days → June 16 → PASSES ✓
```

**S2b × Taiwan** (P ≈ 0.068)
```
4 + 4 + 9 + 3 = 20 days → June 17 → PASSES ✓
```

**S2b × India — parallel processing (P ≈ 0.068)**
```
Special path: visa applied Day 0 in parallel with apartment exit
max(4, 6) + 1 + 8 + 3 = 18 days → June 15 → PASSES ✓
Additional constraint: return ≤ June 12 → June 12 + 3 = June 15 ✓ (consistent)
Requires: apply India e-visa TODAY (May 28)
```

---

### Consolidated Matrix Table

| Scenario | Destination | T_exit | T_prep | T_travel | T_settle | Total | **OB1 Date** | Passes? | P(combined) |
|----------|-------------|:------:|:------:|:--------:|:--------:|:-----:|:------------:|:-------:|:-----------:|
| S1 | Singapore | 8 | 3 | 9 | 3 | 23 | **June 20** | ✓ | 0.065 |
| S1 | Taiwan | 8 | 4 | 9 | 3 | 24 | **June 21** | ✓ | 0.293 |
| S1 | India (parallel‖, Raj by June 3) | 6 | 1 | 8 | 3 | 18 | **June 15** | ✓ | ~0.117 |
| S1 | India (parallel‖, Raj after June 3) | 8+ | — | — | — | — | ~~June 16+~~ | ✗ | ~0.176 |
| S2a | Any | 38 | any | 9 | 3 | 50+ | ~~July 17+~~ | ✗ | 0.20 |
| **S2b** | Singapore | **4** | 3 | 9 | 3 | **19** | **June 16** | ✓ | 0.015 |
| **S2b** | Taiwan | **4** | 4 | 9 | 3 | **20** | **June 17** | ✓ | 0.068 |
| **S2b** | India (parallel‖) | **4** | 1 | 8 | 3 | **16** | **June 13** | ✓ | 0.068 |

> ‖ India uses parallel formula: `max(T_MH_exit, T_visa=4) + T_booking=1 + T_travel=8 + T_settle=3`.
> Visa ($140 USD, 4 days) applied May 28 → ready June 1, before any departure date.
> Travel constrained to 8 days (depart June 5 → return June 12) to satisfy Raj flight window.
> Singapore and Taiwan: visa-free, zero cost. India: $140 USD e-visa only.

---

## Section 6 — OB1 Calculation (80% Confidence)

### Probability-Weighted OB1

Using passing scenarios only (S1×India only passes if Raj confirms by June 3, S2a fails constraint):

| Scenario × Destination | P | OB1 Days from D₀ | Weighted contribution |
|------------------------|---|:-----------------:|----------------------:|
| S1 × Taiwan | 0.293 | 24 | 7.03 |
| S1 × Singapore | 0.065 | 23 | 1.50 |
| S1 × India parallel (Raj by June 3) | 0.117 | 18 | 2.11 |
| S2b × Taiwan | 0.068 | 20 | 1.36 |
| S2b × India parallel | 0.068 | 16 | 1.09 |
| S2b × Singapore | 0.015 | 19 | 0.29 |
| **Total passing P** | **0.626** | | |

```
OB1_weighted = (7.03 + 1.50 + 2.11 + 1.36 + 1.09 + 0.29) / 0.626
             = 13.38 / 0.626
             = 21.4 days from D₀

OB1_80pct = May 28 + 21 days = June 18, 2026
```

### 80% Confidence Interval

| Percentile | Scenario | OB1 Date |
|------------|----------|----------|
| Optimistic (S2b + India parallel) | S2b × India parallel | **June 13** |
| **Central (S1 + Taiwan)** | **S1 × Taiwan** | **June 21** |
| Pessimistic (S1 + all delays) | S1 × Taiwan, all pessimistic | June 25 |

```
OB1 80% CI = June 18 ± 7 days  →  [June 11, June 25]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  OB1 = June 18, 2026  (80% confidence, weighted)
  Most likely single scenario: June 21 (S1 × Taiwan)
  Earliest possible OB1: June 13 (S2b × India parallel, visa today)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Section 7 — Travel Destination Recommendation

### Recommended: Taiwan

**Rationale:**

1. **OB1 compatibility.** T_prep = 4 days. Under S1 → OB1 = June 21 (4 days inside ceiling). Under S2b → OB1 = June 17 (8 days inside ceiling). Broadest viable buffer.

2. **Out-of-comfort-zone criterion.** Taiwan is genuinely novel — different language, food culture, geography. Avoids the Singapore-familiarity problem. East coast (Hualien, Taroko Gorge) or Tainan: real disorientation, real growth. Not as extreme as India, but appropriate for a solo pre-work sprint.

3. **Best money value from Vietnam.** Stronger value-for-cost than India once visa processing risk and the variable Raj food-subsidy offset are factored. India's half-food-coverage depends on relationship dynamics at travel time — not lockable.

4. **Safe priority.** Lower political risk, lower health risk, stable infrastructure. Non-negotiable per stated criteria.

5. **Visa-free = zero prep risk.** No e-visa processing uncertainty. Any processing delay in India pushes the June 12 constraint past safe bounds.

6. **Social dynamic clarity.** India with Raj = romantic/business relationship actively in transition. Best to separate personal growth travel from that entanglement until the dynamic is stable.

**When India makes sense:** India (parallel path) is viable under S2b if the e-visa is applied TODAY. It gives the earliest possible OB1 (June 15) and the highest growth ROI from travel. Only choose India if: (a) you decide to commit to S2b regardless of Raj, AND (b) you apply for the e-visa before end of today.

**Why not Singapore:** Does not satisfy "out of comfort zone" criterion. Familiar city, existing network. Work trip dressed as a growth trip.

---

## Section 8 — Decision Rules (What Ngọc Must Do)

### TODAY — May 28 (Day 0)

1. **Message Raj.** Ask for a concrete YES/NO by **June 2**. "I need to lock my calendar — can you confirm by June 2?" Silence past June 2 = NO for OB1 purposes.

2. **Decide: India or not?** India requires applying for the e-visa TODAY to be ready by June 4. This decision cannot be deferred — if India is desired, act in the next few hours. If not decided today → default to Taiwan (visa-free, zero prep risk).

3. **List big items on Facebook Marketplace now.** Buyers take 3–7 days to respond. Posting today means transactions close within the S2b exit window regardless of which scenario activates.

4. **Scout Taiwan flights.** Check AirAsia / Vietnam Airlines / Vietjet: HCM → Taipei (TPE), departing June 5–7. Do NOT book yet. Confirm availability and note price.

### BY JUNE 2 (Day 5) — Raj Confirmation Deadline

**If Raj YES:**
- Book Taiwan flight: depart June 5–6
- Light packing + apartment handoff June 3–5
- OB1 = **June 20–21** (S1 × Taiwan) ✓

**If Raj NO or SILENT:**
- Immediately activate S2b: accept deposit formula loss (1.5M base case)
- Begin 3–5 day exit: move + sell big items (June 3–7)
- Book Taiwan flight: depart June 7–8 → OB1 = **June 18–19** ✓
- OR if India e-visa was applied May 28: depart India June 4 → OB1 = **June 15** ✓

### BY JUNE 4 (Day 7) — S2a Pivot Trigger

If S2a is active (waiting for tenant) and no credible tenant lead by June 4 → **pivot to S2b immediately**. The deposit formula loss (1.5M base case) is less than 2% of one Vin net monthly salary. The OB1 window is worth more.

### BY JUNE 5 — HR Notification

If OB1 ≠ June 11 (the accepted start date), notify HR by **June 5** to formally negotiate the shifted start date. The window up to June 25 is available. This is not a reversal — it is a refinement within the already-agreed flexibility window.

### DURING TRAVEL (parallel tasks — do not skip)

- [ ] Complete Zalo team greeting call with Giáp's AI Alignment team
- [ ] Begin agentic pipeline strategic setup (can be done on laptop in a Taipei/Pune café)
- [ ] Purchase new working gear (Taipei has excellent electronics; or order online for HN delivery)

### BY ARRIVAL IN HN — Day OB1 − 3

- Arrive at Dương's place with carry-on
- 3 days settle: unpack, rest, orient, buy basics locally
- Day 1 at TechnoPark Tower = **OB1**

---

## Section 9 — Sensitivity Table

| Variable changed | Direction | OB1 delta | New OB1 (S1 × Taiwan base = June 21) |
|------------------|-----------|:---------:|:-------------------------------------:|
| Raj closes Day 6 (fast) | −2 days | −2 | June 19 |
| Raj closes Day 10 (slow) | +2 days | +2 | June 23 |
| Travel = 10 days (long trip) | +1 day | +1 | June 22 |
| Taiwan prep = 5 days (slow booking) | +1 day | +1 | June 22 |
| HN settle = 4 days (rough landing) | +1 day | +1 | June 22 |
| **All pessimistic simultaneously** | +4 days | +4 | **June 25** (exactly at ceiling ✓) |
| S2b activated, Taiwan | −4 days | −4 | June 17 |
| S2b activated, India (parallel, visa today) | −6 days | −6 | June 15 |
| S2a with no pivot | +30 days | FAILS | July 21+ ✗ |

**Key finding:** All pessimistic assumptions stacked (Raj slow + slow booking + long travel + slow settle) land exactly at June 25 — the ceiling. Zero wasted days. The June 12 India constraint is the new binding factor for the India path.

---

## Section 10 — Financial Impact Summary

| Scenario | Deposit outcome | Big item resale | Travel cost | **Net financial impact** |
|----------|----------------|-----------------|-------------|--------------------------|
| S1 × Taiwan | Returned (0 loss) | N/A (items stay) | ~6.3M VND (~$250) | **Best: 0 loss + 6.3M travel** |
| S2b × Taiwan | Loss_S2b = 1.5M | +3M–5.5M (net gain) | ~6.3M VND | 6.3M travel − resale gain = **~2.3–4.8M net cost** |
| S2b × India (parallel) | Loss_S2b = 1.5M | +3M–5.5M | ~7.5M VND | **~3.0–6.0M net cost** |
| S2a (forced double rent) | Retained | — | — | 15.5M/mo double rent — avoid |

**Context:** Worst-case S2b net cost (6M VND) = 6.2% of one month's Vin net salary. Within the 15M Relocation Fund allocation.

---

## Section 11 — Final Result

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  OB1 = June 18, 2026  (80% confidence, weighted)
  Most likely single scenario: June 21 (S1 × Taiwan)
  80% confidence interval: [June 11, June 25]

  Recommended path: S1 (Raj) × Taiwan  OR  S1 × India if Raj by June 3
  Earliest possible OB1: June 13 (S2b × India parallel, visa today)
  Days inside HR ceiling (S1 × Taiwan): 4 days of buffer
  India e-visa: $140 USD, 4 days processing — apply today to keep option open
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Decision Tree

```
TODAY (May 28) — two parallel actions
│
├─ Message Raj → YES/NO by June 2 (or June 3 latest for India option)
├─ List big items on Marketplace
├─ Scout flights (Taiwan + India both viable)
└─ DECIDE India option: apply e-visa today ($140, ready June 1) to keep option live
   Cost of applying = $140 sunk. Cost of not applying = India closed.

JUNE 2–3
├── Raj YES by June 3 → S1 path
│   ├─ India option: depart June 5, return June 12 → OB1 = June 15 ✓
│   ├─ Taiwan option: depart June 5–6 → OB1 = June 20–21 ✓
│   └─ Choose: India (higher growth ROI) or Taiwan (safer, cleaner)
│
├── Raj YES after June 3 → India window closed
│   ├─ Book Taiwan (depart June 5–6)
│   └─ OB1 = June 20–21 ✓
│
└── Raj NO / SILENT → S2b path
    ├─ Accept deposit formula loss (~1.5M VND base case)
    ├─ 3–5 day exit: move + sell big items (June 3–7)
    ├─ If India visa applied May 28: depart June 5 → OB1 = June 13–15 ✓
    └─ If Taiwan: depart June 7–8 → OB1 = June 17–18 ✓

JUNE 4 (if S2a active): pivot to S2b regardless of tenant status

JUNE 5: notify HR of shifted start date (if OB1 ≠ June 11)
```

---

## Living Document — Recalculation Triggers

| Trigger | How to update |
|---------|---------------|
| Raj confirms with unclear timeline | Downgrade P_S1 to 0.40, rebuild weighted OB1 |
| Taiwan flights fully booked June 5–8 | Switch to S2b × India parallel (OB1 = June 15, requires visa applied today) |
| Raj confirms June 12 flight changes | Re-evaluate India constraint date and rebuild India parallel formula |
| Dương's sofa unavailable | Add T_HN_housing = 5–7 days → all OB1s shift +5 to +7 days → emergency |
| HR confirms June 11 immovable | OB1 = June 11 fixed → travel compresses to S2b + Singapore (depart June 3, OB1 = June 14) |
| E_months for S2b changes | Recalculate Loss_S2b = 9M × new_E / 12 |

**Review date: June 2, 2026** — after Raj confirmation or denial. Rebuild if any input changes materially.

---

*v1: May 28, 2026 · v2: T_HN_settle 2→3; India June 12 constraint; India infeasible under S1 · v3: India e-visa corrected to $140/4 days; S1×India viable if Raj by June 3; SG+TW confirmed free access; OB1 updated to June 18 weighted · For Ngọc's personal use only*
