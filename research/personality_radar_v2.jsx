import { useState } from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const LAYERS = {
  layer1: {
    label: "Layer 1: Evolutionary Drive",
    color: "#22c55e",
    bg: "#052e16",
  },
  layer2: {
    label: "Layer 2: Personality Expression",
    color: "#eab308",
    bg: "#1a1500",
  },
  layer3: {
    label: "Layer 3: Trauma Distortions",
    color: "#ef4444",
    bg: "#2a0a0a",
  },
  new: {
    label: "New: Rest Experiment Findings",
    color: "#38bdf8",
    bg: "#0a1929",
  },
};

const DIMENSIONS = [
  {
    key: "openness",
    label: "Openness",
    score: 8.5,
    max: 10,
    layer: "layer2",
    original: "85/100 — unchanged",
    updated:
      "Confirmed by rest experiment. ASML→LHC→Buddhism→particle physics chain on Day 1 is pure Openness in action. No update needed.",
    status: "confirmed",
  },
  {
    key: "achievement",
    label: "Achievement\nStriving",
    score: 8.5,
    max: 10,
    layer: "layer2",
    original: "17/20 — 'learned survival strategy'",
    updated:
      "REINTERPRETED: ~12/20 Engine (curiosity-driven mastery, 'god-mother' builder instinct) + ~5/20 Excuse overlay (vindication, proving mẹ/ex-manager wrong). Score holds. Composition now understood.",
    status: "reinterpreted",
  },
  {
    key: "conscientiousness",
    label: "Conscientiousness",
    score: 7.8,
    max: 10,
    layer: "layer2",
    original: "78/100 — low orderliness flagged as weakness",
    updated:
      "UPGRADED NARRATIVE: Not 'disorganized' — selectively ordered. Dishes done to quality standard even while rushing. Said no to cinema for the plan. Prepared hydration for nail salon. Structured spontaneity IS the conscientiousness working correctly.",
    status: "upgraded",
  },
  {
    key: "sovereignty",
    label: "Sovereignty\nDrive ★",
    score: 9.0,
    max: 10,
    layer: "new",
    original: "Not previously measured",
    updated:
      "NEW DIMENSION. Root compass beneath diversification and excellence. Every high-energy moment = free choice (purple nails, duck noodle, no to cinema). Every low-energy = sovereignty threat (mẹ's call, authority pushing back). Anxiety fires when sovereignty threatened, silent when intact.",
    status: "new",
  },
  {
    key: "diversification",
    label: "Diversification\nCompass",
    score: 8.5,
    max: 10,
    layer: "layer1",
    original: "8.2/10 alignment — Engine confirmed",
    updated:
      "ENGINE CONFIRMED (High confidence). Rest experiment: 3 days, energy 10/10, zero worthlessness. Spontaneous creativity, intrinsic curiosity. Career exits = Engine. Relationship exits = Excuse. Now understood as STRATEGY layer serving sovereignty root.",
    status: "confirmed",
  },
  {
    key: "excellence",
    label: "Excellence\nStandard ★",
    score: 8.0,
    max: 10,
    layer: "new",
    original: "Not previously isolated",
    updated:
      "NEW DIMENSION. Detected Day 2: 'whatever delivered from my hand must be excellent at least from my POV.' Gym session Day 3: best ever, 100% focus. Distinct from diversification (explore many) and achievement-striving (accomplish). This is about QUALITY of craft.",
    status: "new",
  },
  {
    key: "anxiety",
    label: "Anxiety",
    score: 6.5,
    max: 10,
    layer: "layer3",
    original: "13/20 — 'high anxiety despite optimism'",
    updated:
      "REFRAMED: Not a trait — an activation pattern. Fires on sovereignty threat (mẹ, authority, imposter syndrome). Silent when sovereignty intact (own schedule, own space). Day 1: mẹ called → guilt flood. Day 3: mẹ absent → 'not at all.' Reduction = design for sovereignty, not 'manage anxiety.'",
    status: "reinterpreted",
  },
  {
    key: "productivity_anxiety",
    label: "Productivity\nAnxiety",
    score: 4.0,
    max: 10,
    layer: "layer3",
    original: "Critical blocker — mẹ's 'never rest' programming",
    updated:
      "IMPROVING: Slept without guilt when sick (Day 1). Left dishes unwashed without shame (Days 1-2). Called rest 'so magical' (Day 3). BUT: Day 2 'urge to wrap things quickly' + Day 3 Claude session on wrapper AI. Pattern is quieter, not gone. Upgrade: critical → active but manageable.",
    status: "improved",
  },
  {
    key: "attachment",
    label: "Disorganized\nAttachment",
    score: 3.0,
    max: 10,
    layer: "layer3",
    original: "3/10 alignment — trauma overrides diversification",
    updated:
      "CONFIRMED by relationship review. Career exits = Engine (toward better). Relationship exits = mostly Excuse (flee intimacy). Tân analysis: entered 50% authentic, adapted into someone she hated, oscillated between clinging and fleeing. Sovereignty reframe: intimacy read as sovereignty threat. Stays with Dr. Sarah Chen.",
    status: "confirmed",
  },
  {
    key: "enfp",
    label: "ENFP-T\nProspecting",
    score: 7.5,
    max: 10,
    layer: "layer2",
    original: "60% Prospecting — keeping options open",
    updated:
      "Confirmed. But rest experiment adds nuance: you CAN commit when the commitment serves sovereignty (said no to cinema, honored the plan). Prospecting isn't indecision — it's keeping options open UNTIL sovereignty-aligned choice appears, then committing cleanly.",
    status: "confirmed",
  },
  {
    key: "type7",
    label: "Type 7\nEnthusiast",
    score: 8.0,
    max: 10,
    layer: "layer2",
    original: "Pain avoidance, seeking variety",
    updated:
      "Confirmed with depth. Day 1: tolerated being sick without escapism. Day 3: chose bún bò huế when original stall closed instead of panicking. Type 7 growth direction = toward Type 5 (depth, stillness) — the rest experiment showed you CAN do stillness when body permits. Not avoidance — calculated selection.",
    status: "confirmed",
  },
  {
    key: "locus",
    label: "Internal\nLocus",
    score: 8.0,
    max: 10,
    layer: "layer2",
    original: "65% internal — believes in ability to influence outcomes",
    updated:
      "Effectively higher than 65% during rest experiment. Every day involved active choice-making even in 'rest.' The 35% external recognition is adaptive — knowing when to leave situations you can't control. This IS sovereignty in action.",
    status: "confirmed",
  },
];

