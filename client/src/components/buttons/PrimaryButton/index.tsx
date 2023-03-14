export type PrimaryButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  text: string;
};

export default function PrimaryButton({
  className = "",
  type = "button",
  text,
}: PrimaryButtonProps) {
  return (
    <button
      className={`${className} px-6 py-2 bg-purple-500 text-light rounded-md hover:bg-purple-400 hover:text-purple-600 transition-color duration-150`}
      type={type}
    >
      {text}
    </button>
  );
}
