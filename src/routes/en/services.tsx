import { createFileRoute, redirect } from "@tanstack/react-router";

// English moved to the root in Oct 2026 — keep old /en links working.
export const Route = createFileRoute("/en/services")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
});
