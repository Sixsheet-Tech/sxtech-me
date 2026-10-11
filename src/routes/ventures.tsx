import { createFileRoute } from "@tanstack/react-router";
import { PlatformsPage } from "@/components/pages/PlatformsPage";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/ventures")({
  head: () => pageHead("en", "platforms"),
  component: PlatformsPage,
});
