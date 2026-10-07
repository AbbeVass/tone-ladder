import {
  TONAL_LADDER,
  TEXT_COLOR,
  STAIRCASE_COLOR,
  HIGHLIGHT_COLOR,
  STAIRCASE_STEP_WIDTH,
  STEP_HEIGHT,
  THICKNESS,
  GAP,
  SVG_HEIGHT
} from "../defs/constants";

export interface TonalLadderSvgProps {
  displayLadder: number[];
  stepWidth?: number;
  highlightedTones?: number[];
  helpLines?: number[];
}

export default function TonalLadderSvg({
  displayLadder,
  stepWidth = 50,
  highlightedTones = [],
  helpLines = []
}: TonalLadderSvgProps) {
  
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
              fill={highlightedTones.includes(tone_index) ? HIGHLIGHT_COLOR : TEXT_COLOR}
              fontSize="20px"
              fontWeight="bold"
            >
              {TONAL_LADDER[tone_index]}
            </text>
          </g>
        );
      })}
      
      {helpLines.map((tone_index, i) => {
        const x = tone_index === TONAL_LADDER.length - 1 ? STAIRCASE_STEP_WIDTH : 0;
        const y = STEP_HEIGHT * TONAL_LADDER.length - tone_index * STEP_HEIGHT;
        
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={TONE_LADDER_SVG_WIDTH}
            height={THICKNESS}
            fill={STAIRCASE_COLOR}
          />
        );
      })}
    </svg>
  );
}
