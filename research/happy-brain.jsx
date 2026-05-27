import { useState } from "react";

const hormoneData = [
  {
    name: "Dopamine",
    emoji: "🎯",
    color: "#E8453C",
    colorLight: "#FDE8E7",
    purpose: "The 'reward' chemical. Motivates you to seek, do, and achieve. Creates the thrill of finding what you need — the 'I got it!' feeling.",
    droopDuration: "Short",
    droopTrigger: "Once a reward is obtained, dopamine drops quickly. Each repetition of the same reward triggers less dopamine (habituation).",
    disappointment: "You keep needing MORE or NEWER rewards to feel the same high. The goal you worked so hard for feels empty once achieved. You immediately look for the next thing.",
    increasing: "Set and achieve small incremental goals. Break big tasks into steps. Celebrate small wins. Embrace novelty and new challenges. Approach mastery in new skills.",
    activities: [
      "Learning a new skill",
      "Completing a to-do list item",
      "Setting & hitting micro-goals",
      "Trying new foods / places",
      "Exercise milestones",
      "Creating something new",
    ],
    cycleRole: "Drives you to seek the next reward → but each reward satisfies less → so you seek harder",
  },
  {
    name: "Serotonin",
    emoji: "👑",
    color: "#E8A317",
    colorLight: "#FEF5E0",
    purpose: "The 'status/respect' chemical. Triggers good feelings when you feel important, respected, or socially significant. Linked to confidence and pride.",
    droopDuration: "Medium",
    droopTrigger: "When you feel overlooked, disrespected, or when your social status feels threatened. Social comparison going unfavorably.",
    disappointment: "You keep seeking external validation and social dominance. Status gains feel temporary — someone always seems 'above' you. Leads to constant social comparison.",
    increasing: "Practice gratitude. Reflect on past achievements. Build genuine self-worth independent of others. Take pride in your unique contributions. Mentor or help others.",
    activities: [
      "Journaling achievements",
      "Sunlight exposure (20 min)",
      "Volunteering / mentoring",
      "Practicing gratitude daily",
      "Asserting healthy boundaries",
      "Physical posture & confidence",
    ],
    cycleRole: "Makes you seek social importance → but status is relative and fleeting → so you keep comparing",
  },
  {
    name: "Oxytocin",
    emoji: "🤝",
    color: "#4A90D9",
    colorLight: "#E6F0FA",
    purpose: "The 'trust/bonding' chemical. Creates the warm feeling of social connection, trust, and belonging. The 'safe with others' signal.",
    droopDuration: "Medium–Long",
    droopTrigger: "Betrayal of trust (real or perceived). Social isolation. Conflict or withdrawal from close relationships.",
    disappointment: "You may over-trust or cling to unhealthy bonds to maintain the feeling. Or you withdraw entirely because trust feels too risky. Creates dependency on specific people.",
    increasing: "Build trust gradually in small steps. Practice vulnerability in safe relationships. Physical touch (hugs, handshakes). Be trustworthy yourself. Expand social circle slowly.",
    activities: [
      "Hugging loved ones",
      "Deep conversations",
      "Acts of kindness / giving",
      "Pet interaction",
      "Group activities / teamwork",
      "Massage or physical closeness",
    ],
    cycleRole: "Bonds you to others for safety → but trust can be broken → so you oscillate between clinging and withdrawing",
  },
  {
    name: "Endorphin",
    emoji: "💪",
    color: "#50B86C",
    colorLight: "#E8F8ED",
    purpose: "The 'pain-mask' chemical. Briefly masks physical pain to help you survive. Produces euphoria — the 'runner's high.' Nature's emergency painkiller.",
    droopDuration: "Very Short",
    droopTrigger: "Endorphin is released in short bursts and metabolizes quickly. The body only releases it in response to genuine physical stress/pain, not on demand.",
    disappointment: "You may seek increasingly intense physical experiences (extreme exercise, thrill-seeking, even self-harm) to trigger endorphin. The body resists releasing it without real need.",
    increasing: "Regular moderate exercise. Laughing genuinely. Stretching and varied physical movement. Accept that endorphin is designed to be brief — don't chase it as a primary happiness source.",
    activities: [
      "Vigorous exercise / running",
      "Genuine laughter",
      "Stretching / yoga",
      "Dancing",
      "Spicy food (mild stress)",
      "Crying (emotional release)",
    ],
    cycleRole: "Masks pain briefly → wears off fast → tempts you to seek more intense pain to trigger it again",
  },
];

