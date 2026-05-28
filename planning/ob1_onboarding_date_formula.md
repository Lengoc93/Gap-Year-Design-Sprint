# OB1 — Optimal Onboarding Date Formula

**Owner:** Ngọc | **Built:** May 28, 2026 | **Decision horizon:** June 25, 2026 (hard ceiling)
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
| **T_HN_settle** | HN arrival buffer | 2 days | Arrive, unpack carry-on, sleep, ready Day 1. Dương's sofa confirmed available from June 11. No apartment hunting needed before start. |
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

> **Key insight:** Corrected formula significantly changes the financial calculus vs. the flat 9M assumption. The expected loss of S2b is **1.5M VND** (base case) — not 9M. This represents 1.6% of one month's net Vin salary (96.86M). S2b is a strongly viable fallback.

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

| Destination | Visa | Flight (from HCM) | Cost (USD RT) | Out-of-comfort-zone | T_travel_prep | OB1 compatibility |
|-------------|------|-------------------|---------------|---------------------|---------------|-------------------|
| **Singapore** | Visa-free | 1.5h | $150–250 | Low (familiar) | 3 days | Passes — poor growth ROI |
| **Taiwan** | Visa-free (90 days) | 3–4h | $200–350 | Medium | 4 days | **Passes — recommended** |
| **India (Pune — Raj)** | E-visa required | ~4h | $250–400 | Highest | 10 days (visa 5–7 + booking 3) | Fails under S1 at midpoint; passes under S2b |

### Travel Duration

```
T_travel = 9 days  (median, 80% confidence, satisfies ">1 week" constraint with 1 buffer day)
```

---

## Section 4 — Core OB1 Formula

### The Critical Path

