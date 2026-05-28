# Vingroup — VinLab AI (Data Director)

**Type:** Full-time senior role — Manager level
**Source:** Self-initiated (CVs sent Mar 5, inspired by Quỳnh joining)
**Status:** `Active`
**File opened:** Mar 13, 2026

---

## Approach: Dual-Team Track

> Two data-science-driven teams under the same VP (Phạm Nhật Hoàng, heir). Running touchpoints for both simultaneously to maximize efficiency. Shared org/culture/compensation analysis applies to both; team-specific assessment tracked separately.

### Track A — Hải Long's Team (Data Services) — `Redirected`

- **Lead:** Nguyễn Hải Long (Data Director, ex-Visa US)
- **Team maturity:** Brand new team, building out
- **Domain (CORRECTED post-interview):** NOT a fintech risk branch. This is a **cross-conglomerate data/AI solutions team** under VinSmartFuture. Mission: provide data/AI solutions for business problems requested by different P&Ls (business units) across the entire Vingroup conglomerate. Team ensures optimal capability of solutions across use cases from different P&Ls.
- **Team structure (from interview):** Analytics layer (analytics solutions) → Datalake/AI signals sister team → Modeling team
- **Typical workflow (e.g., recommendation engine):** Get cross-P&L raw data from datalake → translate aggregated data into signals → translate signals into feature store → serve models
- **JD received (Mar 16, from HR):** Customer risk framework (onboarding, transaction, abuse, lifecycle); AI/ML model risk governance — **NOTE: this JD was misleading. Actual scope is broader: cross-P&L data/AI solutions, not purely risk.**
- **My fit (REVISED post-interview):** Product management strong, 0→1 strong, willingness to learn validated by interviewer. **Gap confirmed by interviewer: technical understanding not firm/fluent.** The actual role leans heavier into data science/ML solutions than product — recommendation engines, feature stores, signal engineering. This is closer to a DS-adjacent product role than embedded finance.
- **Interview:** Thu Mar 19 — COMPLETED
- **His feedback:** "Solid experience in product management, clear showcase of willingness to learn and starting up new domain without hassle, generating product business impacts. Improvement: technical understanding not firm/fluent."
- **Outcome (Mar 22):** Hai Long redirected me to Track B (Mao's team). Reason: org chart and requirement changes in risk Ops area. He believes PO role under Mao better leverages my strengths. Track A is effectively closed for me.

### Track B — Mao's Team (Customer Service Data Service) — `Closed — Out of Budget`

- **Lead:** Nguyễn Xuân Mão (ex-VNG, ex-TrustingSocial)
- **Team maturity:** Established — Quỳnh already on board
- **Prior relationship:** Previous good non-working relationship with Mao from TS
- **Domain (UPDATED Mar 24):** Agentic AI for customer care (post-sales), first P&L client is VinFast (e-car, e-scooter). Expandable to other P&Ls.
- **Product status:** 0→1. Hotline is currently 100% human-served; website chat has AI.
- **Product architecture (5 layers):**
  1. User
  2. Connection channel (Hotline–Call, Website–Chat, Social Media–Chat, Email–Text, OTT–Chat)
  3. P&L Router (integrated with third party, customized by P&L/format) — e.g. VinFast
  4. Expert Router (Human vs. Machine vs. Human+Machine) — topic → expertise level → efficiency prediction → job assignment
  5. (Machine) Agent in the resolution — conversation + non-conversation tasks
- **Key use cases:** 1/ Xử lý sự cố (cứu hộ), 2/ Chăm sóc khách hàng (tra cứu đơn hàng), 3/ Nhân viên kỹ thuật (bảo hành bảo dưỡng)
- **Role offered:** PM — owning layers 4–5 (Expert Router + Machine Agent resolution). Mao currently solo on these layers, overloaded, wants to focus on solution layer rather than detail product layer.
- **Team structure:** Another PM (Hà) + Mao co-managing layers 1–3. A PMO handles deliverable strategy ↔ budget/resources for all 5 layers. PMO handoff to new hire by 30/4; backup plan: transfer to Hà if no hire by then.
- **Key delivery milestones:** 30/4 and 30/6
- **Mao's time allocation (current):** 70%+ on product + stakeholder alignment. Target post-hire: 40% tech, 40% product, 20% alignment & AI roadmap direction.
- **My fit:** 0→1 product build (strong), cross-functional stakeholder navigation (strong), AI/ML product framing (EVO + Hà cases relevant). Agentic AI for customer care maps well to Voice AI Agent experience. Gap: LLM tech stack fluency (RAG, chain-of-thought specifics).
- **Interview (upcoming Sat):** Panel — Mao, 1 DS from his team, Hà (PM), 1 PMO
- **Package intel:**
  - Seniority level: upper range T5–T4
  - Social insurance: Vin pays only on 70% of gross salary
  - Package negotiation sits with HR; over-budget escalates to Mao (who will likely stick to budget ceiling — outlier packages require approval)
  - Proxy calc: ~1.5× TS range → targeting ~140M VND. Reference: 2024 T4 = 100–120M VND; 2024 T5 = 60M VND + inflation.
  - ⚠️ Quỳnh's experience: HR asked for banking statement as proof of last TS salary. Dislike this pricing method — verify if standard.
- **Quỳnh's onboarding signal (negative):** Internal team not supportive during onboarding. External admin navigation was difficult — false and non-updated info. This is a culture data point, not conclusive but worth probing.

**Outcome (May 13):** Closed — Out of Budget. Mao's team quota allows only 1 PM; he decided to keep Hà (existing PM). I am the out-of-budget case. Track B is closed.

### Track C — Giáp Lê's Team (AI Alignment / BKTT) — `Offer Letter Received — Accepted (June 11, 2026)`

- **Lead:** Giáp Lê (personally leads AI Alignment; also overall team builder for BKTT)
- **Domain (CONFIRMED May 14 — interview):** AI Alignment is **NOT** part of the encyclopedia product. It is a **separate gateway service** — a solution provider that acts as one of the final response-check layers for AI agents serving all Vin P&L services, across geographic markets.
- **Product definition (C1 CONFIRMED):** AI Alignment = internal governance/safety function. A core service plugged into the V-AI ecosystem as a final quality/compliance/performance gate on all AI agent responses before they reach customers.
- **Initial hypothesis (SUPERSEDED):** C2 (search-ad monetisation enabler) eliminated. This is definitively C1.
- **Solution architecture (from interview):**
  1. **Deepest layer:** Plugged at Vin's home-grown LLM model level (voice-specialized) — optimizes response time for latency-critical services (e.g., VinFast vehicle voice assistant)
  2. **Middleware layer:** Independent middleware for all responses from component AI Agents serving each P&L — acts as a universal alignment gateway
- **Team structure (3 sub-domains):**
  1. **AI Alignment (core):** Highest-level alignment specifications — shared across markets, P&Ls, and purposes (compliance + business performance + customer success)
  2. **Evaluation:** Ensures AI Alignment requirements are well-delivered across production lines of AI agents/applications by P&Ls — QA-driven
  3. **Guardrail (Tuân thủ):** Ensures responses delivered to customers comply with AI Alignment standards adaptively, in real-time
- **Role:** PM for AI Alignment product — confirmed by Giáp Lê directly
- **Interview:** May 14 — with Giáp Lê (COMPLETED)
- **Giáp Lê's personal challenges (shared in interview):**
  - *Solved:* Stakeholder alignment within conglomerate — considers this the most valuable skill to learn, and the hardest environment to learn it in
  - *Still solving:* Delivery vs. deadline — 100% controlled by chairman's orders. Vin making a big bet on AI; wants to be a world-class pioneer in AI derivatives. Pace = **1.5× Trusting Social**
- **Verbal green flag signals (May 14):**
  - Asked "when can you onboard?" during interview
  - Told Dương (internal contact) he's happy with my case and will push it through
  - Will create a Zalo group for his existing team to talk and share with me before official onboarding
  - Asked me to migrate to Hà Nội
- **Competency fit: 72%** (C1 confirmed — strong match with guardrail architecture experience)
- **Key competency advantage:** FDCPA/Reg F → 17-exception-state guardrail architecture is direct proof of regulatory-to-spec translation + structural enforcement — the exact core skill for AI Alignment PM under C1. The 3 sub-domain structure (Alignment → Evaluation → Guardrail) maps directly to my experience: compliance spec design → annotation/evaluation framework → structural runtime enforcement.
- **Key competency gaps:** RAG/knowledge graph architecture, VN AI regulatory landscape, conglomerate political navigation (Giáp confirms this is the #1 skill to learn here).
- **Status:** Offer details received (May 26). Pending negotiation.
- **Next steps:**
  1. ~~Wait for official offer letter from HR~~ — Scope + package received May 26
  2. ~~Due diligence call with Dương (tonight, May 14) — peer-level intel on Giáp Lê as a working partner~~ DONE
  3. Package negotiation — NOW ACTIVE

#### Scope of Work (from Giáp Lê, received May 26)

- Quản lý sản phẩm AI Tuân thủ và các sản phẩm AI trong khối
- Quản lý sản phẩm tuân thủ đáp ứng mở rộng ra thị trường nước ngoài và đa ngành nghề
- Phối hợp pháp chế, bạn tuân thủ và PnL để bóc tách các yêu cầu tuân thủ theo thị trường
- Phối hợp Delivery team để release sản phẩm đúng thời hạn và chất lượng
- Theo dõi giám sát, nâng cấp hiệu năng sản phẩm

#### Offer Package (official letter received May 27, 2026)

- **Official gross salary:** 120,791,541 VND/month
  - Lương cơ bản (insurance basis): 84,554,079 VND/month
  - Thưởng ý thức chất lượng: 36,237,462 VND/month
  - **Net (after SI + PIT, 1 dependent):** 96,860,000 VND/month ✓ (calculator-confirmed)
- **Probation salary:** 102,672,810 VND/month (85% of official gross)
  - No social insurance deducted during 2-month probation period
- **Start date:** 11/06/2026 (June 11, 2026) — 2-month probation
- **Location:** TechnoPark Tower, Vinhomes Ocean Park, Đa Tốn, Gia Lâm, Hà Nội
- **Working hours:** 44h/tuần (onsite Mon–Fri, alternating Saturday WFH)
- **Level:** T4 — includes **team management requirement as KPI**
- **Annual leave:** 12 days/year; +1 day per 5 years of service
- **13th month salary:** Per company policy (contract guaranteed)
- **Performance bonus:** Per company KPI policy (variable)
- **Other benefits:**
  - Lunch support (hỗ trợ ăn ca)
  - Premium healthcare (Bảo hiểm Y tế theo chế độ chính thức + Bảo hiểm sức khỏe per company policy)
  - Vingroup employee perks: Vinpearl, VinMec, VinSchool, VinFast, Vinhomes discounts — varies by level and tenure

**Package vs. negotiation targets:**
- Gross 120.79M → Net 96.86M — sits at T4 high floor (target was 130M gross / 103.1M net)
- Net gap vs. target: −6.24M/month (about −6% below 103.1M target)
- Accepted: role strategic value (H1/H3), Giáp's coaching model, and international scope justify the delta at this stage

#### Working Hours & Responsibility

- **Onsite Mon–Fri:** Check-in 8h30–9h30, lunch break 12h30–1h45, check-out from 5h45 (8h/day)
- **Saturday:** Every other Saturday, default WFH

### Shared Context (~80%)

Both teams report to the same VP (Phạm Nhật Hoàng, heir). Management style, org culture, compensation structure, contract entity, and onboarding environment are ~80% identical. All shared analysis below applies to both tracks. Differences are called out per-track where they matter.

---

## Compass Filter


| Dimension           | Score | Notes                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sovereignty**     | ?     | Manager-level = functional pillar or function owner; people management TBD. Concern: top-down structure — impact path is through team fit rather than direct authority. Likely bottom of the decision hierarchy within Vingroup's conglomerate structure. Key question for interview: management-to-technical ratio — what is the actual scope of ownership? |
| **Diversification** | ?     | Top-tier AI lab in VN. If it opens AI research + enterprise + government connections = high diversification value. Risk: if the role is siloed within the conglomerate, diversification upside drops sharply.                                                                                                                                                |
| **Excellence**      | ?     | VinLab AI reputation is strong — "top talent" signal. My definition of excellence in this role hypothetically: (1) compensation scheme tied to achievement (salary + bonus that reflects actual output); (2) 1–2 years of referrable knowledge and network that opens higher-value opportunities on exit.                                                    |
| **Overall**         | ?     |                                                                                                                                                                                                                                                                                                                                                              |


**Compass verdict:** `Testing` — Interview with Data Director Thu Mar 19

---

## Emotional Read

> **Lean forward or relief?**

- Decision to send CV (Mar 5): Inspired by Quỳnh's choice. Quỳnh = "deadly conservative" — her joining is a meaningful signal, not noise. Felt like a genuine probe, not a fear move.
- After HR call (Mar 11): HR was charming — good sales skills, questions were standard, information sharing was selective. Felt curious, not anxious. Note: the warmth likely reflects HR's sales function rather than genuine organizational quality. Discount the enthusiasm accordingly.
- After Tam's story (Mar 11 evening): Self-doubt rose sharply. Somatic collapse. BUT: identified as old pattern (mẹ architecture → any voice questions capability → collapse), NOT data about Vingroup.
- **⚠️ Critical distinction:** Tam's secondhand negativity (Thư's opinion on EVO performance) ≠ data about Vingroup or about this Director role. These must not contaminate the interview frame.

---

## Opening Questions

> Key unknowns to resolve through touchpoints. Review before every meeting. Update status after.

### Shared (all teams)


| #   | Question                                                                                                                                                                                                                                                                                       | Importance     | Status | Answered at |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------ | ----------- |
| 1   | Contract entity: Vin Smart Future or Vingroup parent? Implications for benefits, termination, CV brand.                                                                                                                                                                                        | `Critical`     | `Open` | Vin Smart Future, the only tech susidiary of one of the biggest colongmerate has a proper ai lab and data centers          |
| 2   | What decisions does a Manager own vs. escalate to Director?                                                                                                                                                                                                                                    | `Critical`     | `Answered` | May 14 (interview + Dương call) — Giáp owns commitment to upper management (quality bar + deadline). PM owns implementation HOW with Giáp's coaching. Giáp is middle-man between Huy Ngô (Product Director) and PMs. Execution-with-coaching model. |
| 3   | Management-to-technical ratio — how much people/strategy vs. hands-on?                                                                                                                                                                                                                         | `Critical`     | `Partial` | May 14 — Role is product/strategy layer (alignment specs, evaluation design, stakeholder coordination). Not DS hands-on. |
| 4   | Compensation structure — base + bonus tied to what KPIs? Equity/phantom equity via Vin Smart Future?                                                                                                                                                                                           | `Critical`     | `Partial` | May 26 — 95M VND net, 13th month guaranteed, performance bonus variable (business + team). T4 level = team management as KPI. No equity/phantom equity mentioned. Probation at 85%, insurance on 70% gross post-probation. |
| 5   | Approval chains and documentation overhead for a typical product/data decision?                                                                                                                                                                                                                | `Important`    | `Open` | —           |
| 5b  | What does the documentation/sign-off process serve here? (EY comparison: audit trail = client trust = tolerable. If Vin's process has no visible strategic payoff, it's pure energy drain for an ENFP-Conscientiousness profile.)                                                              | `Critical`     | `Open` | —           |
| 6   | Team autonomy and feedback culture — how does VinLab operate within Vingroup?                                                                                                                                                                                                                  | `Important`    | `Partial` | May 14 (Dương call) — Giáp's team: outcome-driven feedback, autonomy on HOW, strict accountability on WHAT and WHEN. Team culture investment (trekking, ice-breaking). Broader VinLab culture still unprobed. |
| 7   | What does "great" look like in 12 months from the Director's POV?                                                                                                                                                                                                                              | `Important`    | `Answered` | May 15 — Internationally qualified, adaptable AI Alignment service across P&Ls and countries within 12 months. PM starts as team member, expected to become product team leader driving this. |
| 8   | Decision-making speed — how fast can a team ship?                                                                                                                                                                                                                                              | `Important`    | `Partial` | May 14 — Giáp says pace = 1.5× TS. Deadlines 100% chairman-controlled. Vin wants world-class AI derivatives at speed. Signal: fast shipping, but externally imposed cadence. |
| 9   | Mon-Sat overtime norm — enforced, cultural, or team-dependent?                                                                                                                                                                                                                                 | `Nice-to-know` | `Answered` | May 26 — **Confirmed:** Saturday every other week, default WFH. Mon–Fri onsite 8h/day with flex check-in window (8h30–9h30). Not full Mon-Sat enforced — alternating Saturdays with WFH option. |
| 10  | Team/unit stability — what's the average tenure? What happens to teams when Vingroup shifts strategic priorities? (Source: red flag — "layoffs happen quickly; business units closed quickly")                                                                                                 | `Critical`     | `Answered` | May 14–15 — Giáp has been at Vin 1 year. **May 15 upgrade:** Giáp explicitly stated AI Alignment is strategically built for the long run — must-have for AI products as Vin's key revenue stream. Less likely to change business objectives. Significantly de-risks the "units closed quickly" red flag for THIS team specifically. |
| 11  | How does the VP (Phạm Nhật Hoàng)'s vision directly shape this team's mandate? How stable has the strategic direction been since this team was formed? (Source: heir risk analysis — extensive but unprobed)                                                                                   | `Important`    | `Open` | —           |
| 12  | What kind of hands-on work is expected — data science / model-building, or product strategy / stakeholder coordination? (Source: competency gap — "they might assume deep DS hands-on; my strength is product/strategy layer." Q3 covers mgmt-vs-technical axis; this covers WHICH technical.) | `Critical`     | `Answered` | May 14 — Product strategy + stakeholder coordination + alignment spec design. NOT DS hands-on. Confirmed by the role description: PM for AI Alignment specs/requirements, not building models. |
| 13  | Full reporting chain — who does the Manager report to, and what does the chain look like above the Director? (Source: Touchpoint Mar 11 lingering question — never formalized)                                                                                                                 | `Important`    | `Partial` | May 14 — Report to Giáp Lê directly. Giáp sits under BKTT/V-AI. Chain above Giáp = TBD. |
| 14  | Cross-unit exposure — does this team collaborate with other Vingroup units, or is it self-contained? (Source: Diversification compass — "if siloed, diversification upside drops sharply")                                                                                                     | `Important`    | `Answered` | May 14 — **Maximum cross-unit.** AI Alignment serves ALL P&Ls across ALL geographic markets. By definition, PM must work with every P&L's AI agent team. Not siloed. |
| 15  | Is initiative rewarded or punished here? What happens when someone proposes a new approach vs. following existing process? (Source: 90-Day ENFP-7 friction — "environment doesn't reward initiative" = month 3 disengagement risk)                                                             | `Important`    | `Partial` | May 14 (Dương call) — Giáp's one-man-soldier approach to 0→1 + coaching style suggests initiative welcomed when aligned with his direction. Pure freelancing unlikely rewarded. Outcome-driven = good results earn trust. |


### Track A — Hải Long's Team (Fintech)


| #   | Question                                                                                                                                                                                                                                                     | Importance     | Status       | Answered at                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A1  | What is the fintech data service mandate — what problem is this new team solving?                                                                                                                                                                            | `Critical`     | `Answered`   | Mar 19 — Cross-conglomerate data/AI solutions for P&L business problems, not fintech risk specifically. Long backlog.                                                                |
| A2  | Team composition and size — who else is on this brand-new team?                                                                                                                                                                                              | `Critical`     | `Partial`    | Mar 19 — Analytics layer + Datalake/AI signals + Modeling team. Specific headcount unclear. Hai Long choppy on org structure.                                                        |
| A3  | What credit risk experience level is expected? Where are my gaps relative to need?                                                                                                                                                                           | `Critical`     | `Superseded` | Mar 19 — Role is NOT credit risk. Actual gap flagged: technical fluency, not risk expertise.                                                                                         |
| A4  | What does Day 90 look like for this team? First deliverable?                                                                                                                                                                                                 | `Important`    | `Partial`    | Mar 19 — Long backlog of P&L requests. Recommendation engine mentioned as typical use case. No specific Day 90 deliverable stated.                                                   |
| A5  | Tech stack and data infrastructure — greenfield or inheriting something?                                                                                                                                                                                     | `Important`    | `Partial`    | Mar 19 — Datalake exists (sister team). Feature store being built. Analytics/modeling layer = greenfield.                                                                            |
| A6  | What's the relationship between this fintech team and Vingroup's existing financial services?                                                                                                                                                                | `Nice-to-know` | `Answered`   | Mar 19 — Not a fintech team. It's a horizontal data services team serving ALL P&Ls including but not limited to financial services.                                                  |
| A7  | Is "data service team" the confirmed org unit name? Is the fintech branch organized by vertical (real estate finance, mobility finance, etc.) or by horizontal capability (payments, lending, risk, data)? This changes the scope of the role significantly. | `Critical`     | `Answered`   | Mar 19 — "Data Services" confirmed. Horizontal team serving cross-P&L use cases. Not organized by vertical.                                                                          |
| A8  | Beyond risk — what other product/data needs does the fintech branch have? Is the team expected to cover non-risk product areas (e.g., payment orchestration, lending, embedded finance across the super app verticals)?                                      | `Critical`     | `Answered`   | Mar 19 — Not a fintech branch. Team covers ALL business problems from any P&L — recommendation engines, analytics solutions, AI signals. Scope is much broader than risk or fintech. |
| A9  | How does the fintech branch serve the broader VinSmartFuture super app ecosystem (VinHomes, VinFast, VinMec, Vincom, Vinpearl)? Is it a horizontal financial layer or siloed to specific verticals?                                                          | `Important`    | `Answered`   | Mar 19 — VSF mission is to drive informative decisions for the WHOLE conglomerate. Cross-P&L data aggregation confirmed. Not siloed.                                                 |
| A10 | What is the team's relationship with tokenized assets / digital asset initiatives, if any?                                                                                                                                                                   | `Nice-to-know` | `Not asked`  | — Did not probe during interview.                                                                                                                                                    |


### Track B — Mao's Team (Customer Service)


| #   | Question                                                                                                | Importance  | Status     | Answered at                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------- | ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B1  | What is the CS data service mandate — what problem is the team solving for banking clients?             | `Critical`  | `Answered` | Mar 24 — Agentic AI for post-sales customer care. First P&L: VinFast. Key use cases: incident handling (cứu hộ), order inquiry (tra cứu đơn hàng), technical support (bảo hành bảo dưỡng). Expandable to other P&Ls. |
| B2  | What stage is the product at — and what does "full product development" mean here vs. presales support? | `Critical`  | `Answered` | Mar 24 — 0→1 stage. Hotline currently 100% human; website chat has AI. Building agentic AI to automate layers 4–5 (expert routing + machine agent resolution).                                                       |
| B3  | How does Hà's role relate to the position I'd fill? Overlap or complementary?                           | `Important` | `Open`     | —                                                                                                                                                                                                                    |
| B4  | What's Mao's management style — how much autonomy does the team have day-to-day?                        | `Important` | `Partial`  | Mar 24 — Mao is currently overloaded (70%+ on product/stakeholder). Willing to delegate detail product work. Target: 40% tech / 40% product / 20% alignment. Signal: trusts enough to hand off, not micromanaging.   |
| B5  | Presales-to-product handoff — am I building what's been sold, or shaping what gets sold?                | `Important` | `Answered` | Mar 24 — Building. This is 0→1 product development, not presales. Mao wants to offload the detail product layer to focus on solutions.                                                                               |
| B6  | What's the path from current stage to full product development position?                                | `Important` | `Partial`  | Mar 24 — Immediate path: own layers 4–5 product work. PMO handoff by 30/4. Milestones 30/4 and 30/6 define first delivery arc. Longer-term trajectory TBD.                                                           |
| B7  | How do the PM, PMO, and Mao divide ownership — and what are their fears/desires in this dynamic?        | `Critical`  | `Open`     | — Surfaced from Mar 24 call. Need to understand Hà's and PMO's working style and boundaries before interview.                                                                                                        |
| B8  | What is the LLM tech stack — RAG architecture, chain-of-thought approach, model hosting?                | `Important` | `Open`     | — Surfaced from Mar 24 prep notes. Need to demonstrate technical curiosity in interview.                                                                                                                             |


### Track C — Giáp Lê's Team (AI Alignment)


| #   | Question                                                                                                                                                                                                                   | Importance     | Status       | Answered at                                                                                                                                                                                                                                                  |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| C1  | Is AI Alignment a governance/safety function (C1) or a monetisation enabler (C2)?                                                                                                                                          | `Critical`     | `Answered`   | May 14 — **C1 confirmed.** Gateway service checking all AI agent responses across P&Ls and markets. Not encyclopedia, not ad-revenue.                                                                                                                        |
| C2  | What does the AI Alignment product concretely do? What problem is it solving today?                                                                                                                                        | `Critical`     | `Answered`   | May 14 — Final gateway check on AI agent responses. Serves all Vin P&L services across geographic markets. 3 sub-domains: core alignment specs, evaluation (QA), guardrail (real-time compliance).                                                           |
| C3  | Who are the consumers of AI Alignment output — internal P&Ls only, or external?                                                                                                                                            | `Critical`     | `Answered`   | May 14 — Internal P&Ls (all AI agents serving customers). End-customers experience it indirectly (safe/compliant responses). Not a standalone consumer product.                                                                                               |
| C4  | What decisions does the PM own vs. what stays with Giáp?                                                                                                                                                                   | `Critical`     | `Answered`   | May 14 (interview + Dương call) — Giáp owns the commitment to upper management (quality bar + timeline). PM executes to his estimation with his coaching on the how. Autonomy on implementation details; accountability on outcome + deadline. Execution-with-coaching model, not full ownership. |
| C5  | Solution architecture: runtime guardrail (every output checked before serving) or batch evaluation (periodic audits)?                                                                                                      | `Critical`     | `Answered`   | May 14 — Both. (1) Deepest: plugged at home-grown LLM level for latency-critical (voice for VinFast). (2) Middleware: independent layer checking all AI agent responses. Plus Evaluation sub-domain for periodic QA.                                          |
| C6  | How does the team currently detect factual errors / hallucinations? Verification layer exists or post-publication review?                                                                                                   | `Important`    | `Open`       | — Not probed in interview. Ask during pre-onboarding Zalo group or first week.                                                                                                                                                                               |
| C7  | Post-Qualcomm acquisition of VinAI's gen AI division — how does V-AI source foundational models? In-house, API, or fine-tuned open-source?                                                                                | `Important`    | `Partial`    | May 14 — Vin has a home-grown LLM (voice-specialized). Implies in-house training for at least some models. Full model supply chain unclear.                                                                                                                  |
| C8  | Does AI Alignment have authority to block AI agent responses, or is it advisory only?                                                                                                                                      | `Critical`     | `Answered`   | May 14 — Has authority. Acts as a final gateway check. Guardrail sub-domain enforces compliance adaptively in real-time.                                                                                                                                     |
| C9  | How does alignment handle tension between response speed (P&L wants fast) and safety (alignment wants thorough)?                                                                                                           | `Critical`     | `Partial`    | May 14 — Architecture addresses this: deepest layer at LLM level optimizes for latency-critical services (VinFast voice). Suggests awareness of speed-safety tradeoff. Exact escalation process unclear.                                                      |
| C10 | Team structure: how many people? PMs, DSs, engineers? Where does AI Alignment sit relative to Vivipedia/encyclopedia?                                                                                                      | `Important`    | `Partial`    | May 14 — 3 sub-domains (AI Alignment, Evaluation, Guardrail). Confirmed: AI Alignment is NOT part of encyclopedia. Separate product under BKTT umbrella. Headcount unclear.                                                                                  |
| C11 | Is this an IC-PM role or people manager? Path to building a team?                                                                                                                                                          | `Important`    | `Answered`   | May 15 — Starts as team member (IC), expected to become **leader of the product team** to drive toward 12-month objective. Concrete IC → team lead trajectory.                                                                                                |
| C12 | What does "great" look like for the AI Alignment PM in 12 months?                                                                                                                                                          | `Important`    | `Answered`   | May 15 — Internationally qualified, adaptable alignment service operational across P&Ls and countries within 12 months. Specific: AI Alignment must be flexible enough to serve AI products across P&Ls and across countries at international quality standards. |
| C13 | Compensation: what T-level? Base + bonus structure? How does package compare to Track B reference (T4 = 100-120M)?                                                                                                         | `Critical`     | `Answered`   | May 26 — **T4 level, 95M VND net.** 13th month guaranteed. Probation at 85% (no insurance). Post-probation insurance on 70% gross. Performance bonus variable. Team management required as KPI. **Note: 95M net vs. target ~140M gross and T4 reference 100-120M gross — different bases, need conversion to compare accurately.** PVI premium healthcare + Vingroup employee perks included. |
| C14 | Giáp Lê's leadership style — micro-manage or trust-and-delegate? How does he handle conflict? How does he protect team under deadline pressure?                                                                            | `Critical`     | `Answered`   | May 14 (Dương call) — Team-glue leader. Outcome-driven feedback (not detail-catching). Strict on quality + timeline (to the hour). Under pressure: PM goes with Giáp's estimation, he coaches the how. Uses agentic prompting to validate output. Not micro-manager on implementation. |
| C15 | What's the realistic working rhythm? Hours/week, weekend expectations, chairman-deadline crunch frequency?                                                                                                                 | `Important`    | `Answered`   | May 26 — **Mon–Fri onsite:** check-in 8h30–9h30, lunch 12h30–1h45, check-out from 5h45 (8h/day). **Saturday:** every other week, default WFH. = ~44h/week average. Crunch frequency still tied to chairman orders (variable). |
| C16 | Does Vivipedia's data eventually train/fine-tune V-AI's own models? If so, alignment = data quality gate for model training (upstream of everything).                                                                      | `Nice-to-know` | `Open`       | — Not probed. Interesting for scope assessment during first months.                                                                                                                                                                                           |
| C17 | Does the team publish research or open-source alignment tools? Appetite for external visibility?                                                                                                                           | `Nice-to-know` | `Open`       | — H3 (future options) question. Probe during pre-onboarding or first month.                                                                                                                                                                                  |
| C18 | Cross-P&L enforcement: if alignment flags a VinFast AI response as non-compliant and VinFast pushes back — who has final authority?                                                                                        | `Critical`     | `Open`       | — Not tested in interview. Critical for sovereignty assessment. Ask during first week or Zalo group.                                                                                                                                                         |
| C19 | Onboarding timeline: when does Giáp expect me to start? What's the ramp-up plan?                                                                                                                                          | `Important`    | `Partial`    | May 14–15 — Giáp asked "when can you onboard?" Flexibility from my side. Must relocate HN minimum 2 months, then reconsider. Start date pending offer letter.                                                                                                |
| C20 | HN migration logistics: what support (if any) does Vin provide for relocation?                                                                                                                                             | `Nice-to-know` | `Partial`    | May 15 — Giáp connected me with referral agents. Studio 27–36 m², ~6.5M VND/mo (incl. fees). Precedent: Giáp offered temporary stay to a team member who struggled with housing. No formal Vin relocation package mentioned. |


---

## Research Notes

### The role / opportunity

- ~~Manager-level position at VinLab AI (Vingroup's AI research arm); interview is with the Data Director~~
- ~~Mandate TBD — need to learn in Director interview: what is the actual problem space? What does this Manager own?~~
- ~~This is not a lateral move by level, but scope of real authority is still uncertain~~
- **UPDATED May 14:** Role is PM for AI Alignment under Giáp Lê's BKTT team. Product = platform-level AI governance gateway serving all Vin P&Ls. Scope: alignment specifications, evaluation frameworks, real-time guardrail enforcement across all AI agents. Authority confirmed: can block non-compliant responses. Cross-P&L, cross-market mandate. Verbal green flag received; awaiting offer letter.

### The organization

**Team (as researched — cold finds, no prior relationships unless noted):**

- **Ma Nam** — team lead, ~1–2 years tenure at Vin; ex-True ID, ex-VNG
- **Nguyen Hai Long** — Data Scientist / newcomer Data Director; ex-Visa US; no LinkedIn presence; scholar profile: [https://scholar.google.com/citations?hl=en&user=RI_8PosAAAAJ](https://scholar.google.com/citations?hl=en&user=RI_8PosAAAAJ)
- **Ngoc Nguyen** — Data Scientist, likely Manager level; ex-Visa VN, ex-TrustingSocial VN *(cold research find — name recognized from TS, no prior working or personal relationship)*

**Green flags:**

- Fast HR process: Director-level interview booked same call as HR screening
- Top-tier AI talent signal within VN market
- Multiple domain openings across VinLab (aggressive hiring across areas)
- Quỳnh (deadly conservative, high-discernment) chose to join = strong positive external signal

**Red flags:**

- Military culture: reports of Mon-Sat overtime across unofficial forums
- High turnover: layoffs happen quickly; business units closed quickly
- HR opacity: avoided org hierarchy questions; conservative when asked about number of interview rounds → structure is deliberately kept opaque from outside
- Decision-making: strictly top-down; likely bottom authority position in this role
- Documenting procedure: strict sign-off culture reported — comparable to EY Singapore's process-heavy environment. Personal tolerance check: EY's documentation rigor was manageable but energy-draining. At Vingroup the volume may be higher with less strategic payoff. Interview probe: ask about approval chains and documentation overhead for a typical product/data decision.
- Surveillance culture: "sao đỏ" (red star) system — human monitors embedded in teams who report behavioral infractions upward. Punishment/fine policy for tardiness and policy violations. This is a cultural norm in large Vietnamese conglomerates, not unique to Vin — but the formality and enforcement level matters. Interview probe: observe office dynamics for signs of this; ask indirect questions about team autonomy and feedback culture.

**Recruiting entity:**

- Actual hiring entity is **Vin Smart Future** — NOT VinLab AI directly. Likely a private holding company; Hoang Pham (heir) is a probable key holder/director.
- ⚠️ **Action required:** Due diligence on Vin Smart Future — check business registration, directors, capitalization, relationship to VinLab AI and Vingroup parent. This affects contract terms, equity (if any), and organizational stability.
- Key question: does the employment contract sit with Vin Smart Future or Vingroup? This has implications for benefits, termination terms, and brand association on CV.

### VinSmartFuture Ecosystem Analysis (Mar 16 research)

**Super app vision (from ecosystem diagram):** Single platform serving end-customers, suppliers, and employees with transactions across ALL Vingroup verticals:


| Vertical                               | Entity                   | Transaction Type           | Fintech Implication                                                  |
| -------------------------------------- | ------------------------ | -------------------------- | -------------------------------------------------------------------- |
| Mua Nhà (Real Estate)                  | VinHomes                 | High-value, infrequent     | Mortgage, installments, tokenization candidate #1                    |
| Giáo Dục (Education)                   | VinSchool, VinUniversity | Recurring, predictable     | Tuition financing, scholarship wallets                               |
| Chăm Sóc Sức Khỏe (Healthcare)         | VinMec                   | Variable, insurance-linked | Health insurance, medical installments                               |
| Mua Xe / Gọi Xe / Thuê Xe (Mobility)   | VinFast, GSM             | High-value + recurring     | Auto financing, leasing, ride-hail wallet, tokenization candidate #2 |
| Du Lịch, Giải Trí, Mua Sắm (Lifestyle) | Vinpearl, Vincom         | Frequent, mid-value        | Loyalty, BNPL, lifestyle credit                                      |


**Key insight (REVISED post-interview):** The data service team is NOT a fintech risk branch. It's a **cross-conglomerate data/AI solutions team** that serves ALL P&Ls. VSF's mission is to drive informative decisions for the whole conglomerate. The "fintech risk" JD from HR was misleading — actual scope is recommendation engines, analytics solutions, AI signals across real estate, mobility, retail, healthcare, etc. The conglomerate is pouring serious capital into VSF hoping to monetize data insights across their multi-sector business.

**Tokenized assets signal:** Heard from working-level contact (2 hierarchy gaps from heir). Confidence: ~10%. Vingroup reportedly pioneering tokenized asset regulation with Vietnam government. If real, fractional real estate tokenization (VinHomes) is the most obvious play. Given Vin's speed of strategic change, this could materialize or vanish quickly.

### JD Analysis & Competency Mapping (Mar 16)

**Hai Long's actual JD (risk-focused):** Customer risk/fraud/behavioral risk → customer risk framework → AI/ML model risk governance → embed risk into Product/DS/Eng → data privacy & AI governance → technical guardrails.

**Competency fit against Hai Long's risk JD:**

- 🟢 Strong: large-scale platform experience, cross-functional embedding, regulatory→technical translation (US debt collection compliance)
- 🟡 Transferable: data privacy → guardrails (have it in US compliance context, not PDPA/data privacy specifically)
- 🔴 Gap: risk framework architecture ownership, AI model risk governance (bias, fairness, drift)
- **Overall: 50-60% fit for pure risk role**

**Simulated alternative roles & fit:**

- Data Platform PM (non-risk): 55-60% fit — MLOps/productionization strong, but no data platform ownership
- **Fintech Product PM — Embedded Finance & Cross-Vertical: 82-88% fit** — payment rails (ZaloPay 4x), lending (TS 30% uplift), 0→1 (AI Voice Agent, B2B2C loyalty), embedded finance (AI Payment inside voice), cross-source credit scoring (telco→scoring = same logic as mobility+healthcare→scoring). Gap: tokenized assets (learnable).

**Strategic positioning note (REVISED post-interview):** The "Embedded Finance & Cross-Vertical" positioning was based on the HR JD, which turned out to be inaccurate. Actual role is cross-P&L data/AI solutions — recommendation engines, feature stores, signal engineering. This is a DS-adjacent product role, not a fintech product role. The fit angle shifts from "embedded finance expertise" to "product management for data science teams" — which is weaker given the interviewer's feedback on technical fluency gap. The honest question is no longer "which track" but "does either track match my values and strengths?"

### Market position

- Vingroup's strategic thesis: real-estate cashcow is unsustainable long-term (can't cut land forever) → tech transformation to build a second cashcow. This tech bet is driven by necessity, not vision-first.
- Real-estate distribution still dominated by offline multi-level model (đại lý trả tiền trước để giành suất booking). O2O not yet the dominant channel. Root cause: VN government transparency requirements on real-estate cashflow not yet mature → offline channel remains profitable and easier to manage. (Tam's direct insight.)
- **Heir risk — Pham Nhat Hoang (VP, ~26 years old):** zero prior experience outside family-controlled entities. Comparison frame: Lee Jae-yong (Samsung) as the closest precedent — chosen heir, no prior external management experience. Key differences:
  - LJY entered Samsung → strategic planning department first
  - Hoang entered Vingroup → CMO first
  - Samsung's historical trajectory: grocery trading → food processing → textile manufacturing → insurance/finance/retail → electronics → semiconductor manufacturing
  - Vingroup's trajectory: Soviet/Ukraine instant noodle producer → VN real-estate → [struggling to identify next cashcow]
- Chairman Pham Nhat Vuong (born 1968, ~58 now): ~7 years until typical 65 retirement threshold. Hoang's "luxury experiment" phase runs at least 5 more years before full authority transfer. This is still the heir's playground.
- Assessment: tech transformation is real-necessity driven, but execution risk is high given heir profile and the gap between Vin's historical trajectory and Samsung's proven model.

---

## Touchpoints (chronological)

### Mar 5 (Thu) — CV Submitted

**With:** HR (via portal/email)
**Format:** Async

**What happened:** Sent CV to Vingroup (VinLab AI). Overrode Tam's prior negative framing. Quỳnh's joining = signal worth testing.

**What I learned:** Decision felt clean — curiosity-driven, not fear-driven.

**Emotional read after:** Right call.

---

### Mar 11 (Wed) — HR 1st Round Call

**With:** Vingroup HR
**Format:** Phone call

**What happened:** 1st round HR screening. Director-level interview booked for Mon Mar 16.

**What I learned:**

- Fast process: Director interview booked same call.
- HR tone: warm, professional — but charming in a sales-function way. Questions were standard. Actively avoided specifics on org hierarchy and number of interview rounds.
- Signal: VinLab is hiring aggressively across multiple domains — open to discussing different role fits. High recruiting volume.

**Emotional read after:** Curious. Discounting the warmth as sales. Staying open.

**Questions I still have:**

- What does the Manager mandate actually look like day-to-day?
- Who does this Manager report to and what's the reporting chain above?
- What does "great" look like in 12 months from the Director's POV?

---

### Mar 11 (Wed evening) — Tam Meeting Side Effect

**With:** Tam (mentor/contact)
**Format:** In-person

**What happened:** Tam relayed Thư's negative opinion on my EVO performance at Trusting Social. Triggered instant somatic self-doubt collapse.

**What I learned about myself (not about Vingroup):**

- Same mẹ-architecture: "any voice questions capability → somatic collapse." Thư is female and peripheral to EVO — the wound doesn't need a powerful figure to activate.
- EVO was formative. Hà's case came AFTER and was shaped by EVO lessons. Thư's view is secondhand and not the source.
- **This is a pattern to bring to Dr. Sarah Chen — NOT a data point about Vingroup.**

**Emotional read after:** Needed to lie down. Identified the pattern clearly — did not let it fuse with Vingroup assessment.

---

### Mar 13 (Fri) — Interview Prep (planned)

**With:** Self + Claude (simulated Director)
**Format:** Prep session

**Tasks:**

- Research: What does the Manager role at VinLab AI actually look like? Mandate, team, KPIs.
- Prepare compass-filter questions for the Director (sovereignty / diversification / excellence).
- Simulate hard questions the Director may ask.
- Frame: I am evaluating THEM — same as Yihang meeting.
- Tam/Thư reflection: separate the self-doubt trigger from the interview assessment.

---

### Mar 19 (Thu) — Director Interview (COMPLETED)

**With:** Nguyen Hai Long (Data Director)
**Format:** Interview — friendly tone, not drilled down
**Self-score:** 7/10

**What happened:**

- Hai Long oversees the data services line under VinSmartFuture (VSF), a new Vingroup company
- VSF's business mission: drive informative decisions for the whole conglomerate
- His team provides data/AI solutions for business problems requested by different P&Ls (business units)
- Team structure: Analytics layer + Datalake/AI signals sister team + Modeling team
- Typical use case (recommendation engine): cross-P&L raw data from datalake → signals → feature store → models
- Long backlog of problems to solve — politically positioned as "requested by P&Ls" but real authority sits with Pham Nhat Vuong (chairman) represented by the heir
- Conglomerate is pouring serious capital into VSF — hoping for financial returns from data monetization across their multi-sector business

**His feedback on me:** "Solid experience in product management, clear showcase of willingness to learn and starting up new domain without hassle and generating product business impacts. On the improvement side, technical understanding not that firm/fluent."

**Notable observation:** He did not ask "which day can you onboard" — typically a positive signal. However, HR likely already has this information from the earlier screening, and he knows I've already resigned from TS. Inconclusive signal.

**What I learned about the organization:**

- The actual role/team is NOT what the HR JD described — it's cross-conglomerate data solutions, not fintech risk specifically
- Hai Long was moderate openness, showed genuine interest in having a product person helping him. As a data scientist personality, seemed to have some difficulty expressing in non-technical language
- His description of org structure was choppy/inconfident — a signal about team maturity or his own uncertainty about how things are organized
- The "P&L requests" framing is political theater — real demand comes from the heir/owner. This directly impacts product prioritization, backlog management, and delivery sign-off

**What I wish I'd done better:**

1. Questions about single-prompt vs. state machine (Voice AI architecture) — should have described the technical design concept more fluently. Lost score here.
2. Over-described an AGI chatbot for customer support that was NOT my product — tried to use it as background story linking to AI Agent for Collection, but couldn't back the argument for why it didn't achieve market fit. **Lesson learned: never mention products outside your management that you can't speak fluently about.**

**Post-interview emotional read:**

- Lean forward or relief? → **Neither — mixed.** Want the win (ego), but don't feel pulled toward the work itself.
- What did I learn about Vingroup's culture? → Political complexity confirmed. "P&L requests" = theater for heir's agenda. Hai Long's choppiness on org structure = either early stage or deliberate opacity.
- Military culture signal? → Not directly tested in this conversation. Friendly tone doesn't disprove it.

**Honest self-read on interest level:**

- **I want the win** (getting his yes) — this is ego/achievement drive, not genuine pull toward the work
- **Tricks impulse detected:** Wanting to send a touching thank-you letter to increase chances. This is the ENFP-7 "chase the win" pattern, not informed interest.
- **The work itself does not excite me** because:
  1. Political complexity of conglomerate (pretend P&L demand vs. real heir demand) = product prioritization nightmare
  2. Hai Long's inconfidence describing his own org = team maturity concern
  3. Recommendation ML = mature/old technology, little product innovation needed, many ecommerce showcases exist already
  4. Sales-oriented recommendation (Vingroup's DNA) doesn't match my less-consuming living values right now

---

### Mar 24 (Tue) — Pre-Interview Call with Mao

**With:** Nguyễn Xuân Mão (via WhatsApp call + chat)
**Format:** Call → follow-up chat

**What happened:**

- Mao briefed me on the updated recruiting need — PM for Agentic AI customer care product:
  - **Client (P&L):** VinFast (e-car, e-scooter) as first business use case, expandable to other P&Ls
  - **Product scope:** Agentic AI for post-sales customer care — incident handling (cứu hộ), order inquiry (tra cứu đơn hàng), technical support (bảo hành bảo dưỡng)
  - **Product status:** 0→1. Hotline = 100% human-served; website chat = AI-enabled
  - **5-layer architecture:** User → Connection channels → P&L Router → Expert Router (human/machine/hybrid) → Machine Agent resolution
  - **My scope:** Layers 4–5 (Expert Router + Machine Agent). Mao currently solo on these, overloaded, wants to shift focus to solution layer
  - **Team structure:** Hà (PM) + Mao co-manage layers 1–3. PMO manages deliverable strategy ↔ budget for all layers. PMO handoff to new hire by 30/4 (backup: transfer to Hà)
  - **Key milestones:** 30/4 and 30/6
- **Probed Mao's pain point** (follow-up chat):
  - Currently 70%+ of his time goes to product + stakeholder alignment
  - Target state post-hire: 40% tech, 40% product, 20% alignment & AI roadmap
  - He noted: PM/PMO/tech team all work together — boundaries won't be rigid
- **Interview logistics:** Panel = Mao, 1 DS from his team, Hà (PM), 1 PMO
- **Package intel from Mao:**
  - Negotiation sits with HR; over-budget → escalated to Mao → he'll likely stick to budget ceiling (outlier packages need approval, only for urgent cases)
  - Seniority level: upper range T5–T4
  - Social insurance: Vin pays on only 70% of gross
  - My target: ~140M VND (1.5× TS range). Reference: 2024 T4 = 100–120M; 2024 T5 = 60M + inflation
- **Quỳnh's onboarding experience (separate conversation):** Negative — internal team not supportive, external admin navigation difficult with false/non-updated info. HR asked for banking statement as salary proof from TS.

**What I learned:**

- **About the opportunity:** This is a genuine 0→1 product build — much more aligned with my strengths than Track A's mature recommendation ML. The 5-layer architecture is clear and the scope (layers 4–5) is well-defined. Mao's pain is real and concrete: he's drowning in product detail work and needs someone to own it.
- **About the dynamics to navigate:** Three-way PM/PMO/Mao relationship is the political terrain. Need to understand Hà's and PMO's fears/desires before asserting scope. First 2 weeks: listen to what existing PM wants, find sweet spot for boundary division, then adjust strategy after understanding the relationships.
- **About my positioning:** Compliance specs from EVO/Hà cases are a strong showcase for methodological cross-functional stakeholder navigation + business requirement changes. Lead with this alongside emotional intelligence. Don't over-show-off before seeing the value — competence speaks.

**Interview prep tasks:**

1. Prepare questions about cases where senior PM / director level must step in (break-the-problem scenarios) — tests how the escalation chain works
2. Prep LLM tech stack questions (RAG, chain-of-thought, agent architecture) — demonstrate technical curiosity
3. Build compliance specs showcase — methodological narrative for stakeholder navigation
4. Study the 5-layer architecture — be ready to discuss layers 4–5 with product-level specificity

**Emotional read after:** More engaged than Track A. The 0→1 nature and clear product scope feel right. Mao's overload is genuine — this isn't a manufactured role. Concern: Quỳnh's negative onboarding signal + salary-proof-by-bank-statement culture. These are yellow flags, not red — but worth probing in interview.

---

### Mar 24 (Tue) — Pre-Interview Call with Mao

**With:** Nguyễn Xuân Mão, Mao's DS team 
**Format:** Call via team

**What happened:**
- Mão asked how i mapped between the Federal compliance legal requirement item by item <> agent logics batched by real-world situation to deliver the goal of 99% accuracy compliance commitment. This is a new question not yet been addressed in the question bank
  - what i anaswer:
    - Use GPT to come up with law readings and classification
    - Me to review the classification and batching
    - In the parallel, ask the collection manager to write the skeleton of the outbound inbound conversation
    - Me to do the 1st round of mapping between the classied and batched reg req to the state of the skeleton conversation
    - Collection manager to write the correct handling play-role script (few-shots) by situation to define what is correct and what is not correct and why
    - Legal/ Compliance consultant join live feedback on the mapping, where the collection manager do the debate; me as the aggregator to make make the handling instruction by situation aligned for both parties in a structured tree format, so that we ensure 20% of 80%-most-common cases have been covered
- He asked me to walk him through the showcase `Emotional Intelligence`, did it well
- He concerns about my exprience of manage product requirements that heavily needs data source mapping integration, which is out of the question bank, i talked abit about the experience with `Bank Integration for ZaloPay` but not mention in details

**Interviewer's feedback after the interview and the interview result**
- I called Mão to get his feedback
  - He told that im qualified regarding the problem in related to building ai agent which need my skill of translating the business req into implementable technical req. He would like to offer me the seniority of T4 (highest is T1 in Vin which is the VP level)
  - However, for thos technical heavy or integration problems, he should be more reluctant because I seems not able to add much value to the table

---

### April 01 (Wed) — Talk to Duong Le (ex-TS)
**With:** Duong Le(ex-TS)
**Format:** Call via messenger
**Purpose**: about her spespective on work and personal life at Vin-HN
**What happened:**
1. **What is the overall score of satisfaction given both work and life over 1 month of working at Vin - HN**: 7
2. **What is the overall score of satisfaction given for work over 1 month of working at Vin - HN**: 8
3. **What is the overall score of satisfaction given for personal life over 1 month of working at Vin - HN**: 6
4. **Why you gave that much of scoring for work**: 
  - About the workload:
  - Notice #1 about the hierarchy of decision: 
  - 
5. **Why you gave that much of scoring for personal life**: 

---

### May 14 (Thu evening) — Due Diligence Call with Dương Lê (Track C — Giáp Lê intel)

**With:** Dương Lê (ex-TS, currently at Vin — peer-level to Giáp)
**Format:** Call via messenger (~15 min)
**Purpose:** Peer-level validation of Giáp Lê as a working partner + org context
**Conflict of interest:** None — Dương has no referral credit or liaison benefit from my onboarding.

**What I learned:**

**1. Org hierarchy & strategic context:**

- Vingroup's AI investment went through 2 phases:
  - **Old approach:** AI as a Service — AI products, engineers, data scientists treated as internal outsourcing provider dedicated to group needs (serving P&Ls)
  - **Current approach:** Transitioning to **AI as Products** — AI division building its own P&L-grade products, engaging other P&Ls as counterparts (not as clients)
- This transition gave **Huy Ngô** (Product Director of AI) increasing tracks and power. Huy Ngô and Giáp shake hands to share the growing workload.
- **Decision hierarchy (confirmed):** Chairman Vượng / Heir Hoàng ↔ Huy Ngô / Peer DS Director (less trendy) ↔ Giáp + Peer DS Lead ↔ Development team (PO/PM — where I play; engineers, data scientists)
- Giáp plays as the **middle man** between Huy Ngô (Product Director of AI) and other PMs/POs.

**2. Giáp Lê as a leader (Dương's direct experience):**

- **Team-glue role:** Significant product management experience. Dương's top-of-mind references: communication platform (OTT), alignment products, risk management products.
- Provides: (1) team direction, (2) team spirit, (3) one-man-soldier for starting-from-scratch projects
- **Team culture:** Many on his team relocated HCM → HN. Giáp good at breaking the ice — organizes shared activities (weekend trekking) to build personal engagement and attachment between members.
- **Delivery style:** Very strict on delivery quality AND timeline. Vin culture = punctuated up to the hour level as per promise. Feedback is **outcome-driven** (not detail-catching). Invests heavily in agentic prompting to validate received output.
- **Conflict handling (Q: what if Giáp accepts a 9-score deadline from upper management but PO thinks only 7-score is achievable?):** Dương says this case rarely happens. Best guess: PO needs to go with Giáp's estimation, and he will give guidance on the how. → **Signal: Giáp owns the commitment to upper management; PM executes to his standard, with his coaching.**

**3. Practical intel:**

- **Most valuable benefit of working with Giáp:** Getting the latest product insights/updates from the Vietnam market.
- **Relocation:** Dương recommends sharing concerns directly with Giáp. Precedent: one team member struggled to find housing early on; Giáp offered a temporary stay. → **Signal: approachable on personal logistics, willing to help.**

**What this means for my decision:**

- **Sovereignty (Q4 — updated):** PM role is execution-with-coaching, not full ownership. Giáp sets the quality bar and deadline commitment to upper management; PM delivers to his estimation with his guidance. This is LESS sovereignty than full product ownership but MORE than pure execution — he provides the "how" coaching, not just specs. Acceptable if the learning (conglomerate stakeholder alignment) justifies the sovereignty tradeoff.
- **Culture fit:** Outcome-driven feedback + strict on timeline + uses agentic prompting to validate = respects product thinking, not micromanaging implementation details. Compatible with my working style (structured, outcome-oriented). Weekend trekking + relocation support = team culture investment is real.
- **Org context upgraded:** "AI as Products" transition means this team is building leverage, not just serving. Giáp sits at a strategic layer (middle between Product Director and execution). My proximity to Huy Ngô (via Giáp) = exposure to AI product strategy at conglomerate level.
- **Risk confirmed:** Delivery-to-the-hour culture + chairman-controlled deadlines + PO goes with Giáp's estimation = pressure flows downward. If Giáp over-commits, I absorb it. Mitigation: Giáp's track record of guidance (not abandonment) under pressure.

**Questions now answered from Opening Questions:**

- C14 (Giáp's leadership style): Team-glue, outcome-driven, strict on quality/timeline, coaches the how, invests in team spirit. Not micro-manager on details.
- C15 (Working rhythm): Strict to the hour on commitments. Weekend activities exist but are team-bonding (trekking), not forced overtime. Actual hours/week still unclear.
- Shared Q6 (Team autonomy/feedback): Outcome-driven feedback (not detail-catching). Autonomy on HOW, accountability on WHAT and WHEN.
- Shared Q15 (Initiative rewarded?): Partially answered — Giáp's one-man-soldier approach to new projects + coaching style suggests initiative is welcomed when aligned with his direction. Pure freelancing likely not.

---

### May 15 (Fri) — Follow-up Call with Giáp Lê (Relocation + Expectations)

**With:** Giáp Lê
**Format:** Call
**Purpose:** Clarify relocation requirements, onboarding expectations, and role trajectory

**What I learned:**

**1. Relocation requirements:**

- **Team location:** Entire product + technical team (using 3rd-party APIs) is in Hà Nội. No HCM product/tech presence for this team.
- **Communication dependencies:** PM role requires simultaneous comms to (1) AI Alignment team (HN only), (2) AI Alignment Tech team (HN only), and (3) other AI services line teams (both HN and HCM).
- **Communication format:** F2F simultaneous communication preferred — driven by the fast-paced workflow. Remote/async not sufficient for this pace.
- **Relocation conclusion:** Must relocate to HN for minimum 2 months, then reconsider HCM-based arrangement.

**2. Expectations & role trajectory:**

- **Business objective stability:** Giáp corrected my 2-month "fast-paced-change" framing. AI Alignment is **strategically built for the long run** — it is the must-have for AI products as Vin's key revenue stream. Less likely to change business objectives (unlike other Vin units that pivot with chairman's direction). → **This is a significant upgrade to Shared Q10 (team/unit stability).**
- **Business objective definition:** AI Alignment = flexible service to AI products across P&Ls, across countries. The "across countries" aspect means AI Alignment must be **internationally qualified and adaptable**. → Scope is broader than VN-only; international compliance/standards are in play.
- **12-month success criteria:** Achieve the above objective (internationally qualified, adaptable alignment service) within 12 months.
- **Role trajectory:** Expected to start as part of the team → potentially **leader of the product team** to drive toward the 12-month objective. → **This answers C11 (IC or people manager?):** starts IC, path to team lead within 12 months.

**3. HN apartment intel (via Giáp's referral):**

- Format: Studio
- Size: 27–36 m² (avg. 30 m²)
- Price: ~6.5M VND/month (inclusive of apartment fee)

**What this means for my decision:**

- **Stability upgraded:** AI Alignment is not subject to Vin's typical strategic pivoting. It's infrastructure for the AI revenue bet. This significantly de-risks the "layoffs happen quickly / units closed quickly" red flag (Shared Q10).
- **Scope upgraded:** "Across countries, internationally qualified" means this role touches global AI governance standards — not just VN compliance. H3 (future options) gets a boost: "internationally qualified AI alignment" is a much stronger exit credential than "VN-only alignment."
- **Trajectory clear:** Team member → product team leader within 12 months. This is concrete growth, not "we'll see." Answers the sovereignty concern partially — start with execution-with-coaching, earn leadership.
- **Relocation cost:** ~6.5M VND/month for housing. Manageable but adds to H2 (finance) pressure. Factor into package negotiation.
- **F2F requirement is non-negotiable for at least 2 months.** Remote/hybrid only possible after proving the working relationship. Acceptable tradeoff given the learning intensity.
---

### May 14 (Thu) — Interview with Giáp Lê (Track C — COMPLETED)

**With:** Giáp Lê (AI Alignment lead / BKTT team builder)
**Format:** Interview (panel TBC — likely 1:1 or small panel)
**Self-score:** TBD (fill after reflection)

**What happened:**

- **C1 confirmed definitively.** AI Alignment is a governance/safety gateway — NOT encyclopedia, NOT ad-revenue. It's a solution provider that acts as a final checkpoint on all AI agent responses across Vin P&Ls and geographies.
- **Architecture clarity:** Two-layer integration — (1) deepest: at Vin's home-grown voice-specialized LLM for latency-critical services like VinFast vehicle assistant; (2) middleware: independent alignment gateway for all AI agent responses across P&Ls.
- **Team structure revealed:** 3 sub-domains — AI Alignment (core specs, highest level), Evaluation (QA on production delivery), Guardrail/Tuân thủ (real-time compliance enforcement). This maps cleanly to my TS experience: compliance spec → evaluation framework → structural runtime enforcement.
- **Giáp's candor on challenges:** (1) Stakeholder alignment within conglomerate — hardest environment, considers it solved for himself, sees it as the most valuable skill transferable here; (2) Delivery vs. deadline — chairman-controlled, Vin betting big on AI, pace = 1.5× TS.
- **Verbal green flag:** Asked when I can onboard. Told Dương he's happy and will push my case through. Will create Zalo group for pre-onboarding team connection. Asked me to migrate to HN.

**What I learned about the opportunity:**

- AI Alignment at Vin is a **platform-level infrastructure role**, not a product feature. The PM owns the alignment spec layer that governs ALL AI agents across the conglomerate. This is C1 at maximum scope — cross-P&L, cross-market, cross-purpose.
- The 3-domain structure (Alignment → Evaluation → Guardrail) is architecturally sound and maps to my exact skill set from TS: compliance architecture → evaluation methodology → structural enforcement.
- Pace is extreme: 1.5× TS, chairman-driven deadlines. This is a feature (H1 acceleration) and a risk (burnout, quality shortcuts).
- Stakeholder alignment is the #1 political skill here — Giáp solved it for himself over 1 year. This is the conglomerate navigation competency I lack and would learn.

**What I learned about Giáp Lê:**

- Candid about challenges — didn't sell the role, shared real pain points. This is a green flag for working relationship.
- Personally leads AI Alignment while building the broader BKTT team — suggests he's deeply invested in this product, not delegating it as an afterthought.
- Proactive on team integration (Zalo group before onboarding) — signals collaborative leadership style.
- **Due diligence needed:** Peer-level validation from Dương tonight.

**Emotional read after:** TBD — fill after evening reflection.

**Post-interview checklist (from prep file):**

- [x] C1 or C2? → **C1 confirmed** — governance/safety gateway across all P&Ls
- [ ] Sovereignty: does the PM own decisions, or execute Giáp's specs? → Partially answered — Giáp leads AI Alignment personally, hiring PM to own the product detail. Need Dương's perspective on how much real ownership exists.
- [x] Alignment independence: does alignment have authority to block content, or is it advisory? → **Has authority** — acts as a final gateway check on responses, including real-time guardrail enforcement
- [ ] Technical maturity: does the team have an existing alignment system, or is this 0→1? → Partially answered — 3 sub-domains exist (Alignment, Evaluation, Guardrail), suggesting existing team and some infrastructure. Exact maturity unclear.
- [ ] Growth model: does this pass the H1 (rate of change) threshold to justify H2 (finance) delay? → Leaning yes — 1.5× TS pace + conglomerate stakeholder alignment + cross-P&L scope = steep learning curve
- [ ] Emotional read: lean forward, neutral, or pulling away? → TBD
- [ ] DS impression: did they test for technical depth or technical empathy? → N/A — interviewed with Giáp directly, not DS
- [ ] Honest self-score: /10 → TBD
- [ ] Update vingroup.md with touchpoint notes → ✅ Done

---

## Running Verdict


| Date   | Verdict                                                            | What shifted                                                                                                                                                                                                                                                                                                                   |
| ------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mar 5  | Testing — CV submitted                                             | Quỳnh's joining = signal worth probing                                                                                                                                                                                                                                                                                         |
| Mar 11 | Testing — HR call positive                                         | Director interview booked. Tam story = separate pattern issue, not Vingroup data.                                                                                                                                                                                                                                              |
| Mar 13 | Testing — preparing for Director interview                         | Research added: team map, heir risk, cashcow thesis, military culture signals. Sovereignty concern rising.                                                                                                                                                                                                                     |
| Mar 16 | Testing — JD received, ecosystem mapped, competency gap identified | Hai Long's JD is risk-focused (50-60% fit). Ecosystem diagram reveals conglomerate super app — fintech is the financial nervous system. Highest-value seat is "Embedded Finance & Cross-Vertical" (82-88% fit). Not leaning to any track yet. New interview questions added (A7-A10). Tokenized assets signal: 10% confidence. |
| Mar 19 | Interview completed — leaning cold                                 | Actual scope ≠ JD (cross-conglomerate data solutions, not fintech risk). Political complexity confirmed (P&L theater → heir control). Recommendation ML = low product innovation. Work doesn't excite. Want the win (ego) but not the job. His feedback: strong PM, weak technical fluency. Self-score: 7/10.                  |
| Mar 22 | Redirected to Track B (Mao's team)                                 | Hai Long redirected me — org chart/requirement changes in risk Ops. Recommended PO role under Mao as better fit for my strengths. HR scheduling meeting early next week. Track A closed, Track B now active.                                                                                                                   |
| Mar 24 | Track B scope clarified — leaning warmer                           | Mao call: 0→1 Agentic AI for VinFast post-sales customer care. Clear product scope (layers 4–5). Mao's pain is real (70%+ on product work, wants to offload). More aligned than Track A. Yellow flags: Quỳnh's negative onboarding, salary-proof-by-bank-statement. Interview Sat with panel (Mao, DS, Hà, PMO).               |


| May 13 | Track B closed — Out of Budget. Track C opened.               | Mao's team quota = 1 PM only; kept Hà. Track C: Encyclopedia ("Bách khoa toàn thư") under Giáp Lê — enterprise knowledge base API layer. Interview with lead DS upcoming. Verifying product concept with internal connection. |
| May 14 | Track C interview completed — **Verbal Green Flag** | C1 confirmed: AI Alignment = governance/safety gateway for all V-AI agents across P&Ls and markets. NOT encyclopedia. 3-domain team (Alignment + Evaluation + Guardrail) maps directly to my TS skill set. Giáp candid on challenges (stakeholder alignment solved, delivery-vs-deadline ongoing, 1.5× TS pace). Green signals: asked onboarding date, told Dương he's happy, creating pre-onboarding Zalo group. Awaiting official offer letter. Due diligence call with Dương tonight. |
| May 14 (eve) | Dương due diligence — **Leadership profile confirmed** | Giáp = team-glue, outcome-driven, strict on quality/timeline, coaches the how. Org context: AI as Services → AI as Products transition. Giáp is middle-man between Huy Ngô (Product Director of AI) and PMs. Sovereignty model: execution-with-coaching (Giáp owns WHAT/WHEN, PM owns HOW). Relocation support precedent exists. |
| May 15 | Follow-up call with Giáp — **Scope & stability upgraded** | AI Alignment = strategic long-run investment, not subject to typical Vin pivoting. Scope: across P&Ls AND across countries — must be internationally qualified. 12-month objective: operational international alignment service. Role trajectory: IC → product team leader. Must relocate HN min. 2 months. Housing: ~6.5M VND/mo studio. Remaining blocker: official offer letter + package negotiation. |

| May 26 | Offer details received — **Package assessment needed** | Scope confirmed via Giáp: AI Alignment PM + AI products across khối, international expansion, cross-functional with legal/compliance/PnL/delivery. T4 level with team management KPI. **95M VND net (target was ~140M gross).** Not directly comparable — need gross-to-net conversion to assess gap accurately. 13th month guaranteed. Mon–Fri onsite + alternating Sat WFH. Premium healthcare (PVI) + Vingroup employee perks. Probation at 85% with no insurance. |
| May 27 | **Official offer letter received — Accepted** | VSF_OL_Le Lu Bao Ngoc, dated 27/05/2026. Gross 120,791,541 VND (net 96,860,000 VND, calculator-confirmed). Probation 102,672,810 VND/mo (85% gross, no SI). Start date: **June 11, 2026** (negotiated — original preference was June 9; June 11 agreed as requested change from my side). Location: TechnoPark Tower, Vinhomes Ocean Park, Gia Lâm, HN. 44h/week, 2-month probation. Net 96.86M vs. target 103.1M — accepted: H1 + H3 strategic value justifies 6.24M/month delta at current stage. |

**Current stance:** `Accepted — Starting June 11, 2026 (Track C — AI Alignment, VinSmart Future)` — Official offer letter (VSF, 27/05/2026) received and accepted. Gross: 120,791,541 VND/month → Net: 96,860,000 VND/month. Probation (2 months): 102,672,810 VND/month. Start date: June 11, 2026 (negotiated from company's initial proposal; June 11 agreed upon request for change). Scope: PM for AI Alignment + AI products across khối, international market expansion. T4 level, 44h/week, TechnoPark Tower HN.

**Blockers before deciding — ALL RESOLVED:**

- ~~Director interview (Thu Mar 19) — primary data collection event~~ DONE
- ~~Mao pre-interview call (Mar 24) — scope and role clarification~~ DONE
- ~~Track B panel interview~~ CLOSED — Out of Budget
- ~~Track C interview with Giáp Lê (May 14)~~ DONE — Verbal Green Flag
- ~~Due diligence call with Dương (May 14)~~ DONE — Leadership profile confirmed
- ~~Official offer details from HR~~ RECEIVED May 26 — package details confirmed
- ~~Package negotiation~~ RESOLVED — Gross 120,791,541 / Net 96,860,000 accepted
- ~~Official offer letter~~ RECEIVED May 27, 2026 — VSF_OL_Le Lu Bao Ngoc signed
- ~~Onboarding date~~ CONFIRMED — June 11, 2026 (negotiated per request)
- **NEXT ACTIONS:** HN apartment sourcing · Batch 1 relocation logistics · Pre-onboarding Zalo group with Giáp's team

**What would make this a YES:**

- Director interview: lean-forward energy, not relief
- Sovereignty confirmed: real mandate, meaningful scope, management:technical ratio feels right
- Diversification confirmed: opens AI research / enterprise / cross-sector access beyond VN
- Excellence standard worth chasing — and compensation scheme reflects it
- Culture probe: military culture signals don't hold up in direct conversation

**What would make this a NO:**

- Interview: relief energy, not excitement
- Sovereignty fails: top-down control confirmed, Manager role is execution-only
- Silo risk: conglomerate structure boxes the role in with no cross-domain access
- Military culture confirmed: Mon-Sat, fast layoffs, heir experiment = 5 years of instability
- "Great in 12 months" doesn't generate knowledge or network that outlasts the role

---

## 90-Day Onboarding Challenges

### Personality × Environment Friction


| My trait                                                               | Environment trait                                               | Predicted friction                                                                                                                                                                                                                           | Severity |
| ---------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| ENFP — needs autonomy, creative ownership, flexible structure          | Top-down conglomerate; strict sign-off; sao đỏ surveillance     | Autonomy suffocation — creative instincts get bottlenecked by approval chains. Energy drain from compliance overhead.                                                                                                                        | 🔴       |
| Openness 85 — drawn to novelty, experimentation, ambiguity             | Military culture — process conformity, punishment for deviation | Experimentation impulse meets "follow the procedure" wall. Risk: either suppress the instinct (burnout) or push back too early (political damage).                                                                                           | 🔴       |
| Conscientiousness 78 — can do process, but needs it to feel purposeful | EY-level documenting + Vin's sign-off culture                   | Process tolerance is real (EY proved it), but EY process had clear strategic payoff (audit trail = client trust). Vin process may feel bureaucratic without visible ROI. Key question for interview: what does the documentation serve here? | 🟡       |
| ENFP-7 — optimistic starter energy, risk of disengagement at month 3   | High-turnover environment; business units shut quickly          | Honeymoon optimism may mask real structural issues. Month 3 disengagement risk amplified if the "new thing" energy fades and the environment doesn't reward initiative.                                                                      | 🟡       |
| Relationship-builder — reads people, builds trust quickly              | Sao đỏ culture — trust is conditional, monitored                | Natural warmth may be misread as political naivety. Need to learn who reports upward before opening up. First 30 days: observe more than connect.                                                                                            | 🟡       |


### Competency Gaps (honest self-assessment)

- **What I know I'm strong at** that this role needs: product thinking, cross-functional communication, stakeholder management, AI/ML product framing (EVO + Hà cases), data-driven decision-making
- **What I think I can do** but haven't proven at this level: people management at Manager scale (had team leads, not direct reports at this volume); operating within a conglomerate hierarchy (EY was structured but advisory — Vin is corporate-operational)
- **What I genuinely lack** and would need to learn fast: Vietnamese corporate politics at conglomerate scale; navigating heir-driven strategic shifts; understanding VinLab AI's specific tech stack and research culture
- **What they might assume I have** based on my CV that I'd need to manage expectations around: deep data science hands-on skills (my strength is product/strategy layer, not model-building); experience in VN's enterprise/government sales cycle (my fintech background is B2C/B2B SaaS, not B2G)

### First 90 Days — Likely Hard Moments

1. **Week 1–2:** Documentation shock — sign-off chains, onboarding paperwork, surveillance norms becoming visible. Adjustment from sprint-based flexibility to procedure-heavy daily rhythm. Sao đỏ awareness kicks in.
2. **Week 3–4:** Honeymoon fades. First real encounter with top-down decision override — something I'd have owned at a startup gets escalated or reversed. The "am I an agent here?" question surfaces concretely.
3. **Month 2:** First performance signal — either validation (shipped something, built a relationship with Director that has real trust) or alarm (silo confirmed, decisions get made above, role is execution-only). Tam/Thư self-doubt pattern may reactivate if any critical feedback arrives — watch for somatic response.
4. **Month 3:** The "stay or go" internal review. By now: is the learning curve still steep (good) or has it plateaued into process maintenance (bad)? Does the 12-month vision still feel worth chasing, or has the sovereignty cost become clear?

### Career Trajectory Value

- **If I succeed here 12–18 months:** CV gains — "Manager at Vingroup's AI lab" is a tier-1 VN signal. Opens enterprise AI, conglomerate strategy, government-adjacent tech. Network access to Vingroup alumni ecosystem (significant in VN). Data Director relationship = potential reference for Director-level roles elsewhere.
- **If I leave after 6 months:** Still worth it IF the learning includes: conglomerate navigation skills, VN enterprise market intelligence, and at least one shipped deliverable. NOT worth it if the 6 months are spent in onboarding + process compliance with no real output.
- **Exit story if it doesn't work:** "Joined Vingroup's AI lab to test conglomerate-scale product leadership. Learned [X]. Left because the role's scope didn't match the mandate discussed in interviews." — This story works if the departure is framed around scope mismatch, not culture mismatch (culture complaints about Vin are common and discount the exit narrative).

---

## Strategic Roadmap

### Pre-Decision (before accepting)

- **Director interview (Thu Mar 19)** — primary data collection. All compass-filter questions must be asked.
- **Due diligence: Vin Smart Future** — business registration, directors, capitalization. Confirm: is the contract with VSF or Vingroup parent?
- **Clarify: Manager role mandate** — what decisions does Manager own vs. escalate? Management-to-technical ratio?
- **Clarify: compensation structure** — base + bonus tied to what KPIs? Is there equity or phantom equity through Vin Smart Future?
- **Post-interview emotional read** — lean forward, neutral, or pulling away? Fill the reflection prompts in the Mar 16 touchpoint.
- **Tam/Thư trigger separation** — confirm this is processed with Dr. Sarah Chen, not leaking into the Vingroup assessment.
- Gut-check: current honest stance — **cautiously curious, sovereignty flag high**

### If YES — First 90 Days Strategy

- **Week 1 objective:** Map the actual org chart, reporting lines, and decision-making flow. Identify who the sao đỏ figures are. Build rapport with Data Director (immediate boss) — understand their communication style and what "good" looks like to them.
- **Month 1 objective:** First meaningful output — even a small win that demonstrates product thinking (not just compliance). Identify one process that could be improved and propose it carefully to test receptivity.
- **Month 2 objective:** Establish credibility with Director on strategic thinking (not just execution). Have a 1:1 conversation about 6-month vision for the team. Build one relationship outside immediate team (cross-functional ally).
- **Month 3 objective:** Self-imposed review — score sovereignty/diversification/excellence at this point. If all three are below 5/10, begin exit planning. If any is above 7/10, commit to the next quarter.
- **Key relationships to build early:** Data Director (boss — trust is survival), Ma Nam (team lead — operational intelligence), one peer Manager in a different Vingroup unit (cross-silo perspective)
- **What to protect:** Evening and weekend time (Mon-Sat risk); outside network maintenance (Varun, Michael, Yihang); therapy cadence with Dr. Sarah Chen; sprint journaling practice

### If NO — Exit Strategy

- **How to decline gracefully:** Thank the Director and HR. Frame as "timing and scope" — "After our conversation, I realized the role's current scope doesn't align with where I need to be in 12 months. I have enormous respect for VinLab's mission and would love to stay in touch as the team evolves." Preserve the relationship — VinLab alumni network is valuable even without joining.
- **What to take from the process:** Market intelligence on Vingroup's AI strategy; conglomerate hiring process knowledge; Vin Smart Future entity awareness; personal stress-test data (how did sovereignty concerns feel in the body?); Tam/Thư trigger identification (therapeutic value).
- **Where does the energy redirect to:** Tictag retro (W3 Tue); Varun Mittal outreach (post-Gate 2); broader job market scan with updated compass criteria sharpened by this process.

### Decision Timeline

- **Hard deadline for decision:** Mar 21 (Gate 2 — Sprint Phase 2 end)
- **What triggers an early YES:** Director interview reveals genuine autonomy, clear mandate, and lean-forward energy. Compensation is above-market. Vin Smart Future due diligence is clean.
- **What triggers an early NO:** Director interview confirms execution-only role with no product ownership. Surveillance culture confirmed directly. Contract sits with Vin Smart Future under opaque terms.

---

## Growth Model Analysis (Chip Huyen framework, May 13 → updated May 14)

**Framework:** Rate of Change (H1) × Time to Solve Problems (H2) × Future Options (H3)

- **H1 (Rate of Change):** **Strong — CONFIRMED by interview.** 3 competencies (RAG, cross-P&L, conglomerate nav) force identity-level transformation. ~3-year cycle vs. historical 5-6. Interview additions: (1) 1.5× TS pace amplifies learning compression; (2) stakeholder alignment in conglomerate = Giáp's #1 hard-won skill = exactly the gap I'd fill; (3) 3-domain team structure (Alignment → Evaluation → Guardrail) means I'd learn end-to-end AI governance, not just one slice.
- **H2 (Solve Problems):** Mixed — Career solved temporarily (2-4 yrs), Finance STALLED (**confirmed May 26: 95M VND net — target was ~140M gross. Need gross-to-net conversion to assess real gap. Either way, well below** SG $13K/mo or US $15-22K/mo), Social partial (VN-bounded). **H2 remains a sacrifice play relative to international alternatives.**
- **H3 (Future Options):** Net +1. Opens 4 doors (AI governance PM, conglomerate leadership, VN gov AI policy, V-AI ecosystem). Closes 3 (global salary anchoring, international mobility, global network). **Interview upgrade:** Platform-level AI governance across ALL P&Ls + geographic markets is broader scope than pre-interview hypothesis. "AI Alignment PM at Vietnam's largest conglomerate" is a stronger exit-story credential than "encyclopedia PM."
- **Total competency investment:** 4,980 effective hours / 8,000 available (62% toward growth). Feasible but tight.
- **Chip-optimal alternative:** SG/UK remote with AI governance scope = same H1 acceleration + H2 finance solved + H3 global doors opened.
- **Key question post-offer (May 26):** H1 case remains strong. H2 blocker now has data: **95M VND net is a confirmed financial sacrifice.** First step: convert 95M net to gross equivalent to compare against the ~140M gross target and T4 reference (100-120M gross in 2024). Then assess: is the actual gap negotiable, and is the total comp (+ 13th month + benefits) enough to justify the H1 acceleration?

---

## Gate 4 Summary (fill at Apr 26)

- Compass score:
- Emotional read across all touchpoints:
- Final verdict:


Team làm tech cho ai alignment vẫn chính ở Hà Nội
Có team làm model vi-chat llm thì ở sài gòn nhưng 30 June họ mới release model. Định hướng đang là nếu model homegrown chạy tốt thì dùng vào luôn nội bộ, không thì vẫn dùng các api model
Vẫn cần vài tháng làm sâu sát ở HN 2->6 tháng ở luôn?
Target 12 tháng:
- AI alignment as a a service for tập đoàn
- Go global

