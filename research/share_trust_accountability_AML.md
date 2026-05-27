# Research biography

- Research short title: [to be defined]
- Research thesis: **Human trust in autonomous AI agents for AML compliance in banking: a cross-jurisdictional study of compliance officer decision-making at the human-AI boundary**

---

# [20260323] Research skeleton

- 1st principles
  - what is an act of consider as ML in banking, from cause and/or effect level?
  - the forrest to tree level of pain-of-the-ass happening in AML in banking by (non)-quantitative measurement (i.e. lost in $$ by case, economic efficiency/operation cost)
  - what is autonomous AI agents and why it is matter to AML compliance in banking?
- how bad is/will be the situation
  - the equilibrium of attack vs. defense before vs. after the democracy of autonomous AI agents (should be since 2023)
- what we have known about the gaps
  - the defensing implementing at level of: 1/ Country/Federal Regulation, 2/ Banking association, 3/Showcase
  - identified gaps between the defense implementation vs. attacked patterns, with cause required compliance-human-force in the loop
  - what are patterns of attacking (which layers, which points of the chain, behavioral pattern of the involved components/parties)
  - the problems of trust and accountability between human and machine in the attacks
  - where can autonomous AI agents add its value among those trust and accountability problem
  - what are side effects of having/ adding ai agents in the loop
  - how to mitigate or leverage those side effects
- the simulation runs of human - autonomous AI agents for AML cases

## **Why Your Skeleton Reads as Consulting**

Here's the mapping:


| **Your skeleton element**        | **Consulting logic**                                 | **What the thesis version would be**                                                                                         |
| -------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| "What is ML in banking"          | Background briefing for client who doesn't know AML  | Background chapter — fine, but it's context, not contribution                                                                |
| "How bad is the situation"       | Situation assessment to justify the engagement       | Motivation section in intro — 1-2 pages, not a full section                                                                  |
| "Gaps in defense implementation" | Gap analysis → leads to "here's what you should fix" | Literature review → leads to "here's what we don't know yet"                                                                 |
| "Where can AI agents add value"  | Solution recommendation                              | Research question: "How DO compliance officers experience AI agents?" — you don't presuppose they add value, you investigate |
| "How to mitigate side effects"   | Implementation plan                                  | Discussion/implications — you can suggest this AFTER your findings, not before                                               |
| "Simulation"                     | Proof of concept / pilot                             | Experimental study — with hypothesis, method, measures, and results that could go either way                                 |


---

# Action Items Before Next Meeting

Write a single research question. One sentence. Bring it next time. I will accept or reject it.

