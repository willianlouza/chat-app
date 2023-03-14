export type BorderedDotsType = {
  className?: string;
  color?: string;
  fill?: boolean;
  strokeWidth?: number;
  scale?: number;
  width?: number;
  height?: number;
  angle?: number;
};

export default function BorderedDots({
  className = "",
  scale = 1,
  strokeWidth = 1,
  color = "#7a1ff1be",
  width = 25,
  height = 25,
  angle = 0,
}: BorderedDotsType) {
  return (
    <>
      <svg
        className={className}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="bordered-dots-pattern"
            patternUnits="userSpaceOnUse"
            width={width}
            height={height}
            patternTransform={`scale(${scale}) rotate(${angle})`}
          >
            <rect x="0" y="0" width="100%" height="100%" fill="none" />
            <path
              d="M10 15a5 5 0 110-10 5 5 0 010 10z"
              strokeWidth={strokeWidth}
              stroke={color}
              fill="none"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          transform="translate(0,0)"
          fill="url(#bordered-dots-pattern)"
        />
      </svg>
    </>
  );
}
