import Head from "next/head"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'
import { sortByDate } from "../utils";
import FadeInSection from "../components/FadeInSection";
import { InferGetStaticPropsType } from "next/types";
import PostLinkElement from "../components/PostLinkElement";

const inter = Inter({ subsets: ['latin'] })

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <title>Charles Goh (长康): Blog</title>
                <meta name="description" content="Charles Goh (长康) Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/favicon.jpg" />
            </Head>
            <main>
                <FadeInSection>
                    <h1 style={{ textAlign: "center", paddingTop: "5vh" }}>Blog</h1>
                    <div className="sectionelement">
                        <div className="blogpostlist">
                            { posts.map(
                                post => <PostLinkElement
                                    slug={post.frontmatter.slug}
                                    title={post.frontmatter.title} 
                                    date={post.frontmatter.date} 
                                    excerpt={post.frontmatter.excerpt} 
                                    imagePath={post.frontmatter.cover_image}
                                />
                            ) }
                        </div>
                    </div>
                </FadeInSection>
            </main>
        </>
    )
}

export async function getStaticProps() {
    // Get files from the posts dir
    const files = fs.readdirSync(path.join('posts'))

    // Get slug and frontmatter from posts
    const posts = files.map((filename) => {
        // Create slug
        const slug = filename.replace('.md', '')

        // Get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    console.log(posts);

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}