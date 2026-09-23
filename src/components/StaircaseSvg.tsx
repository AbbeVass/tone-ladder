import {
  TONAL_LADDER,
  TEXT_COLOR,
  STAIRCASE_COLOR,
  HIGHLIGHT_COLOR,
  STAIRCASE_STEP_WIDTH,
  STEP_HEIGHT,
  THICKNESS,
  GAP,
  STAIRCASE_SVG_WIDTH,
  SVG_HEIGHT
} from "../defs/constants";

export interface StaircaseSvgProps {
  highlightedTones?: number[];
  helpLines?: number[];
};

export default function StaircaseSvg({
    highlightedTones = [],
    helpLines = [3, 5, 7]
  }: StaircaseSvgProps)
{
  const HELP_LINE_GAP = 2 * STAIRCASE_STEP_WIDTH + THICKNESS;

  return (
    <svg
      className="staircase-svg"
      viewBox={`0 0 ${STAIRCASE_SVG_WIDTH} ${SVG_HEIGHT}`}
      preserveAspectRatio="xMinYMid meet"
    >
      {Array.from(TONAL_LADDER, (tone, i) => {

        const x = STAIRCASE_STEP_WIDTH * i;
        const y = STEP_HEIGHT * TONAL_LADDER.length - i * STEP_HEIGHT;

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
              fill={highlightedTones.includes(i) ? HIGHLIGHT_COLOR : TEXT_COLOR}
              fontSize="20px"
              fontWeight="bold"
            >
              {tone}
            </text>

            {helpLines.includes(i) && (
              <rect
                x={x + HELP_LINE_GAP}
                y={y}
                width={STAIRCASE_SVG_WIDTH - (x + HELP_LINE_GAP)}
                height={THICKNESS}
                fill={STAIRCASE_COLOR}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
