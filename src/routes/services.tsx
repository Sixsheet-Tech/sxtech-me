import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/pages/ServicesPage";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => pageHead("en", "services"),
  component: ServicesPage,
});
