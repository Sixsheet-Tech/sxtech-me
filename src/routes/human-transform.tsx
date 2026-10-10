import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy HUMAN™ page (retired Oct 2026) — send visitors to the homepage.
export const Route = createFileRoute("/human-transform")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
