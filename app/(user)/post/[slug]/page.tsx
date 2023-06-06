import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 60;

export async function generateStaticParams(){
    const query = groq`
    *[_type=='post']
    {
        slug
    }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug,
    }));
};

async function Post({params: {slug}}: Props) {
    const query = groq`
    *[_type=='post' && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
    }
    `
    const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28">
        <section className="space-y-2 border border-green-500 text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                <Image 
                        className="object-cover object-center mx-auto"
                        src={urlForImage(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                </div>
                <section className="p-5 bg-green-300 w-full">
                    <div className="flex flex-col md:flex-row justify-between
                    gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>
                            <p>
                            {new Date(post._createdAt).toLocaleDateString(
                                    "en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                            })}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                        <Image 
                            className="rounded-full h-10 w-10 object-cover "
                            src={urlForImage(post.author.image).url()}
                            alt={post.author.name}
                            height={50}
                            width={50}
                        />
                        <div className="w-64">
                            <h3 className="text-lg font-bold">{post.author.name}</h3>
                            <p className="text-white text-sm">
                            {post.author.bio.map((block) => 
                            block.children.map((span) => span.text).join(""))}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="italic pt-10">{post.description}</h2>
                        <div className="flex items-center justify-end mt-auto space-x-2">
                            {post.categories.map ((category) => (
                                <p key={category._id} className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                    {category.title}
                                </p>
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <PortableText value={post.body} components={RichTextComponents}/>
    </article>
  );
};

export default Post;