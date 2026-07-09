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

export default function StaircaseSvg() {
  return (
    <svg
      className="staircase-svg"
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="xMinYMid meet"
    >
      {Array.from(TONE_LADDER, (tone, i) => {

        const x = STEP_WIDTH * i;
        const y = STEP_HEIGHT * TONE_LADDER.length - i * STEP_HEIGHT;

        return (
          <g key={i}>
            <rect // horizontal line
              x={x}
              y={y}
              width={STEP_WIDTH + THICKNESS}
              height={THICKNESS}
              fill={TEXT_COLOR}
            />
            <rect // vertical line
              x={x + STEP_WIDTH}
              y={y - STEP_HEIGHT + THICKNESS - 1}
              width={THICKNESS}
              height={STEP_HEIGHT}
              fill={TEXT_COLOR}
            />

            <text
              x={x + STEP_WIDTH / 2}
              y={y - GAP * THICKNESS}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={TEXT_COLOR}
              fontSize="20px"
              fontWeight="bold"
            >
              {tone}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
