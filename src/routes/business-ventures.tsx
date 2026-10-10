import { createFileRoute, redirect } from "@tanstack/react-router";

// Legacy TECH™ Services URL — content now lives on /services.
export const Route = createFileRoute("/business-ventures")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
});