const ViciousCycleDiagram = ({ activeHormone, setActiveHormone }) => {
  const centerX = 200;
  const centerY = 200;
  const radius = 130;

  const positions = [
    { angle: -90, ...hormoneData[0] },   // Dopamine top
    { angle: 0, ...hormoneData[1] },      // Serotonin right
    { angle: 90, ...hormoneData[2] },     // Oxytocin bottom
    { angle: 180, ...hormoneData[3] },    // Endorphin left
  ];

  const getPos = (angleDeg, r = radius) => ({
    x: centerX + r * Math.cos((angleDeg * Math.PI) / 180),
    y: centerY + r * Math.sin((angleDeg * Math.PI) / 180),
  });

  // Arrow path between two angles along the circle
  const getArcArrow = (startAngle, endAngle) => {
    const r = radius + 20;
    const midAngle = (startAngle + endAngle) / 2;
    const start = getPos(startAngle + 15, r);
    const mid = getPos(midAngle, r + 15);
    const end = getPos(endAngle - 15, r);
    return `M ${start.x} ${start.y} Q ${mid.x} ${mid.y} ${end.x} ${end.y}`;
  };

  const arrows = [
    { from: -90, to: 0, label: "Achievement\nfeels empty" },
    { from: 0, to: 90, label: "Status needs\nvalidation" },
    { from: 90, to: 180, label: "Trust breaks\ncause pain" },
    { from: 180, to: -90, label: "Pain drives\nnew seeking" },
  ];

  return (
    <svg viewBox="0 0 400 400" style={{ width: "100%", maxWidth: 460, margin: "0 auto", display: "block" }}>
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#8B7E74" />
        </marker>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Center label */}
      <text x={centerX} y={centerY - 12} textAnchor="middle" fill="#5C524A" fontSize="11" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="0.5">
        THE VICIOUS
      </text>
      <text x={centerX} y={centerY + 5} textAnchor="middle" fill="#5C524A" fontSize="11" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="0.5">
        CYCLE OF
      </text>
      <text x={centerX} y={centerY + 22} textAnchor="middle" fill="#5C524A" fontSize="11" fontWeight="700" fontFamily="Georgia, serif" letterSpacing="0.5">
        HAPPINESS
      </text>

      {/* Circular arrows */}
      {arrows.map((arrow, i) => (
        <path
          key={i}
          d={getArcArrow(arrow.from, arrow.to)}
          fill="none"
          stroke="#C4B8AE"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#arrowhead)"
        />
      ))}

      {/* Arrow labels */}
      {arrows.map((arrow, i) => {
        const midAngle = (arrow.from + arrow.to) / 2;
        const labelPos = getPos(midAngle, radius + 48);
        const lines = arrow.label.split("\n");
        return (
          <g key={`label-${i}`}>
            {lines.map((line, li) => (
              <text
                key={li}
                x={labelPos.x}
                y={labelPos.y + li * 11 - 5}
                textAnchor="middle"
                fill="#8B7E74"
                fontSize="8"
                fontFamily="Georgia, serif"
                fontStyle="italic"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* Hormone nodes */}
      {positions.map((h, i) => {
        const pos = getPos(h.angle);
        const isActive = activeHormone === i;
        return (
          <g
            key={h.name}
            onClick={() => setActiveHormone(isActive ? null : i)}
            style={{ cursor: "pointer" }}
            filter={isActive ? "url(#glow)" : undefined}
          >
            <circle
              cx={pos.x}
              cy={pos.y}
              r={isActive ? 40 : 36}
              fill={isActive ? h.color : h.colorLight}
              stroke={h.color}
              strokeWidth={isActive ? 3 : 2}
              style={{ transition: "all 0.3s ease" }}
            />
            <text
              x={pos.x}
              y={pos.y - 6}
              textAnchor="middle"
              fontSize="18"
            >
              {h.emoji}
            </text>
            <text
              x={pos.x}
              y={pos.y + 12}
              textAnchor="middle"
              fill={isActive ? "#fff" : h.color}
              fontSize="10"
              fontWeight="700"
              fontFamily="Georgia, serif"
              style={{ transition: "fill 0.3s ease" }}
            >
              {h.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const DroopBadge = ({ duration, color }) => {
  const widths = {
    "Short": "25%",
    "Medium": "50%",
    "Medium–Long": "65%",
    "Very Short": "12%",
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        width: 80,
        height: 6,
        background: "#E8E2DC",
        borderRadius: 3,
        overflow: "hidden",
      }}>
        <div style={{
          width: widths[duration],
          height: "100%",
          background: color,
          borderRadius: 3,
        }} />
      </div>
      <span style={{ fontSize: 13, color: "#5C524A", fontWeight: 600 }}>{duration}</span>
    </div>
  );
};

export default function HappyBrainApp() {
  const [activeHormone, setActiveHormone] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FAF7F4",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#3D3530",
      padding: "32px 16px",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#A89B90",
            marginBottom: 8,
          }}>
            Based on Loretta Graziano Breuning's
          </p>
          <h1 style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#3D3530",
            lineHeight: 1.3,
            margin: 0,
          }}>
            Habits of a <em style={{ fontStyle: "italic" }}>Happy Brain</em>
          </h1>
          <div style={{
            width: 40,
            height: 2,
            background: "#C4B8AE",
            margin: "16px auto 0",
          }} />
        </div>

        {/* Section 1: Vicious Cycle */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "32px 24px",
          marginBottom: 32,
          boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
          border: "1px solid #EDE8E3",
        }}>
          <h2 style={{
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#A89B90",
            marginBottom: 4,
            fontWeight: 600,
          }}>
            1 — The Vicious Cycle
          </h2>
          <p style={{ fontSize: 14, color: "#7A6F66", marginBottom: 24, lineHeight: 1.6 }}>
            Each happy chemical droops after its burst, driving you to seek the next one. 
            The brain evolved to motivate survival, not lasting contentment. <strong>Click a hormone</strong> to explore.
          </p>

          <ViciousCycleDiagram activeHormone={activeHormone} setActiveHormone={setActiveHormone} />

          {activeHormone !== null && (
            <div style={{
              marginTop: 20,
              padding: "16px 20px",
              background: hormoneData[activeHormone].colorLight,
              borderRadius: 12,
              borderLeft: `4px solid ${hormoneData[activeHormone].color}`,
              fontSize: 13,
              lineHeight: 1.7,
              color: "#3D3530",
              animation: "fadeIn 0.3s ease",
            }}>
              <strong style={{ color: hormoneData[activeHormone].color }}>
                {hormoneData[activeHormone].name}'s role in the cycle:
              </strong>{" "}
              {hormoneData[activeHormone].cycleRole}
            </div>
          )}

          <div style={{
            marginTop: 24,
            padding: "16px 20px",
            background: "#F5F1EC",
            borderRadius: 12,
            fontSize: 13,
            lineHeight: 1.7,
            color: "#5C524A",
          }}>
            <strong>The core loop:</strong> Each chemical evolved to reward survival behaviors, not to stay "on." 
            When one droops, your mammalian brain perceives a <em>threat</em> and urgently seeks the next hit — 
            creating a perpetual cycle of seeking → brief satisfaction → disappointment → seeking again. 
            The key insight: you can <em>retrain</em> these pathways with 45 days of deliberate new habits.
          </div>
        </div>

        {/* Section 2: Reference Table */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "32px 24px",
          boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
          border: "1px solid #EDE8E3",
        }}>
          <h2 style={{
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#A89B90",
            marginBottom: 4,
            fontWeight: 600,
          }}>
            2 — Hormone Reference Table
          </h2>
          <p style={{ fontSize: 14, color: "#7A6F66", marginBottom: 24, lineHeight: 1.6 }}>
            Tap any row to expand the full profile of each happy chemical.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {hormoneData.map((h, i) => {
              const isExpanded = expandedRow === i;
              return (
                <div
                  key={h.name}
                  style={{
                    border: `1.5px solid ${isExpanded ? h.color : "#EDE8E3"}`,
                    borderRadius: 14,
                    overflow: "hidden",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  {/* Collapsed header */}
                  <div
                    onClick={() => setExpandedRow(isExpanded ? null : i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "16px 20px",
                      cursor: "pointer",
                      background: isExpanded ? h.colorLight : "#fff",
                      transition: "background 0.3s ease",
                    }}
                  >
                    <div style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: h.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}>
                      {h.emoji}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: h.color,
                        marginBottom: 2,
                      }}>
                        {h.name}
                      </div>
                      <div style={{
                        fontSize: 12,
                        color: "#7A6F66",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}>
                        {h.purpose.split(".")[0]}
                      </div>
                    </div>
                    <DroopBadge duration={h.droopDuration} color={h.color} />
                    <div style={{
                      fontSize: 18,
                      color: "#A89B90",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s ease",
                    }}>
                      ▾
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div style={{
                      padding: "0 20px 20px",
                      background: h.colorLight,
                      animation: "fadeIn 0.3s ease",
                    }}>
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 12,
                        marginBottom: 12,
                      }}>
                        {[
                          { label: "Purpose", value: h.purpose, icon: "◆" },
                          { label: "What Triggers the Droop", value: h.droopTrigger, icon: "▼" },
                          { label: "Disappointment Mechanism", value: h.disappointment, icon: "✕" },
                          { label: "How to Increase", value: h.increasing, icon: "▲" },
                        ].map((field) => (
                          <div
                            key={field.label}
                            style={{
                              background: "#fff",
                              borderRadius: 10,
                              padding: "14px 16px",
                            }}
                          >
                            <div style={{
                              fontSize: 10,
                              letterSpacing: 1.5,
                              textTransform: "uppercase",
                              color: h.color,
                              fontWeight: 700,
                              marginBottom: 6,
                            }}>
                              {field.icon} {field.label}
                            </div>
                            <div style={{
                              fontSize: 13,
                              lineHeight: 1.65,
                              color: "#3D3530",
                            }}>
                              {field.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Activities */}
                      <div style={{
                        background: "#fff",
                        borderRadius: 10,
                        padding: "14px 16px",
                      }}>
                        <div style={{
                          fontSize: 10,
                          letterSpacing: 1.5,
                          textTransform: "uppercase",
                          color: h.color,
                          fontWeight: 700,
                          marginBottom: 10,
                        }}>
                          ★ Boosting Activities
                        </div>
                        <div style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 6,
                        }}>
                          {h.activities.map((act) => (
                            <span
                              key={act}
                              style={{
                                display: "inline-block",
                                padding: "5px 12px",
                                borderRadius: 20,
                                background: h.colorLight,
                                border: `1px solid ${h.color}30`,
                                fontSize: 12,
                                color: "#3D3530",
                              }}
                            >
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <p style={{
          textAlign: "center",
          fontSize: 11,
          color: "#A89B90",
          marginTop: 32,
          fontStyle: "italic",
          lineHeight: 1.6,
        }}>
          "You can build new neural pathways in 45 days by repeating a new thought or behavior." — Loretta Breuning
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
