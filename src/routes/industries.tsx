import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/pages/IndustriesPage";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/industries")({
  head: () => pageHead("en", "industries"),
  component: IndustriesPage,
});
