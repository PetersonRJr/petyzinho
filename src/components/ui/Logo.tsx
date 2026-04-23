interface LogoProps {
  variant?: "color" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-9 sm:h-8 w-auto",
  md: "h-11 w-auto",
  lg: "h-14 w-auto",
};

export function Logo({ variant = "color", size = "md", className = "" }: LogoProps) {
  const src = "/images/logo.png";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="ISA Saúde"
      className={`${sizeClasses[size]} object-contain block ${className}`}
      style={{ mixBlendMode: variant === "white" ? "normal" : "multiply" }}
    />
  );
}
