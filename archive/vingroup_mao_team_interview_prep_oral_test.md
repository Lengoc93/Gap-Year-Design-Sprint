# Mao's Team Interview — Product Management Oral Test Bank

*Interview: Sat Mar 29, 2026 — Panel: Mao, 1 Data Scientist, Ha (PM), 1 PMO*
*Product: Agentic AI for VinFast Customer Care (post-sales)*

---

## Interviewer Profiles & What Drives Their Questions

### Data Scientist (DS)


| Attribute          | Detail                                                                                                                                                                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Role**           | Builds the AI/ML solutions — RAG, LLM orchestration, agentic conversation flows                                                                                                                                                      |
| **Fear**           | Getting a PM who over-promises to stakeholders, writes vague specs, doesn't understand LLM limitations (hallucination, latency, context window), and creates impossible delivery pressure                                            |
| **Motivation**     | Wants a PM who can translate messy business requirements into crisp technical problem statements, shield the team from constant scope changes, and understand enough about the stack to have meaningful prioritization conversations |
| **Interview lens** | "Can I work with this person without losing my mind?" — testing technical empathy, not technical depth                                                                                                                               |


### Ha (Product Manager — layers 1-3)


| Attribute          | Detail                                                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Role**           | Co-PM with Mao on connection channels (Hotline/Chat/Email/OTT) and P&L Router integration                                                                                                                     |
| **Fear**           | Territory overlap — new PM steps on her scope. Or worse: new PM is more senior/charismatic and marginalizes her. Also: new PM doesn't respect what's already been built and tries to redesign everything      |
| **Motivation**     | Clear boundary division, complementary strengths, someone who takes Mao's overload so Mao has bandwidth for strategic direction (which benefits Ha too). A peer who makes the team stronger, not a competitor |
| **Interview lens** | "Will this person respect my work and make my life easier or harder?" — testing collaboration instinct, not raw capability                                                                                    |


### PMO (Project Management Officer) - Want this hire


| Attribute          | Detail                                                                                                                                                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Role**           | Delivery strategy, budget/resource allocation, timeline management across all 5 layers. Doing handoff by 30/4                                                                                                                      |
| **Fear**           | New PM creates scope creep, doesn't respect delivery cadence, introduces chaos into an already tight timeline (30/4, 30/6 milestones). Also: if no replacement by 30/4, PMO burden falls to Ha — so PMO wants this hire to succeed |
| **Motivation**     | Smooth handoff, structured delivery approach, predictable planning. Wants confidence that the new PM can absorb the process without constant hand-holding                                                                          |
| **Interview lens** | "Can I hand this off to this person and sleep at night?" — testing process discipline and delivery reliability                                                                                                                     |


### Mao (Team Lead — layers 4-5, overall direction) - Want this hire most


| Attribute          | Detail                                                                                                                                                                                              |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Role**           | Solo-owning layers 4-5 (Expert Router + Agent resolution), overseeing everything. 70% of time consumed by product + stakeholder alignment. Wants to shift to 40% tech / 40% product / 20% alignment |
| **Fear**           | Hiring someone who needs heavy management (adds to overload instead of reducing it). Also: someone who can't navigate the political complexity of Vingroup's P&L stakeholders                       |
| **Motivation**     | Free up 30-40% of his time. Get a self-sufficient PM for the product detail layer who can own stakeholder communication, spec writing, and probing decisions autonomously                           |
| **Interview lens** | "Can I delegate to this person in 3 months and trust the output?" — testing autonomy readiness and stakeholder navigation                                                                           |


---

## Product Scope Quick Reference

```
1/ User
   ↕
2/ Connection Channel (Hotline-Call, Website-Chat, Social Media-Chat, Email-Text, OTT-Chat)
   ↕
3/ P&L Router (integrated with 3rd party, customized by P&L — e.g. VinFast)
   ↕
4/ Expert Router (topic → expertise level → efficiency prediction → job assignment)
   Human vs. Machine vs. Human+Machine decision
   ↕
5/ Agent (Machine) — conversation tasks + non-conversation tasks in resolution
```

- **Current state:** Hotline = 100% human. Website chat = AI-assisted.
- **Business use case #1:** VinFast (e-car, e-scooter) post-sales
- **Key inquiry types:** (1) Xử lý sự cố / cứu hộ (emergency rescue), (2) Chăm sóc khách hàng / tra cứu đơn hàng (order lookup), (3) Nhân viên kỹ thuật / bảo hành bảo dưỡng (warranty & maintenance)
- **Key milestones:** 30/4 and 30/6

---

## Portfolio Artifacts — Quick Reference for Bridging


| Artifact                                                 | What it proves                                                                                                                                                                                                                                                              | Best used when answering about                                                            |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Exception Guardrail YAML** (~9,500-line state machine) | You translated federal regulations (FDCPA/Reg F) into infrastructure-level guardrails: 17 exception states, dual-LLM reflection architecture, compliance checks BEFORE business logic at every turn, reset-and-redetect pattern, exception-within-exception recursion, BACK | EXC return mechanism                                                                      |
| **Emotional Speech AI Portfolio** (R&D-to-production)    | You ran a full R&D → production pipeline: taxonomy design (12→3 dominant labels), dual-annotator labelling (human + GPT + Gemini for inter-rater reliability), 50-call A/B production test, delivered 2x PTP + 60% engagement lift                                          | Experiment design, A/B testing, cross-team coordination, R&D methodology, working with DS |
| **Resume numbers**                                       | 1.7x payment conversion, 5.2x revenue uplift, $52K plan amount, 30% lead-to-app conversion, 20% unserved leads unlocked, 4x bank integration speed, 6-market pipeline from zero, 3 engineering sub-teams coordinated, 40% inbound calls reclassified → 9pp RPC lift         | Quantified impact, delivery track record, cross-functional leadership                     |


---

## SECTION 1: Data Scientist Questions

*What the DS is really evaluating: "Does this PM understand enough about LLM/AI systems to write specs I can actually build from? Will they protect me from unrealistic promises?"*

### Level 1 — Remember (Recall)

**Q-DS-1:** "Bạn có thể mô tả sự khác biệt giữa RAG và fine-tuning trong ngữ cảnh xây dựng một AI agent cho customer service không?"
*(Can you describe the difference between RAG and fine-tuning in the context of building a customer service AI agent?)*

> **What they're testing:** Baseline technical vocabulary. Do you know what the team is actually building with?
>
> **Anchor your answer to:**
>
> - RAG = retrieval-augmented generation: the agent searches a knowledge base (VinFast product docs, warranty policies, repair procedures) at query time and feeds relevant context into the LLM prompt. You DON'T retrain the model.
> - Fine-tuning = retraining or adapting the model weights on domain-specific data (e.g., Vietnamese customer service transcripts). More expensive, slower to update, but can teach the model domain-specific language patterns and tone.
> - For VinFast CS: RAG is the right first move — the knowledge base (warranty terms, repair procedures, order status APIs) changes frequently. Fine-tuning makes sense later for tone/style consistency in Vietnamese customer interactions.
>
> **Portfolio bridge:**
> At TS, the AI Voice Agent used exactly this architecture split. The state machine YAML (~9,500 lines) defined **what the agent should do** at each conversational state — retrieval of customer account data (debt amount, payment history, dispute status) was injected at call time into the agent's context. We didn't fine-tune the LLM for debt collection language; we engineered the retrieval and prompt layer. The `processing_variable` blocks in the YAML defined what data to pull from backend systems and inject into each state's LLM context — that's functionally RAG before the term was mainstream.

---

