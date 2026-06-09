
*Interview: TBD — with Lead Data Scientist (panel TBC)*
*Product: AI Alignment under BKTT (Bách Khoa Toàn Thư / Encyclopedia) — V-AI ecosystem*
*Lead: Giáp Lê (team builder for BKTT, personally leads AI Alignment product)*

---

## What I Know Going In

### Product concept (verified May 13)

- **BKTT** = team under V-AI ecosystem covering everything related to V-AI knowledge layer
- **Vivipedia** = consumer-facing AI encyclopedia (Grokipedia-like). End-users access it directly. Data also feeds V-AI platform.
- **AI Alignment** = separate product within BKTT, personally led by Giáp Lê. Likely the product I'd PM.
- Giáp Lê is the overall team builder for BKTT; he also does a separate product (AI Alignment). HR contact guesses he wants to hire PO/PM specifically for AI Alignment.

### What I don't know (must disambiguate in interview)

- Is AI Alignment a **governance/safety function** (C1) or a **monetisation enabler** (C2)?
- What does "AI Alignment" mean concretely at Vingroup? (Academic safety research? Enterprise guardrails? Content quality? Regulatory compliance?)
- What is the relationship between Vivipedia content team and AI Alignment? Independence or subordination?
- Who are the consumers of AI Alignment output — internal P&Ls only, or external users too?

---

## Interviewer Profile: Lead Data Scientist

| Attribute | Detail |
| --- | --- |
| **Role** | Likely builds the technical AI/ML components of BKTT — knowledge pipeline, content generation, possibly alignment evaluation systems |
| **Fear** | Getting a PM who doesn't understand LLM limitations, writes specs disconnected from technical reality, creates unrealistic stakeholder expectations about what alignment can/can't guarantee |
| **Motivation** | Wants a PM who can translate alignment requirements into testable specifications, manage stakeholder expectations about AI safety, and shield the technical team from political noise in a conglomerate |
| **Interview lens** | "Does this person understand enough about AI systems to have meaningful conversations about alignment trade-offs?" — testing technical empathy and structured thinking |
| **What I should demonstrate** | Guardrail architecture thinking (dual-LLM reflection, structural enforcement), evaluation methodology (A/B testing, annotation frameworks), comfort with ambiguity in defining "correct" AI behavior |

---

## Strategic Interview Objectives

### Primary: Disambiguate C1 vs C2

The single most important outcome of this interview is understanding whether AI Alignment is:

- **C1 (governance/safety):** Internal guardrails/compliance layer for V-AI consumed by all P&Ls. My fit: 72%.
- **C2 (monetisation enabler):** Trust/quality signal for Vivipedia's search-ad revenue. My fit: 47%.

If C1 → lean forward aggressively with guardrail architecture showcase.
If C2 → assess honestly whether the search/ad-tech gaps are learnable or structural blockers.

### Secondary: Assess org design integrity

Does AI Alignment have organisational independence from the content/encyclopedia team? If alignment reports into the same team that ships content, there's a structural conflict of interest (fox guarding henhouse). This matters for both role authority and career value.

### Tertiary: Probe growth model factors

Per Chip Huyen's framework — does this role accelerate rate-of-change (H1) enough to justify stalling the finance problem (H2)?

---

## Question Bank

### Block 1 — Product definition (disambiguate C1 vs C2)

> These questions determine whether I'm interviewing for a role I'm strong at (C1) or weak at (C2). Ask early.

| # | Question | What the answer reveals | If C1 signal | If C2 signal |
| --- | --- | --- | --- | --- |
| 1.1 | "AI Alignment" can mean many things — from academic safety research to enterprise content guardrails to ad-quality scoring. What does AI Alignment mean concretely for BKTT? What problem is it solving today? | Core product definition | "Ensuring V-AI outputs are safe, accurate, compliant across P&Ls" | "Ensuring Vivipedia content is trustworthy enough for advertisers/search ranking" |
| 1.2 | Who are the primary consumers of the AI Alignment product's output? Internal teams (P&L analytics, V-AI agents), external end-users, or advertisers? | Customer definition | Internal P&Ls + V-AI platform | External users + advertisers |
| 1.3 | When an AI Alignment check flags a piece of content or output as problematic — what happens next? Does it block publication, downrank it, route it for human review, or generate an audit log? | Enforcement mechanism | Block + audit trail (governance) | Downrank + quality score (monetisation) |
| 1.4 | Is the AI Alignment team's success measured by safety/compliance metrics (violation rate, audit pass rate) or by business metrics (content quality score, user trust, ad-safe inventory %)? | KPI structure | Safety KPIs | Revenue-adjacent KPIs |
| 1.5 | Does AI Alignment serve only Vivipedia, or does it serve all V-AI products across the conglomerate? | Scope breadth | Cross-conglomerate (platform function) | Vivipedia-specific (product function) |