const STATUS_COLORS = {
  confirmed: "#22c55e",
  reinterpreted: "#eab308",
  upgraded: "#38bdf8",
  improved: "#a78bfa",
  new: "#f472b6",
};

const STATUS_LABELS = {
  confirmed: "Confirmed",
  reinterpreted: "Reinterpreted",
  upgraded: "Narrative Upgraded",
  improved: "Improving",
  new: "New Dimension",
};

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = DIMENSIONS.find((x) => x.label === payload[0]?.payload?.label);
  if (!d) return null;
  return (
    <div
      style={{
        background: "#0f172a",
        border: `1px solid ${STATUS_COLORS[d.status]}`,
        borderRadius: 8,
        padding: "10px 14px",
        maxWidth: 280,
        fontSize: 12,
        lineHeight: 1.5,
      }}
    >
      <div
        style={{
          color: STATUS_COLORS[d.status],
          fontWeight: 700,
          fontSize: 13,
          marginBottom: 4,
        }}
      >
        {d.label.replace("\n", " ")} — {d.score}/{d.max}
      </div>
      <div style={{ color: "#94a3b8", fontSize: 11, marginBottom: 6 }}>
        {STATUS_LABELS[d.status]}
      </div>
      <div style={{ color: "#cbd5e1" }}>{d.updated}</div>
    </div>
  );
}

