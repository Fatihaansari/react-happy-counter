import { useState } from "react";
import { CounterButton } from "./CounterButton";

function MinusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 transition-transform duration-500 group-hover:rotate-180"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 2v6h6" />
      <path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
    </svg>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <section className="relative w-full max-w-xs overflow-hidden rounded-[2.5rem] border border-border bg-card p-6 shadow-2xl sm:max-w-sm sm:p-8">
      {/* Subtle dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Status label */}
        <div className="mb-6 flex items-center gap-2 sm:mb-8">
          <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_color-mix(in_oklab,var(--primary)_60%,transparent)]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Active Session
          </span>
        </div>

        {/* Circular counter display */}
        <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-border/50" />
          {/* Accent ring */}
          <div className="absolute inset-1 rounded-full border-[3px] border-border/30 border-t-primary shadow-[0_0_20px_color-mix(in_oklab,var(--primary)_10%,transparent)]" />
          {/* Inner display */}
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-border bg-secondary shadow-[inset_0_4px_12px_rgba(0,0,0,0.4)] sm:h-36 sm:w-36">
            <span
              className="font-mono text-5xl font-bold tracking-tighter text-card-foreground sm:text-6xl"
              aria-live="polite"
            >
              {count}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10">
          <div className="flex items-center gap-3">
            <CounterButton
              label="Decrease"
              onClick={decrease}
              variant="secondary"
              icon={<MinusIcon />}
            />
            <CounterButton
              label="Increase"
              onClick={increase}
              variant="primary"
              icon={<PlusIcon />}
            />
          </div>

          <CounterButton
            label="Reset Counter"
            onClick={reset}
            variant="ghost"
            icon={<ResetIcon />}
          />
        </div>
      </div>
    </section>
  );
}
