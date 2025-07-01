import React from "react";
import { Container } from "@/components/index";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/functions";

const getPostAndOthers = async (slug: string) => {
  const query = `
    query getPostAndOthers($slug: String!) {
      post(where: { slug: $slug }) {
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
      posts(
        where: { slug_not: $slug }
        first: 8
      ) {
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

  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { slug } }),
  });

  const json = await response.json();

  return {
    post: json.data.post,
    otherPosts: json.data.posts,
  };
};

const Post = async ({ params }: any) => {
  const { slug } = await params;
  const { post, otherPosts } = await getPostAndOthers(slug);

  return (
    <main>
      <Container className="space-y-16 lg:space-y-32">
        <section className="space-y-6 pt-8 text-center lg:pt-16">
          <div className="space-y-4 lg:space-y-8">
            <div className="relative mx-auto h-50 max-w-4xl rounded-2xl bg-neutral-800 md:h-75 lg:h-100">
              <Image
                src={post.mainImage.url}
                width={900}
                height={600}
                alt={post.title}
                className="absolute h-full w-full rounded-2xl object-cover object-center"
              />
            </div>
            {post.images.length ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
                <div className="aspect-video rounded-2xl bg-neutral-800"></div>
                <div className="aspect-video rounded-2xl bg-neutral-800"></div>
                <div className="aspect-video rounded-2xl bg-neutral-800"></div>
                <div className="aspect-video rounded-2xl bg-neutral-800"></div>
              </div>
            ) : null}
          </div>
          <h2 className="text-2xl font-black lg:text-3xl">{post.title}</h2>
          <p className="text-sm leading-6 lg:text-base lg:leading-8">
            {post.text}
          </p>
        </section>
        <section className="space-y-3 lg:space-y-6">
          <h2 className="text-xl font-black lg:text-2xl">More Blog Posts</h2>
          <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {otherPosts.map(
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
                  </section>
                </div>
              ),
            )}
          </section>
        </section>
      </Container>
    </main>
  );
};

export default Post;
