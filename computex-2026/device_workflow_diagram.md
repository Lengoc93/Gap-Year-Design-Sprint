# Computex 2026: Device + Tool Ecosystem Diagram

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        AT THE EVENT (real-time)                         │
│                                                                         │
│  ┌──────────────────────────────┐    ┌───────────────────────────────┐  │
│  │    iPHONE 12 MINI            │    │    HP LAPTOP (at hotel/cafe)  │  │
│  │    (primary field device)    │    │    (evening processing hub)   │  │
│  │                              │    │                               │  │
│  │  ┌────────────────────────┐  │    │  ┌─────────────────────────┐  │  │
│  │  │  SPEAKWISE ($60/yr)    │  │    │  │  NOTION DESKTOP         │  │  │
│  │  │  - AirPods tap-record  │──┼────┼──│  - Full transcript page │  │  │
│  │  │  - In-person transcribe│  │auto│  │  - Summary + actions    │  │  │
│  │  │  - 95%+ accuracy       │  │sync│  │  - Cross-event search   │  │  │
│  │  │  - Noise-resilient     │  │    │  │  - Offline available    │  │  │
│  │  └────────────────────────┘  │    │  └─────────────────────────┘  │  │
│  │             │                │    │             │                  │  │
│  │             │ auto-export    │    │             │ copy/paste       │  │
│  │             ▼                │    │             ▼                  │  │
│  │  ┌────────────────────────┐  │    │  ┌─────────────────────────┐  │  │
│  │  │  NOTION MOBILE         │  │    │  │  CLAUDE (browser/app)   │  │  │
│  │  │  - Quick capture notes │◄─┼────┼─►│  - Insight extraction   │  │  │
│  │  │  - Voice memo tags     │  │sync│  │  - Question generation  │  │  │
│  │  │  - Event checklist     │  │    │  │  - Cross-event synthesis│  │  │
│  │  └────────────────────────┘  │    │  │  - Prep for next day    │  │  │
│  │             │                │    │  └─────────────────────────┘  │  │
│  │             │ during convo   │    │             ▲                  │  │
│  │             ▼                │    │             │ paste transcript │  │
│  │  ┌────────────────────────┐  │    │             │                  │  │
│  │  │  CLAUDE MOBILE APP     │  │    │  ┌─────────────────────────┐  │  │
│  │  │  - Voice mode (free)   │  │    │  │  BACKUP STORAGE         │  │  │
│  │  │  - Hands-free Q&A      │──┼────┼─►│  - Audio files from     │  │  │
│  │  │  - "What should I ask  │  │    │  │    Speakwise → laptop   │  │  │
│  │  │    this speaker about  │  │    │  │  - Photos/screenshots   │  │  │
│  │  │    AI alignment?"      │  │    │  │  - 215 GB free          │  │  │
│  │  │  - Quick context check │  │    │  └─────────────────────────┘  │  │
│  │  └────────────────────────┘  │    │                               │  │
│  │                              │    │                               │  │
│  │  Storage: 159 GB free ✅     │    │  Storage: 215 GB free ✅      │  │
│  └──────────────────────────────┘    └───────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│                    DATA FLOW BY EVENT PHASE                             │
│                                                                         │
│  ╔═══════════════╗     ╔═══════════════╗     ╔════════════════╗        │
│  ║  BEFORE EVENT ║     ║ DURING EVENT  ║     ║  AFTER EVENT   ║        │
│  ║  (hotel/cafe) ║     ║  (venue)      ║     ║  (hotel eve)   ║        │
│  ╚═══════╤═══════╝     ╚═══════╤═══════╝     ╚═══════╤════════╝        │
│          │                     │                      │                 │
│          ▼                     ▼                      ▼                 │
│  ┌───────────────┐     ┌───────────────┐     ┌────────────────┐        │
│  │ CLAUDE laptop │     │ SPEAKWISE     │     │ CLAUDE laptop  │        │
│  │ generates:    │     │ iPhone:       │     │ processes:     │        │
│  │ - Questions   │     │ - Records     │     │ - Transcript   │        │
│  │ - Context     │     │ - Transcribes │     │ - Key insights │        │
│  │   briefing    │     │ - Auto→Notion │     │ - Action items │        │
│  │ - Speaker     │     │               │     │ - Questions    │        │
│  │   research    │     │ NOTION mobile │     │   for tomorrow │        │
│  └───────────────┘     │ iPhone:       │     │ - Connection   │        │
│                        │ - Quick tags  │     │   follow-ups   │        │
│                        │ - Bullet note │     └────────────────┘        │
│                        │               │              │                 │
│                        │ CLAUDE mobile │              ▼                 │
│                        │ iPhone:       │     ┌────────────────┐        │
│                        │ - Voice Q&A   │     │ NOTION laptop  │        │
│                        │ - "Help me    │     │ stores:        │        │
│                        │   ask about…" │     │ - Final summary│        │
│                        └───────────────┘     │ - Insight DB   │        │
│                                              │ - Contact list │        │
│                                              └────────────────┘        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────┐
│              WORKFLOW BY EVENT TYPE                                      │
│                                                                         │
│  TYPE A: KEYNOTE (Qualcomm/Intel/Marvell/NXP CEO)                      │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────────┐        │
│  │Speakwise │──►│ Notion   │──►│ Claude   │──►│ Insight card │        │
│  │records   │   │ auto-page│   │ extracts │   │ in Notion    │        │
│  │via AirPod│   │ w/summary│   │ AI-align │   │ + questions  │        │
│  │(phone    │   │          │   │ relevance│   │ for networking│       │
│  │in pocket)│   │          │   │          │   │              │        │
│  └──────────┘   └──────────┘   └──────────┘   └──────────────┘        │
│  Device: Phone only. Laptop stays at hotel.                            │
│                                                                         │
│  TYPE B: FORUM w/ Q&A (AI Devices, Data Intelligence, GenAI)           │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────────┐        │
│  │Claude    │──►│Speakwise │──►│ Notion   │──►│ Claude       │        │
│  │pre-gen   │   │records   │   │ quick    │   │ post-forum   │        │
│  │questions │   │+ Notion  │   │ tag Q&A  │   │ deeper       │        │
│  │(morning) │   │ auto-page│   │ moments  │   │ synthesis    │        │
│  └──────────┘   └──────────┘   └──────────┘   └──────────────┘        │
│  Device: Phone primary. Laptop if table available.                     │
│                                                                         │
│  TYPE C: NETWORKING (Happy Hour, Demo Day, Gala)                       │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────────┐        │
│  │Claude    │──►│ CONVERSE │──►│Claude    │──►│ Notion       │        │
│  │voice mode│   │ (no      │   │voice mode│   │ contact +    │        │
│  │"prep me  │   │ device   │   │"summarize│   │ follow-up    │        │
│  │ for this │   │ out)     │   │ what we  │   │ page         │        │
│  │ person"  │   │          │   │ discussed│   │              │        │
│  └──────────┘   └──────────┘   └──────────┘   └──────────────┘        │
│  Device: Phone only. Everything via voice. No screen during convo.     │
│                                                                         │
│  TYPE D: ONLINE/ASYNC (Canva talk, repeating exhibitor talks)          │
│  ┌──────────┐   ┌──────────┐   ┌──────────────────────────────┐        │
│  │ Laptop   │──►│ Notion   │──►│ Claude on laptop             │        │
│  │ stream   │   │ full     │   │ immediate synthesis          │        │
│  │ + record │   │ notes    │   │ + cross-reference w/ day's   │        │
│  │          │   │          │   │   in-person notes             │        │
│  └──────────┘   └──────────┘   └──────────────────────────────┘        │
│  Device: Laptop only. Full desk setup at hotel.                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Notion Plan Decision: Do You Need to Upgrade?

