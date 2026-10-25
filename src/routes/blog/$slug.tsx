import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostPage } from "@/components/pages/BlogPages";
import { getPost } from "@/lib/blog";
import { postHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost("en", params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => (loaderData ? postHead(loaderData) : {}),
  component: function Post() {
    return <BlogPostPage post={Route.useLoaderData()} />;
  },
});
