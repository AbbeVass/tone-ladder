import {
  TONE_LADDER,
  TEXT_COLOR,
  STAIRCASE_STEP_WIDTH,
  STEP_HEIGHT,
  THICKNESS,
  GAP,
  STAIRCASE_SVG_WIDTH,
  SVG_HEIGHT,
  STAIRCASE_COLOR
} from "../defs/constants";

export default function StaircaseSvg() {
  return (
    <svg
      className="staircase-svg"
      viewBox={`0 0 ${STAIRCASE_SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="xMinYMid meet"
    >
      {Array.from(TONE_LADDER, (tone, i) => {

        const x = STAIRCASE_STEP_WIDTH * i;
        const y = STEP_HEIGHT * TONE_LADDER.length - i * STEP_HEIGHT;

        return (
          <g key={i}>
            <rect // horizontal line
              x={x}
              y={y}
              width={STAIRCASE_STEP_WIDTH + THICKNESS}
              height={THICKNESS}
              fill={STAIRCASE_COLOR}
            />
            <rect // vertical line
              x={x + STAIRCASE_STEP_WIDTH}
              y={y - STEP_HEIGHT + THICKNESS - 1}
              width={THICKNESS}
              height={STEP_HEIGHT}
              fill={STAIRCASE_COLOR}
            />

            <text
              x={x + STAIRCASE_STEP_WIDTH / 2}
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
