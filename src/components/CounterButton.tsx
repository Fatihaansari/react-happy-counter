interface CounterButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
}

export function CounterButton({
  label,
  onClick,
  variant = "primary",
  icon,
}: CounterButtonProps) {
  const variantClasses = {
    primary:
      "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:text-primary",
    secondary:
      "bg-secondary/50 border-border text-secondary-foreground hover:bg-secondary hover:text-foreground",
    ghost:
      "bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary/30",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background active:scale-95 sm:px-6 sm:py-4 sm:text-base ${variantClasses[variant]}`}
      aria-label={label}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      {!icon && <span className="sm:hidden">{label}</span>}
    </button>
  );
}
