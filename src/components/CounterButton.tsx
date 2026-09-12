interface CounterButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
}

export function CounterButton({
  label,
  onClick,
  variant = "primary",
}: CounterButtonProps) {
  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    danger:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-6 py-3 text-lg font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses[variant]}`}
      aria-label={label}
    >
      {label}
    </button>
  );
}