Parallel tasks (Zalo team greeting call with Giáp's AI Alignment team, agentic pipeline setup, working gear purchase) are explicitly **off the critical path**. All completable within any 7-day window concurrent with travel or MH exit.

```
OB1 = D₀ + T_MH_exit + T_travel_prep + T_travel + T_HN_settle

     = May 28 + T_MH_exit + T_travel_prep + 9 + 2

Subject to: OB1 ≤ June 25, 2026

Budget constraint (working backwards from ceiling):
  T_MH_exit + T_travel_prep ≤ 28 − 9 − 2 = 17 days
```

This 17-day budget is the binding constraint. Every scenario is tested against it.

---

## Section 5 — Scenario Matrix

### Full Matrix: OB1 by Scenario × Destination

Format: `[T_MH_exit] + [T_travel_prep] + [9] + [2] = Total days → OB1 date → Passes?`

---

**S1 × Singapore** (P ≈ 0.065)
```
8 + 3 + 9 + 2 = 22 days → June 19 → PASSES ✓
```

**S1 × Taiwan** (P ≈ 0.293)
```
8 + 4 + 9 + 2 = 23 days → June 20 → PASSES ✓
```

**S1 × India** (P ≈ 0.293)
```
8 + 10 + 9 + 2 = 29 days → June 26 → FAILS by 1 day ✗
```
Conditional pass: if Raj closes by Day 6 (not Day 8):
```
6 + 10 + 9 + 2 = 27 days → June 24 → PASSES (barely) ✓
```
India under S1 is viable only if Raj confirms by **June 3**.

---

**S2a × Any destination** (P = 0.20)
```
38 + any + 9 + 2 = 49+ days → July 16+ → FAILS catastrophically ✗
```
**S2a contingency options:**
- **Option A (recommended):** If no credible tenant by June 4 (Day 7) → pivot to S2b immediately. Deposit loss (1.5M base case) < value of OB1 window.
- **Option B:** Negotiate OB1 extension with HR (difficult; last resort).
- **Option C:** Move to HN while keeping M-one running (double rent: 9M + 6.5M HN = 15.5M/mo). One month of double rent = 15.5M, within the 15M Relocation Fund. Survivable for one overlap month if needed.

**S2a decision rule: If no credible tenant by June 4 → pivot to S2b regardless.**

---

**S2b × Singapore** (P ≈ 0.015)
```
4 + 3 + 9 + 2 = 18 days → June 15 → PASSES ✓
```

**S2b × Taiwan** (P ≈ 0.068)
```
4 + 4 + 9 + 2 = 19 days → June 16 → PASSES ✓
```

**S2b × India** (P ≈ 0.068)
```
4 + 10 + 9 + 2 = 25 days → June 22 → PASSES ✓
```

---

### Consolidated Matrix Table

| Scenario | Destination | T_exit | T_prep | T_travel | T_settle | Total | **OB1 Date** | Passes? | P(combined) |
|----------|-------------|:------:|:------:|:--------:|:--------:|:-----:|:------------:|:-------:|:-----------:|
| S1 | Singapore | 8 | 3 | 9 | 2 | 22 | **June 19** | ✓ | 0.065 |
| S1 | Taiwan | 8 | 4 | 9 | 2 | 23 | **June 20** | ✓ | 0.293 |
| S1 | India | 8 | 10 | 9 | 2 | 29 | ~~June 26~~ | ✗ | 0.293 |
| S1 | India (day-6 fast close) | 6 | 10 | 9 | 2 | 27 | **June 24** | ✓ barely | — |
| S2a | Any | 38 | any | 9 | 2 | 49+ | ~~July 16+~~ | ✗ | 0.20 |
| **S2b** | Singapore | **4** | 3 | 9 | 2 | **18** | **June 15** | ✓ | 0.015 |
| **S2b** | Taiwan | **4** | 4 | 9 | 2 | **19** | **June 16** | ✓ | 0.068 |
| **S2b** | India | **4** | 10 | 9 | 2 | **25** | **June 22** | ✓ | 0.068 |

---

## Section 6 — OB1 Calculation (80% Confidence)

### Probability-Weighted OB1

Using passing scenarios only (excluding S1×India at midpoint and S2a):

| Scenario × Destination | P | OB1 Days from D₀ | Weighted contribution |
|------------------------|---|:-----------------:|----------------------:|
| S1 × Taiwan | 0.293 | 23 | 6.74 |
| S1 × Singapore | 0.065 | 22 | 1.43 |
| S2b × Taiwan | 0.068 | 19 | 1.29 |
| S2b × India | 0.068 | 25 | 1.70 |
| S2b × Singapore | 0.015 | 18 | 0.27 |
| **Total passing P** | **0.509** | | |

```
OB1_weighted = (6.74 + 1.43 + 1.29 + 1.70 + 0.27) / 0.509
             = 11.43 / 0.509
             = 22.5 days from D₀

OB1_80pct = May 28 + 23 days = June 20, 2026
```

### 80% Confidence Interval

| Percentile | Scenario | OB1 Date |
|------------|----------|----------|
| Optimistic (S2b + fast) | S2b × Singapore | June 15 |
| **Central (S1 + Taiwan)** | **S1 × Taiwan** | **June 20** |
| Pessimistic (S1 + all delays) | S1 × India, day-6 close | June 24 |

```
OB1 80% CI = June 20 ± 5 days  →  [June 15, June 25]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  OB1 = June 20, 2026  (80% confidence)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Section 7 — Travel Destination Recommendation

### Recommended: Taiwan

**Rationale:**

1. **OB1 compatibility.** T_prep = 4 days. Under S1 → OB1 = June 20 (5 days inside ceiling). Under S2b → OB1 = June 16 (9 days inside ceiling). Maximum buffer of all viable options.

2. **Out-of-comfort-zone criterion.** Taiwan is genuinely novel — different language, food culture, geography. Avoids the Singapore-familiarity problem. Less risky than India for a solo first-time visit. East coast (Hualien, Taroko Gorge) or Tainan: real disorientation, real growth.

3. **Best money value from Vietnam.** Stronger value-for-cost than India once visa processing cost and the variable Raj food-subsidy offset are factored honestly. India's half-food-coverage depends on relationship dynamics at travel time — not lockable now.

4. **Safe priority.** Lower political risk, lower health risk, stable infrastructure. Non-negotiable per stated criteria.

5. **Visa-free = zero prep risk.** No E-visa processing uncertainty. Any processing delay in India pushes S1×India further past the ceiling.

6. **Social dynamic clarity.** India with Raj = romantic/business relationship actively in transition. Best to separate personal growth travel from that entanglement until the Raj-as-business-partner dynamic is stable.

**Why not India (now):** Under S1 (65% probability), India fails at the midpoint timeline. India is the right travel destination *after* OB1 is resolved and Vin momentum is established — perhaps Month 3–4 check-in trip.

**Why not Singapore:** Does not satisfy "out of comfort zone" criterion. Familiar city, existing network. This is a work trip dressed as a growth trip.

---

## Section 8 — Decision Rules (What Ngọc Must Do)

### TODAY — May 28 (Day 0)

1. **Message Raj today.** Ask for a concrete YES/NO by **June 2**. Frame it as: "I need to plan my calendar — can you confirm by June 2?" A soft "I'll think about it" past June 2 = NO for OB1 purposes.

2. **Begin carry-on packing now.** Even under S1 (belongings stay), identify what you need for: (a) 9-day Taiwan trip carry-on; (b) first 2 weeks at Dương's HN. The act of packing makes the transition real.

3. **Scout Taiwan flights.** Check AirAsia / Vietnam Airlines / Vietjet: HCM → Taipei (TPE), departing June 5–7. Do NOT book yet. Confirm availability and note price.

4. **List big items for sale on Facebook Marketplace.** Post now while still in the apartment. Buyers take 3–7 days to respond — starting today means transactions close by the S2b exit window.

### BY JUNE 2 (Day 5) — Raj Confirmation Deadline

**If Raj YES:**
- Book Taiwan flight: depart June 5–6
- Light packing + apartment handoff June 3–5
- OB1 = **June 19–20** (S1 × Taiwan) ✓

**If Raj NO or SILENT:**
- Immediately activate S2b: accept deposit formula loss
- Begin 3–5 day exit process June 3–7 (move + sell big items)
- Book Taiwan flight: depart June 7–8
- OB1 = **June 18–19** (S2b × Taiwan) ✓

### BY JUNE 4 (Day 7) — S2a Pivot Trigger

If S2a is active (waiting for tenant) and no credible tenant lead by June 4 → **pivot to S2b immediately**. Do not extend. The deposit formula loss (1.5M base case) is less than 2% of one month's Vin net salary. It is not worth the OB1 window.

### BY JUNE 5 — HR Notification

If OB1 ≠ June 11 (the accepted start date), notify HR by **June 5** to formally negotiate the shifted start date. The window up to June 25 is available for re-negotiation. This is not a reversal — it is a refinement within the already-agreed flexibility window.

### DURING TRAVEL (parallel tasks — do not skip)

- [ ] Complete Zalo team greeting call with Giáp's AI Alignment team
- [ ] Begin agentic pipeline strategic setup (can be done on laptop in a Taipei café)
- [ ] Purchase new working gear (Taipei has excellent electronics; or order online for HN delivery)

### BY ARRIVAL IN HN — Day OB1 − 2

- Arrive at Dương's place with carry-on
- 2 days settle: unpack, rest, orient
- Day 1 at TechnoPark Tower = **OB1**

---

## Section 9 — Sensitivity Table

| Variable changed | Direction | OB1 delta | New OB1 (S1 × Taiwan base = June 20) |
|------------------|-----------|:---------:|:-------------------------------------:|
| Raj closes Day 6 (fast) | −2 days | −2 | June 18 |
| Raj closes Day 10 (slow) | +2 days | +2 | June 22 |
| Travel = 10 days (long trip) | +1 day | +1 | June 21 |
| Taiwan prep = 5 days (slow booking) | +1 day | +1 | June 21 |
| HN settle = 3 days (rough first night) | +1 day | +1 | June 21 |
| **All pessimistic simultaneously** | +4 days | +4 | **June 24** (still within ceiling ✓) |
| S2b activated (4-day exit) | −4 days | −4 | June 16 |
| S2a with no pivot (find tenant) | +30 days | FAILS | July 20+ ✗ |

**Key finding:** The formula is robust to all pessimistic assumptions stacked simultaneously (June 24 — 1 day inside ceiling). The only scenario that breaks OB1 is S2a without the June 4 pivot trigger.

---

## Section 10 — Financial Impact Summary

| Scenario | Deposit outcome | Big item resale | Travel cost | **Net financial impact** |
|----------|----------------|-----------------|-------------|--------------------------|
| S1 × Taiwan | Returned (0 loss) | N/A (stay in unit) | ~6.3M VND (~$250) | **Best: 0 loss + 6.3M travel** |
| S2b × Taiwan | Loss_S2b = 1.5M | +3M–5.5M (net +1.5M–4M) | ~6.3M VND | 6.3M travel − up to 4M resale gain = **~2.3–4.8M net** |
| S2b × India | Loss_S2b = 1.5M | +3M–5.5M | ~7.5M VND | **~3.0–6.0M net cost** |
| S2a (forced double rent) | Retained | — | — | 15.5M/mo double rent (avoid) |

**Context:** Worst-case S2b net cost (6M VND) = 6.2% of one month's Vin net salary. Within the 15M Relocation Fund allocation. Not a sovereignty risk.

---

## Section 11 — Final Result

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  OB1 = June 20, 2026
  80% confidence interval: [June 15, June 25]
  Recommended scenario: S1 (Raj) × Taiwan
  Current accepted start: June 11, 2026
  Re-negotiation needed by: June 5, 2026
  Days inside HR ceiling: 5 days of buffer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Decision Tree

```
TODAY (May 28)
│
├─ Message Raj → YES/NO by June 2
├─ List big items on Marketplace (if S2b may activate)
└─ Scout Taiwan flights (don't book yet)

JUNE 2
├── Raj YES → S1 path
│   ├─ Book Taiwan (depart June 5–6)
│   ├─ Light pack + handoff apartment
│   └─ OB1 = June 19–20 ✓
│
└── Raj NO / SILENT → S2b path
    ├─ Accept deposit formula loss (1.5M base case)
    ├─ 3–5 day exit: move + sell big items (June 3–7)
    ├─ Book Taiwan (depart June 7–8)
    └─ OB1 = June 18–19 ✓

JUNE 4 (if S2a active): pivot to S2b regardless of tenant status

JUNE 5: notify HR of shifted start date (if OB1 ≠ June 11)
```

---

## Living Document — Recalculation Triggers

Recalculate OB1 if any of the following changes:

| Trigger | How to update |
|---------|---------------|
| Raj confirms with uncertain timeline | Downgrade P_S1 to 0.40, rebuild weighted OB1 |
| Taiwan flights fully booked June 5–8 | Switch to S2b × India (OB1 = June 22, still passes) |
| Dương's sofa unavailable | Add T_HN_housing = 5–7 days → OB1 June 25–27 (at/past ceiling — emergency) |
| HR confirms June 11 is immovable | OB1 = June 11 fixed → travel must compress to S2b + Singapore (OB1 = June 15, depart June 3) |
| E_months for S2b changes materially | Recalculate Loss_S2b = 9M × new_E / 12 |

**Review date: June 2, 2026** — after Raj confirmation or denial. Rebuild if any input changes materially.

---

*Document saved: May 28, 2026 · For Ngọc's personal use only*
