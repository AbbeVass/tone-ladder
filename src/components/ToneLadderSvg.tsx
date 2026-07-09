import {
  TONE_LADDER,
  TEXT_COLOR,
  STEP_WIDTH,
  STEP_HEIGHT,
  THICKNESS,
  GAP,
  SVG_WIDTH,
  SVG_HEIGHT
} from "../defs/constants";

export default function ToneLadderSvg() {
  const EXAMPLE = [5, 3, 7, 5, 9, 10, 1, 0]; // Max 11 numbers, 0-10, representing the tone ladder
  
  return (
    <svg
      className="tone-ladder-svg"
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="xMinYMid meet"
    >
      {Array.from(EXAMPLE, (tone_index, i) => {

        const x = STEP_WIDTH * i + (SVG_WIDTH - STEP_WIDTH * EXAMPLE.length) / 2;
        const y = STEP_HEIGHT * TONE_LADDER.length - tone_index * STEP_HEIGHT;

        return (
          <g key={i}>
            <text
              x={x + STEP_WIDTH / 2}
              y={y - GAP * THICKNESS}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={TEXT_COLOR}
              fontSize="20px"
              fontWeight="bold"
            >
              {TONE_LADDER[tone_index]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
