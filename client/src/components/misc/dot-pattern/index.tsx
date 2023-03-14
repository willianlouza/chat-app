import BorderedDots from "./bordered";
import FilledDots from "./filled";

export type DotsTypes = {
  fill?: boolean;
  color?: string;
  strokeWidth?: number;
  className?: string;
  angle?: number;
  width?: number;
  height?: number;
};
export default function DotsPattern({
  color = "#7a1ff177",
  fill = false,
  className = "",
  strokeWidth = 1,
  angle = 0,
  width = 25,
  height = 25,
}: DotsTypes) {
  return (
    <>
      {fill ? (
        <FilledDots
          className={className}
          color={color}
          angle={angle}
          width={width}
          height={height}
        />
      ) : (
        <BorderedDots
          className={className}
          color={color}
          strokeWidth={strokeWidth}
          angle={angle}
          width={width}
          height={height}
        />
      )}
    </>
  );
}
