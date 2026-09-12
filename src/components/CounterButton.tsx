interface CounterButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "ghost";
}

export function CounterButton({
  label,
  onClick,
  variant = "primary",
}: CounterButtonProps) {
  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost:
      "border border-border bg-background text-foreground hover:bg-accent",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:px-6 sm:py-3 sm:text-base ${variantClasses[variant]}`}
      aria-label={label}
    >
      {label}
    </button>
  );
}
