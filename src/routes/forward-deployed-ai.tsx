import { createFileRoute } from "@tanstack/react-router";
import { FdePage } from "@/components/pages/FdePage";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/forward-deployed-ai")({
  head: () => pageHead("en", "fde"),
  component: FdePage,
});