### Your Current Plan: Personal Pro ($48/year)

| Feature | Available? | Impact |
|---------|-----------|--------|
| Notion pages, databases, templates | Yes | Core note-taking works fine |
| Offline mode | Yes | Critical for venue with spotty WiFi |
| Basic AI writing (rewrite, summarize selected text) | Yes (limited ~20/day) | Can manually summarize but limited |
| AI Meeting Notes (auto-record, transcribe, summarize) | NO | This is Business plan only ($20/mo) |
| Ask Notion (search across all workspace) | NO | Business plan only |
| AI Agents | NO | Business plan only |

### Recommendation: DO NOT upgrade Notion. Use Speakwise instead.

**Why:**
1. Notion AI Meeting Notes is designed for **virtual meetings** (Zoom/Meet/Teams screen audio capture). It does NOT record in-person audio from your iPhone microphone at a conference venue.
2. Upgrading from Personal Pro ($48/yr) to Business ($240/yr) = **+$192/year** for features you mainly need for 4 days.
3. **Speakwise ($60/year)** solves the actual problem: in-person audio → transcription → auto-export to Notion pages. Purpose-built for exactly your use case.

### Cost Comparison

| Option | Annual Cost | Solves in-person recording? |
|--------|-----------|---------------------------|
| Keep Personal Pro + add Speakwise | $48 + $60 = **$108/yr** | YES (via Speakwise → Notion) |
| Upgrade to Business plan | **$240/yr** | NO (Notion AI Meeting Notes = virtual only) |

### The Stack That Works

```
Speakwise ($60/yr)     = RECORD + TRANSCRIBE in-person audio
Notion Personal Pro    = STORE + ORGANIZE transcripts, notes, contacts
Claude mobile (free)   = GENERATE questions + SYNTHESIZE insights in real-time
Claude desktop         = DEEP PROCESS evening synthesis across all day's notes
```
