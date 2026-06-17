import "../styles/StaircaseSvg.css";
import { TONE_LADDER } from "../defs/constants";

const STEP_WIDTH = 20;
const STEP_HEIGHT = 30;
const THICKNESS = 5;

const COLOR = getComputedStyle(document.documentElement)
  .getPropertyValue('--mantine-color-gray-1');

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
              fill={COLOR}
            />
            <rect // vertical line
              x={x + STEP_WIDTH}
              y={y - STEP_HEIGHT + THICKNESS - 1}
              width={THICKNESS}
              height={STEP_HEIGHT}
              fill={COLOR}
            />

            <text
              x={x + STEP_WIDTH / 2}
              y={y - 2 * THICKNESS}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={COLOR}
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
