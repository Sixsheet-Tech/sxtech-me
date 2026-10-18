import { createFileRoute } from "@tanstack/react-router";
import { FdePage } from "@/components/pages/FdePage";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/th/forward-deployed-ai")({
  head: () => pageHead("th", "fde"),
  component: FdePage,
});
