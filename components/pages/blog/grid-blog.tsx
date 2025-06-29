import { PaginationMenu, Container } from "@/components/index";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const query = `
  query getAllPosts{
  posts(orderBy: createdAt_DESC){
    id
    slug
    title
    mainImage {
      url
    }
    images {
			url
    }
    text
    createdAt
	}
}  
`;

async function getPosts(pageId: string) {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const json = await response.json();
  const posts = json.data.posts;

  const currentPage = Math.max(1, parseInt(pageId) || 1);
  const totalPages = Math.ceil(posts.length / POST_PER_PAGE);
  const slicedPosts = posts.slice(
    (currentPage - 1) * POST_PER_PAGE,
    currentPage * POST_PER_PAGE,
  );

  return { slicedPosts, currentPage, totalPages };
}

function formatDate(isoDate: string) {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const POST_PER_PAGE = 5;

const GridBlog = async ({ pageId }: { pageId: string }) => {
  const { slicedPosts, totalPages, currentPage } = await getPosts(pageId);

  return (
    <section>
      <Container>
        <div className="space-y-6 lg:space-y-12">
          <section className="space-y-6 text-center">
            <Link
              href={`/blog/post/${slicedPosts[0].slug}`}
              className="relative mx-auto block h-50 w-full max-w-4xl overflow-hidden rounded-4xl bg-neutral-800 md:h-75 lg:h-100"
            >
              <Image
                width={1000}
                height={1000}
                src={slicedPosts[0].mainImage.url}
                alt={slicedPosts[0].title}
                className="absolute h-full w-full rounded-2xl object-cover object-center duration-400 hover:scale-110"
              />
            </Link>
            <div>
              <p className="text-xs">
                Released: {formatDate(slicedPosts[0].createdAt)}
              </p>
              <h3 className="text-2xl font-black">{slicedPosts[0].title}</h3>
            </div>
          </section>
          <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {slicedPosts
              .slice(1)
              .map(
                ({
                  id,
                  slug,
                  title,
                  mainImage: { url },
                  text,
                  createdAt,
                }: any) => (
                  <div className="space-y-4" key={id}>
                    <Link
                      href={`/blog/post/${slug}`}
                      className="relative block aspect-video rounded-2xl bg-neutral-800"
                    >
                      <Image
                        width={300}
                        height={300}
                        src={url}
                        alt={title}
                        className="absolute h-full w-full rounded-2xl object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute z-10 h-full w-full rounded-2xl duration-400 dark:bg-black/40 dark:hover:bg-black/0"></div>
                    </Link>
                    <section className="flex justify-between">
                      <div>
                        <p className="text-xs">
                          Released: {formatDate(createdAt)}
                        </p>
                        <h3 className="text-sm font-bold">{title}</h3>
                        <p className="text-xs opacity-80">
                          {text.slice(0, 30)}...
                        </p>
                      </div>
                      <div></div>
                    </section>
                  </div>
                ),
              )}
          </section>
          <PaginationMenu currentPage={currentPage} totalPages={totalPages} />
        </div>
      </Container>
    </section>
  );
};

export default GridBlog;
