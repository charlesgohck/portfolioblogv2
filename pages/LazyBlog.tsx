import Head from "next/head"
import { Inter } from "next/font/google"
import FadeInSection from "../components/FadeInSection";
import { InferGetStaticPropsType } from "next/types";
import PostLinkElement from "../components/PostLinkElement";
import BackToPostsSection from "../components/BackToPostsSection";
import { getStaticProps } from "./blog";

const inter = Inter({ subsets: ['latin'] })

export default function LazyBlog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Charles Goh (伍长康): Blog</title>
                <meta name="description" content="Charles Goh (伍长康) Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                <h1 style={{ textAlign: "center", paddingTop: "5vh" }}>Recent</h1>
                <div className="sectionelement">
                    {posts.length === 0 
                    ? <p>No content found...</p>
                    : posts.map(
                        post => <div style={{ width: "100%" }} key={`${post.slug} Post Link`}>
                            <FadeInSection>
                                <PostLinkElement
                                    slug={post.slug}
                                    title={post.frontmatter.title}
                                    date={post.frontmatter.date}
                                    excerpt={post.frontmatter.excerpt}
                                    imagePath={post.frontmatter.cover_image}
                                    tags={post.frontmatter.tags}
                                />
                            </FadeInSection>
                        </div>
                    )}
                </div>
                <BackToPostsSection showBackToPostsLink={false}/>
            </main>
        </>
    )
}