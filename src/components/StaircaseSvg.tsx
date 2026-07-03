import "../styles/StaircaseSvg.css";
import { TONE_LADDER, TEXT_COLOR } from "../defs/constants";

const STEP_WIDTH = 20;
const STEP_HEIGHT = 30;
const THICKNESS = 3;

const SVG_WIDTH = TONE_LADDER.length * STEP_WIDTH + THICKNESS;
const SVG_HEIGHT = TONE_LADDER.length * STEP_HEIGHT + THICKNESS;

export default function StaircaseSvg() {
  return (
    <svg
      className="staircase-svg"
      viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="xMinYMid meet"
    >
      {Array.from(TONE_LADDER, (tone, i) => {

        const x = i * STEP_WIDTH;
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
              y={y - 3 * THICKNESS}
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
