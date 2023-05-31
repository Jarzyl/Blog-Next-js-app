import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "@/components/BlogList";


const query = groq`
    *[_type=='post'] {
    ...,
    author->,
    categories[]->
    } | order(_createdAt desc)
`

export default async function HomePage() {
    // if (previewData()) {
    //     return (<PreviewSuspense fallback={(
    //         <div role="status">
    //             <p className="text-center text-lg animate-pulse text-grey-500"> 
    //             Loading Preview Data...
    //             </p>
    //         </div>
    //     )}>
    //         <PreviewBlogList query={query}/>
    //     </PreviewSuspense>)
    // }

    const posts = await client.fetch(query);
    return (
        <BlogList posts={posts} />
    );
};