import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage } from "@/components/pages/BlogPages";
import { pageHead } from "@/lib/i18n";

export const Route = createFileRoute("/th/blog/")({
  head: () => pageHead("th", "blog"),
  component: BlogIndexPage,
});
