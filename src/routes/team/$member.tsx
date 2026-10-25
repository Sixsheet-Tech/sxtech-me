import { createFileRoute, notFound } from "@tanstack/react-router";
import { AuthorPage } from "@/components/pages/BlogPages";
import { authorBySlug } from "@/lib/blog";
import { authorHead } from "@/lib/seo";

export const Route = createFileRoute("/team/$member")({
  beforeLoad: ({ params }) => {
    if (!authorBySlug(params.member)) throw notFound();
  },
  head: ({ params }) => authorHead("en", params.member),
  component: function Author() {
    return <AuthorPage slug={Route.useParams().member} />;
  },
});