### Block 2 — Architecture & technical depth (showcase my fit)

> These questions let me demonstrate guardrail architecture thinking while learning the technical landscape.

| # | Question | Why I'm asking | My follow-up showcase |
| --- | --- | --- | --- |
| 2.1 | What does the current content generation pipeline look like? Is it RAG-based, knowledge-graph-grounded, or pure LLM generation? | Understanding the stack I'd be writing alignment specs for | "At TS, I designed the state machine that controlled the LLM output pipeline — every conversational turn ran through a dual-LLM reflection before response generation. The compliance detection was structural, not a review layer." |
| 2.2 | How does the team currently detect factual errors or hallucinations in generated content? Is there a verification layer, or is it post-publication review? | Assessing alignment maturity | "My approach was to embed verification into the pipeline itself — exception checks execute before business logic in every state transition. The system physically cannot generate a response without first checking for compliance triggers." |
| 2.3 | If I wanted to add a new alignment rule (e.g., 'never generate medical advice without citing VinMec-verified sources') — what's the current process? How many teams need to be involved? | Understanding the approval/enforcement chain | "I had a similar challenge mapping 17 federal regulations into a state machine — each regulation required a different sub-conversation flow. The architecture scaled by adding new exception states rather than retraining the model." |
| 2.4 | What's the current approach to evaluating alignment quality? Automated benchmarks, human evaluation, red-teaming, or something else? | Assessing eval maturity and where I can add value | "I built a dual-annotator framework using GPT + Gemini for inter-rater reliability, with human validation on top. For alignment, I'd expect a similar approach — automated detection + human calibration on edge cases." |
| 2.5 | How does alignment handle the trade-off between content coverage (publishing more articles) and content safety (blocking uncertain content)? Who makes the call when there's tension? | Testing whether alignment has real authority or is overridden by content velocity | Critical signal: if the answer is "content team decides" → alignment has no teeth. If "alignment can block" → real authority. |

### Block 3 — Org design & authority (probe sovereignty)

> These questions test whether the PM role has real mandate or is execution-only.

| # | Question | What I'm really asking | Red flag answer | Green flag answer |
| --- | --- | --- | --- | --- |
| 3.1 | Giáp Lê currently leads AI Alignment personally. If a PM is hired, what decisions does the PM own vs. what stays with Giáp? | Sovereignty — am I a delegate or an owner? | "Giáp decides everything, you execute the specs" | "You own the product detail layer — alignment rules, specs, evaluation. Giáp focuses on team strategy and V-AI direction." |
| 3.2 | If AI Alignment flags a VinFast product page on Vivipedia as containing inaccurate specs, and the VinFast P&L pushes back — who has final authority? | Cross-P&L enforcement power | "We try to find a compromise" / "The P&L decides" | "Alignment has a documented escalation path and the authority to block until resolved" |
| 3.3 | How does the BKTT team structure work? How many PMs, DSs, engineers? Where does AI Alignment sit in the org chart relative to Vivipedia content? | Reporting independence | Alignment is a sub-function under content | Alignment is a parallel function with its own reporting line |
| 3.4 | What does "great" look like for the AI Alignment PM in 12 months? What would you point to and say "this person crushed it"? | Concrete success criteria | Vague answer about "supporting the team" | Specific deliverables: "shipped the alignment evaluation framework," "reduced hallucination rate by X%," "alignment dashboard live for all P&Ls" |
| 3.5 | Is the AI Alignment PM a people manager role or an IC-PM role? If IC, is there a path to building a team? | Growth trajectory | Pure IC forever | IC with a roadmap to build the alignment function |

### Block 4 — Growth model probes (Chip Huyen framework)

> These questions assess whether the role delivers on H1 (rate of change), H2 (solve problems), and H3 (future options).

