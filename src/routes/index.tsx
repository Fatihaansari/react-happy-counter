import { createFileRoute } from "@tanstack/react-router";
import { Counter } from "../components/Counter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Counter App" },
      { name: "description", content: "A simple beginner-friendly counter app built with React." },
      { property: "og:title", content: "Counter App" },
      { property: "og:description", content: "A simple beginner-friendly counter app built with React." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <Counter />
    </main>
  );
}