Read Lee & See (2004) "Trust in Automation: Designing for Appropriate Trust" and Parasuraman & Riley (1997). Write a 500-word note on how their framework applies (or doesn't) to AML compliance officers. This is non-negotiable — you cannot write a thesis on trust without knowing the field.

Restructure the skeleton into thesis chapters, not a consulting report. Proposed structure:

Paper 1: The shifting AML equilibrium — how autonomous AI agents 
         change the attack/defense landscape in banking (landscape paper)

Paper 2: Trust at the human-AI boundary — how compliance officers 
         calibrate trust in AI-generated AML alerts 
         (empirical study: interviews or survey)

Paper 3: Cross-jurisdictional trust — does regulatory regime shape 
         compliance officer trust in AI? (comparative study: EU vs. US vs. SEA)

Paper 4: [The simulation] — to be scoped after Papers 1-2 clarify 
         the research gap

Kappa:   Synthesis — trust infrastructure for autonomous AI agents 
         in regulated financial compliance

Decide: are you doing this qualitatively or quantitatively? Or mixed? That decision shapes everything downstream. Don't defer it.

# [20260323] Restructured Skeleton — Thesis Logic (RA draft v1)

> **Overarching research question (DRAFT — pending supervisor approval):**
> How do compliance officers in banking calibrate trust in autonomous AI agents for AML alert triage, and how does the regulatory regime shape that trust calibration?

> **Note:** This is one candidate RQ. The supervisor asked for a single sentence. Alternatives to consider:
> - "What factors determine whether compliance officers trust, override, or defer to AI-generated AML alerts?"
> - "How does the introduction of autonomous AI agents into AML compliance workflows alter the trust dynamics between human judgment and algorithmic output?"
> Bring all three to the next supervision. Let the supervisor pick or reject.

---

## KAPPA — Introductory Synthesis (written last, outlined first)

### Chapter K.1: Introduction (context — NOT the contribution)

**What goes here (from your original skeleton):**
- What constitutes money laundering in banking (cause/effect level) → **2-3 pages, definitional**
- Scale of harm: quantitative ($800B-$2T laundered annually, <1% detected, 95-99% false positive rate in current systems) and qualitative (societal impact, regulatory burden) → **2-3 pages, motivational**
- What are autonomous AI agents and why they matter for AML → **2-3 pages, technology framing**
- The shifting equilibrium: attack vs. defense before/after democratization of autonomous agents (post-2023) → **3-4 pages, landscape framing**

**What this chapter does NOT do:** It does not analyze gaps, propose solutions, or argue for anything. It sets the stage. The reader finishes this chapter understanding: AML is a massive, poorly-solved problem; AI agents are entering the compliance workflow; and we don't yet understand what happens at the human-AI boundary when they do.

**Ends with:** "Despite the growing deployment of AI agents in AML compliance, remarkably little is known about how the humans who operate alongside these agents — compliance officers — experience, calibrate, and act on AI-generated recommendations. This thesis addresses that gap."

### Chapter K.2: Theoretical Framework

**Core framework:** Trust in automation (Lee & See, 2004)
- Trust as attitude that influences reliance behavior
- Three bases of trust: performance, process, purpose
- Trust calibration: the match between trust level and system capability
- Misuse (over-trust) and disuse (under-trust) — both are failures

**Extension needed:** Lee & See's framework was built for human-machine dyads in operational settings (aviation, manufacturing). AML compliance adds:
- **Regulatory accountability** — the compliance officer is personally liable; the AI is not
- **Asymmetric consequence** — missing a true positive (laundering goes through) has criminal/regulatory consequences; flagging a false positive costs investigation time but no penalty
- **Opacity of ground truth** — in aviation, you eventually know if the autopilot was right. In AML, you often never find out if a dismissed alert was truly clean
- **Multi-agent context** — post-2023 agents interact with each other, not just with humans (per "Agents of Chaos" findings)

**Supporting frameworks:**
- Parasuraman & Riley (1997) — humans and automation: use, misuse, disuse, abuse
- Hancock et al. (2011) — meta-analysis of human-robot trust factors
- Zerilli et al. (2019) — transparency in algorithmic and human decision-making
- Bansal et al. (2021) — AI explanations and complementary team performance

### Chapter K.3: Research Design & Methodology Overview

**Overall approach:** Mixed methods, sequential

| Phase | Paper | Method | Purpose |
|---|---|---|---|
| 1 | Paper 1 | Systematic literature review + framework construction | Map the landscape, identify what's known and what's missing |
| 2 | Paper 2 | Qualitative (semi-structured interviews with compliance officers) OR Quantitative (survey using validated trust scales) — **TBD** | Establish how trust operates at the human-AI boundary in AML |
| 3 | Paper 3 | Cross-jurisdictional comparative study (EU vs. US vs. SEA) | Test whether regulatory regime moderates trust calibration |
| 4 | Paper 4 | Experimental / simulation — **to be scoped after Papers 1-2** | Design intervention or test a trust calibration mechanism |

**Methodological justification:** [to be written after method choice is made]

### Chapter K.4: Summary of Papers

[Written after papers exist — 1-2 pages per paper summarizing RQ, method, findings, contribution]

### Chapter K.5: Discussion & Synthesis

**This is where the intellectual contribution of the THESIS (not any single paper) lives.**

Cross-paper synthesis questions:
- What does Paper 2 (how trust works) + Paper 3 (how regulation shapes trust) together reveal about designing trust infrastructure for autonomous AI agents in regulated environments?
- How do the social coherence failures documented in "Agents of Chaos" manifest specifically in AML compliance contexts?
- What does the compliance officer's trust calibration tell us about trust in autonomous agents MORE BROADLY — beyond AML?

### Chapter K.6: Conclusions & Future Work

[Written last]

---

## PAPER 1: The Shifting AML Equilibrium

**Type:** Landscape / scoping paper
**Target venue:** Journal of Financial Crime, or Journal of Money Laundering Control
**Timeline:** Year 1 (months 6-15)

### Research question
How has the democratization of autonomous AI agents (post-2023) altered the attack/defense equilibrium in banking AML compliance?

### What it covers (from your original skeleton, restructured)

| Section | Content | Your original element |
|---|---|---|
| Background | ML typologies in banking: placement, layering, integration. Regulatory architecture (FATF, 6AMLD, BSA). Traditional detection: rule-based systems, SAR filing. | "what is ML in banking" + "defense implementing at level of Country/Federal, Banking association, Showcase" |
| The pre-2023 equilibrium | Rule-based detection, known typologies, high false positive rates (~95-99%), human-dependent investigation. | "equilibrium of attack vs. defense BEFORE" |
| The post-2023 shift | AI agents for attackers (synthetic identities, adaptive layering, cross-border automation). AI agents for defenders (intelligent alert triage, pattern detection, workflow automation). | "equilibrium AFTER the democracy of autonomous AI agents" |
| The new gap | Attack patterns that exploit the AI-to-AI boundary. Compliance officers now supervising AI agents rather than executing detection themselves. Trust and accountability undefined. | "identified gaps" + "patterns of attacking" |
| Framework | 2×2: attack sophistication × defense capability, pre/post autonomous agents. Identifies the quadrant where human-AI trust becomes the critical variable. | **Your contribution — this is what makes it publishable** |

### Method
Systematic literature review (PRISMA framework) + regulatory document analysis + framework construction

### Contribution
A structured framework for analyzing how autonomous AI agents shift the AML equilibrium, identifying the human-AI trust boundary as the under-researched critical point.

---

## PAPER 2: Trust at the Human-AI Boundary

**Type:** Core empirical study
**Target venue:** ACM FAccT, CSCW, or Human Factors
**Timeline:** Year 2 (months 15-28)

### Research question
How do banking compliance officers calibrate trust in AI-generated AML alerts, and what factors drive trust, override, and deferral decisions?

### What it investigates (from your original skeleton)

| Your original element | Thesis version |
|---|---|
| "the problems of trust and accountability between human and machine" | Operationalized: measured using validated trust scales + qualitative interview data |
| "where can autonomous AI agents add its value" | Reframed: where do compliance officers PERCEIVE value vs. threat? (you investigate, not presuppose) |
| "what are side effects of having AI agents in the loop" | Reframed: what behavioral changes do compliance officers report after AI agent introduction? (empirical finding, not assumption) |

### Method (two options — supervisor to decide)

**Option A: Qualitative (recommended for Paper 2, then quantitative in Paper 3)**
- Semi-structured interviews with 15-25 compliance officers
- Recruited from banks in EU, US, SEA that have deployed AI-assisted AML systems
- Thematic analysis (Braun & Clarke, 2006)
- Produces: rich taxonomy of trust factors, override reasoning, accountability perception

**Option B: Quantitative**
- Survey instrument using Trust in Automation scale (Jian et al., 2000) + custom items for AML-specific factors
- Sample: 100-200 compliance officers across jurisdictions
- Analysis: factor analysis, regression (trust level predicted by: explainability, accuracy track record, regulatory liability, experience level, jurisdiction)
- Produces: statistical model of trust determinants

### Contribution
First empirical study of how compliance officers experience and calibrate trust in AI agents specifically in AML workflows. Extends Lee & See (2004) into a regulated, high-accountability domain.

---

## PAPER 3: Cross-Jurisdictional Trust

**Type:** Comparative empirical study
**Target venue:** Journal of Financial Regulation, or Regulation & Governance
**Timeline:** Year 2-3 (months 24-36)

### Research question
Does regulatory regime (EU 6AMLD vs. US BSA/FinCEN vs. SEA MAS/SBV) shape how compliance officers calibrate trust in AI-generated AML alerts?

### What it investigates

| Dimension | What varies across jurisdictions |
|---|---|
| **Liability structure** | Who is legally accountable when an AI-flagged transaction is missed? The officer? The bank? The vendor? Varies by regime. |
| **Automation guidance** | Do regulators explicitly permit/restrict AI in AML decisions? EU is more prescriptive. US is more principles-based. SEA varies. |
| **Human-in-the-loop requirements** | Is human review of AI alerts legally mandated? Where? At what stage? |
| **Cultural trust baseline** | Nordic high-trust societies vs. US litigation-culture vs. SEA relationship-based compliance |

### Method
- Comparative case study OR cross-jurisdictional survey (depends on Paper 2 method choice)
- If Paper 2 = qualitative → Paper 3 = quantitative survey across 3 jurisdictions (triangulation)
- If Paper 2 = quantitative → Paper 3 = qualitative deep cases in 3 jurisdictions (complementary)
- Regulatory document analysis as supplementary data source

### Contribution
First cross-jurisdictional study of how regulatory architecture moderates human trust in AI for financial compliance. Policy-relevant: informs whether regulatory harmonization (e.g., EU AI Act) should account for trust calibration effects.

---

## PAPER 4: [Simulation / Intervention — TBD]

**Type:** Design / experimental study
**Target venue:** CHI, IUI, or DIS (Designing Interactive Systems)
**Timeline:** Year 3-4 (months 30-42)

> **Note from supervisor:** Do not scope this paper until Papers 1-2 have clarified the research gap. The simulation must test something specific that emerged from your empirical findings. Scoping it now = building a solution before understanding the problem.

### Possible directions (to be narrowed after Papers 1-2)

| Direction | What it would test | Depends on |
|---|---|---|
| **Trust calibration intervention** | Can we design an AI agent interface that produces better-calibrated trust in compliance officers? | Paper 2 findings on what drives miscalibration |
| **Explanation design experiment** | Does explanation type (feature-based, example-based, counterfactual) affect compliance officer trust and decision quality? | Paper 2 findings on whether explainability matters |
| **Wizard-of-Oz study** | Compliance officers interact with a simulated AI AML agent under varying autonomy levels. Measure trust, override frequency, decision accuracy. | Paper 1 framework + Paper 2 trust factors |
| **Agent-based simulation** | Computational model of compliance officer-AI interaction, testing trust dynamics under different regulatory regimes | Paper 3 cross-jurisdictional findings |

### Contribution
Translates empirical findings (Papers 2-3) into a testable design or intervention. Moves from "what IS the trust problem" to "can we DO something about it."

---

## Where Your Original Skeleton Elements Live Now

| Original element | New location | Role in thesis |
|---|---|---|
| What is ML in banking | Kappa K.1 Introduction | Background context (2-3 pages) |
| Scale of harm / how bad | Kappa K.1 Introduction | Motivation (2-3 pages) |
| What are autonomous AI agents | Kappa K.1 Introduction | Technology framing (2-3 pages) |
| Attack vs. defense equilibrium | Paper 1 (full paper) | **Contribution** |
| Defense at regulation/association/institution levels | Paper 1 background + Paper 3 comparative framework | Context for P1, analytical frame for P3 |
| Gaps between defense and attack | Paper 1 framework | **Contribution** |
| Attack patterns | Paper 1 background | Context |
| Trust and accountability problems | Paper 2 (full paper) | **Core contribution of thesis** |
| Where AI agents add value | Paper 2 research question (investigated, not presupposed) | **Contribution** |
| Side effects of AI in the loop | Paper 2 findings (empirical, not assumed) | **Contribution** |
| How to mitigate side effects | Paper 4 + Kappa K.5 Discussion | Implications (earned by evidence) |
| Simulation | Paper 4 (full paper) | **Contribution** |

---

# Designated ToC

