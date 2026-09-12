import { useState } from "react";
import { CounterButton } from "./CounterButton";

export function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-8 rounded-2xl border border-border bg-card p-8 shadow-lg sm:p-12">
      <h1 className="text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
        Counter App
      </h1>

      <div
        className="flex h-32 w-32 items-center justify-center rounded-full bg-secondary text-5xl font-bold text-secondary-foreground sm:h-40 sm:w-40 sm:text-6xl"
        aria-live="polite"
      >
        {count}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <CounterButton label="Decrease" onClick={decrease} variant="secondary" />
        <CounterButton label="Reset" onClick={reset} variant="danger" />
        <CounterButton label="Increase" onClick={increase} variant="primary" />
      </div>

      <p className="text-sm text-muted-foreground">
        Click the buttons to change the count.
      </p>
    </div>
  );
}