| # | Question | Growth factor tested | What a good answer looks like |
| --- | --- | --- | --- |
| 4.1 | What's the biggest technical challenge the AI Alignment product faces today that hasn't been solved yet? | H1 — Is the learning curve steep enough to force identity-level growth? | A genuinely hard unsolved problem (e.g., "how to verify factual claims across 6 P&L domains at scale") — not a project management problem |
| 4.2 | Does the team publish research or open-source any alignment tools? Is there appetite for external visibility? | H3 — Does this role open doors to the global AI alignment community? | "Yes, we present at conferences / contribute to open-source" or at minimum "we'd support it" |
| 4.3 | How does compensation work for T4 level? Is there a performance-based component tied to alignment outcomes? | H2 — Does the comp structure solve the finance problem at any reasonable pace? | Clear base + meaningful bonus tied to measurable KPIs. Total comp >150M VND signals H2 progress. |
| 4.4 | What exposure does the AI Alignment PM have outside the BKTT team? Do they work with other V-AI product teams, P&L stakeholders, or government/regulatory bodies? | H3 — Does this role build transferable network and cross-domain access? | Cross-P&L exposure, government AI policy involvement, or V-AI platform-wide scope |
| 4.5 | If I excel in this role for 18 months, what are the realistic next steps? Promotion within Vin, lateral to another V-AI product, or building out the alignment team? | H3 — What doors open after this? | Concrete career path (build team, move to VP-level, or platform-wide alignment director) — not "we'll see" |

### Block 5 — Solution architecture validation

> These questions validate the architecture I've researched and position me as someone who's already thought deeply about the problem.

| # | Question | Architecture insight I'm testing | My prepared framing |
| --- | --- | --- | --- |
| 5.1 | I've been thinking about how alignment might work here — is the current approach closer to a runtime guardrail (checking every output before serving) or a batch evaluation (periodic content audits)? | Runtime vs. batch — affects PM scope dramatically | "In my experience, runtime enforcement is more reliable because it's structural — you can't bypass it. But it requires careful latency management. I'd want to understand which model fits BKTT's content volume." |
| 5.2 | For factual verification specifically — does the team ground-truth against P&L source data (VinHomes pricing, VinFast specs), or against general web knowledge? | Proprietary vs. general grounding | "Proprietary grounding is Vingroup's moat. No external AI can verify VinFast specs against internal records. If alignment can validate against authoritative P&L data, that's a defensible capability." |
| 5.3 | How does the team think about the relationship between Vivipedia's knowledge graph and the alignment evaluation layer? Are they the same pipeline or separate systems? | Shared vs. independent infrastructure | "I'd argue for shared foundation (knowledge graph, factual verifier, hallucination detector) with an independent alignment runtime on top — the alignment layer needs to evaluate the content pipeline's output, not be part of it." |
| 5.4 | Post-Qualcomm acquisition of VinAI's generative AI division — how does V-AI source its foundational models? In-house training, API calls to external providers, or fine-tuned open-source? | LLM supply chain — affects alignment approach fundamentally | Understanding this tells me whether alignment is about controlling an internal model (harder, more valuable) or gatekeeping external API output (easier, more commoditised). |
| 5.5 | Does the team see Vivipedia's data eventually training or fine-tuning V-AI's own models? If so, alignment becomes a data quality gate for model training — not just content safety. | Data flywheel hypothesis | "If Vivipedia data feeds model training, alignment is upstream of everything. The PM isn't just ensuring safe content — they're ensuring safe training data. That's a fundamentally different scope and value proposition." |

---

## My Showcase Toolkit

### Showcase 1: Guardrail architecture (lead with this if C1)

**Story:** "At Trusting Social, I built a compliance enforcement architecture for an AI Voice Agent operating in US debt collection — one of the most heavily regulated AI environments in the world."

**Key proof points:**
- 17 exception states mapping to specific federal regulations (FDCPA, Reg F, SCRA, TCPA)
- Dual-LLM reflection: every conversational turn runs compliance detection BEFORE response generation
- Structural enforcement: exception checks physically ordered before business logic — cannot be bypassed
- Reset-and-redetect pattern: fresh compliance evaluation every turn (no stale state)
- Exception-within-exception: recursive compliance monitoring (bankruptcy during cease-comms → correctly routes)
- 7 months US production, ~9,500-line state machine configuration

**Transition to AI Alignment:** "The same structural thinking applies to AI Alignment at scale — compliance rules embedded in the pipeline architecture, not bolted on as a review layer. The specific regulations change (FDCPA → VN content law, P&L accuracy standards), but the design pattern is transferable."

### Showcase 2: Evaluation methodology (lead with this for DS audience)

**Story:** "When we needed to add emotional intelligence to the Voice Agent, I designed the evaluation framework from scratch."