**Q-DS-2:** "Khi nói đến 'agentic AI,' theo bạn hiểu thì một AI agent khác gì so với một chatbot thông thường?"
*(What's your understanding of how an AI agent differs from a regular chatbot?)*

> **What they're testing:** Do you understand the architectural paradigm shift the team is building toward?
>
> **Anchor your answer to:**
>
> - Chatbot = reactive, single-turn or scripted multi-turn. Responds to user input within a fixed flow.
> - Agent = autonomous reasoning + tool use + multi-step planning. Can decide: "I need to look up the order, then check warranty status, then schedule a technician" — and execute that chain without human hand-holding.
> - For VinFast: the agent at layer 5 doesn't just answer questions — it resolves issues. "Cứu hộ" (rescue) requires the agent to: identify location, check nearest service center availability, dispatch request, confirm ETA — a multi-step workflow with real API calls.
>
> **Portfolio bridge — use the state machine YAML as the concrete proof:**
> The TS Voice Agent was exactly an agentic system, not a chatbot. The YAML defined a **state machine with autonomous decision logic**: at every conversational turn, the dual-LLM architecture ran a **Reflection LLM** first (analysing the last N messages, extracting intent, detecting exceptions) → then evaluated **transition conditions** → then the **Response LLM** generated the reply. The agent didn't follow a script — it made routing decisions: classify the debtor's situation → select the right conversation strategy (negotiation vs. hardship vs. payment plan) → trigger follow-up actions (payment link via API, callback scheduling, warm transfer). Each state had its own `transition_conditions` block with 10-15 branching paths. That's agentic behaviour — autonomous reasoning, tool use, and multi-step planning within a governed architecture.

---

### Level 2 — Understand (Explain)

**Q-DS-3:** "Trong kiến trúc 5 lớp này, layer 4 (Expert Router) phải quyết định khi nào chuyển cho AI, khi nào chuyển cho người, khi nào kết hợp cả hai. Theo bạn, những yếu tố nào quyết định việc routing đó?"
*(In this 5-layer architecture, layer 4 must decide when to route to AI, when to human, when to hybrid. What factors drive that routing decision?)*

> **What they're testing:** Can you think in system design terms about the core product decision the team faces every day?
>
> **Anchor your answer to:**
>
> - **Topic complexity:** "Tra cứu đơn hàng" (order lookup) = structured data retrieval → high AI confidence → route to machine. "Cứu hộ" (rescue) = high stakes, emotional customer, safety liability → route to human or human+machine.
> - **Confidence score:** The AI agent's own confidence in its ability to resolve — below threshold → escalate.
> - **Customer profile signals:** VIP customer, repeat complaint, high-value vehicle → human touch regardless.
> - **Efficiency prediction:** Expected resolution time for AI vs. human. If AI takes 3 minutes but human takes 2 for this topic type, route human.
> - **Regulatory/liability:** Anything involving vehicle safety or legal warranty claims = human-in-the-loop mandatory.
>
> **Portfolio bridge — use the YAML exception routing as the structural proof:**
> I've already designed a production routing system with exactly this logic. In the state machine YAML, the `transition_conditions` block at every state evaluated **17 exception types** (bankruptcy, attorney representation, cease-communications, military service, deceased, etc.) BEFORE any business logic. The ordering was structural priority: compliance routing physically could not be skipped. The same architectural pattern applies to VinFast's Expert Router — define the routing variables (topic type, confidence score, customer tier, safety classification), define the priority ordering (safety-critical routes first, then efficiency-optimised routes), and make it structural so no engineer or future feature change can accidentally bypass the routing logic.
>
> Additionally, at TS I identified that **40% of inbound calls had classifiable intent** from prior call history — and redesigned the verification flow to be context-aware, routing repeat callers differently. That's the same "customer profile signal" layer I'd build into VinFast's Expert Router.

---

**Q-DS-4:** "Nếu AI agent trả lời sai thông tin bảo hành cho khách hàng VinFast, hậu quả là gì? Bạn sẽ thiết kế spec như thế nào để giảm thiểu rủi ro hallucination?"
*(If the AI agent gives wrong warranty information to a VinFast customer, what's the consequence? How would you design specs to minimize hallucination risk?)*

> **What they're testing:** Do you understand the real-world cost of LLM failure in THIS domain? Can you write specs that account for it?
>
> **Anchor your answer to:**
>
> - **Consequence chain:** Wrong warranty info → customer acts on it → arrives at service center → denied service → complaint escalation → brand damage + potential legal liability (vehicle safety). This isn't a chatbot getting a restaurant recommendation wrong — it's a safety/legal issue.
>
> **Portfolio bridge — THIS IS YOUR STRONGEST CARD. Use the Exception Guardrail Mechanism directly:**
>
> At TS, I faced the same problem in a **higher-stakes domain** — US debt collection, where a wrong statement about debt amounts or legal rights violates federal law (FDCPA). I didn't add a "review layer." I **embedded the compliance logic into the system architecture itself.** The YAML state machine enforced guardrails at the infrastructure level through 5 mechanisms:
>
> 1. **Dual-LLM "Reflection" architecture:** Every conversational turn ran TWO LLM calls — a Reflection LLM first (detecting compliance triggers in the conversation) → then the Response LLM. The system **cannot generate a response without first checking for compliance-triggering events.**
> 2. **Exception checks BEFORE business logic:** In every state's `transition_conditions`, the 17 exception checks ran FIRST, before main-flow logic. Compliance routing physically cannot be skipped.
> 3. **Reset-and-redetect every turn:** `variable_change_exception: { "exc": "null" }` at every state — fresh detection every turn, never carries stale compliance state forward.
> 4. **Exception-within-exception recursion:** Even inside an exception handling flow, the system continues monitoring for new exceptions. A consumer in `exc_cease_comms` who then asks for a live agent → correctly routes to `exc_human_agent_request`.
> 5. **Constrained generation:** The agent could ONLY reference verified account data — debt amounts, payment history, dispute status came from backend retrieval, not from the LLM's generative capacity.
>
> **Translation to VinFast:** Same 5 mechanisms applied:
>
> 1. Reflection layer checks for warranty/safety classification BEFORE generating any response
> 2. Safety-critical topics (vehicle defect, recall, rescue) → auto-escalate, no bypass path
> 3. Fresh classification every turn — customer can change topic mid-conversation
> 4. Citation requirement: every warranty claim references a specific policy document
> 5. Confidence threshold: below X% → "Xin chuyển bạn đến chuyên viên" (auto-escalate to human)

---

### Level 3 — Apply (Use in new context)

**Q-DS-5:** "Giả sử tuần tới bạn cần viết PRD cho tính năng 'tra cứu tình trạng bảo hành' trên AI agent. Bạn sẽ bao gồm những phần nào trong PRD mà team DS cần để bắt đầu build?"
*(Suppose next week you need to write a PRD for the 'warranty status lookup' feature on the AI agent. What sections would you include that the DS team needs to start building?)*

> **What they're testing:** Can you actually produce a deliverable that the DS team can work from? This is the most practical question — it directly tests whether hiring you reduces Mao's load or adds communication overhead.
>
> **Anchor your answer to:**
>
> - **User story & scope:** Who asks this, in what channel, what's a successful resolution?
> - **Input/output spec:** What data does the user provide (VIN number? phone? order ID?) → What does the agent return (warranty status, expiry date, coverage items, nearest service center)?
> - **Data source mapping:** Which backend system holds warranty data? API available or needs building? Data freshness requirement?
> - **Conversation flow:** Happy path + 3-4 edge cases (expired warranty, multiple vehicles, no record found, partial match)
> - **Guardrails & constraints:** What the agent CANNOT say (legal/liability). Escalation triggers. Confidence thresholds.
> - **Success metrics:** Resolution rate (% resolved without human), accuracy (% correct info delivered), CSAT, avg resolution time
> - **NOT in the PRD:** Model architecture, embedding choice, vector DB selection — that's DS's decision space. The PM defines the WHAT and the guardrails, not the HOW.
>
> **Portfolio bridge — show the YAML as the kind of spec artifact you produce:**
>

---

**Q-DS-6:** "Bạn đang làm việc với DS team và họ nói rằng model cần thêm 2 tuần để đạt accuracy 95%, nhưng deadline 30/4 chỉ còn 3 tuần. Bạn sẽ xử lý thế nào?"
*(DS team says they need 2 more weeks to reach 95% accuracy, but the 30/4 deadline is 3 weeks away. How do you handle this?)*

> **What they're testing:** Trade-off thinking under delivery pressure. Will you throw the DS team under the bus or protect them? Will you compromise quality or negotiate scope?
>
> **Anchor your answer to:**
>
> 1. **First: understand the 95% claim.** 95% on what metric? On which topic types? Is it 95% on "tra cứu đơn hàng" (easy) but 70% on "cứu hộ" (hard)?
> 2. **Decompose the scope:** Can we launch with 95% accuracy on the 2 easier topics (order lookup + warranty) and keep "cứu hộ" (rescue) as human-only for 30/4? This delivers the milestone without shipping an unsafe product.
> 3. **Negotiate with stakeholders:** Present to Mao/PMO: "We can hit 30/4 with 2 of 3 topic types at 95%. Topic 3 ships 30/6. Risk of shipping all 3 at 80% = [specific consequence]."
> 4. **Protect the DS team:** Never frame it as "DS is slow." Frame it as "the accuracy requirement for safety-critical topics requires more data/iteration."
>
> **Portfolio bridge — two concrete precedents:**
>
> 1. **Emotional Speech AI:** The A/B test ran 50 connected calls in controlled batches. After batch 1, I **iterated the label set based on live deployment signal** — discovered that 3 of 12 emotion labels dominated usage (curious, sympathetic, calm). Instead of forcing 95% accuracy across all 12, I refined scope to the 3 that mattered. Same principle here: decompose "95% accuracy" into which topics actually need it vs. which can launch at a lower threshold.
> 2. **Credit Scoring at TS:** Business wanted lending launch in Q3; model needed more training data for the full population. I negotiated a phased launch — start with a **conservative approval threshold** (lower volume, higher accuracy), expand as model improves with production data. Result: 30% lead-to-app conversion uplift on the launched segment, 20% previously unserved leads unlocked later via telco scoring integration. The business got their launch date; DS got the time they needed for full coverage.

---

### Level 4 — Analyze (Break down)

**Q-DS-7:** "Phân tích cho tôi: trong 3 loại inquiry (cứu hộ, tra cứu đơn hàng, bảo hành bảo dưỡng), loại nào nên ưu tiên cho AI agent trước, và tại sao? Dựa trên yếu tố nào?"
*(Analyze: of the 3 inquiry types — rescue, order lookup, warranty/maintenance — which should we prioritize for AI agent first, and why? Based on what factors?)*

> **What they're testing:** Analytical rigor in prioritization. Can you decompose a product decision into a framework, not just gut feel?
>
> **Anchor your answer to:**
>
>
> | Factor                | Cứu hộ (Rescue)                   | Tra cứu đơn hàng (Order lookup)          | Bảo hành bảo dưỡng (Warranty)                      |
> | --------------------- | --------------------------------- | ---------------------------------------- | -------------------------------------------------- |
> | **Volume**            | Low (emergency)                   | High (routine)                           | Medium                                             |
> | **Complexity**        | High (location, dispatch, safety) | Low (structured data retrieval)          | Medium (policy interpretation)                     |
> | **Risk of AI error**  | Critical (safety/life)            | Low (wrong status = minor inconvenience) | Medium (wrong warranty info = legal)               |
> | **Data availability** | Sparse (emergency logs)           | Rich (order database, API-ready)         | Medium (warranty docs, may need structuring)       |
> | **Human cost saved**  | Low volume = low savings          | High volume = high savings               | Medium savings                                     |
> | **Recommendation**    | LAST — keep human                 | FIRST — highest ROI, lowest risk         | SECOND — after RAG pipeline proven on order lookup |
>
>
> - The analytical framework: **Volume × (1/Risk) × Data readiness = prioritization score**
>
> **Portfolio bridge — exact same prioritization pattern from TS:**
> At TS, I applied the same 80/20 prioritization framework (resume: "rigorous 80/20 prioritisation across competing epics — trade-off decisions consistently backed by data"). The Voice AI Agent started with **early-stage soft payment reminders** (high volume, low risk, simple conversation flow) — not hardship negotiation or legal escalation (complex, high-stakes). We proved the system on the easy cases: 1.7x payment conversion, 5.2x revenue uplift within 30 days. THEN expanded to harder scenarios. Additionally, the Contextualisation feature: I identified **40% of inbound calls had classifiable intent** — I didn't try to contextualise ALL calls. I started with the classifiable 40% and lifted right-person-contact verification by 9pp on that segment first.

---

**Q-DS-8:** "Hiện tại hotline 100% human. Nếu chuyển sang AI, metrics nào sẽ cải thiện và metrics nào có thể tệ hơn? Bạn phân tích trade-off như thế nào?"
*(Currently hotline is 100% human. If we shift to AI, which metrics improve and which might get worse? How do you analyze the trade-off?)*

> **What they're testing:** Systems thinking — can you see both sides of the automation trade-off?
>
> **Anchor your answer to:**
>
>
> | Metric                       | Likely improves                                    | Likely worsens (initially)           | Why                                                       |
> | ---------------------------- | -------------------------------------------------- | ------------------------------------ | --------------------------------------------------------- |
> | **Response time**            | Yes — instant for AI-handled queries               | —                                    | No queue, no hold time                                    |
> | **Cost per interaction**     | Yes — dramatically for high-volume simple queries  | —                                    | Human agent cost >> compute cost                          |
> | **24/7 availability**        | Yes — AI doesn't sleep                             | —                                    | Currently limited by shift schedules                      |
> | **CSAT**                     | Maybe — faster for simple queries                  | Yes — for complex/emotional queries  | AI can't empathize with a stranded driver                 |
> | **First-contact resolution** | Maybe — if data integration is good                | Yes — if AI can't access all systems | Fragmented backend = AI gives incomplete answers          |
> | **Escalation rate**          | Short-term: increases (AI can't handle edge cases) | —                                    | New metric that didn't exist when 100% human              |
> | **Brand perception**         | Risk: "VinFast replaced humans with bots"          | —                                    | VN market may perceive AI CS negatively if not done right |
>
>
> Key insight: The GOAL is not "replace humans with AI." The goal is "resolve customer issues faster and better." The product strategy is building the ROUTER (layer 4) that makes the right call, not maximizing AI coverage.
>
> **Portfolio bridge — the Emotional Speech project is a direct counter-example to "AI can't empathize":**
> At TS, the expert signal was "AI agent's monotone delivery caused debtors to disengage at negotiation state — estimated 70-80% lower PTP conversion vs. human." The common assumption was "AI can't do empathy." But I designed the Emotional Speech capability: taxonomy of 12 emotion labels → refined to 3 dominant labels (curious, sympathetic, calm) → trained per-label voice models → A/B tested 50 calls → **2x PTP generated, +60% debtor turns at negotiation and hardship states.** The finding: emotion register is low-dimensional — the customer needs "I'm listening" vs. "reading from a script," not 12 distinct modes. This directly applies to VinFast: the metric that "worsens" (CSAT on emotional queries) is a **solvable product problem**, not a permanent trade-off.

---

### Level 5 — Evaluate (Judge, justify)

**Q-DS-9:** "Team DS đề xuất dùng GPT-4 API thay vì self-hosted LLM. Bạn đánh giá quyết định này như thế nào từ góc độ product?"
*(DS team proposes using GPT-4 API instead of self-hosted LLM. How do you evaluate this decision from a product perspective?)*

> **What they're testing:** Can you think beyond features and evaluate architectural decisions with business/strategic lenses?
>
> **Anchor your answer to:**
>
>
> | Dimension                       | GPT-4 API                                                        | Self-hosted LLM                             |
> | ------------------------------- | ---------------------------------------------------------------- | ------------------------------------------- |
> | **Time to market**              | Fast — 30/4 feasible                                             | Slow — months of infra setup                |
> | **Cost at scale**               | Per-token, scales linearly with volume                           | High upfront, but cheaper at scale          |
> | **Data sovereignty**            | Customer data leaves VN → regulatory risk, Vingroup data policy? | Data stays internal                         |
> | **Customization**               | Limited — prompt engineering only                                | Full control — fine-tuning, custom training |
> | **Vendor lock-in**              | High — OpenAI pricing/policy changes = existential risk          | None                                        |
> | **Vietnamese language quality** | Good but not optimized for VN customer service tone              | Can be fine-tuned for VN context            |
>
>
> **Your evaluation framework:**
>
> 1. For 30/4 milestone: GPT-4 API is pragmatic — ship, learn, collect data
> 2. For 30/6 and beyond: build the self-hosted migration path. Vingroup's scale + data sensitivity + conglomerate ambition = self-hosted is the endgame
> 3. **The PM's job is NOT to choose the model.** It's to define the evaluation criteria and facilitate the decision with DS + Mao
>
> **Portfolio bridge — multi-vendor architecture is your proven playbook:**
> At TS, the Voice AI Agent used a **multi-vendor architecture** (resume: "Multi-vendor AI Architecture"). We ran multiple TTS providers in parallel — ElevenLabs and Cartesia — tested different emotion label sets across vendors, and selected based on production performance data. For the Emotional Speech R&D: I "selected emotion labels from top-tier TTS services (ElevenLabs, Cartesia). Tested undefined vs. defined label sets." Same principle: buy for speed (use GPT-4 API now), run evaluation criteria against alternatives (latency, accuracy, cost, VN language quality), build the vendor-migration path so you're never locked in. The dual-LLM architecture in the state machine also shows I understand multi-model orchestration — Reflection LLM + Response LLM ran as separate calls at every turn.

---

### Level 6 — Create (Design)

**Q-DS-10:** "Hãy thiết kế một experiment plan để đo lường liệu AI agent có thể thay thế 30% cuộc gọi hotline trong tháng đầu tiên."
*(Design an experiment plan to measure whether the AI agent can replace 30% of hotline calls in the first month.)*

> **What they're testing:** Can you design a rigorous product experiment, not just "let's try it and see"?
>
> **Anchor your answer to:**
>
> 1. **Define "replace":** Call fully resolved by AI without human escalation, and customer confirms resolution (CSAT ≥ 4/5 or no callback within 48h)
> 2. **Baseline measurement (Week 0):** Categorize 2 weeks of existing hotline calls by topic type, complexity, resolution time, CSAT. Identify which 30% is the target (likely: order lookup + simple warranty queries)
> 3. **Experiment design:**
>   - **Shadow mode (Week 1-2):** AI processes calls in parallel with humans but doesn't serve the customer. Compare AI's proposed resolution vs. human's actual resolution. Measure: accuracy, completeness, tone appropriateness.
>   - **Controlled pilot (Week 3-4):** Route 10% of identified "easy" calls to AI (with instant human escalation button). A/B test: AI-first vs. human-first for same topic types.
> 4. **Metrics:**
>   - Primary: Resolution rate without escalation
>   - Secondary: CSAT comparison (AI vs. human for same topic), resolution time, cost per interaction
>   - Guardrail: Escalation rate must stay below X%, no safety-critical calls routed to AI
> 5. **Decision criteria:** If shadow mode accuracy > 90% on target topics AND pilot CSAT ≥ human CSAT - 0.5 points → proceed to 30% rollout
>
> **Portfolio bridge — THIS IS YOUR METHODOLOGY from Emotional Speech, applied directly:**
> The Emotional Speech A/B test followed this exact structure:
>
> 1. **Isolated the production gap first:** "Filtered noisy AI calls (FP/FN interruptions cross-validated across multiple speech models). Compared debtor turn count and PTP rate between AI and human at negotiation state — confirmed statistically significant gap."
> 2. **Controlled batches:** 50 connected calls — agent with emotion vs. no-emotion. Not 500, not 5000 — 50 controlled calls with clean measurement.
> 3. **Iterated between batches:** "Iterated label set post-batch-1 based on live deployment signal." Didn't lock the experiment design upfront — adapted based on batch-1 learnings.
> 4. **Clear success metric:** PTP generated (primary), debtor turns at negotiation state (secondary).
> 5. **Result:** 2x PTP, +60% engagement. Clear enough to proceed.
>
> Additionally, my credit scoring A/B methodology: 50-sample batches, iterating between batches based on live signal, champion-challenger framework. This IS the experiment design discipline.

---

## SECTION 2: Ha (Product Manager) Questions

*What Ha is really evaluating: "Will this person respect my territory and make the team stronger, or create political drama?"*

### Level 1 — Remember

**Q-PM-1:** "Bạn có thể kể về một lần bạn join một team đã có PM/PO sẵn? Bạn đã phân chia scope như thế nào?"
*(Tell me about a time you joined a team that already had a PM/PO. How did you divide scope?)*

> **What they're testing:** Direct evidence of collaboration, not competition.
>
> **Portfolio bridge — use ZaloPay and cross-team TS stories:**
>
> - **ZaloPay:** Joined as PO into a team with existing product leadership. Owned two pillars — Bank Integration and Cashflow — within a larger product team. "Managed a cross-functional squad of 10 (Business, Engineering, Design, Risk, Compliance, Marketing)." Didn't redesign the whole product. Found the gaps (integration workflow was 4x too slow, cashflow had structural weaknesses), proposed to own those gaps, delivered: 4x faster bank integration, diagnosed cashflow friction. First 2 weeks = listening mode. Mapped who owned what.
> - **TS Voice Agent:** Coordinated **3 engineering sub-teams plus Operations across simultaneous sprints** (resume). The Voice-Data Science team, State Machine-Data Science team, and Engineering team all had their own leads. My role as PM was NOT to own their scope — it was to "structure complex epics into parallel workstreams to protect critical path and reduce cycle time."
> - **Key message for Ha:** "My approach is always: understand what exists, find the gap, propose to fill the gap. Not redesign the map."

---

### Level 2 — Understand

**Q-PM-2:** "Trong kiến trúc 5 lớp, layer 2-3 (connection channels, P&L router) và layer 4-5 (expert router, agent) sẽ có rất nhiều dependency. Theo bạn, PM quản lý cross-layer dependency như thế nào?"
*(In the 5-layer architecture, layers 2-3 and layers 4-5 have heavy dependencies. How should PMs manage cross-layer dependencies?)*

> **What they're testing:** Can you articulate a collaboration model that makes Ha's life easier, not harder?
>
> **Anchor your answer to:**
>
> - **Interface contracts:** Define the API/data contract between layer 3 (router output) and layer 4 (router input). Both PMs own their side of the contract; changes require mutual agreement.
> - **Shared rituals:** Weekly 30-min sync between layer 2-3 PM (Ha) and layer 4-5 PM (you) to surface dependency conflicts early. Not a status meeting — a dependency-clearing meeting.
> - **Escalation to Mao:** Only when the two PMs can't resolve a cross-layer conflict. Present options, not problems.
>
> **Portfolio bridge — the state machine YAML is literally an interface contract:**
> The YAML state machine defined **clear boundaries** between what the PM owns (states, transitions, guardrails, conversation flows) and what DS/Engineering owns (model architecture, LLM selection, inference optimization). The `transition_conditions` block was the interface contract — PM defines WHEN to transition and WHERE, Engineering defines HOW the transition executes. At TS, the Voice AI Agent depended on the Data team's real-time customer data feed. I established the pattern: PM defines what data the agent needs (`processing_variable` blocks in YAML), Data team defines the retrieval pipeline. Weekly interface sync to clear dependency conflicts.

---

### Level 3 — Apply

**Q-PM-3:** "VinFast vừa launch một dòng xe mới. Layer 2-3 cần thêm connection channel mới (Zalo OA), layer 4-5 cần thêm knowledge base mới. Bạn sẽ coordinate với tôi (Ha) như thế nào để đảm bảo cả hai layer ship đúng hạn?"
*(VinFast just launched a new car line. Layer 2-3 needs a new connection channel (Zalo OA), layer 4-5 needs a new knowledge base. How would you coordinate with me to ensure both layers ship on time?)*

> **What they're testing:** Can you work WITH Ha on a concrete scenario?
>
> **Anchor your answer to:**
>
> 1. **Joint scoping session:** Sit down with Ha, map the shared timeline. Which layer is the bottleneck? New Zalo OA channel (Ha) or new knowledge base (you)?
> 2. **Parallel workstreams with integration checkpoint:** Ha builds the channel integration while you build the knowledge base. Integration test at 70% completion — don't wait until 100%.
> 3. **Shared stakeholder update:** One joint update to Mao/PMO, not two separate ones. Shows alignment, reduces Mao's coordination load.
> 4. **Fallback:** If one layer is late, the other can still ship with a temporary routing rule (e.g., new car line queries → human until knowledge base is ready).
>
> **Portfolio bridge:**
> At TS, I ran exactly this parallel coordination: "Coordinated 3 engineering sub-teams plus Operations across simultaneous sprints; structured complex epics into parallel workstreams to protect critical path and reduce cycle time." The AI Payment feature required the State Machine DS team (conversation flow changes), the Voice DS team (payment confirmation audio), and Engineering (API integration with payment provider) to ship in parallel. I defined integration checkpoints at 70%, caught the bottleneck (payment API latency), and adjusted the state machine spec to include a fallback path (warm transfer to human for payment if API timeout > 3s). Same pattern.

---

### Level 4 — Analyze

**Q-PM-4:** "Bạn phân tích thế nào về rủi ro khi có 2 PM cùng làm việc trên 1 product? Làm sao tránh conflict?"
*(How do you analyze the risk of having 2 PMs on the same product? How to avoid conflict?)*

> **What they're testing:** Self-awareness about team dynamics. Ha knows this risk — she wants to hear that YOU know it too.
>
> **Anchor your answer to:**
>
> - **Risk 1: Scope ambiguity** → Mitigation: Written boundary document, reviewed monthly. "Layer 3 output format = Ha's decision. Layer 4 routing logic = my decision. Changes at the boundary = joint decision."
> - **Risk 2: Contradictory stakeholder messaging** → Mitigation: One voice to external stakeholders (VinFast P&L). Agree on who leads which stakeholder conversation.
> - **Risk 3: PM ego competition** → Mitigation: "I'm here because Mao is overloaded. My success metric is Mao spending less time on product details, not me covering more scope than Ha."
> - **Risk 4: Divergent product vision** → Mitigation: Shared North Star metric (e.g., "customer issue resolution rate") that both PMs optimize toward.
>
> **Portfolio bridge:**
> At EY Singapore, I was brought in as a consultant onto client teams that already had internal product/strategy owners. My role was explicitly **complementary — bring methodology, not replace judgment.** I ran technology DD and commercial analysis that fed into the senior team's recommendations, not competed with their strategic direction. Two cross-border DDs (~$300M investment value) succeeded because I understood the boundary: my analysis was the input, their decision was the output. Acknowledge honestly: "Two PMs on one product only works if both are actively investing in alignment. I've seen it fail when PMs optimize for their own scope instead of the shared outcome."

---

### Level 5 — Evaluate

**Q-PM-5:** "Nếu bạn và tôi (Ha) bất đồng về cách thiết kế luồng escalation từ AI sang human (layer 4→layer 2), bạn sẽ giải quyết thế nào? Ai có quyền quyết định cuối cùng?"
*(If you and I disagree on how to design the AI-to-human escalation flow (layer 4 → layer 2), how do you resolve it? Who has final say?)*

> **What they're testing:** Conflict resolution style. Will you escalate too fast? Bulldoze? Defer too much?
>
> **Anchor your answer to:**
>
> 1. **First: frame the disagreement around data, not opinion.** "Let's both state what we think will happen and why, then design a test."
> 2. **Second: clarify decision rights.** Escalation FROM layer 4 = your decision (when to escalate). Escalation TO layer 2 = Ha's decision (how to handle it). If the disagreement is at the interface, it's a joint decision.
> 3. **Third: if data doesn't resolve it,** Mao is the tiebreaker — but present it as "we have two viable options, here are the trade-offs, we need your input" not "Ha and I can't agree."
> 4. **Critical signal to Ha:** "I would never go to Mao behind your back. If we disagree, you'll know about it before Mao does."
>
> **Portfolio bridge — the BACK|EXC mechanism is exactly an escalation/return interface:**
> In the state machine YAML, after handling an exception (escalation), the transition `next_state: BACK|EXC` returned the conversation to whichever main-flow state was active before — the escalation was seamless. This required a clear agreement between the exception handler (my spec) and the main flow (shared ownership): the interface contract was "I handle the exception and return control to you with context preserved." Same principle for Ha: "When I escalate from layer 4, I hand off with full context — customer intent, conversation history, confidence score — so your layer 2 team doesn't start from zero."

---

### Level 6 — Create

**Q-PM-6:** "Thiết kế một quy trình onboarding 2 tuần cho chính bạn — bạn cần học gì từ tôi (Ha), từ DS, từ PMO, từ Mao để có thể bắt đầu contribute?"
*(Design a 2-week onboarding plan for yourself — what do you need to learn from me, from DS, from PMO, from Mao to start contributing?)*

> **What they're testing:** Humility + structure. Do you come in knowing everything or come in asking the right questions?
>
> **Anchor your answer to:**
>
>
> | Day      | From whom   | What I need to learn                                                                                                                                                                                         |
> | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
> | Day 1-2  | **Ha**      | Current product state: what's built, what's in progress, what's blocked. Existing specs, decision log. Stakeholder map — who at VinFast matters and what they care about.                                    |
> | Day 1-2  | **PMO**     | Delivery process: how sprints work, what the 30/4 and 30/6 milestones specifically require, reporting cadence, budget constraints. Handoff plan details.                                                     |
> | Day 3-4  | **DS team** | Tech stack overview: what's built, what's planned, current limitations. Sit in on a technical discussion to calibrate my understanding level.                                                                |
> | Day 3-5  | **Mao**     | Strategic context: what does "success" look like for this team in 6 months? What are the political dynamics with VinFast P&L stakeholders? What decisions does he want me to make autonomously vs. escalate? |
> | Day 5-10 | **Self**    | Listen to 50 CS recordings. Read existing CS logs. Build intuition for real customer problems before writing any spec.                                                                                       |
> | Week 2   | **All**     | Shadow one full sprint cycle. Observe, don't change anything. First contribution: document one insight or one gap I noticed. Small, specific, useful.                                                        |
>
>
> **Portfolio bridge — this is a proven pattern, not a guess:**
> At TS, I "onboarded and trained 3 new team members; established documentation standards embedding business rationale into all product specifications." I know what good onboarding looks like from the other side. And the Emotional Speech project started the same way — before designing anything, I first "filtered noisy AI calls" and "compared debtor turn count and PTP rate between AI and human at negotiation state." Listen to production data before writing specs. Not week 3 redesign — week 1 immersion, week 2 observation, week 3 first contribution.

---

## SECTION 3: PMO Questions

*What the PMO is really evaluating: "Can I hand off to this person without everything falling apart? Do they respect process?"*

### Level 1 — Remember

**Q-PMO-1:** "Bạn đã từng quản lý delivery trong môi trường có nhiều stakeholders chưa? Kể cho tôi một ví dụ cụ thể."
*(Have you managed delivery in a multi-stakeholder environment? Give me a specific example.)*

> **Portfolio bridge — two heavyweight examples:**
>
> **Example 1 — TS AI Payment (strongest):**
> Delivering AI Payment capability required coordinating Engineering, Voice-Data Science, and State Machine-Data Science teams while **complying with US debt collection regulations.** Multiple stakeholders with conflicting priorities: US clients (Republic Finance, Unity Asset Management) wanted faster payment conversion; the compliance team required every payment interaction to follow FDCPA guidelines; DS wanted more time to optimise. I delivered: **$52K in completed plan amounts, 1.3x weekly payment plans within 3 months post-rollout.** The coordination pattern: structured complex epics into parallel workstreams, defined clear interfaces between teams, protected the critical path.
>
> **Example 2 — EY Singapore:**
> 2 cross-border fintech DDs — Technology and Commercial due diligence for global PE and sovereign fund clients (one transaction ~$300M investment value). Strict deliverable timelines, audit-grade documentation requirements, multiple client stakeholders with different information needs (PE investors wanting risk assessment vs. target company management wanting a favourable narrative). Managed delivery with sign-off chains comparable to Vingroup's process.
>
> **Key signal to PMO:** "I'm comfortable with process-heavy environments. I've operated in EY's sign-off culture AND US regulatory compliance — I know when to push for speed and when to respect the process."

---

### Level 2 — Understand

**Q-PMO-2:** "Milestone 30/4 và 30/6 khác nhau thế nào về scope? Theo bạn hiểu, deliverable cho 30/4 cần bao gồm những gì?"
*(How do the 30/4 and 30/6 milestones differ in scope? What do you understand the 30/4 deliverable needs to include?)*

> **What they're testing:** Did you do your homework? Can you form a reasonable hypothesis even with incomplete information?
>
> **Anchor your answer to:**
>
> - Acknowledge honestly: "I don't have the full scope document yet. Based on what I've learned from Mao, here's my hypothesis..."
> - 30/4 (likely): MVP — AI agent handling one topic type (order lookup) on one channel (website chat) for VinFast. + PMO handoff completed.
> - 30/6 (likely): Expanded — 2-3 topic types, possibly hotline channel integration, first metrics readout.
> - "One of my first actions would be to sit down with you and Mao to fully map the 30/4 scope so I'm clear on what I'm delivering toward."
>
> **Portfolio bridge:**
> At TS, when co-architecting the Voice Agent product thesis, I "authored 80% of the analysis and materials that positioned AI Voice Agent in post-charge-off debt collection over competing verticals" — I formed the market hypothesis from incomplete data (multiple verticals competing), then validated through a structured pipeline: RFP → DD → Pilot → Production across 6 markets. Same approach here: form the best hypothesis from available data, then validate on day 1.

---

### Level 3 — Apply

**Q-PMO-3:** "Bạn nhận việc vào ngày X. PMO handoff phải xong trước 30/4. Bạn sẽ chuẩn bị cho việc nhận bàn giao như thế nào?"
*(You start on day X. PMO handoff must be complete by 30/4. How will you prepare to receive the handoff?)*

> **What they're testing:** Can you absorb process ownership without dropping anything?
>
> **Anchor your answer to:**
>
> 1. **Before Day 1 (if possible):** Request read access to project documentation — scope docs, budget tracker, stakeholder contact list, meeting cadence, risk log.
> 2. **Day 1-3:** Shadow the PMO in their actual workflow — attend their meetings, watch how they track deliverables, understand the tooling.
> 3. **Day 4-7:** Co-run with PMO — they lead, I observe and take notes. Start building my own version of the tracking system so I can spot gaps.
> 4. **Week 2-3:** PMO observes while I lead. They correct in real-time. Gradually reduce their involvement.
> 5. **30/4:** Clean handoff — I own the process, PMO is available for questions but not doing the work.
>
> **Portfolio bridge:**
> At Shopee, I "built and institutionalised the Incident Management and Product Launch Process for Vietnam — establishing escalation paths, severity tiers, and cross-regional coordination protocols adopted as the operational standard." I've built process frameworks from zero AND inherited them from others. The key to absorbing a handoff: understand the WHY behind the process, not just the WHAT. At Shopee, I was the Vietnam-side interface for regional product decisions — I had to absorb Singapore's existing process, adapt it for Vietnam context, and make it work with local operations. Same muscle here.

---

### Level 4 — Analyze

**Q-PMO-4:** "Phân tích cho tôi: với 5 layers, 2 PM, 1 PMO, 1 DS team, và 2 milestones — đâu là điểm rủi ro lớn nhất trong việc delivery?"
*(Analyze: with 5 layers, 2 PMs, 1 PMO, 1 DS team, and 2 milestones — where is the biggest delivery risk?)*

> **What they're testing:** Can you see the system-level risk, not just your own scope?
>
> **Anchor your answer to:**
>
> - **Risk 1 (Highest): Stakeholder expectation mismatch.** VinFast P&L may expect "AI replaces all humans by 30/6." Reality: AI handles 20-30% of simple queries. Mitigation: expectation management starts NOW, before the milestone.
> - **Risk 2: Cross-layer integration.** Layers 1-3 (Ha) and 4-5 (new PM) built in parallel → integration fails at the boundary. Mitigation: early integration testing, shared staging environment.
> - **Risk 3: PMO handoff during delivery.** The PMO leaves 30/4 — exactly when the first milestone hits. If the new PM isn't fully onboarded on process, the 30/4 delivery loses its project management backbone. Mitigation: accelerated handoff, focus on 30/4 scope first.
> - **Risk : DS capacity.** One DS team serves layers 4 AND 5 (both PM scopes). If DS becomes the bottleneck, both PMs compete for the same resource. Mitigation: clear sprint allocation agreed upfront
>
> **Portfolio bridge:**
> At TS, I managed the exact same risk structure: multiple engineering sub-teams (Voice DS, State Machine DS, Engineering) serving the same product with overlapping dependencies and fixed US client deadlines. The AI Payment capability required all 3 teams to ship in parallel. I identified the bottleneck (State Machine DS was the constraint) and restructured sprint allocation so they got priority on the critical path. "Structured complex epics into parallel workstreams to protect critical path and reduce cycle time" — this is the delivery risk analysis in action.

---

### Level 5 — Evaluate

**Q-PMO-5:** "Nếu vào tuần thứ 3, bạn nhận ra scope 30/4 không khả thi với resource hiện tại, bạn sẽ xử lý thế nào?"
*(If in week 3 you realize the 30/4 scope is not feasible with current resources, how do you handle it?)*

> **What they're testing:** Decision-making under pressure. Will you delay, cut scope, or burn the team out?
>
> **Anchor your answer to:**
>
> 1. **Quantify the gap:** Not "we might miss it" but "we are 2 sprints behind on X, which means Y won't be ready by 30/4."
> 2. **Present options (not problems) to Mao:**
>   - Option A: Cut scope — deliver 2 features instead of 3. Consequence: [specific trade-off].
>   - Option B: Add resource — borrow DS capacity from another team for 3 weeks. Consequence: [political cost].
>   - Option C: Extend deadline — push to 15/5. Consequence: [impact on 30/6 milestone].
> 3. **Recommend one option** with reasoning. Don't just present a menu.
> 4. **Never:** Silently burn the team with overtime to hit an unrealistic deadline.
>
> **Portfolio bridge:**
> At TS, the 6-market client pipeline had this exact dynamic — scope exceeded capacity regularly. The RFP pipeline went: "RFP → DD stage (CBA, Home Credit PH, HDFC) → RFP → Pilot (TPBank) → RFP → Production (Republic Finance, Unity Asset Management)." Not every market could ship simultaneously. I recommended focusing production resources on the US market (highest revenue potential) and keeping other markets at DD/pilot stage. Result: 2 US clients live for 7 months with $52K plan amounts — instead of 6 markets at 20% completion each. Same principle: cut scope to what's achievable, deliver one thing well, expand later.

---

### Level 6 — Create

**Q-PMO-6:** "Thiết kế một delivery tracking framework cho product này — bao gồm những metrics nào, report cadence ra sao, escalation rule thế nào?"
*(Design a delivery tracking framework for this product — what metrics, what reporting cadence, what escalation rules?)*

> **Anchor your answer to:**
>
>
> | Component             | Detail                                                                                                                                                                                        |
> | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | **Sprint cadence**    | 2-week sprints aligned with existing team rhythm (adapt to whatever's in place, don't impose new cadence on day 1)                                                                            |
> | **Weekly metrics**    | Sprint velocity (story points delivered vs. committed), blocker count, cross-layer integration test pass rate                                                                                 |
> | **Milestone metrics** | % of 30/4 scope delivered, deployment readiness checklist, stakeholder sign-off status                                                                                                        |
> | **Product metrics**   | Resolution rate, accuracy, CSAT, escalation rate (post-launch)                                                                                                                                |
> | **Report cadence**    | Weekly: PM+DS standup (15 min). Bi-weekly: sprint review with Mao + Ha + PMO. Monthly: stakeholder update to VinFast P&L                                                                      |
> | **Escalation rules**  | Blocker unresolved >2 days → escalate to Mao. Scope change requested by stakeholder → Ha + new PM align first, then propose to Mao. Budget deviation >10% → PMO escalates to Mao with options |
>
>
> **Portfolio bridge:**
> At Shopee, I "built and institutionalised the Incident Management and Product Launch Process for Vietnam — establishing escalation paths, severity tiers, and cross-regional coordination protocols adopted as the operational standard." I've designed tracking frameworks from scratch that became the team standard. Key principle: "I'd adopt whatever framework the PMO currently uses before introducing anything new. First sprint = learn the system. Second sprint = suggest improvements."

---

## SECTION 4: Mao's Likely Cross-Cutting Questions

*These are the questions Mao asks regardless of who else is in the room — testing strategic thinking and autonomy readiness.*

### Level 3 — Apply

**Q-MAO-1:** "VinFast P&L stakeholder gọi điện cho bạn, yêu cầu thêm 1 tính năng mới vào scope 30/4. Bạn xử lý thế nào mà không cần hỏi tôi?"
*(VinFast P&L stakeholder calls you and requests a new feature for the 30/4 scope. How do you handle this without asking me?)*

> **What Mao's testing:** Can I delegate stakeholder management to this person?
>
> **Anchor your answer to:**
>
> 1. **Listen fully.** Don't reject or accept on the call. "Cảm ơn anh/chị, để em review impact và confirm lại trong 24h."
> 2. **Assess independently:** Does this fit within existing scope? What's the delivery impact? Is there a dependency on Ha's layers?
> 3. **Decision tree:**
>   - If it's a clarification of existing scope → handle it, inform Mao async
>   - If it's a minor addition with no delivery risk → handle it, inform Mao async
>   - If it's a scope change that impacts 30/4 timeline → present options to Mao before committing
>   - If it contradicts product direction → bring to Mao immediately
> 4. **What Mao DOESN'T want to hear:** "Stakeholder X called, what should I do?"
> 5. **What Mao WANTS to hear:** "Stakeholder X requested Y. I assessed the impact: [brief]. I recommended Z. Here's why. Need your sign-off only if [condition]."
>
> **Portfolio bridge:**
> At TS, I co-designed the client development strategy across 6 markets with the Product Director — "owning the majority of RFP responses, DD materials, and product documentation at each pipeline stage." That means I was the PRIMARY interface with external stakeholders (CBA Australia, Home Credit PH, HDFC India, TPBank VN, Republic Finance US, Unity Asset Management US) while the Director focused on strategic direction. I didn't escalate every client request — I assessed impact, drafted the response, and brought the Director in only for decisions that exceeded my decision authority. Exactly the pattern Mao wants. Also at Shopee: "Primary Vietnam-side interface for regional product decisions — triaging incidents, proposing resolutions, and advocating Vietnam-specific enhancements to the Singapore team." Triage → propose → escalate only when needed.

---

### Level 4 — Analyze

**Q-MAO-2:** "So sánh kinh nghiệm làm AI Voice Agent cho debt collection với việc build AI agent cho customer service VinFast. Đâu là điểm giống, đâu là điểm khác?"
*(Compare your AI Voice Agent debt collection experience with building an AI agent for VinFast customer service. What's similar, what's different?)*

> **What Mao's testing:** Can you transfer your experience intelligently, or will you blindly apply the same playbook?
>
> **Anchor your answer to:**
>
>
> | Dimension                               | TS Debt Collection                                                             | VinFast Customer Service                                                                    |
> | --------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
> | **Similarity: Agentic AI architecture** | State machine with autonomous routing, multi-step resolution, tool calls       | Same: Expert Router + Agent must autonomously decide and resolve                            |
> | **Similarity: Compliance guardrails**   | 17 FDCPA exception states, compliance-before-business-logic ordering           | Same pattern: warranty/safety guardrails, escalation-before-resolution for high-risk topics |
> | **Similarity: Human-AI hybrid routing** | Warm transfer to human collectors for complex cases                            | Same: Expert Router decides human vs. machine vs. hybrid                                    |
> | **Similarity: Multi-channel**           | Voice (primary), with callback and payment link triggers                       | Same: Hotline, Chat, Email, OTT, Social Media                                               |
> | **Difference: Emotional register**      | Adversarial dynamic — debtor doesn't want to pay. Emotion = de-escalation tool | Service dynamic — customer wants help. Emotion = empathy and resolution speed               |
> | **Difference: Regulatory weight**       | FDCPA/Reg F — federal law, legal liability per call                            | Lower: no per-interaction legal liability, but brand reputation risk is high                |
> | **Difference: Language**                | English (US market)                                                            | Vietnamese — LLM quality gap, tone/formality nuances                                        |
> | **Difference: Product maturity**        | We built 0→1 over 18 months, 2 US clients live 7 months                        | 0→1 with tighter timeline (30/4, 30/6)                                                      |
>
>
> **Honest gap:** Vietnamese LLM quality and cultural customer service tone is a new domain for me. But the architectural playbook (state machine, guardrails, routing logic, experiment methodology) transfers directly.

---

### Level 5 — Evaluate

**Q-MAO-3:** "Sau 3 tháng, tôi muốn bạn tự đánh giá: bạn có phù hợp với vị trí này không? Bạn sẽ đánh giá dựa trên tiêu chí gì?"
*(After 3 months, I want you to self-evaluate: are you right for this position? What criteria would you use?)*

> **What Mao's testing:** Self-awareness. Does this person know their own strengths and gaps?
>
> **Anchor your answer to:**
>
> 1. **Mao's time freed up:** Is Mao spending less than 30% of his time on product details? If not, I haven't absorbed enough.
> 2. **DS team satisfaction:** Do they prefer working with me over the previous state? Am I writing specs they can build from without back-and-forth?
> 3. **Stakeholder trust:** Can I run a VinFast stakeholder meeting alone and Mao gets a clean summary afterward?
> 4. **Delivery contribution:** Did I contribute to hitting the 30/4 or 30/6 milestone in a measurable way?
> 5. **My own energy:** Am I still learning and growing, or have I plateaued into process execution?
>
> **Honest signal:** "If after 3 months I'm not reducing your load, the hire hasn't worked — regardless of how well I do on other metrics."
>
> **Portfolio bridge — you have evidence of rapid impact:**
>
> - AI Payment: 1.7x payment conversion + 5.2x revenue uplift **within 30 days** of rollout
> - Emotional Speech: 2x PTP + 60% engagement lift from a focused R&D sprint
> - Credit Scoring: 30% conversion uplift
> - These timelines show I can produce measurable impact within the first 3 months, not just "still onboarding."

---

### Level 6 — Create

**Q-MAO-4:** "Nếu bạn được giao tự quyết toàn bộ product roadmap cho layer 4-5 trong 6 tháng tới, bạn sẽ thiết kế thế nào?"
*(If you're given full ownership of the product roadmap for layers 4-5 over the next 6 months, what would you design?)*

> **What Mao's testing:** Product vision. Can this person think beyond the next sprint?
>
> **Anchor your answer to:**
>
>
> | Month                   | Focus        | Deliverable                                                                                                                                                                                                                                                                                                                          |
> | ----------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
> | **Month 1** (Apr)       | Foundation   | AI agent MVP for order lookup (1 topic, 1 channel). Shadow mode → controlled pilot (Emotional Speech A/B methodology). Expert router v1 (rule-based: topic → human/AI decision). PMO handoff absorbed.                                                                                                                               |
> | **Month 2** (May)       | Expansion    | Add warranty/maintenance topic. Refine router with production data. First CSAT comparison (AI vs. human). Begin hotline channel integration design (with Ha).                                                                                                                                                                        |
> | **Month 3** (Jun)       | Scale        | 30/6 milestone: 2-3 topics live, multichannel. Expert router v2 (ML-based confidence scoring). First automation rate report to VinFast P&L.                                                                                                                                                                                          |
> | **Month 4-5** (Jul-Aug) | Optimisation | Fine-tune based on 3 months of data. Reduce escalation rate. Expand to non-VinFast P&L (second business use case). Build self-improvement loop: failed resolutions → auto-flagged → knowledge base update. Explore emotional intelligence layer (Emotional Speech capability transfer — low-dimensional emotion labels for CS tone). |
> | **Month 6** (Sep)       | Platform     | Expert router as a reusable component for other P&Ls. Document architecture decisions. Guardrail framework as infrastructure template (YAML exception pattern transferable).                                                                                                                                                         |
>
>
> **Portfolio bridge — the strategic arc mirrors the TS trajectory:**
> At TS, the roadmap was: Thesis → Single market (US) → Prove conversion (1.7x payment, $52K plan amounts) → Add capabilities (Emotional Speech, Contextualisation, Dynamic Hardship) → Multi-market expansion (6-market pipeline). Same arc here: **Prove on VinFast → Abstract for reuse across P&Ls.** This aligns with VSF's cross-conglomerate mission (serving ALL Vingroup P&Ls, not just VinFast) and shows Mao you understand the bigger picture.

---

## How to Use This Document

1. **Before the interview:** Read through all 4 interviewer profiles. Internalize their fears and motivations — this shapes HOW you answer, not just WHAT.
2. **During the interview:** You won't get all 22 questions. But every question they DO ask will be a variant of one of these. Listen for the underlying concern:
  - DS = "Can I work with you?" → Show the YAML, the experiment methodology, the Emotional Speech R&D
  - Ha = "Will you respect me?" → Show ZaloPay (joined existing team), Shopee (complementary role), EY (consultant serving client PMs)
  - PMO = "Can I hand off to you?" → Show Shopee (built the process), EY (sign-off culture), TS (3 sub-teams coordinated)
  - Mao = "Can I delegate to you?" → Show 6-market stakeholder management, autonomous client interface, impact numbers within 30 days
3. **Your default posture:**
  - To DS: "I know enough to write a 9,500-line state machine spec you can build from. I don't pretend to be a data scientist."
  - To Ha: "I'm here to fill a gap, not compete for territory. At ZaloPay, I found the gap — 4x faster bank integration — and owned that."
  - To PMO: "I built Shopee Vietnam's launch process from scratch. I can absorb yours."
  - To Mao: "At TS, I was the primary stakeholder interface across 6 markets while the Director focused on strategy. That's exactly what you need."
4. **Your 4 portfolio stories to have ready (with numbers):**
  - **Exception Guardrail YAML** → System design, compliance-as-infrastructure, spec writing DS can build from
  - **Emotional Speech AI** → R&D-to-production, A/B methodology, 2x PTP + 60% engagement, cross-team coordination
  - **AI Payment** → 1.7x conversion, 5.2x revenue, $52K plan amounts — impact within 30 days
  - **6-Market Pipeline** → Autonomous stakeholder management, 80% materials authored, 2 clients to production

---

## SECTION 5: Technical Understanding — Bloom's Taxonomy Cross-Reference

*Organized by cognitive level, cross-cutting all interviewers. Use this section as a quick-study flashcard deck. Each answer is keyword-anchored for oral recall.*

*Why this section exists: Hai Long's feedback was "technical understanding not firm/fluent." The DS on Mao's panel will specifically probe this. These questions fill the gaps not covered in Sections 1–4.*

---

### Level 1 — REMEMBER (Recall facts & definitions)

**Q1.1 — What is RAG and what are its core components?**
*Likely from: DS*

- **RAG = Retrieval-Augmented Generation** — retrieve relevant docs at query time → inject as context → LLM generates grounded answer (not from memory alone)
- **Core components:**
  - **Embedding model** — converts text (queries + docs) into semantic vectors
  - **Vector store** — stores embeddings, enables fast similarity search (Pinecone, Chroma, Weaviate)
  - **Retriever** — embeds user query → searches vector store → pulls top-K relevant chunks
  - **Generator (LLM)** — receives query + retrieved chunks → produces grounded answer
- **Why it matters for VinFast:** 500+ FAQs, vehicle manuals, service tickets — changes frequently. RAG = update knowledge without retraining, just re-index
- **Bridge:** *"Architecturally similar to our Voice Agent — reflection LLM extracted structured variables from conversation context before the response LLM generated. Same principle: retrieve/extract first, then generate."*

---

**Q1.2 — What's the difference between fine-tuning and prompt engineering? When would you choose each?**
*Likely from: DS*

- **Prompt engineering** — craft instructions/context within the prompt to guide LLM behavior. No model weight changes. Fast to iterate, cheap, works with API-based models
- **Fine-tuning** — retrain model weights on domain-specific data. Expensive, slow to update, but produces deeper domain adaptation (tone, vocabulary, edge-case handling)
- **When to choose:**
  - Prompt engineering FIRST — for 0→1, rapid iteration, when domain data is still being collected
  - Fine-tuning LATER — when you have enough production data, need consistent Vietnamese CS tone, or cost-at-scale favors a smaller fine-tuned model over large API calls
- **Bridge:** *"In Emotional Speech, we discovered LLMs default to affectless text — fix required at prompt level, not just TTS model. That's a dual-layer intervention: prompt engineering for text emotion + TTS model selection for voice emotion. We chose prompt engineering over fine-tuning because the emotion taxonomy was still being refined in production."*

---

**Q1.3 — What is a vector database and why is it used in conversational AI?**
*Likely from: DS*

- **Vector DB** = database optimized for storing and searching high-dimensional vectors (embeddings). Traditional DB searches by exact match; vector DB searches by **semantic similarity**
- **Why used in conversational AI:** customer asks "xe điện không sạc được" (e-scooter won't charge) — vector DB finds relevant docs even if the exact phrase doesn't appear in the knowledge base. Matches by meaning, not keywords
- **Key properties:** approximate nearest neighbor (ANN) search, sub-second latency at millions of vectors, metadata filtering (filter by product line, document type)
- **Examples:** Pinecone (managed), Chroma (open-source), Weaviate, Qdrant, pgvector (Postgres extension)
- **Bridge:** *"I haven't deployed a vector DB directly — my experience is at the product architecture level. At TS, the equivalent was the customer data retrieval layer: account data, payment history, dispute status injected into each state's LLM context via `processing_variable` blocks. The principle is the same — structured retrieval before generation."*
- **Honest gap signal:** State clearly you work at the product-architecture level, not model-internals level

---

**Q1.4 — Name the key metrics for evaluating an AI agent's response quality.**
*Likely from: DS, PMO*

- **Accuracy** — % of responses that are factually correct (human-audited sample)
- **Task completion rate** — % of conversations where the customer's issue is fully resolved without escalation
- **Latency** — time from customer query to agent response (voice: <2s critical; chat: <5s acceptable)
- **Hallucination rate** — % of responses containing fabricated information (critical for warranty/safety)
- **CSAT** — customer satisfaction score post-interaction
- **Escalation rate** — % of conversations that require human takeover
- **Cost per interaction** — compute cost vs. human agent cost
- **Bridge:** *"At TS, our A/B test measured: PTP rate (primary), debtor turn count at negotiation state (engagement proxy), qualitative client feedback. Same framework: one primary business metric + one engagement metric + one qualitative signal."*

---

**Q1.5 — What is intent classification? How does it differ from entity extraction?**
*Likely from: DS*

- **Intent classification** — determine WHAT the user wants to do: "check warranty," "request rescue," "track order," "file complaint"
- **Entity extraction** — extract specific DATA POINTS from the user's utterance: vehicle model = "VinFast VF8," license plate = "30A-12345," date = "last Tuesday"
- **Relationship:** intent tells you WHICH workflow to trigger; entities give you the PARAMETERS for that workflow
- **Example:** "Xe VF8 của tôi bị hỏng pin hôm qua" → Intent: `emergency_repair` / Entities: `vehicle=VF8`, `issue=battery`, `time=yesterday`
- **Bridge:** *"The `exc` variable in our YAML state machine was literally an intent classifier — the reflection LLM analyzed each turn and extracted one of 17 exception intents (bankruptcy, attorney, cease_comms, dispute, etc.). Each intent triggered a specific state transition. Entity extraction happened within the exception states — e.g., `exc_bankruptcy` collected filing status, case number, filing date as structured entities."*

---

### Level 2 — UNDERSTAND (Explain concepts in own words)

**Q2.1 — Explain how a customer query like "xe điện không sạc được" flows through a RAG pipeline.**
*Likely from: DS, Mao*

- **Step 1 — Query embedding:** Customer query → embedding model → numerical vector
- **Step 2 — Retrieval:** Vector → search vector store → top-K most relevant document chunks (e.g., VF8 troubleshooting guide section on charging, warranty policy for battery defects)
- **Step 3 — Context injection:** Retrieved chunks + original query + system prompt → assembled into LLM prompt
- **Step 4 — Generation:** LLM generates grounded response referencing the retrieved documents
- **Step 5 — Guardrail check:** Response passes through safety/accuracy filter before delivery to customer
- **Bridge:** *"Map this to our 5-layer architecture: Layer 3 (P&L Router) identifies this is a VinFast query → Layer 4 (Expert Router) classifies as technical issue, routes to AI → Layer 5 (Agent) runs the RAG pipeline. The RAG pipeline IS layer 5's resolution mechanism."*

---

**Q2.2 — Why might an LLM hallucinate warranty information, and what architectural patterns reduce this?**
*Likely from: DS*

- **Why LLMs hallucinate:**
  - LLMs generate probabilistically — they produce the most *likely* next token, not the most *correct* one
  - No grounding: without retrieval, the LLM "invents" plausible-sounding warranty terms from training data patterns
  - Stale training data: model was trained on data up to cutoff date — VinFast's 2026 warranty terms don't exist in its weights
  - Over-confidence: LLMs don't say "I don't know" — they generate confidently even when uncertain
- **Architectural patterns to reduce hallucination:**
  - **RAG** — ground every response in retrieved documents. LLM generates FROM the context, not FROM memory
  - **Citation requirement** — force the agent to reference a specific document/policy for every factual claim. No citation = no answer
  - **Confidence threshold** — model outputs a confidence score. Below threshold → "Xin chuyển bạn đến chuyên viên" (escalate)
  - **Constrained generation** — limit response to paraphrasing retrieved content, not free generation
  - **Guardrail validator** — second LLM or rule-based check on the response before delivery. Catches obvious fabrications
- **Bridge:** *"At TS, the agent could ONLY reference verified account data — debt amounts, payment history came from backend retrieval via `processing_variable`, not from the LLM's generative capacity. The guardrail architecture (exception checks before business logic) ensured the agent could never make unsupported claims about a debtor's legal status. Same principle: structural prevention, not post-hoc review."*

---

**Q2.3 — Explain the trade-off between a single-prompt agent and a state-machine-based agent for customer service.**
*Likely from: Mao, DS — P0 PRIORITY (lost points on this with Hai Long)*

- **Single-prompt agent:**
  - One LLM call with all instructions + conversation history in the prompt
  - Pros: simpler to build, faster to iterate, lower engineering cost
  - Cons: unpredictable behavior on edge cases, no guaranteed compliance checks, hard to audit, breaks down as complexity grows (context window limits, instruction-following degrades)
  - Best for: simple FAQ, low-stakes, few conversation paths
- **State-machine agent:**
  - Conversation broken into defined states with explicit transition conditions
  - Pros: deterministic routing, auditable, compliance checks built into transitions, scales to complex multi-step workflows
  - Cons: higher build cost, harder to iterate (YAML changes vs. prompt tweaks), requires upfront conversation design
  - Best for: regulated environments, multi-step resolution, high-stakes (safety, legal, financial)
- **For VinFast:** Hybrid — state machine for the overall conversation structure (routing, escalation, guardrails) with LLM-powered response generation within each state
- **Bridge:** *"Our debt collection agent was a 9,500-line state machine with LLM generation within each state. The state machine guaranteed compliance (exception checks before business logic at every turn). A single-prompt agent CANNOT guarantee that bankruptcy detection runs before a payment request — the ordering is probabilistic, not structural. For VinFast: cứu hộ (rescue) routing MUST be deterministic, not probabilistic. You cannot have the LLM 'usually' escalate a safety emergency."*

---

**Q2.4 — What does "agentic" mean? How is an agentic system different from a chatbot?**
*Likely from: DS, Mao*

- **Chatbot** = reactive, single-turn or scripted multi-turn. Responds to user input within a fixed flow. No tool use. No autonomous planning
- **Agentic system** = autonomous reasoning + tool use + multi-step planning. Can decide: "I need to look up the order → check warranty → schedule a technician" and execute that chain without human hand-holding
- **Key agentic capabilities:**
  - **Tool use:** call APIs (dispatch system, order DB, scheduling), not just generate text
  - **Planning:** decompose a complex request into steps and execute sequentially
  - **Memory:** maintain context across steps — "customer already verified identity, skip verification"
  - **Decision-making:** choose WHICH tool to use and WHEN based on context
- **For VinFast:** Layer 5 agent doesn't just answer — it RESOLVES. "Cứu hộ" requires: identify location → check service center availability → dispatch → confirm ETA → follow up. That's agentic
- **Bridge:** *"The TS Voice Agent was exactly agentic — the YAML defined autonomous decision logic: reflection LLM extracted intent → transition conditions evaluated 10-15 branching paths → response LLM generated reply → triggered follow-up actions (payment link API, callback scheduling, warm transfer). Not a script. Autonomous routing within governed architecture."*

---

**Q2.5 — Explain "Human-in-the-loop" vs. "Human-on-the-loop" in an AI customer service system.**
*Likely from: Mao, DS*

- **Human-in-the-loop (HITL):** Human MUST approve before the AI's action executes. AI proposes → human approves → action taken. Slower, safer, higher cost
  - VinFast example: AI drafts warranty approval → human agent reviews and confirms before telling customer
- **Human-on-the-loop (HOTL):** AI executes autonomously, human monitors and can intervene. AI acts → human observes → intervenes only on exceptions. Faster, scalable, lower cost
  - VinFast example: AI handles order lookup autonomously, human monitors conversation feed and steps in if AI gives wrong info
- **Layer 4 relevance:** The Expert Router's "Human+Machine" option is HOTL — AI resolves while human supervises. Pure "Human" = HITL for complex cases. Pure "Machine" = no loop
- **Bridge:** *"Our exception states were HITL by design — `exc_human_agent_request` transferred to a live agent with full context preserved (`BACK|EXC` return mechanism). But the main conversation flow was HOTL — the dual-LLM reflection architecture ran autonomously at every turn, with the Operations team monitoring dashboards for anomalies."*

---

### Level 3 — APPLY (Use knowledge in a new situation)

**Q3.1 — VinFast has 500+ FAQ articles, 200 vehicle manuals, and real-time service ticket data. How would you design the knowledge architecture?**
*Likely from: DS, Mao*

- **Source classification:**
  - **Structured:** Order status, warranty expiry dates, service center locations → direct API/DB lookup, no RAG needed
  - **Semi-structured:** FAQ articles, warranty policies → chunk into RAG-ready segments, tag by topic/product line
  - **Unstructured:** Vehicle manuals (diagrams, specs) → requires OCR/parsing + chunking strategy. Prioritize text-heavy sections first
  - **Real-time:** Service ticket data → live retrieval via API, not pre-indexed (status changes constantly)
- **Chunking strategy:** Split by topic/section, not by arbitrary token count. A warranty policy should be one chunk, not split mid-paragraph
- **Update cadence:** FAQs = weekly re-index. Manuals = per product launch. Service tickets = real-time API. Warranty policies = on policy change (event-triggered)
- **Source prioritization at query time:** If customer asks about warranty → warranty policy doc ranks above FAQ. Weigh source authority, not just semantic similarity
- **Bridge:** *"At TS, I did the same classification: customer account data (structured, API retrieval), conversation flow templates (semi-structured, in YAML), compliance rules (structured, embedded in transition conditions). The 40% inbound calls with classifiable intent — I identified WHICH data sources mattered for which intent type, then designed the retrieval architecture around that mapping."*

---

**Q3.2 — A customer calls about a roadside emergency (cứu hộ). Walk me through the state design.**
*Likely from: Mao, DS — P1 PRIORITY*

- **State flow:**
  - `emergency_intake` → Confirm emergency type (breakdown, accident, battery dead). Set priority flag = CRITICAL
  - `location_confirm` → Get GPS/address. Cross-reference with nearest VinFast service center
  - `dispatch_trigger` → API call to dispatch system. Confirm dispatch accepted
  - `status_update_loop` → Keep customer informed: "Đội cứu hộ sẽ đến trong X phút." Poll dispatch ETA every 60s
  - `resolution` → Dispatch arrives, confirm with customer, close ticket
- **Guardrails:**
  - ANY ambiguity about customer safety → immediate human transfer, no AI resolution
  - Timeout > 2 min without confirmed dispatch → auto-escalate to human supervisor
  - Exception-within-exception: if customer mentions injury during `status_update_loop` → escalate to emergency services, not just VinFast rescue
- **Bridge:** *"Same architecture as our exception states — `exc_bankruptcy` had a multi-step sub-flow: confirm filing status → collect case number → collect filing date → route to end-call. Each step had its own transition conditions. The `BACK|EXC` return mechanism won't apply here — cứu hộ doesn't return to the main flow, it resolves as a standalone journey."*

---

**Q3.3 — You discover 30% of AI responses on warranty queries are inaccurate. How do you diagnose and fix this?**
*Likely from: DS, Mao*

- **Diagnosis framework — isolate the failure layer:**
  1. **Retrieval failure?** Check: are the RIGHT documents being retrieved? Sample 50 inaccurate responses → check retrieved chunks. If wrong docs → embedding quality issue, chunking issue, or missing docs in knowledge base
  2. **Generation failure?** Check: right docs retrieved but LLM generates wrong answer? → prompt engineering issue (LLM ignoring context, or paraphrasing incorrectly). Fix: tighten prompt constraints, add "answer ONLY from the provided context"
  3. **Knowledge gap?** Check: the answer doesn't exist in the knowledge base at all? → missing documentation. Fix: work with VinFast to create/update missing warranty docs
  4. **Ambiguity failure?** Check: the warranty policy itself is ambiguous? → multiple valid interpretations. Fix: escalate ambiguous cases to human, or add disambiguation questions
- **Fix sequence:** Knowledge gap (add missing docs) → Retrieval quality (improve chunking/embedding) → Generation quality (tighten prompts) → Ambiguity handling (add escalation rules)
- **Bridge:** *"At TS, I used the same isolation methodology: 'Filtered noisy AI calls (FP/FN interruptions cross-validated across multiple speech models). Compared debtor turn count and PTP rate between AI and human at negotiation state — confirmed statistically significant gap.' First isolate WHERE the failure happens, then fix the specific layer. Don't tune the LLM when the problem is missing documents."*

---

**Q3.4 — The existing chatbot handles 10 topics. You need to expand to hotline (voice). What changes?**
*Likely from: DS, Mao*

- **Voice ≠ text — key differences:**
  - **Latency tolerance:** Chat = 5s OK. Voice = >2s feels broken. Requires streaming TTS, faster inference
  - **ASR errors:** Speech-to-text introduces noise. "VF8" might transcribe as "VF tám" or "vê ép tám." Need fuzzy matching
  - **No visual fallback:** Can't show a table, link, or image. Must verbalize everything concisely
  - **Interruption handling:** Customer talks over the agent. Need barge-in detection, graceful pause-resume
  - **Emotional register:** Voice carries tone. Monotone AI = "reading from a script." Needs prosody variation
  - **Turn-taking:** Chat is async. Voice is real-time. Agent must handle silence, hesitation, thinking time
- **Bridge:** *"This is my core expertise. At TS, we dealt with ALL of these: real-time streaming TTS (ElevenLabs, Cartesia), cross-talk/interruption filtering (FP/FN cross-validated across multiple speech models), and Emotional Speech (monotone delivery caused 70-80% lower PTP — we fixed it with emotion taxonomy, result: 2x PTP). The voice-specific product challenges are my strongest domain."*

---

**Q3.5 — How would you set up an A/B test to measure whether the AI agent performs better than the current human-only hotline for order tracking?**
*Likely from: DS, PMO*

- **Control vs. treatment:**
  - Control: current human-only flow (random 50% of order-tracking calls)
  - Treatment: AI-first with human escalation available (random 50%)
- **Metrics:**
  - Primary: resolution rate without escalation (AI vs. human)
  - Secondary: CSAT (post-call survey), resolution time, cost per interaction
  - Guardrail: escalation rate ceiling (if >X%, pause experiment)
- **Sample size:** Calculate statistical power upfront. For detecting a 10% resolution rate difference at 95% confidence → ~400 calls per group minimum
- **Duration:** 2–4 weeks minimum to account for day-of-week and time-of-day variation
- **Randomization:** Random by call arrival, not by customer (same customer might call twice)
- **Ethical consideration:** Customer must be able to reach human at any point. AI-first ≠ AI-only
- **Bridge:** *"The Emotional Speech A/B: 50 connected calls, emotion vs. no-emotion. Iterated label set post-batch-1 based on live signal. What I'd do differently at VinFast scale: larger sample (power calculation), longer duration, propensity matching on customer profile. The 50-call test was right for early directional signal; VinFast's 30/6 decision needs more statistical rigor."*

---

### Level 4 — ANALYZE (Break down, compare, identify root causes)

**Q4.1 — In your Voice Agent, you used a dual-LLM architecture (reflection + response). Why two calls instead of one?**
*Likely from: DS, Mao — P0 PRIORITY (your strongest technical differentiator)*

- **Why not one call:**
  - Single LLM call = detection (intent/exception) AND generation (response) in one step
  - Problem: generation quality and detection reliability compete. The LLM might generate a great empathetic response but MISS the bankruptcy mention. Or detect the exception but produce a robotic acknowledgment
  - Detection needs to be **deterministic and structured** (output: one of 17 enum values). Generation needs to be **creative and contextual**. These are fundamentally different tasks
- **Why two calls:**
  - **Reflection LLM** → structured output: extracts `exc` variable (enum: complaint, dispute_balance, bankruptcy, cease_comms, attorney, null). Optimized for classification accuracy
  - **Response LLM** → creative output: generates the agent's reply. Runs ONLY AFTER transition conditions (which check `exc`) have been evaluated
  - The system **cannot generate a response without first checking for compliance-triggering events**
- **Cost-latency trade-off:** Yes, two LLM calls = higher cost and latency per turn. But the alternative (missing a compliance event) = federal violation, legal liability, client loss. The cost of a missed exception >> cost of an extra LLM call
- **Bridge to VinFast:** *"Same principle applies: Layer 4 (Expert Router) should run as a SEPARATE classification step before Layer 5 (Agent) generates a response. Don't let the agent decide whether to escalate AND respond in the same call — separate the routing decision from the resolution action."*

---

**Q4.2 — Your exception guardrail checks run BEFORE business logic in every state. What would break if you reversed this order?**
*Likely from: DS, Mao*

- **If business logic runs first:**
  - Agent might make a **payment promise to a bankrupt consumer** → then the exception fires too late, the violation already happened
  - Agent might continue a **collection conversation after cease-communications request** → federal violation, recorded on call
  - Agent might quote **warranty terms to a customer who's already mentioned a lawyer** → should have ceased AI and transferred to legal
- **The ordering is the guardrail:** Compliance routing physically cannot be skipped because it evaluates first. Moving it after business logic makes it a "cleanup" layer instead of a "prevention" layer
- **VinFast equivalent:** If the agent starts answering a warranty question BEFORE checking for `exc_emergency` → customer who said "my car is smoking and I need warranty info" gets a warranty FAQ instead of immediate rescue dispatch
- **Bridge:** *"This is the core design principle of the YAML state machine. The `transition_conditions` block evaluated 17 exception types BEFORE the main-flow transitions. From line 8061: exception block → `## START handle exception case` → all 17 checks → `## END handle exception case` → only then business logic. Structural priority, not procedural."*

---

**Q4.3 — Compare routing in VinFast customer service (Layer 4) with expert routing in your debt collection agent. What's similar and fundamentally different?**
*Likely from: Mao*

- **Structurally similar:**
  - Both route based on topic/complexity/confidence
  - Both have a "human override" escape hatch (customer can always request a human)
  - Both use multi-step decision logic (not single-variable routing)
  - Both need exception detection at every turn (customer can change topic mid-conversation)
- **Fundamentally different:**
  - **Domain breadth:** Debt collection = single domain, narrow intent taxonomy. VinFast = multi-domain (emergency, warranty, orders, maintenance), broader intent space
  - **Expert types:** Debt collection = 1 expert type (human collector). VinFast = multiple expert types (rescue team, warranty specialist, order support, technical mechanic)
  - **Urgency dimension:** Debt collection = no time-critical routing. VinFast = cứu hộ requires IMMEDIATE human dispatch — urgency is a routing variable that didn't exist in debt collection
  - **Emotional dynamic:** Debt collection = adversarial (debtor doesn't want to pay). Customer service = cooperative (customer wants help). Routing logic weights differently
  - **Regulatory weight:** FDCPA = per-call federal legal liability. VinFast CS = brand reputation risk, not per-interaction legal liability (except safety-critical)
- **Bridge:** *"The architecture transfers. The routing variables change. I'd build VinFast's Layer 4 using the same pattern (structured classification before routing, exception-first ordering) but with a richer variable set (urgency, expert type, customer tier) that debt collection didn't need."*

---

**Q4.4 — You found only 3/12 emotion labels used in practice. What does this tell you about designing the intent taxonomy for VinFast?**
*Likely from: DS, Mao*

- **The lesson: over-granular taxonomy → LLM confusion → quality degradation**
  - We started with 12 emotion labels. LLMs defaulted to affectless text. Near-synonym confusion (supportive vs. empathetic) degraded annotation consistency, especially in high-ambiguity hardship states
  - Production reality: only 3 labels dominated (curious, sympathetic, calm). The debtor needs "I'm listening" vs. "reading from a script" — not 12 distinct modes
- **Transfer to VinFast intent taxonomy:**
  - **Start with observed distribution, not theoretical completeness.** Analyze 2 weeks of existing hotline logs. Expect 5–7 high-frequency intents to cover 80%+ of volume
  - **Collapse near-synonyms early.** "Warranty inquiry" vs. "repair request" vs. "maintenance booking" — if the resolution flow is the same, they're one intent, not three
  - **Design for the classifier, not for humans.** Humans can distinguish 50 intents. LLM classifiers degrade with near-synonyms. Taxonomy precision is a production lever
  - **Plan to iterate.** Launch with 5–7 intents. Add granularity only when production data shows the router is misrouting because the taxonomy is too coarse
- **Bridge:** *"Taxonomy precision is a production lever — this was one of our key findings. The fix wasn't more labels; it was FEWER, more distinct labels. Same principle applies to VinFast: ship with a lean taxonomy, expand based on misclassification data."*

---

**Q4.5 — Your Voice Agent reset the exception variable to null every turn. When would you persist state instead?**
*Likely from: DS*

- **Why reset (debt collection context):**
  - Any turn could trigger a NEW regulatory event. Debtor might mention bankruptcy mid-negotiation. Stale state = missed detection
  - `variable_change_exception: { "exc": "null" }` at every state = fresh classification every turn
- **When to persist (customer service context):**
  - **Persist:** Customer already verified identity → don't re-ask. Customer provided order number → carry it forward. Customer stated vehicle model → remember for follow-up turns
  - **Reset:** Intent detection — customer might switch topic mid-conversation ("actually, forget the order, I need roadside rescue"). Topic classification must re-evaluate every turn
  - **Hybrid:** Persist CONTEXT (identity, entities, conversation history). Reset INTENT (what does the customer want NOW)
- **Bridge:** *"The architectural decision is: what's the cost of stale state vs. the cost of re-detection? In debt collection, stale compliance state = federal violation → always reset. In customer service, stale identity state = customer repeats themselves = bad CX → always persist. Design the persistence boundary around the risk profile of each variable type."*

---

### Level 5 — EVALUATE (Judge, critique, recommend)

**Q5.1 — If you could only invest in ONE layer for the 30/4 deadline, which and why?**
*Likely from: Mao, PMO*

- **Answer: Layer 5 (Machine Agent resolution)** — this is where the AI value lives
- **Reasoning:**
  - Layers 1-3 = infrastructure. Hotline + website already work. P&L Router can start with simple rule-based routing. These are necessary but not differentiating
  - Layer 4 = routing logic. Can start with simple rules (topic keyword → human/AI). ML-based routing comes later with production data
  - Layer 5 = the AI agent that actually RESOLVES customer issues. Without a working agent, you just have a fancy IVR system
- **What "invest in Layer 5" means for 30/4:**
  - RAG pipeline for 1 topic (order lookup) on 1 channel (chat)
  - Basic guardrails (escalation triggers, hallucination prevention)
  - Shadow mode testing → controlled pilot
- **Bridge:** *"At TS, we applied the same logic — proved the agent on ONE use case (soft payment reminders) before expanding to harder scenarios (negotiation, hardship, payment plans). Result: 1.7x conversion within 30 days on the first use case. Don't spread thin across all layers — nail the agent first."*

---

**Q5.2 — How would you design the P&L Router (Layer 3) to avoid rebuilding for each new P&L?**
*Likely from: Mao, Ha*

- **Principle:** Abstract P&L-specific configuration from shared infrastructure
- **Shared infrastructure (build once):**
  - Channel ingestion (call/chat/email/OTT)
  - Agent orchestration framework
  - Analytics/reporting pipeline
  - Guardrail framework
- **P&L-specific configuration (plug-and-play per P&L):**
  - Knowledge base (VinFast repair manuals vs. VinMec appointment policies)
  - Routing rules (VinFast cứu hộ → immediate human; VinMec appointment → full AI)
  - Escalation paths (different stakeholders per P&L)
  - Brand tone/vocabulary
- **Implementation:** Config-driven, not code-driven. New P&L = new config file, not new deployment
- **Bridge:** *"At TS, we designed the Voice Agent for multi-vendor TTS (ElevenLabs, Cartesia) and multi-client deployment (Republic Finance, Unity Asset Management — different debt portfolios, different compliance rules, same agent architecture). The state machine YAML was the configuration layer — swap the prompt templates and data sources, keep the state machine structure. Same principle for P&L Router."*

---

**Q5.3 — A PMO tells you the 30/6 milestone requires 3 channels live with 15 intent categories. You think this is too ambitious. How do you make the case?**
*Likely from: PMO, Mao*

- **Frame with data, not opinion:**
  - 3 channels × 15 intents = 45 integration points to QA simultaneously
  - Each channel has different technical requirements (voice ASR latency, chat formatting, email parsing)
  - 15 intents likely follows the long tail: top 5 intents = 80% of volume, intents 6-15 = 20% of volume but 60% of build effort
- **Counter-proposal:**
  - **30/6 achievable scope:** 2 channels (chat + hotline) × 7 intents (top 80% volume). This is still ambitious and delivers 80% of the business value
  - **Phase 2 (30/8):** Add email channel + remaining 8 intents
  - Present the volume data: "5 intents cover 80% of calls. Shipping 15 at lower quality vs. 7 at high quality — which does VinFast prefer?"
- **Bridge:** *"At TS, the 6-market pipeline had the same dynamic. I recommended focusing production on the US market (highest revenue) and keeping other markets at DD/pilot. Result: 2 US clients live for 7 months with $52K plan amounts — instead of 6 markets at 20% each. Also: Emotional Speech — started with 12 labels, refined to 3 that mattered. Same 80/20 principle applied to scope negotiation."*

---

**Q5.4 — The DS proposes fine-tuning an open-source LLM instead of using a commercial API with RAG. Evaluate the trade-offs.**
*Likely from: DS*

- **Fine-tuning open-source LLM:**
  - Pros: data stays on-prem (Vingroup data sovereignty), lower per-call cost at scale, full customization (Vietnamese CS tone), no vendor lock-in
  - Cons: months of infra setup, needs ML engineering capacity, slower to iterate, model maintenance burden (drift, retraining)
- **Commercial API + RAG:**
  - Pros: ship in weeks (30/4 feasible), easy to iterate (change prompts, not weights), proven quality, no infra overhead
  - Cons: per-token cost scales linearly, customer data leaves VN (regulatory risk?), vendor lock-in (pricing changes = existential), limited customization
- **Your recommendation:**
  - **30/4 milestone:** Commercial API + RAG. Ship, learn, collect production data
  - **30/6 evaluation:** Benchmark open-source alternatives on accuracy, latency, Vietnamese quality using 3 months of production data
  - **Post-30/6:** Migrate to self-hosted if benchmark justifies. Vingroup's scale + data sensitivity = self-hosted is the endgame
  - **PM's role:** Define the evaluation criteria and facilitate the decision, not choose the model
- **Bridge:** *"At TS, we ran multi-vendor TTS (ElevenLabs, Cartesia) in parallel — tested different providers, selected based on production performance. Same principle: buy for speed now, run evaluation criteria against alternatives, build the migration path so you're never locked in."*

---

**Q5.5 — Looking at your Emotional Speech results (2x PTP, +60% turns), how confident are you? What would a skeptic challenge?**
*Likely from: DS — P1 PRIORITY (own the limitations before they find them)*

- **What a skeptic would challenge:**
  - **Small sample:** 50 connected calls — not statistically powered for robust conclusions. Could be noise
  - **No long-term holdout:** Weekly signal, early results. Do gains persist over months?
  - **Hawthorne effect:** Agents knew they were being tested. Behavior may not reflect steady-state production
  - **No debtor profile control:** Were emotion-group debtors coincidentally easier cases? No propensity matching
  - **Selection bias:** "Connected calls" filters out a lot. What happened to the unconnected ones?
  - **"2x PTP" from what base?** If base PTP was 2%, going to 4% is still very low absolute value
- **Your honest answer:**
  - "These are early production signals, not statistically conclusive results. The 50-call sample was designed to get a directional read fast — enough for the US client to validate and approve expansion, not enough for a peer-reviewed paper."
  - "The key finding wasn't the 2x number — it was the STRUCTURAL insight: emotion register is low-dimensional (3/12 labels), and LLM text generation suppresses emotion signal (root cause at prompt level). These insights hold regardless of sample size."
  - "The client's qualitative validation was the strongest signal — they independently confirmed the quality improvement without seeing our metrics."
- **Why this matters:** Owning limitations shows intellectual honesty. DS respects a PM who knows the difference between "directional signal" and "statistically proven." Don't oversell.

---

### Level 6 — CREATE (Design, propose, synthesize)

**Q6.1 — Design the escalation logic for Layer 4 (Expert Router).**
*Likely from: Mao*

- **Routing signals (input variables):**
  - `topic_urgency`: cứu hộ = CRITICAL (always human), order lookup = LOW, warranty = MEDIUM
  - `ai_confidence`: model's self-assessed probability of correct resolution. Below threshold → escalate
  - `customer_sentiment`: angry/frustrated (detected from text or voice tone) → human preference
  - `query_complexity`: single-step (status check) vs. multi-step (dispute resolution) → complexity score
  - `customer_preference`: explicit opt-out of AI → always human (non-negotiable)
  - `repeat_contact`: 3+ contacts for same issue → priority escalation to senior agent
- **Priority ordering (same principle as exception guardrails):**
  1. Safety-critical check FIRST (cứu hộ, vehicle defect) → human, no bypass
  2. Customer preference check (opt-out of AI) → human
  3. Confidence threshold check → below threshold → human or hybrid
  4. Business logic routing (topic × complexity × sentiment) → AI / hybrid / human
- **Bridge:** *"This IS the exception guardrail pattern transferred. In the YAML, exception checks ran BEFORE business logic at every state. Same structural priority: safety routing physically cannot be skipped. An engineer can't 'forget' to check for cứu hộ — the router does it automatically."*

---

**Q6.2 — Propose a quality assurance framework for the AI agent's first 1,000 live conversations.**
*Likely from: DS, Mao*

- **Data collection:**
  - Log every conversation: customer query, retrieved docs, agent response, escalation events, resolution status
  - Post-conversation: CSAT survey (1-5) + binary "issue resolved?" + optional free-text feedback
  - Track callback rate within 48h (proxy for unresolved issues)
- **Annotation framework (dual annotator):**
  - **AI annotator:** Second LLM reviews each conversation → scores: accuracy (factually correct?), completeness (issue fully addressed?), tone (appropriate for context?)
  - **Human annotator:** Sample 10% of conversations for human review. Prioritize: low-CSAT, escalated, long conversations
  - **Inter-rater reliability:** Compare AI and human annotations. If agreement <80% → retrain AI annotator or revise scoring rubric
- **Segmented analysis:**
  - By intent category: which topics have highest/lowest accuracy?
  - By channel: chat vs. hotline performance differences?
  - By resolution path: AI-only vs. AI→human escalation — where does the handoff break?
- **Iteration loop:**
  - Weekly: top-5 failure patterns → knowledge base updates + prompt refinements
  - Bi-weekly: taxonomy review — are intents correctly classified? Any new intents emerging?
  - Monthly: model performance report to Mao + VinFast stakeholders
- **Bridge:** *"This IS the Emotional Speech methodology transferred: 1/ Filter noisy data (FP/FN cross-validated). 2/ Dual annotator (GPT + Gemini for inter-rater reliability, human agents validated). 3/ Iterate post-batch based on live signal. 4/ Segment by state (negotiation vs. hardship). Same framework, VinFast context."*

---

**Q6.3 — You're joining a team with an existing PM (Ha), a PMO leaving by 30/4, and Mao wanting to focus on Layer 4-5. Propose your first 30-day plan.**
*Likely from: Mao — P0 PRIORITY (the real hiring question)*

- **Week 1 — Listen:**
  - Map Ha's current scope, PMO's deliverables, Mao's pain points
  - Read ALL existing specs, decision logs, stakeholder meeting notes
  - Listen to 30+ customer service recordings. Build intuition before writing anything
  - Shadow PMO's delivery process. Understand the tooling and cadence
- **Week 2 — Propose boundary:**
  - Propose to Mao: I own Layer 4-5 product specs + stakeholder communication for those layers. Ha owns Layers 1-3. Cross-layer interface = joint ownership
  - Propose to PMO: begin handoff. Shadow → co-run → I lead while PMO observes
  - Signal to Ha: "I'm here to fill a gap, not take territory. What do you need from me to make your work easier?"
- **Week 3 — First delivery:**
  - Write first spec on Mao's highest-priority Layer 4-5 item. Get DS team feedback
  - Co-run first stakeholder meeting with Mao observing (not leading)
  - Absorb PMO's delivery tracking (handoff acceleration toward 30/4)
- **Week 4 — Establish rhythm:**
  - Own weekly sprint rituals for Layer 4-5 scope
  - First independent stakeholder update (Mao reviews before send, not co-writes)
  - PMO handoff checkpoint: am I on track to fully absorb by 30/4?
- **Success metric at Day 30:** Mao's product-detail time reduced by 20%+ (from 70% to ~50%). Not 40% yet — that's the 3-month target
- **Bridge:** *"At TS, I onboarded 3 new team members using this exact pattern: immerse first, contribute second, own third. At ZaloPay, I joined an existing team and found the gaps (4x bank integration speed) instead of redesigning the map. At Shopee, I was the Vietnam-side interface absorbing Singapore's process. This isn't theoretical — it's my proven onboarding playbook."*

---

**Q6.4 — Design an exception-handling architecture for the VinFast AI agent.**
*Likely from: Mao — P2 (killer showcase if conversation goes deep)*

- **VinFast exception states (mapped from debt collection pattern):**


| Exception State      | Regulation/Business Rule                        | Action                                                                      |
| -------------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| `exc_emergency`      | Vehicle safety, customer safety                 | Immediate human dispatch. AI cannot resolve. Log for safety reporting       |
| `exc_safety_recall`  | If vehicle model is under active recall         | Flag + escalate to quality team. Cannot dismiss or minimize                 |
| `exc_legal_threat`   | Customer mentions lawsuit, lawyer, legal action | Cease AI resolution. Transfer to legal/compliance team with full transcript |
| `exc_human_request`  | Customer explicitly asks for human              | Transfer immediately. Non-negotiable. Equivalent to FDCPA consumer right    |
| `exc_repeat_contact` | 3+ contacts for same unresolved issue           | Priority escalation to senior agent. AI has already failed this customer    |
| `exc_language`       | Language barrier detected                       | Route to appropriate language agent                                         |
| `exc_complaint`      | Customer filing formal complaint                | Acknowledge, log, route to complaint handling team                          |
| `exc_vip_customer`   | High-value customer or fleet account            | Route to dedicated account manager                                          |


- **Architectural principles (transferred from YAML):**
  1. Exception checks run BEFORE business logic at every conversational turn
  2. Dual-LLM reflection: classify exceptions in a separate structured LLM call before response generation
  3. Reset-and-redetect every turn: customer can trigger a new exception mid-conversation
  4. Exception-within-exception: customer in `exc_complaint` who then mentions a safety issue → reroute to `exc_emergency`
  5. `BACK|EXC` return: after handling non-terminal exceptions (e.g., language switch), return to the main flow with context preserved

---

## Preparation Priority Matrix


| Priority              | Question                                       | Why                                                                                                           |
| --------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **P0 — Must nail**    | Q2.3 (single-prompt vs. state machine)         | Lost points on this with Hai Long. Mao WILL re-test                                                           |
| **P0 — Must nail**    | Q4.1 (dual-LLM architecture rationale)         | Your strongest technical differentiator. If you can't explain it fluently, the "technical fluency gap" sticks |
| **P0 — Must nail**    | Q-PM-6 / Q6.3 (30-day plan with existing team) | The real hiring question. Mao needs offload, not disruption                                                   |
| **P1 — Should prep**  | Q1.1–1.3 (RAG, fine-tuning, vector DB)         | Basic vocabulary the DS will gatekeep on. Don't fumble definitions                                            |
| **P1 — Should prep**  | Q3.2 (emergency state design)                  | Most visceral use case (cứu hộ). Shows you can think in states under pressure                                 |
| **P1 — Should prep**  | Q5.5 (self-critique of Emotional Speech)       | DS will probe statistical rigor. Own the limitations before they find them                                    |
| **P2 — Nice to have** | Q6.4 (exception architecture for VinFast)      | Only if conversation goes deep. But it's your killer showcase                                                 |
| **P2 — Nice to have** | Q5.2 (P&L Router extensibility)                | Shows you think beyond VinFast to cross-P&L platform                                                          |


---

## Honest Gap Strategy

Hai Long's feedback: **"technical understanding not firm/fluent."** The DS will probe this.

1. **Don't fake depth.** If asked about transformer attention, embedding dimensions, model architecture internals → *"I work at the product-architecture level, not the model-internals level. Here's what I own and how I make technical trade-off decisions with the DS team."*
2. **Show depth WHERE you have it.** State machine design, dual-LLM reflection architecture, A/B test methodology, taxonomy design, guardrail architecture — these are genuinely technical. They're *product-technical*, not *model-technical*.
3. **Bridge explicitly.** For every question, connect back to VinFast's product scope. The panel isn't hiring a data scientist — they're hiring someone who can translate between Mao's solution layer and the business layer.
4. **Your differentiation statement:** *"I wrote a 9,500-line state machine specification that 3 engineering teams built from — with 17 compliance guardrails, a dual-LLM reflection architecture, and exception-within-exception recursion. I don't tune hyperparameters. I design the system that tells the model what to do, when, and under what constraints."*

