import {
  TONAL_LADDER,
  TEXT_COLOR,
  STEP_HEIGHT,
  THICKNESS,
  GAP,
  SVG_HEIGHT
} from "../defs/constants";

type ToneLadderSvgProps = {
  displayLadder: number[]
  stepWidth?: number
}

export default function ToneLadderSvg({ displayLadder, stepWidth = 50 }: ToneLadderSvgProps) {
  const TONE_LADDER_SVG_WIDTH = displayLadder.length * stepWidth + THICKNESS;
  
  return (
    <svg
      className="tone-ladder-svg"
      viewBox={`0 0 ${TONE_LADDER_SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="xMinYMid meet"
    >
      {Array.from(displayLadder, (tone_index, i) => {

        const x = stepWidth * i + (TONE_LADDER_SVG_WIDTH - stepWidth * displayLadder.length) / 2;
        const y = STEP_HEIGHT * TONAL_LADDER.length - tone_index * STEP_HEIGHT;

        return (
          <g key={i}>
            <text
              x={x + stepWidth / 2}
              y={y - GAP * THICKNESS}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={TEXT_COLOR}
              fontSize="20px"
              fontWeight="bold"
            >
              {TONAL_LADDER[tone_index]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
