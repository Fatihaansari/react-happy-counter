import { useState } from "react";
import { CounterButton } from "./CounterButton";

export function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <section className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-sm sm:max-w-md sm:p-10">
      <div className="flex flex-col items-center gap-6 sm:gap-8">
        <header className="text-center">
          <h1 className="text-xl font-semibold tracking-tight text-card-foreground sm:text-2xl">
            Counter
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Increase, decrease, or reset the value
          </p>
        </header>

        <div
          className="flex aspect-square w-32 items-center justify-center rounded-full bg-secondary text-6xl font-semibold tracking-tight text-secondary-foreground sm:w-40 sm:text-7xl"
          aria-live="polite"
        >
          {count}
        </div>

        <div className="grid w-full grid-cols-3 gap-3 sm:gap-4">
          <CounterButton label="Decrease" onClick={decrease} variant="ghost" />
          <CounterButton label="Reset" onClick={reset} variant="secondary" />
          <CounterButton label="Increase" onClick={increase} variant="primary" />
        </div>
      </div>
    </section>
  );
}