export default function PersonalityRadar() {
  const [selected, setSelected] = useState(null);
  const [showLayer, setShowLayer] = useState("all");

  const radarData = DIMENSIONS.map((d) => ({
    label: d.label,
    value: d.score,
    fullMark: d.max,
  }));

  const filteredDims =
    showLayer === "all"
      ? DIMENSIONS
      : DIMENSIONS.filter((d) => d.layer === showLayer);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e2e8f0",
        fontFamily: "'IBM Plex Sans', 'Noto Sans', system-ui, sans-serif",
        padding: "24px 16px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 3,
            color: "#64748b",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Ngọc — Personality Architecture
        </div>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#f1f5f9",
            margin: "0 0 4px",
          }}
        >
          Updated Personality Radar
        </h1>
        <div style={{ fontSize: 12, color: "#64748b" }}>
          Post Rest Experiment — March 1, 2026 — v2.0
        </div>
      </div>

      {/* Compass sentence */}
      <div
        style={{
          margin: "16px auto",
          maxWidth: 540,
          padding: "12px 16px",
          background:
            "linear-gradient(135deg, rgba(34,197,94,0.08), rgba(56,189,248,0.08))",
          border: "1px solid rgba(34,197,94,0.2)",
          borderRadius: 8,
          fontSize: 12,
          lineHeight: 1.6,
          color: "#94a3b8",
          textAlign: "center",
        }}
      >
        <span style={{ color: "#22c55e", fontWeight: 600 }}>Compass:</span>{" "}
        <span style={{ color: "#e2e8f0", fontStyle: "italic" }}>
          Sovereignty (root) → Diversification (strategy) → Excellence
          (standard)
        </span>
        <br />
        <span style={{ fontSize: 11, color: "#64748b" }}>
          Engine confirmed · High confidence · Relationship domain needs repair
        </span>
      </div>

      {/* Layer filter */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          flexWrap: "wrap",
          marginBottom: 16,
        }}
      >
        <button
          onClick={() => setShowLayer("all")}
          style={{
            padding: "5px 12px",
            borderRadius: 20,
            border:
              showLayer === "all"
                ? "1px solid #e2e8f0"
                : "1px solid #334155",
            background: showLayer === "all" ? "#1e293b" : "transparent",
            color: showLayer === "all" ? "#f1f5f9" : "#64748b",
            fontSize: 11,
            cursor: "pointer",
            fontWeight: showLayer === "all" ? 600 : 400,
          }}
        >
          All Layers
        </button>
        {Object.entries(LAYERS).map(([key, { label, color }]) => (
          <button
            key={key}
            onClick={() => setShowLayer(key)}
            style={{
              padding: "5px 12px",
              borderRadius: 20,
              border:
                showLayer === key
                  ? `1px solid ${color}`
                  : "1px solid #334155",
              background: showLayer === key ? `${color}15` : "transparent",
              color: showLayer === key ? color : "#64748b",
              fontSize: 11,
              cursor: "pointer",
              fontWeight: showLayer === key ? 600 : 400,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Radar Chart */}
      <div style={{ width: "100%", maxWidth: 500, margin: "0 auto" }}>
        <ResponsiveContainer width="100%" height={380}>
          <RadarChart data={radarData} cx="50%" cy="50%">
            <PolarGrid stroke="#1e293b" />
            <PolarAngleAxis
              dataKey="label"
              tick={{ fill: "#94a3b8", fontSize: 9, lineHeight: 1.2 }}
              tickLine={false}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 10]}
              tick={{ fill: "#475569", fontSize: 9 }}
              tickCount={6}
              axisLine={false}
            />
            <Radar
              name="Score"
              dataKey="value"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.12}
              strokeWidth={2}
              dot={{ r: 3, fill: "#22c55e" }}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Detail cards */}
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {filteredDims.map((d) => (
          <div
            key={d.key}
            onClick={() => setSelected(selected === d.key ? null : d.key)}
            style={{
              padding: "12px 16px",
              background:
                selected === d.key
                  ? `${LAYERS[d.layer].bg}`
                  : "rgba(15,23,42,0.6)",
              border: `1px solid ${
                selected === d.key
                  ? STATUS_COLORS[d.status]
                  : "#1e293b"
              }`,
              borderRadius: 8,
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {/* Card header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: LAYERS[d.layer].color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#e2e8f0",
                  }}
                >
                  {d.label.replace("\n", " ")}
                </span>
                {d.status === "new" && (
                  <span
                    style={{
                      fontSize: 9,
                      padding: "2px 6px",
                      borderRadius: 10,
                      background: "#f472b620",
                      color: "#f472b6",
                      fontWeight: 600,
                      letterSpacing: 0.5,
                    }}
                  >
                    NEW
                  </span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    fontSize: 10,
                    color: STATUS_COLORS[d.status],
                    fontWeight: 500,
                  }}
                >
                  {STATUS_LABELS[d.status]}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: STATUS_COLORS[d.status],
                    fontFamily: "monospace",
                  }}
                >
                  {d.score}
                </span>
              </div>
            </div>

            {/* Score bar */}
            <div
              style={{
                marginTop: 8,
                height: 3,
                background: "#1e293b",
                borderRadius: 2,
              }}
            >
              <div
                style={{
                  width: `${(d.score / d.max) * 100}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${LAYERS[d.layer].color}, ${STATUS_COLORS[d.status]})`,
                  borderRadius: 2,
                  transition: "width 0.4s ease",
                }}
              />
            </div>

            {/* Expanded detail */}
            {selected === d.key && (
              <div style={{ marginTop: 10 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "#64748b",
                    marginBottom: 6,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Before:</span>{" "}
                  {d.original}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#cbd5e1",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: STATUS_COLORS[d.status],
                    }}
                  >
                    After rest experiment:
                  </span>{" "}
                  {d.updated}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Three-layer model summary */}
      <div
        style={{
          maxWidth: 600,
          margin: "24px auto 0",
          padding: 16,
          background: "rgba(15,23,42,0.8)",
          border: "1px solid #1e293b",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#94a3b8",
            marginBottom: 10,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Three-Layer Model — Updated
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            fontSize: 11,
            lineHeight: 1.6,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 4,
                background: "#22c55e",
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <div>
              <span style={{ color: "#22c55e", fontWeight: 600 }}>
                Layer 1 — Evolutionary Drive:
              </span>
              <span style={{ color: "#cbd5e1" }}>
                {" "}
                Sovereignty → Diversification → Excellence. ENGINE confirmed.
                Pre-trauma, biological, core operating system.
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 4,
                background: "#eab308",
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <div>
              <span style={{ color: "#eab308", fontWeight: 600 }}>
                Layer 2 — Personality Expression:
              </span>
              <span style={{ color: "#cbd5e1" }}>
                {" "}
                Openness, ENFP-T, Type 7, Internal Locus, Conscientiousness.
                All confirmed as aligned expressions of Layer 1. Serve
                diversification strategy.
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 4,
                background: "#ef4444",
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <div>
              <span style={{ color: "#ef4444", fontWeight: 600 }}>
                Layer 3 — Trauma Distortions:
              </span>
              <span style={{ color: "#cbd5e1" }}>
                {" "}
                Productivity anxiety improving (critical → manageable).
                Anxiety reframed as sovereignty-threat detector. Disorganized
                attachment unchanged — stays with Dr. Sarah Chen. Achievement
                overlay (~5/20) identified for healing.
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 4,
                background: "#38bdf8",
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <div>
              <span style={{ color: "#38bdf8", fontWeight: 600 }}>
                New — Rest Experiment:
              </span>
              <span style={{ color: "#cbd5e1" }}>
                {" "}
                Sovereignty Drive and Excellence Standard surfaced as distinct
                dimensions. Integrated compass model: sovereignty is root,
                diversification is strategy, excellence is standard.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          fontSize: 10,
          color: "#475569",
          marginTop: 20,
          paddingBottom: 16,
        }}
      >
        Click any dimension card to expand · Hover radar points for detail ·
        Filter by layer above
      </div>
    </div>
  );
}
