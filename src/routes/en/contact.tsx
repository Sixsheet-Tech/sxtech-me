import { createFileRoute, redirect } from "@tanstack/react-router";

// English moved to the root in Oct 2026 — keep old /en links working.
export const Route = createFileRoute("/en/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/contact", statusCode: 301 });
  },
});
