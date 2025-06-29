import { Header, BeforeWeStart, GridBlog } from "@/components/pages/blog";

export default async function Blog({ params }: any) {
  const { page } = await params;

  return (
    <main className="space-y-16 lg:space-y-32">
      <Header />
      <BeforeWeStart />
      <GridBlog pageId={page} />
    </main>
  );
}
