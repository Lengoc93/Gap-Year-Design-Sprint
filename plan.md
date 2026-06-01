# Plan: Computex 2026 Event Workflow Optimizer

## Context Summary

**Who:** Ngoc Le, 12-year PM (AI/fintech), about to onboard as AI Alignment PM at Vingroup (June 22). Also has pending Masan interview.

**Devices:**
- iPhone 12 mini: 256GB total, 159.4GB free, iOS 26.5, 2029 photos + 45 videos + 128 apps
- HP Windows laptop: 475GB total, 215GB free, 123GB installed apps
- Notion Personal Pro ($48/yr) — works on both devices

**Events:** 72 Computex Taipei events (June 1-5) from CSV, spanning keynotes, forums, networking socials, exhibitor talks, guided tours, startup pitches, and 1 online event.

**Budget constraint:** 20mil VND total travel budget already committed (flights booked). No per-event cost — all events are part of the Computex pass. The cost dimension becomes **opportunity cost** (energy + time spent at one event vs another).

---

## Step 1: Score & Rank All Events

Score each event on 3 dimensions (1-5 scale each, total /15):

### Scoring Criteria

**Career Relevancy (to AI Alignment PM at Vingroup + Masan Data role):**
- 5 = Directly about AI alignment, AI governance, data intelligence, generative AI applications
- 4 = AI infrastructure, AI compute, applied AI for industry — strong contextual value
- 3 = Robotics/edge AI, startup ecosystem, CEO vision keynotes — moderate context
- 2 = Hardware/networking tech, ePaper, PC building — tangential
- 1 = Government procurement, guided tours in Chinese — minimal career value

**Energy Wellbeing (per Ngoc's operating manual: max 3 major cognitive switches/day, needs embodiment, needs variety without chaos):**
- 5 = Short (≤1hr), engaging format, allows movement or social connection
- 4 = Medium length, interesting topic, manageable cognitive load
- 3 = Standard forum/keynote, passive listening
- 2 = Long session (3+ hrs), heavy cognitive load, desk-bound
- 1 = Conflicts with rest/meal times, or stacks too many sessions

**Strategic Value (networking potential, unique access, can't-get-elsewhere):**
- 5 = CEO keynote (once-only), exclusive social event, direct networking opportunity
- 4 = Pitch contest finals, demo day — see latest startups
- 3 = Forum with Q&A — can ask questions to panelists
- 2 = Repeating exhibitor talk (same content multiple times)
- 1 = Can be watched online/recorded later

### Output: Ranked event list in CSV with scores

---

## Step 2: Categorize Events into 4 Workflow Types

### Type A: "Keynote Absorb" (CEO keynotes, major forums)
- **Nature:** Sit, listen, absorb industry vision. 1-way communication.
- **Examples:** Qualcomm CEO, Intel CEO, Marvell CEO, NXP CEO keynotes; AI Compute forum
- **Primary device:** Laptop (for rich note-taking) OR Phone (if seating is tight/standing)
- **Workflow:** `audio record (phone) → live bullet notes (Notion) → post-session insight extraction (Claude) → question bank for networking`

### Type B: "Forum Engage" (interactive forums with Q&A)
- **Nature:** Listen + opportunity to ask questions to panelists
- **Examples:** Robotics forum, AI Devices/IoT forum, Data Intelligence forum, Generative AI forum
- **Primary device:** Phone for recording + Laptop for notes if table available
- **Workflow:** `pre-generate questions (Claude) → audio record (phone) → live notes (Notion) → flag Q&A moments → post-session synthesis + follow-up questions (Claude)`

### Type C: "Network & Converse" (social events, happy hours, pitch contests, demo days)
- **Nature:** Mobile, 1-on-1 or small group conversations, walking between booths
- **Examples:** Tech'em High, Astera Labs Happy Hour, EHA Gala, InnoVEX Demo Day, Opening Ceremony
- **Primary device:** Phone only (hands-free, mobile)
- **Workflow:** `question + talking points generated (Claude) → conversation → voice memo summary (phone) → post-event written summary (Notion) → insight extraction (Claude)`

### Type D: "Remote/Async" (online events, repeating exhibitor talks)
- **Nature:** Can attend from hotel/cafe with full setup
- **Examples:** Canva AI online talk, any exhibitor talk that repeats
- **Primary device:** Laptop (full setup)
- **Workflow:** `watch stream → full notes (Notion on laptop) → immediate synthesis (Claude on laptop)`

---

## Step 3: Generate Preparation Instructions per Workflow Type

For each workflow type, produce actionable prep instructions covering:

1. **Night-before checklist** (storage cleanup, charging, app prep)
2. **Morning-of checklist** (what to carry, what to leave at hotel)
3. **During-event SOP** (which app to open, how to capture)
4. **Post-event processing** (when + how to synthesize notes)

### Device-specific prep (from screenshot specs):
- **iPhone storage:** 159.4GB free — no cleanup needed. Plenty for audio recording + photos.
- **Laptop storage:** 215GB free — no cleanup needed. Can serve as backup storage hub.
- **Notion:** Personal Pro plan supports offline mode. Pre-load event templates before venue (WiFi may be unreliable at convention center).
- **Key apps to have ready on phone:** Notion, Claude (claude.ai/code on mobile browser), voice recorder, camera
- **Key apps on laptop:** Notion desktop, browser with Claude, any transcription tool

---

## Step 4: Produce Final CSV Output

Create a single CSV file with columns:
```
Rank, Date, Time, Event_Name, Category, Workflow_Type, Career_Score, Energy_Score, Strategic_Score, Total_Score, Recommended_Attend, Prep_Instructions, During_Workflow, Post_Event_Action, Device_Needed, Conflicts_With
```

This CSV becomes the single reference file Ngoc carries through Computex week.

---

## Step 5: Commit & Push

- Copy source CSV into repo
- Write the output CSV with rankings + workflow instructions
- Commit to branch `claude/youthful-wright-G1oks`
- Push

---

## Files to Create
1. `computex-2026/events_source.csv` — copy of input data
2. `computex-2026/computex_ranked_workflow_guide.csv` — the main deliverable

## No External Dependencies
All processing is done locally with the CSV data + context from the operating manual. No API calls or web fetches needed.
