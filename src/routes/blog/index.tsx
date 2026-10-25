import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/pages/BlogPages";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/blog/")({
  head: () => pageHead("en", "blog"),
  component: BlogIndexPage,
});
