import { Header, BeforeWeStart, GridBlog } from "@/components/pages/blog";

export default function Blog({ params }: { params: { page: string } }) {
  return (
    <main className="space-y-16 lg:space-y-32">
      <Header />
      <BeforeWeStart />
      <GridBlog pageId={params.page} />
    </main>
  );
}
