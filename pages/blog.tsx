import Head from "next/head"
import { Inter } from "next/font/google"
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { sortByDate } from "../utils";
import FadeInSection from "../components/FadeInSection";
import { InferGetStaticPropsType } from "next/types";
import PostLinkElement from "../components/PostLinkElement";
import BackToPostsSection from "../components/BackToPostsSection";

const inter = Inter({ subsets: ['latin'] })

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
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

export async function getStaticProps() {

    // More efficient implementation: Get directory.txt for all post info instead of reading through all blog posts
    const filePathToDirectoryContents = 'pages/blog/directory.txt';
    const data = fs.readFileSync(filePathToDirectoryContents, 'utf-8');
    const blogPostContents = data.split("\n");
    var posts = [];
    for (const blogPostContent of blogPostContents) {
        const blogPostInfo = blogPostContent.replace(/[\r\n]/gm, '').split("|");
        posts.push({
            slug: blogPostInfo[0],
            frontmatter: {
                title: blogPostInfo[1],
                date: blogPostInfo[2],
                excerpt: blogPostInfo[3],
                cover_image: blogPostInfo[4],
                tags: blogPostInfo[5]
            }
        })
    }

    // console.log(posts[0])

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
    // More efficient implementation: Get directory.txt for all post info instead of reading through all blog posts

    // Get files from the posts dir
    // const files = fs.readdirSync(path.join('posts'))

    // // Get slug and frontmatter from posts
    // const posts = files.map((filename) => {
    //     // Create slug
    //     const slug = filename.replace('.md', '')

    //     // Get frontmatter
    //     const markdownWithMeta = fs.readFileSync(
    //         path.join('posts', filename),
    //         'utf-8'
    //     )

    //     const { data: frontmatter } = matter(markdownWithMeta)

    //     return {
    //         slug,
    //         frontmatter,
    //     }
    // })

    // console.log(posts[0]);

    // return {
    //     props: {
    //         posts: posts.sort(sortByDate),
    //     },
    // }
}