**Key proof points:**
- Dual-annotator framework (GPT + Gemini) for inter-rater reliability
- 12-label taxonomy refined to 3 dominant labels through production data
- A/B production test (50 connected calls) with iterative refinement
- Discovery: LLM text generation suppresses emotion signal — root cause at language model level, not voice synthesis

**Transition to AI Alignment:** "Evaluating alignment is fundamentally an annotation and evaluation design problem — what does 'aligned' mean, how do you measure it, how do you build ground truth? I've done this in a high-stakes production environment."

### Showcase 3: Regulatory-to-spec translation (universal)

**Story:** "US debt collection has ~17 distinct regulatory triggers that can occur at any point in a conversation. I translated each federal regulation into a specific state machine state with its own sub-conversation flow."

**Key proof points:**
- Each regulation → specific exception state → complete compliance sub-flow (not just a flag)
- Example: cease-communications requires confirming which channels (call/email/SMS/all), collecting specific contact info, recording, with 12 transition conditions handling every permutation
- The architecture scales: adding a new regulation = adding a new exception state + detection criteria, not retraining

**Transition to AI Alignment:** "If Vingroup operates across healthcare (VinMec), automotive (VinFast), real estate (VinHomes), and education (VinSchool), each domain has different alignment requirements. The architecture needs to handle domain-specific rules without rebuilding the system for each P&L."

---

## Questions I Should NOT Ask (and why)

| Question | Why not |
| --- | --- |
| "What's the salary range?" | HR handles comp. Asking the DS signals wrong priorities. |
| "Is the military culture / sao đỏ system real?" | Too confrontational for first interview. Observe; don't ask directly. |
| "Why did VinAI's gen AI division get sold to Qualcomm?" | Politically sensitive. Could signal I'm questioning Vin's AI capability. |
| "How long do people typically stay at Vingroup?" | Implies I'm already thinking about leaving. |

---

## Emotional Prep

### Pre-interview self-check

- [ ] Am I interviewing to WIN (ego) or to LEARN (genuine assessment)?
- [ ] Have I separated the Tam/Thư self-doubt trigger from this opportunity's assessment?
- [ ] Am I prepared for the DS to probe technical depth I don't have (RAG, knowledge graphs)? → Response: "That's exactly the technical frontier I'd be learning in this role. My strength is the product/governance layer that translates technical capability into alignment specifications."
- [ ] What's my lean — forward, neutral, or pulling away? (Fill after interview)

### If the DS probes my RAG/knowledge graph gap

**Honest framing:** "My technical depth is in state machine architecture and LLM control systems, not in RAG or knowledge graphs specifically. What I bring is the product methodology — how to translate alignment requirements into testable specs, how to build evaluation frameworks, and how to design enforcement architectures that can't be bypassed. The specific technical domain (voice AI → knowledge systems) is the learning curve, but the alignment thinking pattern is transferable."

**Do NOT:** overclaim RAG knowledge, name-drop tools I haven't used, or pretend familiarity with knowledge graph query languages. The DS will see through it instantly.

### If asked "why Vingroup?"

**Framing:** "I've spent 3+ years building compliance-enforcing AI in one of the most regulated environments (US debt collection). AI Alignment at conglomerate scale is the natural next step — same structural thinking, broader scope, higher complexity. Vingroup's multi-sector ecosystem (healthcare, automotive, real estate, education) means alignment isn't one-size-fits-all — each domain has different accuracy and safety requirements. That's the kind of product problem I find genuinely compelling."

**Do NOT:** mention that this is a gap-year opportunistic exploration. Frame as intentional career progression.

---

## Post-Interview Checklist

- [ ] C1 or C2? Which sub-track does this role fall into?
- [ ] Sovereignty: does the PM own decisions, or execute Giáp's specs?
- [ ] Alignment independence: does alignment have authority to block content, or is it advisory?
- [ ] Technical maturity: does the team have an existing alignment system, or is this 0→1?
- [ ] Growth model: does this pass the H1 (rate of change) threshold to justify H2 (finance) delay?
- [ ] Emotional read: lean forward, neutral, or pulling away?
- [ ] DS impression: did they test for technical depth or technical empathy? What does that signal about the role?
- [ ] Honest self-score: /10
- [ ] Update vingroup.md with touchpoint notes

----
need management framework, iso 4201, risk management
AI Allignemnt > Guardrail (exc)
vllm model riêng, data center nha trang training của win ở Sing 
- eval
- alignement
- guardrail
tuân thủ + performance + customer experience
đa market