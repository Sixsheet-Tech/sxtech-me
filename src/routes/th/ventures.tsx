import { createFileRoute } from "@tanstack/react-router";
import { PlatformsPage } from "@/components/pages/PlatformsPage";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/th/ventures")({
  head: () => pageHead("th", "platforms"),
  component: PlatformsPage,
});
