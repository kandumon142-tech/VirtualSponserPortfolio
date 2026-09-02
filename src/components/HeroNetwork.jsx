const SIZE = 440;
const CENTER = SIZE / 2;
const RADIUS = 158;
const NODE_R = 30;
const HUB_R = 48;

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function HeroNetwork({ creators }) {
  const nodes = creators.slice(0, 6);
  const angleStep = 360 / nodes.length;

  const points = nodes.map((creator, i) => {
    const angle = (angleStep * i - 90) * (Math.PI / 180);
    return {
      creator,
      x: CENTER + RADIUS * Math.cos(angle),
      y: CENTER + RADIUS * Math.sin(angle),
    };
  });

  return (
    <div className="relative max-w-sm mx-auto" aria-hidden="true">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="w-full h-auto hero-network"
        role="img"
      >
        {points.map((p, i) => (
          <line
            key={`line-${i}`}
            x1={CENTER}
            y1={CENTER}
            x2={p.x}
            y2={p.y}
            stroke="#D8D4C7"
            strokeWidth="1.5"
            className="hero-network__flow"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        ))}

        {points.map((p, i) => (
          <g
            key={`node-${i}`}
            className="hero-network__node"
            style={{ animationDelay: `${0.15 + i * 0.09}s` }}
          >
            <circle cx={p.x} cy={p.y} r={NODE_R} fill="#FFFFFF" stroke="#E4E1D8" strokeWidth="1.5" />
            <text
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="font-display"
              fontSize="13"
              fontWeight="600"
              fill="#121210"
            >
              {initials(p.creator.name)}
            </text>
          </g>
        ))}

        <circle cx={CENTER} cy={CENTER} r={HUB_R} fill="#121210" className="hero-network__hub" />
        <text
          x={CENTER}
          y={CENTER}
          textAnchor="middle"
          dominantBaseline="central"
          className="font-display"
          fontSize="15"
          fontWeight="600"
          fill="#FFFFFF"
        >
          VS
        </text>
      </svg>

      <style>{`
        .hero-network__flow {
          stroke-dasharray: 3 7;
          animation: hero-network-flow 2.6s linear infinite;
        }
        .hero-network__hub {
          transform-origin: ${CENTER}px ${CENTER}px;
          animation: hero-network-breathe 4s ease-in-out infinite;
        }
        .hero-network__node {
          opacity: 0;
          transform-origin: center;
          animation: hero-network-in 0.6s ease-out forwards;
        }
        @keyframes hero-network-flow {
          to { stroke-dashoffset: -20; }
        }
        @keyframes hero-network-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes hero-network-in {
          from { opacity: 0; transform: scale(0.6); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
