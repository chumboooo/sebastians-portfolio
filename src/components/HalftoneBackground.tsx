type HalftoneBackgroundProps = {
  className?: string;
};

export function HalftoneBackground({
  className = "",
}: HalftoneBackgroundProps) {
  return (
    <div
      className={`halftone-field pointer-events-none absolute inset-0 -z-10 ${className}`}
      aria-hidden="true"
    />
  );
}
